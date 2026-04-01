const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const root = process.cwd();
let serverPort = 0;

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.ico': 'image/x-icon'
};

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const reqPath = decodeURIComponent((req.url || '/').split('?')[0]);
      const safePath = path.normalize(reqPath).replace(/^(\.\.[/\\])+/, '');
      let filePath = path.join(root, safePath === '/' ? 'index.html' : safePath);

      if (!filePath.startsWith(root)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
      }

      fs.stat(filePath, (err, stat) => {
        if (!err && stat.isDirectory()) {
          filePath = path.join(filePath, 'index.html');
        }

        fs.readFile(filePath, (readErr, data) => {
          if (readErr) {
            res.writeHead(404);
            res.end('Not found');
            return;
          }
          const ext = path.extname(filePath).toLowerCase();
          res.writeHead(200, {
            'Content-Type': contentTypes[ext] || 'application/octet-stream',
            'Cache-Control': 'no-store'
          });
          res.end(data);
        });
      });
    });

    server.listen(0, () => {
      serverPort = server.address().port;
      resolve(server);
    });
  });
}

async function openModule(page, lessonIndex, moduleIndex) {
  await page.goto(`http://127.0.0.1:${serverPort}/index.html`, { waitUntil: 'load', timeout: 30000 });
  await page.evaluate(async () => {
    if (window.LessonMetadataLoaded) {
      await window.LessonMetadataLoaded;
    }
    const intro = document.getElementById('intro-video-container');
    if (intro) intro.style.display = 'none';
    if (window.IntentEngine && window.Intents && window.Intents.showMenu) {
      window.IntentEngine.run(window.Intents.showMenu, {});
    }
  });
  const lessonTitle = await page.evaluate((index) => window.courseData.lessons[index].title, lessonIndex);
  await page.getByText(lessonTitle, { exact: true }).click();
  await page.waitForSelector('#module-title');
  if (moduleIndex > 0) {
    await page.evaluate((index) => {
      window.IntentEngine.run(window.Intents.loadModule, { index });
    }, moduleIndex);
  }
  await page.waitForTimeout(500);
}

async function fillEditor(page, code) {
  const editor = page.locator('#code-editor');
  await editor.fill(code);
  await editor.dispatchEvent('input');
  await page.waitForTimeout(250);
}

async function expectUnlocked(page, label) {
  const next = page.locator('#next-btn');
  const disabled = await next.isDisabled();
  if (disabled) {
    throw new Error(`${label}: next button stayed locked`);
  }
  const text = await next.textContent();
  if (!/MISSION ACCOMPLISHED|BYPASS GRANTED/i.test(text || '')) {
    throw new Error(`${label}: unexpected next button text "${text}"`);
  }
}

async function run() {
  const server = await startServer();
  const browser = await chromium.launch({ headless: true, channel: 'msedge' });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
  const noise = [];
  page.on('console', (msg) => {
    const text = msg.text();
    if (/tailwindcss\.com/.test(text) || /favicon\.ico/.test(text) || /Failed to load resource: the server responded with a status of 404/.test(text)) return;
    if (msg.type() === 'error') noise.push(text);
  });

  try {
    console.log('verify: lesson 5 module 1');
    // Lesson 5 module 1
    await openModule(page, 6, 0);
    await page.getByText('Text box', { exact: true }).click();
    await page.getByText('Checkbox', { exact: true }).click();
    await page.getByText('Submit button', { exact: true }).click();
    await expectUnlocked(page, 'Lesson 5 module 1');

    console.log('verify: lesson 5 module 6');
    // Lesson 5 module 6
    await openModule(page, 6, 5);
    await page.getByText('Pizza toppings', { exact: true }).click();
    await page.getByText('School clubs', { exact: true }).click();
    await page.getByText('Skills you have', { exact: true }).click();
    await fillEditor(page, '<form>\n  <input type="checkbox">\n</form>\n<!-- CHECKBOX_READY -->');
    await expectUnlocked(page, 'Lesson 5 module 6');

    console.log('verify: lesson 5 module 20');
    // Lesson 5 module 20
    await openModule(page, 6, 19);
    await fillEditor(page, '<form>\n<label>Name</label>\n<input type="text">\n<textarea></textarea>\n<button>Send</button>\n</form>');
    await expectUnlocked(page, 'Lesson 5 module 20');

    console.log('verify: lesson 6 module 1');
    // Lesson 6 module 1
    await openModule(page, 7, 0);
    await page.getByText('<header>', { exact: true }).click();
    await page.getByText('<main>', { exact: true }).click();
    await page.getByText('<footer>', { exact: true }).click();
    await expectUnlocked(page, 'Lesson 6 module 1');

    console.log('verify: lesson 6 module 3');
    // Lesson 6 module 3
    await openModule(page, 7, 2);
    await page.getByText('Place the header', { exact: true }).click();
    await page.getByText('Place the nav menu', { exact: true }).click();
    await fillEditor(page, '<header>\n  <nav></nav>\n</header>\n<!-- NAV_READY -->');
    await expectUnlocked(page, 'Lesson 6 module 3');

    console.log('verify: lesson 6 module 20');
    // Lesson 6 module 20
    await openModule(page, 7, 19);
    await fillEditor(page, '<header><nav></nav></header>\n<main><article></article></main>\n<footer></footer>');
    await expectUnlocked(page, 'Lesson 6 module 20');

    if (noise.length) {
      throw new Error(`Unexpected console errors:\n${noise.join('\n')}`);
    }

    console.log('playwright verification passed for lessons 5 and 6');
  } finally {
    await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
