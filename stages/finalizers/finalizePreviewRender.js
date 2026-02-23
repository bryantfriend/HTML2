function finalizePreviewRender(payload, newState, oldState, contextData) {
    if (newState.view === 'LESSON' && !newState.isComplete) {
        const previewArea = document.getElementById('preview-area');
        if (previewArea) {
            // Do not re-render interactive modules if we are already on that module.
            // Interactive modules hide the code editor and modify the DOM themselves.
            // Re-rendering on 'updatePreview' would wipe out their DOM state.
            if (newState.editorContent && newState.editorContent.includes('<!-- INTERACTIVE MODULE -->') &&
                oldState &&
                oldState.currentModuleIndex === newState.currentModuleIndex &&
                oldState.currentLessonIndex === newState.currentLessonIndex &&
                oldState.view === newState.view) {
                return;
            }

            previewArea.innerHTML = newState.editorContent;

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
