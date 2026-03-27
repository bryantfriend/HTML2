(function () {
    if (window.__sandboxIdeUpgradeLoaded) return;
    window.__sandboxIdeUpgradeLoaded = true;

    window.sandboxIDE = window.sandboxIDE || {};
    window.sandboxIDE.activeFile = window.sandboxIDE.activeFile || 'index.html';
    window.sandboxIDE.consoleEntries = window.sandboxIDE.consoleEntries || [];
    window.sandboxIDE.panels = window.sandboxIDE.panels || {
        explorerCollapsed: false,
        consoleCollapsed: false,
        focusMode: 'split'
    };
    window.sandboxIDE.layout = window.sandboxIDE.layout || {
        editorPercent: 54,
        consoleHeight: 190
    };

    function starterProject() {
        var starter = window.getSandboxStarter ? window.getSandboxStarter() : {
            activeFile: 'index.html',
            files: {
                'index.html': '<h1>Sandbox</h1>',
                'styles.css': 'body { font-family: sans-serif; }',
                'script.js': "console.log('sandbox');"
            }
        };
        if (starter && starter.files) return starter;
        return {
            activeFile: 'index.html',
            files: {
                'index.html': starter && typeof starter.html === 'string' ? starter.html : '<h1>Sandbox</h1>',
                'styles.css': starter && typeof starter.css === 'string' ? starter.css : 'body { font-family: sans-serif; }',
                'script.js': starter && typeof starter.js === 'string' ? starter.js : "console.log('sandbox');"
            }
        };
    }

    window.normalizeSandboxProject = function (raw) {
        var starter = starterProject();
        if (raw && raw.files && typeof raw.files === 'object') {
            if (!raw.activeFile || raw.files[raw.activeFile] === undefined) {
                raw.activeFile = Object.keys(raw.files)[0];
            }
            return {
                activeFile: raw.activeFile,
                files: Object.assign({}, raw.files)
            };
        }
        return {
            activeFile: 'index.html',
            files: {
                'index.html': raw && typeof raw.html === 'string' ? raw.html : starter.files['index.html'],
                'styles.css': raw && typeof raw.css === 'string' ? raw.css : starter.files['styles.css'],
                'script.js': raw && typeof raw.js === 'string' ? raw.js : starter.files['script.js']
            }
        };
    };

    function ensureProject() {
        if (!window.state) return window.normalizeSandboxProject(null);
        window.state.sandboxProject = window.normalizeSandboxProject(window.state.sandboxProject || window.state.sandbox || null);
        var project = window.state.sandboxProject;
        window.sandboxIDE.activeFile = project.activeFile;
        window.state.sandbox = {
            html: project.files['index.html'] || '',
            css: project.files['styles.css'] || '',
            js: project.files['script.js'] || ''
        };
        return project;
    }

    function fileType(filename) {
        if (/\.html$/i.test(filename)) return 'html';
        if (/\.css$/i.test(filename)) return 'css';
        if (/\.js$/i.test(filename)) return 'js';
        return 'file';
    }

    function fileIcon(type) {
        if (type === 'html') return 'H';
        if (type === 'css') return 'C';
        if (type === 'js') return 'J';
        return 'F';
    }

    function languageLabel(filename) {
        var type = fileType(filename);
        if (type === 'html') return 'HTML';
        if (type === 'css') return 'CSS';
        if (type === 'js') return 'JavaScript';
        return 'File';
    }

    function filePlaceholder(filename) {
        var type = fileType(filename);
        if (type === 'html') return '<!-- HTML goes here -->';
        if (type === 'css') return '/* CSS goes here */';
        if (type === 'js') return '// JavaScript goes here';
        return '// Start typing here';
    }

    function keywordCatalog(type) {
        if (type === 'html') {
            return [
                ['html', 'HTML document wrapper'],
                ['head', 'Page metadata section'],
                ['body', 'Visible page content'],
                ['title', 'Browser tab title'],
                ['section', 'Content section'],
                ['header', 'Top section or intro'],
                ['footer', 'Bottom section'],
                ['main', 'Main page content'],
                ['nav', 'Navigation links'],
                ['div', 'Generic container'],
                ['span', 'Inline container'],
                ['h1', 'Large heading'],
                ['h2', 'Second heading'],
                ['p', 'Paragraph'],
                ['a', 'Link'],
                ['img', 'Image tag'],
                ['button', 'Clickable button'],
                ['input', 'Input field'],
                ['form', 'Form wrapper'],
                ['label', 'Form label'],
                ['ul', 'Unordered list'],
                ['ol', 'Ordered list'],
                ['li', 'List item'],
                ['strong', 'Bold importance'],
                ['em', 'Emphasis'],
                ['script', 'JavaScript tag'],
                ['style', 'CSS tag']
            ];
        }
        if (type === 'css') {
            return [
                ['body', 'Page-level selector'],
                ['display', 'Layout mode property'],
                ['color', 'Text color'],
                ['background', 'Background styling'],
                ['margin', 'Outer spacing'],
                ['padding', 'Inner spacing'],
                ['border', 'Outline styling'],
                ['width', 'Width property'],
                ['height', 'Height property'],
                ['font-size', 'Text size'],
                ['grid', 'Grid layout'],
                ['flex', 'Flexbox layout'],
                ['justify-content', 'Main axis alignment'],
                ['align-items', 'Cross axis alignment']
            ];
        }
        return [
            ['const', 'Create a constant'],
            ['let', 'Create a variable'],
            ['function', 'Define a function'],
            ['addEventListener', 'Listen for events'],
            ['querySelector', 'Find an element'],
            ['console.log', 'Log to console'],
            ['if', 'Conditional logic'],
            ['for', 'Loop through values'],
            ['return', 'Return a value']
        ];
    }

    function editorEl() {
        return document.getElementById('sandbox-editor');
    }

    function gutterEl() {
        return document.getElementById('sandbox-gutter');
    }

    function autocompleteEl() {
        return document.getElementById('sandbox-autocomplete');
    }

    function updateAutocompletePosition(editor) {
        var box = autocompleteEl();
        if (!box || !editor) return;
        var text = editor.value.slice(0, editor.selectionStart);
        var lines = text.split('\n');
        var currentLine = lines[lines.length - 1] || '';
        var lineIndex = Math.max(0, lines.length - 1);
        var lineHeight = 27;
        var top = Math.min(editor.scrollHeight - 20, 14 + (lineIndex * lineHeight) - editor.scrollTop + lineHeight);
        box.style.top = Math.max(14, top) + 'px';
    }

    window.hideSandboxAutocomplete = function () {
        var box = autocompleteEl();
        if (!box) return;
        box.classList.add('hidden');
        box.innerHTML = '';
        window.sandboxIDE.autocomplete = null;
    };

    window.applySandboxAutocomplete = function (index) {
        var state = window.sandboxIDE.autocomplete;
        var editor = editorEl();
        if (!state || !editor || !state.items[index]) return false;
        var item = state.items[index];
        var before = editor.value.slice(0, state.start);
        var after = editor.value.slice(state.end);
        editor.value = before + item.insert + after;
        var cursor = before.length + item.cursorOffset;
        editor.selectionStart = editor.selectionEnd = cursor;
        editor.focus();
        window.hideSandboxAutocomplete();
        editor.dispatchEvent(new Event('input', { bubbles: true }));
        return true;
    };

    window.moveSandboxAutocomplete = function (direction) {
        var state = window.sandboxIDE.autocomplete;
        if (!state || !state.items.length) return;
        state.activeIndex = (state.activeIndex + direction + state.items.length) % state.items.length;
        window.renderSandboxAutocomplete(state);
    };

    window.renderSandboxAutocomplete = function (state) {
        var box = autocompleteEl();
        var editor = editorEl();
        if (!box || !editor || !state || !state.items.length) {
            window.hideSandboxAutocomplete();
            return;
        }
        function escapeHtml(value) {
            return String(value)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
        }
        window.sandboxIDE.autocomplete = state;
        box.innerHTML = state.items.map(function (item, index) {
            return '<button type="button" class="sandbox-autocomplete-item' + (index === state.activeIndex ? ' active' : '') + '" data-autocomplete-index="' + index + '">' +
                '<strong>' + escapeHtml(item.label) + '</strong><span>' + escapeHtml(item.description) + '</span></button>';
        }).join('');
        box.classList.remove('hidden');
        updateAutocompletePosition(editor);
        box.querySelectorAll('[data-autocomplete-index]').forEach(function (button) {
            button.onmousedown = function (e) {
                e.preventDefault();
                window.applySandboxAutocomplete(Number(button.dataset.autocompleteIndex));
            };
        });
    };

    function buildAutocompleteState(editor) {
        var project = ensureProject();
        var type = fileType(project.activeFile);
        var text = editor.value.slice(0, editor.selectionStart);
        var htmlMatch = type === 'html' ? /<([a-z0-9-]*)$/i.exec(text) : null;
        var tokenMatch = /\b([a-zA-Z.-]{1,30})$/.exec(text);
        var query = '';
        var start = editor.selectionStart;
        var trigger = null;
        if (htmlMatch) {
            query = (htmlMatch[1] || '').toLowerCase();
            start = editor.selectionStart - htmlMatch[0].length + 1;
            trigger = '<';
        } else if (tokenMatch && tokenMatch[1]) {
            query = tokenMatch[1].toLowerCase();
            start = editor.selectionStart - tokenMatch[1].length;
            trigger = 'token';
        } else {
            return null;
        }

        var items = keywordCatalog(type).filter(function (entry) {
            return !query || entry[0].toLowerCase().indexOf(query) === 0;
        }).slice(0, 10).map(function (entry) {
            var insert = entry[0];
            var cursorOffset = insert.length;
            if (type === 'html' && trigger === '<') {
                insert = entry[0] + '></' + entry[0] + '>';
                cursorOffset = entry[0].length + 1;
            }
            return {
                label: type === 'html' && trigger === '<' ? '<' + entry[0] + '>' : entry[0],
                description: entry[1],
                insert: insert,
                cursorOffset: cursorOffset
            };
        });
        if (!items.length) return null;
        return {
            start: start,
            end: editor.selectionStart,
            items: items,
            activeIndex: 0
        };
    }

    function maybeExpandHtmlTag(editor) {
        var project = ensureProject();
        if (fileType(project.activeFile) !== 'html') return false;
        var before = editor.value.slice(0, editor.selectionStart);
        var match = /(^|\n)([ \t]*)<([a-z][a-z0-9-]*)>$/.exec(before);
        if (!match) return false;
        var tag = match[3].toLowerCase();
        if (/^(img|input|br|hr|meta|link)$/.test(tag)) return false;
        var indent = match[2] || '';
        var insertion = '\n' + indent + '  ' + '\n' + indent + '</' + tag + '>';
        var start = editor.selectionStart;
        editor.value = editor.value.slice(0, start) + insertion + editor.value.slice(start);
        editor.selectionStart = editor.selectionEnd = start + indent.length + 3;
        return true;
    }

    window.getSandboxEditors = function () {
        return { html: null, css: null, js: null };
    };

    window.updateSandboxLineNumbers = function () {
        var editor = editorEl();
        var gutter = gutterEl();
        if (!editor || !gutter) return;
        var lineCount = Math.max((editor.value.match(/\n/g) || []).length + 1, 1);
        gutter.textContent = Array.from({ length: lineCount }, function (_, index) {
            return String(index + 1);
        }).join('\n');
        gutter.scrollTop = editor.scrollTop;
    };

    window.updateSandboxCursorStatus = function () {
        var editor = editorEl();
        var cursor = document.getElementById('sandbox-cursor-position');
        var selection = document.getElementById('sandbox-selection-size');
        if (!editor || !cursor || !selection) return;
        var start = editor.selectionStart || 0;
        var before = editor.value.slice(0, start).split('\n');
        cursor.textContent = 'Ln ' + before.length + ', Col ' + (before[before.length - 1].length + 1);
        selection.textContent = Math.abs((editor.selectionEnd || 0) - start) + ' chars';
    };

    window.updateSandboxStatusBar = function () {
        var project = ensureProject();
        var editor = editorEl();
        var lines = document.getElementById('sandbox-status-lines');
        var chars = document.getElementById('sandbox-status-characters');
        var language = document.getElementById('sandbox-active-language');
        var indicator = document.getElementById('sandbox-file-indicator');
        var statusProject = document.getElementById('sandbox-status-project');
        if (editor && lines) lines.textContent = Math.max((editor.value.match(/\n/g) || []).length + 1, 1) + ' lines';
        if (editor && chars) chars.textContent = editor.value.length + ' chars';
        if (language) language.textContent = languageLabel(project.activeFile);
        if (indicator) indicator.textContent = project.activeFile;
        if (statusProject) statusProject.textContent = (window.state.sandboxFilename || 'untitled_project') + ' :: ' + project.activeFile;
    };

    window.renderSandboxCoach = function () {
        var coach = document.getElementById('sandbox-coach-output');
        if (!coach) return;
        var project = ensureProject();
        var filename = project.activeFile;
        var code = project.files[filename] || '';
        var errors = window.sandboxIDE.consoleEntries.filter(function (entry) { return entry.type === 'error'; });
        var tips = [];
        if (errors.length) tips.push('Runtime issue: ' + errors[0].message);
        if (fileType(filename) === 'html') {
            if (code.includes('<div') && !code.includes('</div>')) tips.push('You may be missing a closing </div> tag.');
            if (!code.trim()) tips.push('Start with a heading, paragraph, button, or section.');
        }
        if (fileType(filename) === 'css') {
            if ((code.match(/{/g) || []).length !== (code.match(/}/g) || []).length) tips.push('Your CSS braces may not match yet.');
            if (!code.includes('{')) tips.push('Try a selector like body { ... } or .card { ... }.');
        }
        if (fileType(filename) === 'js') {
            if ((code.match(/\(/g) || []).length !== (code.match(/\)/g) || []).length) tips.push('A JavaScript parenthesis may be missing.');
            if (!/console\.log|addEventListener|=>|function/.test(code)) tips.push('Try adding a console.log or event listener to test behavior.');
        }
        if (!tips.length) tips.push('Looks good. Try adding another file, a snippet, or a new interaction.');
        coach.innerHTML = tips.slice(0, 3).map(function (tip) {
            return '<div class="sandbox-coach-tip">' + tip.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</div>';
        }).join('');
    };

    window.applySandboxPanelState = function () {
        var panels = window.sandboxIDE.panels;
        var layout = window.sandboxIDE.layout;
        var workbench = document.querySelector('.sandbox-workbench');
        var shellGrid = document.getElementById('sandbox-shell-grid');
        var editorPanel = document.getElementById('sandbox-editor-panel');
        var previewPanel = document.getElementById('sandbox-preview-panel');
        var consoleShell = document.getElementById('sandbox-console-shell');
        var previewStack = document.querySelector('.sandbox-preview-stack');
        if (workbench) workbench.classList.toggle('explorer-collapsed', !!panels.explorerCollapsed);
        if (consoleShell) consoleShell.classList.toggle('collapsed', !!panels.consoleCollapsed);
        if (editorPanel) editorPanel.classList.toggle('hidden-panel', panels.focusMode === 'preview');
        if (previewPanel) previewPanel.classList.toggle('hidden-panel', panels.focusMode === 'editor');
        if (shellGrid) {
            shellGrid.classList.toggle('focus-editor', panels.focusMode === 'editor');
            shellGrid.classList.toggle('focus-preview', panels.focusMode === 'preview');
            shellGrid.style.setProperty('--sandbox-editor-percent', (layout.editorPercent || 54) + '%');
        }
        if (previewStack) {
            previewStack.style.setProperty('--sandbox-console-height', (layout.consoleHeight || 190) + 'px');
        }

        var splitBtn = document.getElementById('sandbox-split-view-btn');
        var editorBtn = document.getElementById('sandbox-editor-focus-btn');
        var previewBtn = document.getElementById('sandbox-preview-focus-btn');
        [splitBtn, editorBtn, previewBtn].forEach(function (btn) {
            if (btn) btn.classList.remove('active');
        });
        if (panels.focusMode === 'split' && splitBtn) splitBtn.classList.add('active');
        if (panels.focusMode === 'editor' && editorBtn) editorBtn.classList.add('active');
        if (panels.focusMode === 'preview' && previewBtn) previewBtn.classList.add('active');

        var explorerToggle = document.getElementById('sandbox-explorer-toggle');
        var previewToggle = document.getElementById('sandbox-preview-toggle');
        var consoleToggle = document.getElementById('sandbox-console-toggle');
        if (explorerToggle) explorerToggle.textContent = panels.explorerCollapsed ? 'EXP' : 'MIN';
        if (previewToggle) previewToggle.textContent = panels.focusMode === 'editor' ? 'EXP' : 'MIN';
        if (consoleToggle) consoleToggle.textContent = panels.consoleCollapsed ? 'EXP' : 'MIN';
    };

    window.toggleSandboxExplorer = function () {
        window.sandboxIDE.panels.explorerCollapsed = !window.sandboxIDE.panels.explorerCollapsed;
        window.applySandboxPanelState();
    };

    window.toggleSandboxConsole = function () {
        window.sandboxIDE.panels.consoleCollapsed = !window.sandboxIDE.panels.consoleCollapsed;
        window.applySandboxPanelState();
    };

    window.setSandboxFocusMode = function (mode) {
        window.sandboxIDE.panels.focusMode = mode;
        window.applySandboxPanelState();
    };

    window.toggleSandboxPreviewPanel = function () {
        window.sandboxIDE.panels.focusMode = window.sandboxIDE.panels.focusMode === 'editor' ? 'split' : 'editor';
        window.applySandboxPanelState();
    };

    window.renderSandboxFileUI = function () {
        var project = ensureProject();
        var list = document.getElementById('sandbox-file-list');
        var tabs = document.getElementById('sandbox-tab-list');
        var editor = editorEl();
        var activeFile = project.activeFile;

        function itemHtml(filename, isTab) {
            var type = fileType(filename);
            var activeClass = filename === activeFile ? ' active' : '';
            return '<button type="button" class="' + (isTab ? 'sandbox-tab' : 'sandbox-file') + activeClass + '" data-sandbox-file="' + filename.replace(/"/g, '&quot;') + '">' +
                (isTab ? '' : '<span class="sandbox-file-icon sandbox-file-icon-' + type + '">' + fileIcon(type) + '</span>') +
                '<span>' + filename + '</span>' +
                (isTab ? '' : '<span class="sandbox-file-dot" data-file-dot="' + filename.replace(/"/g, '&quot;') + '"></span>') +
                '</button>';
        }

        if (list) {
            list.innerHTML = Object.keys(project.files).map(function (filename) {
                return itemHtml(filename, false);
            }).join('');
        }
        if (tabs) {
            tabs.innerHTML = Object.keys(project.files).map(function (filename) {
                return itemHtml(filename, true);
            }).join('');
        }
        document.querySelectorAll('[data-sandbox-file]').forEach(function (button) {
            button.onclick = function () {
                window.switchSandboxTab(button.dataset.sandboxFile);
            };
        });
        if (editor) {
            editor.value = project.files[activeFile] || '';
            editor.placeholder = filePlaceholder(activeFile);
        }
        window.updateSandboxLineNumbers();
        window.updateSandboxCursorStatus();
        window.updateSandboxStatusBar();
        if (window.setSandboxDirty) window.setSandboxDirty(window.sandboxIDE.dirty);
        window.renderSandboxCoach();
    };

    window.switchSandboxTab = function (filename) {
        var project = ensureProject();
        if (project.files[filename] === undefined) return;
        project.activeFile = filename;
        window.state.sandboxProject = project;
        window.sandboxIDE.activeFile = filename;
        window.renderSandboxFileUI();
    };

    window.createSandboxFile = function (ext) {
        var project = ensureProject();
        var base = ext === 'html' ? 'page' : ext === 'css' ? 'theme' : 'logic';
        var name = base + '.' + ext;
        var counter = 2;
        while (project.files[name] !== undefined) {
            name = base + '-' + counter + '.' + ext;
            counter++;
        }
        project.files[name] = ext === 'html'
            ? '<section>\n  <h2>New Page</h2>\n  <p>Start building here.</p>\n</section>'
            : ext === 'css'
                ? '/* Styles for ' + name + ' */\n'
                : '// Script for ' + name + '\n';
        project.activeFile = name;
        window.state.sandboxProject = project;
        if (window.setSandboxDirty) window.setSandboxDirty(true);
        window.renderSandboxFileUI();
    };

    function buildPreviewDocument(project) {
        var files = project.files || {};
        var htmlFile = /\.html$/i.test(project.activeFile) ? project.activeFile : Object.keys(files).find(function (name) {
            return /\.html$/i.test(name);
        }) || 'index.html';
        return {
            html: files[htmlFile] || '',
            css: Object.keys(files).filter(function (name) { return /\.css$/i.test(name); }).map(function (name) { return files[name] || ''; }).join('\n\n'),
            js: Object.keys(files).filter(function (name) { return /\.js$/i.test(name); }).map(function (name) { return files[name] || ''; }).join('\n\n')
        };
    }

    window.runSandboxPreview = function () {
        var project = ensureProject();
        var editor = editorEl();
        if (editor) project.files[project.activeFile] = editor.value;
        var preview = buildPreviewDocument(project);
        window.state.sandbox = preview;
        window.clearSandboxConsole();
        window.setSandboxPreviewStatus('Preview synced', false);
        if (window.IntentEngine && window.Intents && window.Intents.updateSandbox) {
            window.IntentEngine.run(window.Intents.updateSandbox, {
                filename: project.activeFile,
                type: fileType(project.activeFile),
                code: project.files[project.activeFile] || ''
            });
        }
        window.renderSandboxCoach();
    };

    var oldPushSandboxConsole = window.pushSandboxConsole;
    window.pushSandboxConsole = function (type, message) {
        oldPushSandboxConsole(type, message);
        window.renderSandboxCoach();
    };

    window.getSandboxSnippetCatalog = function () {
        return [
            {
                id: 'hero',
                name: 'Hero Section',
                description: 'Big title and call-to-action button.',
                apply: function (project) {
                    project.files['index.html'] += '\n<section class="hero"><h1>Build Something Bold</h1><p>HTML + CSS + JavaScript working together.</p><button class="hero-btn">Launch</button></section>';
                    project.files['styles.css'] += '\n\n.hero { padding: 48px; border-radius: 24px; background: linear-gradient(135deg, #0f172a, #1d4ed8); }\n.hero-btn { background: #facc15; color: #111827; }';
                }
            },
            {
                id: 'navbar',
                name: 'Navbar',
                description: 'Simple top navigation links.',
                apply: function (project) {
                    project.files['index.html'] = '<nav class="nav-bar"><a href="#">Home</a><a href="#">Projects</a><a href="#">Contact</a></nav>\n' + project.files['index.html'];
                    project.files['styles.css'] += '\n\n.nav-bar { display: flex; gap: 18px; justify-content: center; margin-bottom: 24px; }\n.nav-bar a { color: #67e8f9; text-decoration: none; font-weight: 700; }';
                }
            },
            {
                id: 'card-grid',
                name: 'Card Grid',
                description: 'Three polished cards.',
                apply: function (project) {
                    project.files['index.html'] += '\n<section class="card-grid"><article class="card"><h3>HTML</h3><p>Structure the page.</p></article><article class="card"><h3>CSS</h3><p>Style the design.</p></article><article class="card"><h3>JavaScript</h3><p>Add interactivity.</p></article></section>';
                    project.files['styles.css'] += '\n\n.card-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }\n.card { padding: 20px; border-radius: 18px; background: rgba(15,23,42,0.9); border: 1px solid rgba(103,232,249,0.2); }';
                }
            },
            {
                id: 'form',
                name: 'Contact Form',
                description: 'Starter form UI.',
                apply: function (project) {
                    project.files['index.html'] += '\n<form class="contact-form"><input type="text" placeholder="Your name"><input type="email" placeholder="Email"><textarea placeholder="Message"></textarea><button type="submit">Send</button></form>';
                    project.files['styles.css'] += '\n\n.contact-form { display: grid; gap: 12px; margin-top: 24px; }\n.contact-form input, .contact-form textarea { padding: 12px; border-radius: 12px; border: none; }';
                }
            },
            {
                id: 'gallery',
                name: 'Image Gallery',
                description: 'Bold gallery placeholders.',
                apply: function (project) {
                    project.files['index.html'] += '\n<section class="gallery"><div class="gallery-item">1</div><div class="gallery-item">2</div><div class="gallery-item">3</div></section>';
                    project.files['styles.css'] += '\n\n.gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }\n.gallery-item { min-height: 120px; display: grid; place-items: center; border-radius: 18px; background: linear-gradient(135deg, #38bdf8, #a78bfa); color: white; font-size: 28px; font-weight: 800; }';
                }
            }
        ];
    };

    window.renderSnippetModal = function () {
        var grid = document.getElementById('snippet-grid');
        if (!grid) return;
        grid.innerHTML = window.getSandboxSnippetCatalog().map(function (snippet) {
            return '<button type="button" class="snippet-card" data-snippet-id="' + snippet.id + '"><strong>' + snippet.name + '</strong><span>' + snippet.description + '</span></button>';
        }).join('');
        grid.querySelectorAll('[data-snippet-id]').forEach(function (button) {
            button.onclick = function () {
                var snippet = window.getSandboxSnippetCatalog().find(function (item) {
                    return item.id === button.dataset.snippetId;
                });
                if (!snippet) return;
                var project = ensureProject();
                snippet.apply(project);
                window.state.sandboxProject = project;
                if (window.setSandboxDirty) window.setSandboxDirty(true);
                window.renderSandboxFileUI();
                window.scheduleSandboxPreview();
                document.getElementById('snippet-modal').classList.add('hidden');
            };
        });
    };

    window.getSandboxCommandActions = function () {
        var project = ensureProject();
        var dynamicFiles = Object.keys(project.files).map(function (filename) {
            return { label: 'Open file: ' + filename, run: function () { window.switchSandboxTab(filename); } };
        });
        return [
            { label: 'Run preview', run: function () { window.runSandboxPreview(); } },
            { label: 'Open snippets', run: function () { var modal = document.getElementById('snippet-modal'); if (modal) { modal.classList.remove('hidden'); window.renderSnippetModal(); } } },
            { label: 'Split view', run: function () { window.setSandboxFocusMode('split'); } },
            { label: 'Focus editor', run: function () { window.setSandboxFocusMode('editor'); } },
            { label: 'Focus preview', run: function () { window.setSandboxFocusMode('preview'); } },
            { label: 'Toggle explorer', run: function () { window.toggleSandboxExplorer(); } },
            { label: 'Toggle console', run: function () { window.toggleSandboxConsole(); } },
            { label: 'Create HTML file', run: function () { window.createSandboxFile('html'); } },
            { label: 'Create CSS file', run: function () { window.createSandboxFile('css'); } },
            { label: 'Create JS file', run: function () { window.createSandboxFile('js'); } },
            { label: 'Save project', run: function () { document.getElementById('sandbox-save-btn').click(); } }
        ].concat(dynamicFiles);
    };

    window.renderCommandPalette = function (query) {
        var list = document.getElementById('command-palette-list');
        if (!list) return;
        var filter = (query || '').toLowerCase();
        var items = window.getSandboxCommandActions().filter(function (item) {
            return item.label.toLowerCase().includes(filter);
        });
        list.innerHTML = items.map(function (item, index) {
            return '<button type="button" class="sandbox-command-item' + (index === 0 ? ' active' : '') + '" data-command-index="' + index + '">' + item.label + '</button>';
        }).join('');
        list.querySelectorAll('[data-command-index]').forEach(function (button) {
            button.onclick = function () {
                items[Number(button.dataset.commandIndex)].run();
                document.getElementById('command-palette').classList.add('hidden');
            };
        });
    };

    function bindToolbarButtons() {
        var explorerToggle = document.getElementById('sandbox-explorer-toggle');
        if (explorerToggle) explorerToggle.onclick = function () { window.toggleSandboxExplorer(); };
        var consoleToggle = document.getElementById('sandbox-console-toggle');
        if (consoleToggle) consoleToggle.onclick = function () { window.toggleSandboxConsole(); };
        var previewToggle = document.getElementById('sandbox-preview-toggle');
        if (previewToggle) previewToggle.onclick = function () { window.toggleSandboxPreviewPanel(); };
        var splitBtn = document.getElementById('sandbox-split-view-btn');
        if (splitBtn) splitBtn.onclick = function () { window.setSandboxFocusMode('split'); };
        var editorBtn = document.getElementById('sandbox-editor-focus-btn');
        if (editorBtn) editorBtn.onclick = function () { window.setSandboxFocusMode('editor'); };
        var previewBtn = document.getElementById('sandbox-preview-focus-btn');
        if (previewBtn) previewBtn.onclick = function () { window.setSandboxFocusMode('preview'); };
        var newFileBtn = document.getElementById('sandbox-new-file-btn');
        if (newFileBtn) newFileBtn.onclick = function () { window.createSandboxFile('html'); };
        var snippetsBtn = document.getElementById('sandbox-snippets-btn');
        if (snippetsBtn) snippetsBtn.onclick = function () {
            var modal = document.getElementById('snippet-modal');
            if (modal) {
                modal.classList.remove('hidden');
                window.renderSnippetModal();
            }
        };
        var commandBtn = document.getElementById('sandbox-command-btn');
        if (commandBtn) commandBtn.onclick = function () {
            var palette = document.getElementById('command-palette');
            var input = document.getElementById('command-palette-input');
            if (palette && input) {
                palette.classList.remove('hidden');
                input.value = '';
                window.renderCommandPalette('');
                input.focus();
            }
        };
        document.querySelectorAll('.sandbox-add-file-btn').forEach(function (button) {
            button.onclick = function () { window.createSandboxFile(button.dataset.createExt); };
        });
    }

    function bindEditor() {
        var editor = editorEl();
        if (!editor || editor.dataset.sandboxUpgradeBound) return;
        editor.dataset.sandboxUpgradeBound = 'true';
        editor.addEventListener('keydown', function (e) {
            if (window.sandboxIDE.autocomplete && e.key === 'ArrowDown') {
                e.preventDefault();
                window.moveSandboxAutocomplete(1);
                return;
            }
            if (window.sandboxIDE.autocomplete && e.key === 'ArrowUp') {
                e.preventDefault();
                window.moveSandboxAutocomplete(-1);
                return;
            }
            if (window.sandboxIDE.autocomplete && (e.key === 'Tab' || e.key === 'Enter')) {
                e.preventDefault();
                window.applySandboxAutocomplete(window.sandboxIDE.autocomplete.activeIndex || 0);
                return;
            }
            if (window.sandboxIDE.autocomplete && e.key === 'Escape') {
                e.preventDefault();
                window.hideSandboxAutocomplete();
                return;
            }
            if (e.key === 'Tab') {
                e.preventDefault();
                var start = editor.selectionStart;
                var end = editor.selectionEnd;
                editor.value = editor.value.slice(0, start) + '  ' + editor.value.slice(end);
                editor.selectionStart = editor.selectionEnd = start + 2;
                editor.dispatchEvent(new Event('input', { bubbles: true }));
                return;
            }
            if (e.key === 'Enter' && maybeExpandHtmlTag(editor)) {
                e.preventDefault();
                window.hideSandboxAutocomplete();
                editor.dispatchEvent(new Event('input', { bubbles: true }));
            }
        });
        editor.addEventListener('input', function () {
            var project = ensureProject();
            project.files[project.activeFile] = editor.value;
            window.state.sandboxProject = project;
            if (window.setSandboxDirty) window.setSandboxDirty(true);
            window.updateSandboxLineNumbers();
            window.updateSandboxCursorStatus();
            window.updateSandboxStatusBar();
            if (window.IntentEngine && window.Intents && window.Intents.updateSandbox) {
                window.IntentEngine.run(window.Intents.updateSandbox, {
                    filename: project.activeFile,
                    type: fileType(project.activeFile),
                    code: editor.value
                });
            }
            window.scheduleSandboxPreview();
            var autocompleteState = buildAutocompleteState(editor);
            if (autocompleteState) {
                window.renderSandboxAutocomplete(autocompleteState);
            } else {
                window.hideSandboxAutocomplete();
            }
        });
        editor.addEventListener('scroll', function () {
            var gutter = gutterEl();
            if (gutter) gutter.scrollTop = editor.scrollTop;
            updateAutocompletePosition(editor);
        });
        ['click', 'keyup', 'select'].forEach(function (eventName) {
            editor.addEventListener(eventName, function () {
                window.updateSandboxCursorStatus();
                window.updateSandboxStatusBar();
                var autocompleteState = buildAutocompleteState(editor);
                if (autocompleteState) {
                    window.renderSandboxAutocomplete(autocompleteState);
                }
            });
        });
        editor.addEventListener('blur', function () {
            setTimeout(function () {
                window.hideSandboxAutocomplete();
            }, 120);
        });
    }

    function bindOverlayButtons() {
        var snippetClose = document.getElementById('snippet-close-btn');
        if (snippetClose) snippetClose.onclick = function () { document.getElementById('snippet-modal').classList.add('hidden'); };
        var commandClose = document.getElementById('command-close-btn');
        if (commandClose) commandClose.onclick = function () { document.getElementById('command-palette').classList.add('hidden'); };
        var commandInput = document.getElementById('command-palette-input');
        if (commandInput && !commandInput.dataset.bound) {
            commandInput.dataset.bound = 'true';
            commandInput.addEventListener('input', function () { window.renderCommandPalette(commandInput.value); });
            commandInput.addEventListener('keydown', function (e) {
                if (e.key === 'Enter') {
                    var first = document.querySelector('.sandbox-command-item');
                    if (first) first.click();
                }
            });
        }
    }

    function bindResizers() {
        var shellGrid = document.getElementById('sandbox-shell-grid');
        var mainResizer = document.getElementById('sandbox-main-resizer');
        if (shellGrid && mainResizer && !mainResizer.dataset.bound) {
            mainResizer.dataset.bound = 'true';
            mainResizer.addEventListener('pointerdown', function (event) {
                var rect = shellGrid.getBoundingClientRect();
                function move(moveEvent) {
                    var percent = ((moveEvent.clientX - rect.left) / rect.width) * 100;
                    window.sandboxIDE.layout.editorPercent = Math.max(28, Math.min(72, percent));
                    window.applySandboxPanelState();
                }
                function up() {
                    window.removeEventListener('pointermove', move);
                    window.removeEventListener('pointerup', up);
                }
                window.addEventListener('pointermove', move);
                window.addEventListener('pointerup', up);
                event.preventDefault();
            });
        }

        var previewPanel = document.getElementById('sandbox-preview-panel');
        var consoleResizer = document.getElementById('sandbox-console-resizer');
        if (previewPanel && consoleResizer && !consoleResizer.dataset.bound) {
            consoleResizer.dataset.bound = 'true';
            consoleResizer.addEventListener('pointerdown', function (event) {
                var rect = previewPanel.getBoundingClientRect();
                function move(moveEvent) {
                    var bottomSpace = rect.bottom - moveEvent.clientY;
                    window.sandboxIDE.layout.consoleHeight = Math.max(90, Math.min(320, bottomSpace));
                    window.applySandboxPanelState();
                }
                function up() {
                    window.removeEventListener('pointermove', move);
                    window.removeEventListener('pointerup', up);
                }
                window.addEventListener('pointermove', move);
                window.addEventListener('pointerup', up);
                event.preventDefault();
            });
        }
    }

    document.addEventListener('keydown', function (e) {
        if (!window.state || window.state.view !== 'SANDBOX') return;
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            var palette = document.getElementById('command-palette');
            var input = document.getElementById('command-palette-input');
            if (palette && input) {
                palette.classList.remove('hidden');
                input.value = '';
                window.renderCommandPalette('');
                input.focus();
            }
        }
        if (e.key === 'Escape') {
            var snippetModal = document.getElementById('snippet-modal');
            var commandPalette = document.getElementById('command-palette');
            if (snippetModal) snippetModal.classList.add('hidden');
            if (commandPalette) commandPalette.classList.add('hidden');
        }
    });

    window.refreshSandboxIDE = function () {
        ensureProject();
        bindToolbarButtons();
        bindEditor();
        bindOverlayButtons();
        bindResizers();
        window.renderSandboxFileUI();
        window.applySandboxPanelState();
    };

    setTimeout(function () {
        window.refreshSandboxIDE();
    }, 0);
})();
