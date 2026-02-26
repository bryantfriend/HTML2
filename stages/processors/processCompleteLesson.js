function processCompleteLesson(payload, currentState, contextData) {
    const newState = Object.assign({}, currentState);
    newState.isComplete = true;

    const lesson = contextData.courseData.lessons[newState.currentLessonIndex];
    if (lesson) {
        if (!newState.completedLessons) newState.completedLessons = [];
        if (!newState.completedLessons.includes(lesson.id)) {
            newState.completedLessons.push(lesson.id);
        }
    }

    return newState;
}
