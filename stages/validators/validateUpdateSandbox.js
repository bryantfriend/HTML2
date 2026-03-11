window.Validators = window.Validators || {};
window.Validators.validateUpdateSandbox = function(payload) { return typeof payload.code === 'string'; };