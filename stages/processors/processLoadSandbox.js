window.Processors = window.Processors || {};
window.Processors.processLoadSandbox = function (payload, state, context) {
    state.sandboxFilename = payload.filename.trim();
    // we don't load the text here because it's a side-effect. We'll load the text in Finalize and trigger update.
    return state;
};
