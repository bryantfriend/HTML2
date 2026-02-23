function processLoadModule(payload, currentState, contextData) {
    const newState = Object.assign({}, currentState);
    newState.currentModuleIndex = payload.index;
    newState.editorContent = contextData.courseData.lessons[newState.currentLessonIndex].modules[payload.index].initialCode;
    newState.missionCompleted = false;
    return newState;
}
