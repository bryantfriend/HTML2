window.Validators = window.Validators || {};
window.Validators.validateLoadSandbox = function (payload) {
    return payload && typeof payload.filename === 'string' && payload.filename.trim().length > 0;
};
