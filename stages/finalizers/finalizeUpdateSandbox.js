window.Finalizers = window.Finalizers || {};
window.Finalizers.finalizeUpdateSandbox = function(payload, newState, oldState, context) {
    const iframe = document.getElementById('sandbox-preview');
    if (iframe) {
        iframe.srcdoc = payload.code;
    }
};