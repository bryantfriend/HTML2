function finalizePreviewRender(payload, newState, oldState, contextData) {
    if (newState.view === 'LESSON' && !newState.isComplete) {
        const previewArea = document.getElementById('preview-area');
        if (previewArea) {
            const lesson = (contextData.courseData && contextData.courseData.lessons) ? contextData.courseData.lessons[newState.currentLessonIndex] : null;
            const currentModule = lesson ? lesson.modules[newState.currentModuleIndex] : null;
            const scaffold = currentModule && currentModule.previewScaffold ? currentModule.previewScaffold : "";
            previewArea.innerHTML = scaffold + newState.editorContent;

            // Execute any scripts that were injected via innerHTML
            const scripts = previewArea.querySelectorAll('script');
            scripts.forEach(oldScript => {
                const newScript = document.createElement('script');
                Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
                newScript.appendChild(document.createTextNode(oldScript.innerHTML));
                if (oldScript.parentNode) {
                    oldScript.parentNode.replaceChild(newScript, oldScript);
                }
            });
        }
    }
}
