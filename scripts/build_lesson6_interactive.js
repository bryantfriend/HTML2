const { writeInteractiveLesson, escHtml } = require('./interactive_lesson_factory');

function marker(name) {
  return `code.includes("<!-- ${name} -->")`;
}

function tag(name) {
  return `/<\\s*${name}\\b/i.test(code)`;
}

function endTag(name) {
  return `/<\\s*\\/\\s*${name}\\s*>/i.test(code)`;
}

function pairedTag(name) {
  return `${tag(name)} && ${endTag(name)}`;
}

function countTag(name, count) {
  return `(code.match(/<\\s*${name}\\b/gi) || []).length >= ${count}`;
}

function all(parts) {
  return `function(code) { return ${parts.join(' && ')}; }`;
}

function panelCard(inner) {
  return `<div style="width:100%;max-width:250px;padding:14px;border-radius:20px;background:linear-gradient(180deg,#fff7ed,#fffbeb);box-shadow:inset 0 0 0 1px rgba(251,191,36,0.18);">${inner}</div>`;
}

function block(label, color) {
  return `<div style="padding:12px;border-radius:14px;background:${color};color:#0f172a;font:800 13px/1.2 Arial, sans-serif;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;">${label}</div>`;
}

function layoutHero(label, accent) {
  return `<svg class="quest-svg-stage" viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="10" y="10" width="300" height="130" rx="24" fill="#111827" stroke="rgba(148,163,184,0.22)"/>
    <rect x="34" y="28" width="252" height="20" rx="10" fill="#93c5fd"/>
    <rect x="34" y="56" width="${accent}" height="16" rx="8" fill="#fde68a"/>
    <rect x="34" y="80" width="164" height="40" rx="16" fill="#bbf7d0"/>
    <rect x="206" y="80" width="80" height="40" rx="16" fill="#fecdd3"/>
    <text x="270" y="42" fill="#e0f2fe" font-size="12" font-family="Arial, sans-serif" text-anchor="end">${escHtml(label)}</text>
  </svg>`;
}

const previewScaffold = `<style>
#preview-area { margin:0; padding:14px; background:linear-gradient(180deg,#020617,#0f172a); font-family:Arial, sans-serif; color:#e2e8f0; display:grid; gap:10px; }
#preview-area header, #preview-area nav, #preview-area main, #preview-area article, #preview-area section, #preview-area aside, #preview-area footer { display:block; position:relative; padding:14px; border-radius:16px; border:1px solid #cbd5e1; background:white; min-height:18px; }
#preview-area header { background:#dbeafe; }
#preview-area nav { background:#fef3c7; }
#preview-area main { background:#dcfce7; }
#preview-area article { background:#e9d5ff; }
#preview-area section { background:#ede9fe; }
#preview-area aside { background:#fee2e2; }
#preview-area footer { background:#c7d2fe; }
#preview-area header::before, #preview-area nav::before, #preview-area main::before, #preview-area article::before, #preview-area section::before, #preview-area aside::before, #preview-area footer::before {
  display:block; margin-bottom:8px; font-size:11px; font-weight:800; text-transform:uppercase; letter-spacing:0.12em; color:#334155;
}
#preview-area header::before { content:'header'; }
#preview-area nav::before { content:'nav'; }
#preview-area main::before { content:'main'; }
#preview-area article::before { content:'article'; }
#preview-area section::before { content:'section'; }
#preview-area aside::before { content:'aside'; }
#preview-area footer::before { content:'footer'; }
#preview-area table { width:100%; border-collapse:collapse; background:white; border-radius:14px; overflow:hidden; }
#preview-area caption { caption-side:top; padding-bottom:8px; font-weight:800; color:#0f172a; }
#preview-area th, #preview-area td { border:1px solid #cbd5e1; padding:10px; text-align:left; }
#preview-area th { background:#e0f2fe; }
</style>`;

module.exports = function buildLesson6Interactive() {
  const modules = [
    {
      title: '1. Escape the Div Soup',
      intro: 'Semantic HTML gives each part of the page a clear job instead of using endless mystery divs.',
      watch: 'Watch the page map turn from messy to meaningful.',
      play: 'Tap the 3 tags that clearly describe page jobs.',
      type: 'No typing yet. Solve the mini game first.',
      remember: 'Semantic tags tell people and browsers what each area does.',
      mission: 'Tap the 3 semantic tags.',
      hero: layoutHero('Map the page', 252),
      widget: {
        type: 'choice',
        heading: 'Find the tags with real meaning.',
        chip: '3 correct',
        prompt: 'Which tags tell the browser what part of the page they are?',
        multi: true,
        marker: 'SEMANTIC_READY',
        success: 'Nice. Those tags explain the page structure.',
        options: [
          { value: 'header', label: '<header>', copy: 'The top area of the page.' },
          { value: 'main', label: '<main>', copy: 'The most important content.' },
          { value: 'footer', label: '<footer>', copy: 'The bottom area of the page.' },
          { value: 'div', label: '<div>', copy: 'A general box with no special meaning.' },
          { value: 'span', label: '<span>', copy: 'A small inline wrapper.' }
        ],
        correct: ['header', 'main', 'footer']
      },
      initialCode: '<!-- Find the semantic tags -->',
      validator: all([marker('SEMANTIC_READY')])
    },
    {
      title: '2. The Header Tag',
      intro: 'The <code>&lt;header&gt;</code> tag marks the top part of a page.',
      watch: 'Notice the header sits at the top of the page map.',
      play: 'Look for the top strip in the preview.',
      type: 'Type <code>&lt;header&gt;&lt;/header&gt;</code>.',
      remember: 'Header means top section.',
      mission: 'Create a header tag pair.',
      hero: layoutHero('Top of the page', 252),
      widget: {
        type: 'demo',
        heading: 'The header is the top section.',
        chip: 'top area',
        browserTitle: 'page-map.html',
        code: '<header></header>',
        preview: panelCard(block('HEADER', '#dbeafe') + '<div style="font:700 13px/1.4 Arial, sans-serif;color:#334155;">Page title, logo, or top welcome area.</div>'),
        captions: ['Put header at the top.', 'Header opens and closes like a normal pair tag.', 'Now type the same pair in the editor.']
      },
      initialCode: '',
      validator: all([pairedTag('header')])
    },
    {
      title: '3. Add Navigation',
      intro: 'The <code>&lt;nav&gt;</code> tag marks the menu area with links to other parts of the site.',
      watch: 'The nav bar belongs inside the header in this example.',
      play: 'Tap the steps in the correct order.',
      type: 'Put <code>&lt;nav&gt;&lt;/nav&gt;</code> inside the header.',
      remember: 'Nav usually lives in or near the header.',
      mission: 'Add a nav tag inside the header.',
      hero: layoutHero('Add the menu', 232),
      widget: {
        type: 'sequence',
        heading: 'Build the top area in order.',
        chip: '2 steps',
        marker: 'NAV_READY',
        steps: [
          { value: 'header', label: 'Place the header' },
          { value: 'nav', label: 'Place the nav menu' }
        ],
        insertions: {
          header: '<header>\n</header>',
          nav: '__INSERT_BEFORE_HEADER_CLOSE__  <nav>\n  </nav>'
        },
        success: 'Great. The menu belongs in the top area here.'
      },
      initialCode: '<header>\n</header>',
      validator: all([marker('NAV_READY'), pairedTag('nav')])
    },
    {
      title: '4. Build the Menu',
      intro: 'A nav area often uses a list. That means <code>&lt;ul&gt;</code> on the outside and <code>&lt;li&gt;</code> items inside.',
      watch: 'The list turns into menu choices.',
      play: 'Count the menu items in the preview.',
      type: 'Inside the <code>&lt;nav&gt;</code>, add a <code>&lt;ul&gt;</code> and at least two <code>&lt;li&gt;</code> items. Example:<br><code>&lt;nav&gt;...&lt;ul&gt;&lt;li&gt;Home&lt;/li&gt;&lt;li&gt;About&lt;/li&gt;&lt;/ul&gt;...&lt;/nav&gt;</code>',
      remember: 'One list can hold many menu links.',
      mission: 'Build a simple nav menu.',
      hero: layoutHero('Menu list', 212),
      widget: {
        type: 'demo',
        heading: 'Lists make neat menus.',
        chip: 'ul + li',
        browserTitle: 'page-map.html',
        code: '<nav>\n  <ul>\n    <li>Home</li>\n    <li>About</li>\n  </ul>\n</nav>',
        preview: panelCard(block('NAV', '#fef3c7') + '<div style="display:flex;gap:8px;flex-wrap:wrap;"><div style="padding:8px 12px;border-radius:999px;background:white;border:1px solid #f59e0b;font:700 12px/1 Arial,sans-serif;">Home</div><div style="padding:8px 12px;border-radius:999px;background:white;border:1px solid #f59e0b;font:700 12px/1 Arial,sans-serif;">About</div></div>'),
        captions: ['Start with nav.', 'Place a list inside it.', 'Add list items for each menu choice.']
      },
      initialCode: '<header>\n  <nav>\n  </nav>\n</header>',
      validator: all([pairedTag('ul'), countTag('li', 2)])
    },
    {
      title: '5. The Main Tag',
      intro: 'The <code>&lt;main&gt;</code> tag wraps the most important content on the page.',
      watch: 'Main is the biggest content zone in the layout.',
      play: 'Look for the large center area in the preview.',
      type: 'Add <code>&lt;main&gt;&lt;/main&gt;</code> below the header.',
      remember: 'A page should usually have one main section.',
      mission: 'Create the main content area.',
      hero: layoutHero('Main content', 164),
      widget: {
        type: 'demo',
        heading: 'Main holds the core content.',
        chip: 'center stage',
        browserTitle: 'page-map.html',
        code: '<main>\n</main>',
        preview: panelCard(block('MAIN', '#dcfce7') + '<div style="font:700 13px/1.4 Arial, sans-serif;color:#334155;">The most important page content goes here.</div>'),
        captions: ['Header sits on top.', 'Main sits below it.', 'Now type the main tag pair.']
      },
      initialCode: '<header>\n  <nav><ul><li>Home</li></ul></nav>\n</header>\n\n',
      validator: all([pairedTag('main')])
    },
    {
      title: '6. The Article Tag',
      intro: 'An <code>&lt;article&gt;</code> is one complete piece of content, like a story, post, or news card.',
      watch: 'The article sits inside the main area.',
      play: 'Think of one article as one self-contained story.',
      type: 'Put <code>&lt;article&gt;&lt;/article&gt;</code> inside main.',
      remember: 'Article = one complete content piece.',
      mission: 'Add an article inside the main tag.',
      hero: layoutHero('One full story', 164),
      widget: {
        type: 'demo',
        heading: 'Articles can stand on their own.',
        chip: 'story card',
        browserTitle: 'blog-layout.html',
        code: '<main>\n  <article></article>\n</main>',
        preview: panelCard(block('ARTICLE', '#e9d5ff') + '<div style="font:700 13px/1.4 Arial, sans-serif;color:#334155;">A blog post, news story, or product card.</div>'),
        captions: ['Main wraps the page content.', 'Article wraps one full story.', 'Now add article to your code.']
      },
      initialCode: '<main>\n</main>',
      validator: all([pairedTag('article')])
    },
    {
      title: '7. Article Headline',
      intro: 'Articles often use an <code>&lt;h2&gt;</code> for the story headline.',
      watch: 'The headline tells readers what the article is about.',
      play: 'Spot the large title inside the article card.',
      type: 'Add an <code>&lt;h2&gt;</code> inside the article.',
      remember: 'The page usually saves <code>&lt;h1&gt;</code> for the main page title.',
      mission: 'Add an h2 headline inside the article.',
      hero: layoutHero('Headline first', 164),
      widget: {
        type: 'demo',
        heading: 'Every good article needs a clear headline.',
        chip: 'h2',
        browserTitle: 'blog-layout.html',
        code: '<article>\n  <h2>My Blog</h2>\n</article>',
        preview: panelCard(block('ARTICLE', '#e9d5ff') + '<div style="font:900 18px/1.2 Arial,sans-serif;color:#111827;margin-bottom:6px;">My Blog</div><div style="font:600 13px/1.4 Arial,sans-serif;color:#475569;">A strong headline helps readers understand the story fast.</div>'),
        captions: ['Open the article.', 'Place h2 inside it.', 'Now type your h2 headline.']
      },
      initialCode: '<article>\n</article>',
      validator: all([tag('h2')])
    },
    {
      title: '8. The Section Tag',
      intro: 'Use <code>&lt;section&gt;</code> for one related part of a page, like About, Services, or Contact.',
      watch: 'Sections split a page into organized parts.',
      play: 'Imagine one section for each topic.',
      type: 'Create a <code>&lt;section&gt;&lt;/section&gt;</code> tag pair.',
      remember: 'Section groups related content.',
      mission: 'Create one section tag pair.',
      hero: layoutHero('Split by topic', 150),
      widget: {
        type: 'demo',
        heading: 'Sections divide a page into topic areas.',
        chip: 'topic zone',
        browserTitle: 'page-map.html',
        code: '<section></section>',
        preview: panelCard(block('SECTION', '#ede9fe') + '<div style="font:700 13px/1.4 Arial,sans-serif;color:#475569;">One clear topic lives here.</div>'),
        captions: ['Open the section tag.', 'Close the section tag.', 'Now add the pair in the editor.']
      },
      initialCode: '',
      validator: all([pairedTag('section')])
    },
    {
      title: '9. Sections Inside an Article',
      intro: 'One article can contain smaller sections, like an intro section and a details section.',
      watch: 'See how one article can be split into parts.',
      play: 'Think of two mini-chunks inside the same story.',
      type: 'Put 2 <code>&lt;section&gt;</code> tags inside the article.',
      remember: 'Article can hold many related sections.',
      mission: 'Add two sections inside the article.',
      hero: layoutHero('Article parts', 178),
      widget: {
        type: 'choice',
        heading: 'Which cards could be sections inside one article?',
        chip: '2 correct',
        prompt: 'Tap the 2 cards that could be parts of one story page.',
        multi: true,
        marker: 'SECTIONS_READY',
        success: 'Exactly. One story can have multiple sections.',
        options: [
          { value: 'intro', label: 'Intro section', copy: 'A beginning part of the story.' },
          { value: 'details', label: 'Details section', copy: 'A middle part with more information.' },
          { value: 'separate', label: 'Different website', copy: 'That would not belong inside the same article.' }
        ],
        correct: ['intro', 'details']
      },
      initialCode: '<article>\n  <h2>My Blog</h2>\n</article>',
      validator: all([marker('SECTIONS_READY'), countTag('section', 2)])
    },
    {
      title: '10. The Aside Tag',
      intro: 'An <code>&lt;aside&gt;</code> is for related information that is not the main event, like a sidebar or helpful note.',
      watch: 'The aside sits beside the main story.',
      play: 'Compare the main story card and the side note card.',
      type: 'Add an <code>&lt;aside&gt;</code> next to the article.',
      remember: 'Aside = helpful side content.',
      mission: 'Add an aside near the article.',
      hero: layoutHero('Side note', 164),
      widget: {
        type: 'toggle',
        heading: 'Main content vs side content',
        chip: 'compare',
        tabs: [
          { label: 'Article', content: panelCard(block('ARTICLE', '#e9d5ff') + '<div style="font:700 13px/1.4 Arial,sans-serif;color:#475569;">Main story lives here.</div>') },
          { label: 'Aside', content: panelCard(block('ASIDE', '#fee2e2') + '<div style="font:700 13px/1.4 Arial,sans-serif;color:#475569;">Related note, links, or tips.</div>') }
        ],
        status: 'Aside is related content, but not the main story.'
      },
      initialCode: '<main>\n  <article>\n  </article>\n</main>',
      validator: all([pairedTag('aside')])
    },
    {
      title: '11. The Footer Tag',
      intro: 'The <code>&lt;footer&gt;</code> tag marks the bottom area of the page.',
      watch: 'Footer sits at the very end of the page map.',
      play: 'Look for the bottom strip in the preview.',
      type: 'Add a <code>&lt;footer&gt;</code> outside main.',
      remember: 'Footer = bottom section.',
      mission: 'Add the footer to the page.',
      hero: layoutHero('Bottom strip', 252),
      widget: {
        type: 'demo',
        heading: 'Footer closes the page layout.',
        chip: 'bottom area',
        browserTitle: 'page-map.html',
        code: '<footer></footer>',
        preview: panelCard(block('FOOTER', '#c7d2fe') + '<div style="font:700 13px/1.4 Arial,sans-serif;color:#475569;">Copyright, contact links, or closing notes.</div>'),
        captions: ['The footer belongs at the bottom.', 'It uses a normal opening and closing pair.', 'Now type the footer tag pair.']
      },
      initialCode: '<main>\n  <article></article>\n</main>\n',
      validator: all([pairedTag('footer')])
    },
    {
      title: '12. Build the Semantic Shell',
      intro: 'Now put the page shell together with a header, a main area, and a footer.',
      watch: 'The page shell has a top, middle, and bottom.',
      play: 'Tap the layout pieces in order.',
      type: 'Write <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, and <code>&lt;footer&gt;</code> in order.',
      remember: 'Top, middle, bottom.',
      mission: 'Build the semantic page shell.',
      hero: layoutHero('Page shell', 252),
      widget: {
        type: 'sequence',
        heading: 'Build the shell in order.',
        chip: '3 steps',
        marker: 'SHELL_READY',
        steps: [
          { value: 'header', label: 'Header first' },
          { value: 'main', label: 'Main second' },
          { value: 'footer', label: 'Footer last' }
        ],
        success: 'Perfect. That is the page shell order.'
      },
      initialCode: '',
      validator: all([marker('SHELL_READY'), tag('header'), tag('main'), tag('footer')])
    },
    {
      title: '13. Meet the Table Tag',
      intro: 'Tables are for grid information like schedules, scoreboards, or rosters.',
      watch: 'A table builds a grid of rows and columns.',
      play: 'Look at the scoreboard style preview.',
      type: 'Create a <code>&lt;table&gt;&lt;/table&gt;</code>.',
      remember: 'Use tables for real grid data.',
      mission: 'Create the table tag pair.',
      hero: layoutHero('Grid data', 198),
      widget: {
        type: 'demo',
        heading: 'Tables organize data in a grid.',
        chip: 'grid',
        browserTitle: 'scoreboard.html',
        code: '<table>\n</table>',
        preview: panelCard('<table><tr><th>Hero</th><th>Power</th></tr><tr><td>Nova</td><td>Speed</td></tr></table>'),
        captions: ['Start with the table tag.', 'Rows and cells will go inside it.', 'Now type the table pair in the editor.']
      },
      initialCode: '',
      validator: all([pairedTag('table')])
    },
    {
      title: '14. Table Rows',
      intro: 'Rows in a table use the <code>&lt;tr&gt;</code> tag.',
      watch: 'Each row stretches across the table.',
      play: 'Find the one row in the preview.',
      type: 'Add one <code>&lt;tr&gt;</code> inside the table.',
      remember: 'tr means table row.',
      mission: 'Add one row to the table.',
      hero: layoutHero('Add a row', 198),
      widget: {
        type: 'demo',
        heading: 'Rows run across the table.',
        chip: 'tr',
        browserTitle: 'scoreboard.html',
        code: '<table>\n  <tr>\n  </tr>\n</table>',
        preview: panelCard('<table><tr><td>One row is ready</td></tr></table>'),
        captions: ['Open the table.', 'Place one row inside it.', 'Now add your own tr tag.']
      },
      initialCode: '<table>\n</table>',
      validator: all([tag('tr')])
    },
    {
      title: '15. Table Data Cells',
      intro: 'Cells inside a row use the <code>&lt;td&gt;</code> tag.',
      watch: 'Each cell holds one piece of data.',
      play: 'Count the two cells in the preview row.',
      type: 'Add 2 <code>&lt;td&gt;</code> cells inside the row.',
      remember: 'td means table data.',
      mission: 'Add two table data cells.',
      hero: layoutHero('Fill the row', 198),
      widget: {
        type: 'demo',
        heading: 'Cells hold the data inside each row.',
        chip: 'td',
        browserTitle: 'scoreboard.html',
        code: '<tr>\n  <td>Nova</td>\n  <td>Speed</td>\n</tr>',
        preview: panelCard('<table><tr><td>Nova</td><td>Speed</td></tr></table>'),
        captions: ['Open the row.', 'Place two td cells inside it.', 'Now build two cells in the editor.']
      },
      initialCode: '<table>\n  <tr>\n  </tr>\n</table>',
      validator: all([countTag('td', 2)])
    },
    {
      title: '16. Table Headers',
      intro: 'When a row labels the columns, use <code>&lt;th&gt;</code> instead of <code>&lt;td&gt;</code>.',
      watch: 'Header cells usually look bold because they label the column.',
      play: 'Pick the better tag for labels like Name and Age.',
      type: 'Change the two cells to <code>&lt;th&gt;</code> tags.',
      remember: 'th is for heading cells.',
      mission: 'Turn the label row into header cells.',
      hero: layoutHero('Label the columns', 198),
      widget: {
        type: 'choice',
        heading: 'Which tag should label a table column?',
        chip: 'one answer',
        prompt: 'Tap the best tag for a column label row.',
        marker: 'TH_READY',
        success: 'Correct. th labels the columns.',
        options: [
          { value: 'th', label: '<th>', copy: 'Use for label cells.' },
          { value: 'td', label: '<td>', copy: 'Use for regular data cells.' }
        ],
        correct: ['th']
      },
      initialCode: '<table>\n  <tr>\n    <td>Name</td>\n    <td>Age</td>\n  </tr>\n</table>',
      validator: all([marker('TH_READY'), countTag('th', 2)])
    },
    {
      title: '17. Add a Second Row',
      intro: 'A full table usually has one label row and more rows of actual data.',
      watch: 'The second row adds the real information.',
      play: 'Notice the table now has one header row and one data row.',
      type: 'Add another <code>&lt;tr&gt;</code> with 2 <code>&lt;td&gt;</code> cells.',
      remember: 'New data rows use td cells.',
      mission: 'Build a two-row table.',
      hero: layoutHero('Add data row', 198),
      widget: {
        type: 'demo',
        heading: 'Header row first, data row second.',
        chip: '2 rows',
        browserTitle: 'scoreboard.html',
        code: '<tr>\n  <th>Hero</th>\n  <th>Power</th>\n</tr>\n<tr>\n  <td>Nova</td>\n  <td>Speed</td>\n</tr>',
        preview: panelCard('<table><tr><th>Hero</th><th>Power</th></tr><tr><td>Nova</td><td>Speed</td></tr></table>'),
        captions: ['Start with the header row.', 'Add a second row for data.', 'Now create your own second row.']
      },
      initialCode: '<table>\n  <tr>\n    <th>Hero</th>\n    <th>Power</th>\n  </tr>\n</table>',
      validator: all([countTag('tr', 2), countTag('td', 2)])
    },
    {
      title: '18. Add a Caption',
      intro: 'A <code>&lt;caption&gt;</code> gives the whole table a title.',
      watch: 'The caption appears above the table and explains what the grid is about.',
      play: 'Read the table title in the preview.',
      type: 'Add <code>&lt;caption&gt;My Heroes&lt;/caption&gt;</code>.',
      remember: 'Caption names the whole table.',
      mission: 'Add a caption to the table.',
      hero: layoutHero('Name the table', 198),
      widget: {
        type: 'demo',
        heading: 'Captions make tables easier to understand.',
        chip: 'caption',
        browserTitle: 'scoreboard.html',
        code: '<caption>My Heroes</caption>',
        preview: panelCard('<table><caption>My Heroes</caption><tr><th>Hero</th><th>Power</th></tr></table>'),
        captions: ['Caption sits inside the table.', 'It gives the whole table a title.', 'Now add the caption in your code.']
      },
      initialCode: '<table>\n  <tr>\n    <th>Hero</th>\n  </tr>\n</table>',
      validator: all([pairedTag('caption')])
    },
    {
      title: '19. Group the Table',
      intro: 'Big tables can group rows with <code>&lt;thead&gt;</code> and <code>&lt;tbody&gt;</code>.',
      watch: 'The header row and the data rows get their own groups.',
      play: 'Tap the grouping order in the right sequence.',
      type: 'Wrap the first row in <code>&lt;thead&gt;</code> and the second row in <code>&lt;tbody&gt;</code>.',
      remember: 'thead = labels, tbody = regular rows.',
      mission: 'Group the table rows.',
      hero: layoutHero('Group the grid', 198),
      widget: {
        type: 'sequence',
        heading: 'Group the rows in order.',
        chip: '2 steps',
        marker: 'TABLE_GROUP_READY',
        steps: [
          { value: 'thead', label: 'Group the heading row' },
          { value: 'tbody', label: 'Group the data rows' }
        ],
        success: 'Great. The table groups are in the right order.'
      },
      initialCode: '<table>\n  <tr><th>Hero</th></tr>\n  <tr><td>Batman</td></tr>\n</table>',
      validator: all([marker('TABLE_GROUP_READY'), pairedTag('thead'), pairedTag('tbody')])
    },
    {
      title: '20. Final Semantic Page',
      intro: 'Final mission: build a clean page shell with the right semantic tags in the right places.',
      watch: 'Study the full semantic layout one more time.',
      play: 'Run the checklist in your head: header, nav, main, article, footer.',
      type: 'Create a page with a <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, and <code>&lt;footer&gt;</code>.',
      remember: 'Clear structure makes pages easier to read, search, and maintain.',
      mission: 'Build the full semantic shell.',
      hero: layoutHero('Final layout', 252),
      widget: {
        type: 'demo',
        heading: 'A strong page layout uses clear semantic parts.',
        chip: 'boss mission',
        browserTitle: 'semantic-layout.html',
        code: '<header>\n  <nav></nav>\n</header>\n<main>\n  <article></article>\n</main>\n<footer></footer>',
        preview: panelCard(block('HEADER', '#dbeafe') + block('NAV', '#fef3c7') + block('MAIN', '#dcfce7') + block('ARTICLE', '#e9d5ff') + block('FOOTER', '#c7d2fe')),
        captions: ['Build the top area first.', 'Place the main story in the middle.', 'Close the page with a footer.']
      },
      initialCode: '<!-- Build the semantic shell! -->\n',
      validator: all([tag('header'), tag('nav'), tag('main'), tag('article'), tag('footer')])
    }
  ];

  writeInteractiveLesson({
    lessonId: 'lesson6',
    outDir: 'lessons/lesson6',
    title: 'Lesson 6: Semantic HTML',
    description: 'Map webpages with clear semantic tags like header, nav, main, article, and footer.',
    gameTitle: 'Structure Safari',
    gamePath: 'minigames/game6.html',
    theme: {
      accent: '#67e8f9',
      accentSoft: '#38bdf8',
      panel: 'rgba(8,47,73,0.82)',
      panelAlt: 'rgba(15,23,42,0.96)',
      success: '#4ade80',
      ink: '#082f49',
      toggleColumns: 2
    },
    previewScaffold,
    modules
  });

  return modules;
};
