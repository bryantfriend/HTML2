window.Processors = window.Processors || {};
window.Processors.processUpdateSandbox = function(payload, state, context) {
    state.sandboxCode = payload.code;
    return state;
};