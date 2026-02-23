function normalizeStartLesson(payload) {
    return { lessonIndex: parseInt(payload.lessonIndex, 10) };
}
