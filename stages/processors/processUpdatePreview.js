function processUpdatePreview(payload, currentState, contextData) {
    const newState = Object.assign({}, currentState);
    newState.editorContent = payload.code;

    const currentLesson = contextData.courseData.lessons[newState.currentLessonIndex];
    if (currentLesson) {
        const currentModule = currentLesson.modules[newState.currentModuleIndex];
        if (currentModule && typeof currentModule.validator === 'function') {
            newState.missionCompleted = currentModule.validator(payload.code);
        } else {
            // If no validator exists, mission is inherently complete.
            newState.missionCompleted = true;
        }
    }

    return newState;
}
