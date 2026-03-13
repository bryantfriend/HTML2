window.Finalizers = window.Finalizers || {};
(function() {
    const f = {
        finalizeMenuRender: typeof finalizeMenuRender !== 'undefined' ? finalizeMenuRender : null,
        finalizeLessonModule: typeof finalizeLessonModule !== 'undefined' ? finalizeLessonModule : null,
        finalizePreviewRender: typeof finalizePreviewRender !== 'undefined' ? finalizePreviewRender : null,
        finalizeCompleteLesson: typeof finalizeCompleteLesson !== 'undefined' ? finalizeCompleteLesson : null,
        finalizeMissionCompletion: typeof finalizeMissionCompletion !== 'undefined' ? finalizeMissionCompletion : null,
        finalizeShowSandbox: typeof finalizeShowSandbox !== 'undefined' ? finalizeShowSandbox : null,
        finalizeUpdateSandbox: typeof finalizeUpdateSandbox !== 'undefined' ? finalizeUpdateSandbox : null,
        finalizeSaveSandbox: typeof finalizeSaveSandbox !== 'undefined' ? finalizeSaveSandbox : null,
        finalizeLoadSandbox: typeof finalizeLoadSandbox !== 'undefined' ? finalizeLoadSandbox : null,
        finalizeDeleteSandbox: typeof finalizeDeleteSandbox !== 'undefined' ? finalizeDeleteSandbox : null
    };
    for (const key in f) {
        if (f[key] !== null) {
            window.Finalizers[key] = f[key];
        }
    }
})();
