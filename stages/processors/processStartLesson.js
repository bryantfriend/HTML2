function processStartLesson(payload, currentState, contextData) {
    const newState = Object.assign({}, currentState);
    const lesson = contextData.courseData.lessons[payload.lessonIndex];
    newState.view = 'LESSON';
    newState.currentLessonIndex = payload.lessonIndex;
    newState.currentModuleIndex = 0;
    newState.editorContent = lesson.modules[0].initialCode;
    newState.isComplete = false;
    newState.missionCompleted = false; // Start fresh

    if (lesson && lesson.id === 'exam1') {
        window.exam1Answers = {};
        window.exam1SessionSeed = Date.now();
        window.exam1ResultCode = "";
        window.lessonEmoji = null;
    }
    return newState;
}
