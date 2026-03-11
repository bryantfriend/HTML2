window.Processors = window.Processors || {};
window.Processors.processSaveSandbox = function (payload, state, context) {
    state.sandboxFilename = payload.filename.trim();
    return state;
};