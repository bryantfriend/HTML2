function processShowMenu(payload, currentState, contextData) {
    const newState = Object.assign({}, currentState);
    newState.view = 'MENU';
    newState.isComplete = false;
    return newState;
}
