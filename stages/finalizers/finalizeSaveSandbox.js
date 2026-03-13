function finalizeSaveSandbox(payload, newState, oldState, context) {
    const filename = payload.filename.trim();
    const sandboxData = newState.sandbox || { html: "", css: "", js: "" };
    localStorage.setItem('sandbox_' + filename, JSON.stringify(sandboxData));

    // Update the list of saved projects
    let savedList = [];
    try {
        const listStr = localStorage.getItem('sandboxList');
        if (listStr) savedList = JSON.parse(listStr);
    } catch (e) { }

    if (!savedList.includes(filename)) {
        savedList.push(filename);
        localStorage.setItem('sandboxList', JSON.stringify(savedList));
    }

    document.getElementById('save-modal').classList.add('hidden');

    const btn = document.getElementById('sandbox-save-btn');
    if (btn) {
        const originalText = btn.innerText;
        btn.innerText = "SAVED!";
        btn.classList.replace('bg-gray-800', 'bg-green-600');
        setTimeout(() => {
            btn.innerText = originalText;
            btn.classList.replace('bg-green-600', 'bg-gray-800');
        }, 2000);
    }

    // Update the visual filename indicator
    const nameDisplay = document.querySelector('#sandbox-view .terminal-header span:last-child');
    if (nameDisplay) {
        nameDisplay.textContent = filename + ".html";
    }
}