window.Validators = window.Validators || {};
Object.assign(window.Validators, {
    validateShowMenu: typeof validateShowMenu !== 'undefined' ? validateShowMenu : null,
    validateStartLesson: typeof validateStartLesson !== 'undefined' ? validateStartLesson : null,
    validateLoadModule: typeof validateLoadModule !== 'undefined' ? validateLoadModule : null,
    validateUpdatePreview: typeof validateUpdatePreview !== 'undefined' ? validateUpdatePreview : null,
    validateCompleteLesson: typeof validateCompleteLesson !== 'undefined' ? validateCompleteLesson : null,
    validateShowSandbox: typeof validateShowSandbox !== 'undefined' ? validateShowSandbox : null,
    validateUpdateSandbox: typeof validateUpdateSandbox !== 'undefined' ? validateUpdateSandbox : null,
    validateSaveSandbox: typeof validateSaveSandbox !== 'undefined' ? validateSaveSandbox : null,
    validateLoadSandbox: typeof validateLoadSandbox !== 'undefined' ? validateLoadSandbox : null
});
