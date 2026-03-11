window.Processors = window.Processors || {};
window.Processors.processShowSandbox = function(payload, state, context) {
    state.view = "SANDBOX";
    return state;
};