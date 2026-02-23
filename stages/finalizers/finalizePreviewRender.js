function finalizePreviewRender(payload, newState, oldState, contextData) {
    if (newState.view === 'LESSON' && !newState.isComplete) {
        const previewArea = document.getElementById('preview-area');
        if (previewArea) {
            previewArea.innerHTML = newState.editorContent;
        }
    }
}
