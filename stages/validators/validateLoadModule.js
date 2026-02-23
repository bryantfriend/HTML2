function validateLoadModule(payload) {
    return typeof payload.index === 'number' || typeof payload.index === 'string';
}
