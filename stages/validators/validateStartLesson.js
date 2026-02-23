function validateStartLesson(payload) {
    return typeof payload.lessonIndex === 'number' || typeof payload.lessonIndex === 'string';
}
