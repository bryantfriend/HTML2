function validateLoadSandbox(payload) {
    return !!payload.filename && typeof payload.filename === 'string' && payload.filename.trim().length > 0;
}
