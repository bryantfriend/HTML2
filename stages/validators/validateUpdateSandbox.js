function validateUpdateSandbox(payload) {
    return typeof payload.code === 'string';
}