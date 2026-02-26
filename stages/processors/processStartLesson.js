function processStartLesson(payload, currentState, contextData) {
    const newState = Object.assign({}, currentState);
    newState.view = 'LESSON';
    newState.currentLessonIndex = payload.lessonIndex;
    newState.currentModuleIndex = 0;
    newState.editorContent = contextData.courseData.lessons[payload.lessonIndex].modules[0].initialCode;
    newState.isComplete = false;
    newState.missionCompleted = false; // Start fresh
    return newState;
}
