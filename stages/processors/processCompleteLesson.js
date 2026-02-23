function processCompleteLesson(payload, currentState, contextData) {
    const newState = Object.assign({}, currentState);
    newState.isComplete = true;
    return newState;
}
