function processUpdateSandbox(payload, state, context) {
    const normalize = window.normalizeSandboxProject || function (raw) {
        if (raw && raw.files) return raw;
        return {
            activeFile: 'index.html',
            files: {
                'index.html': raw && raw.html ? raw.html : '',
                'styles.css': raw && raw.css ? raw.css : '',
                'script.js': raw && raw.js ? raw.js : ''
            }
        };
    };

    if (!state.sandboxProject) {
        state.sandboxProject = normalize(state.sandbox || null);
    } else {
        state.sandboxProject = normalize(state.sandboxProject);
    }

    const filename = payload.filename || state.sandboxProject.activeFile || 'index.html';
    state.sandboxProject.activeFile = filename;
    state.sandboxProject.files[filename] = payload.code;

    state.sandbox = {
        html: state.sandboxProject.files['index.html'] || '',
        css: state.sandboxProject.files['styles.css'] || '',
        js: state.sandboxProject.files['script.js'] || ''
    };

    state.sandboxCode = payload.code; // For backward compatibility if needed elsewhere
    return state;
}
