function processLoadModule(payload, currentState, contextData) {
    const newState = Object.assign({}, currentState);
    newState.currentModuleIndex = payload.index;
    const lesson = (window.courseData && window.courseData.lessons) ? window.courseData.lessons[newState.currentLessonIndex] : null;
    if (!lesson) {
        console.error("Lesson data missing for index", newState.currentLessonIndex);
        return newState;
    }
    const currentModule = lesson.modules[payload.index];
    if (!currentModule) {
        console.error("Module data missing for index", payload.index);
        return newState;
    }

    if (currentModule.preserveCode && newState.editorContent && newState.editorContent.trim() !== '') {
        // preserve the student's code from the previous module!
    } else {
        newState.editorContent = currentModule.initialCode || "";
    }
    newState.missionCompleted = false; // Start fresh

    if (typeof currentModule.validator === 'function') {
        newState.missionCompleted = currentModule.validator(newState.editorContent);
    } else {
        newState.missionCompleted = true;
    }
    return newState;
}
