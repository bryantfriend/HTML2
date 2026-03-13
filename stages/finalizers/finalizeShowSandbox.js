function finalizeShowSandbox(payload, newState, oldState, context) {
    document.getElementById('menu-view').classList.add('hidden');
    document.getElementById('lesson-view').classList.add('hidden');
    document.getElementById('completion-view').classList.add('hidden');
    document.getElementById('sandbox-view').classList.remove('hidden');
    
    // Default content if state is empty
    if (!newState.sandbox) {
        newState.sandbox = {
            html: "<!-- Build your website here! -->\n<h1>Hello Cyber-Builder!</h1>\n<p>Start editing to see the magic.</p>",
            css: "/* Style your website here! */\nbody {\n  background: #0f172a;\n  color: #00f2ff;\n  font-family: sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  margin: 0;\n}",
            js: "// Write your logic here!\nconsole.log('Sanbox initialized!');"
        };
    }

    const s = newState.sandbox;
    const editors = {
        html: document.getElementById('sandbox-editor-html'),
        css: document.getElementById('sandbox-editor-css'),
        js: document.getElementById('sandbox-editor-js')
    };

    if (editors.html) editors.html.value = s.html;
    if (editors.css) editors.css.value = s.css;
    if (editors.js) editors.js.value = s.js;

    // Default to HTML tab
    const htmlTab = document.querySelector('.sandbox-tab[data-tab="html"]');
    if (htmlTab) htmlTab.click();
    
    // Trigger initial preview
    if (window.IntentEngine && window.Intents.updateSandbox) {
        window.IntentEngine.run(window.Intents.updateSandbox, { type: 'html', code: s.html });
    }
}