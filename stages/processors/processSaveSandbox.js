function processSaveSandbox(payload, state, context) {
    state.sandboxFilename = payload.filename.trim();
    return state;
}