window.Finalizers = window.Finalizers || {};
Object.assign(window.Finalizers, {
    finalizeMenuRender: typeof finalizeMenuRender !== 'undefined' ? finalizeMenuRender : null,
    finalizeLessonModule: typeof finalizeLessonModule !== 'undefined' ? finalizeLessonModule : null,
    finalizePreviewRender: typeof finalizePreviewRender !== 'undefined' ? finalizePreviewRender : null,
    finalizeCompleteLesson: typeof finalizeCompleteLesson !== 'undefined' ? finalizeCompleteLesson : null,
    finalizeMissionCompletion: typeof finalizeMissionCompletion !== 'undefined' ? finalizeMissionCompletion : null,
    finalizeShowSandbox: typeof finalizeShowSandbox !== 'undefined' ? finalizeShowSandbox : null,
    finalizeUpdateSandbox: typeof finalizeUpdateSandbox !== 'undefined' ? finalizeUpdateSandbox : null,
    finalizeSaveSandbox: typeof finalizeSaveSandbox !== 'undefined' ? finalizeSaveSandbox : null,
    finalizeLoadSandbox: typeof finalizeLoadSandbox !== 'undefined' ? finalizeLoadSandbox : null
});
