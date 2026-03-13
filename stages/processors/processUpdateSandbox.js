function processUpdateSandbox(payload, state, context) {
    if (!state.sandbox) {
        state.sandbox = { html: "", css: "", js: "" };
    }
    if (payload.type === 'html') state.sandbox.html = payload.code;
    if (payload.type === 'css') state.sandbox.css = payload.code;
    if (payload.type === 'js') state.sandbox.js = payload.code;
    
    state.sandboxCode = payload.code; // For backward compatibility if needed elsewhere
    return state;
}