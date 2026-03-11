window.Validators = window.Validators || {};
window.Validators.validateSaveSandbox = function (payload) {
    return payload && typeof payload.filename === 'string' && payload.filename.trim().length > 0;
};