function processUpdatePreview(payload, currentState, contextData) {
    const newState = Object.assign({}, currentState);
    newState.editorContent = payload.code;

    const currentLesson = contextData.courseData.lessons[newState.currentLessonIndex];
    if (currentLesson) {
        const currentModule = currentLesson.modules[newState.currentModuleIndex];
        console.log("processUpdatePreview: processing module", newState.currentModuleIndex, "has validator:", typeof currentModule?.validator === 'function');
        if (currentModule && typeof currentModule.validator === 'function') {
            try {
                newState.missionCompleted = currentModule.validator(payload.code);
            } catch (e) {
                console.error("Validator failed with error:", e);
                newState.missionCompleted = false;
            }
        } else if (currentModule && currentModule.initialCode.includes('<!-- INTERACTIVE MODULE -->')) {
            // Interactive modules REQUIRE a validator or an explicit signal. 
            // If they don't have a validator, they don't auto-complete.
            newState.missionCompleted = false;
        } else {
            // If no validator exists and it's NOT an interactive module, mission is complete.
            newState.missionCompleted = true;
        }
    }
    console.log("processUpdatePreview: newState.missionCompleted =", newState.missionCompleted);
    return newState;
}
