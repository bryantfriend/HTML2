window.Processors = window.Processors || {};
(function() {
    const p = {
        processShowMenu: typeof processShowMenu !== 'undefined' ? processShowMenu : null,
        processStartLesson: typeof processStartLesson !== 'undefined' ? processStartLesson : null,
        processLoadModule: typeof processLoadModule !== 'undefined' ? processLoadModule : null,
        processUpdatePreview: typeof processUpdatePreview !== 'undefined' ? processUpdatePreview : null,
        processCompleteLesson: typeof processCompleteLesson !== 'undefined' ? processCompleteLesson : null,
        processShowSandbox: typeof processShowSandbox !== 'undefined' ? processShowSandbox : null,
        processUpdateSandbox: typeof processUpdateSandbox !== 'undefined' ? processUpdateSandbox : null,
        processSaveSandbox: typeof processSaveSandbox !== 'undefined' ? processSaveSandbox : null,
        processLoadSandbox: typeof processLoadSandbox !== 'undefined' ? processLoadSandbox : null,
        processDeleteSandbox: typeof processDeleteSandbox !== 'undefined' ? processDeleteSandbox : null
    };
    for (const key in p) {
        if (p[key] !== null) {
            window.Processors[key] = p[key];
        }
    }
})();
