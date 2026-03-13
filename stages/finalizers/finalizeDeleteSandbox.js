function finalizeDeleteSandbox(payload, newState, oldState, context) {
    const filename = payload.filename;
    
    // Remove the file itself
    localStorage.removeItem('sandbox_' + filename);
    
    // Remove from the list
    let list = [];
    try {
        const listStr = localStorage.getItem('sandboxList');
        if (listStr) list = JSON.parse(listStr);
    } catch (e) {}
    
    list = list.filter(item => item !== filename);
    localStorage.setItem('sandboxList', JSON.stringify(list));
    
    // Refresh the modal view if it's still open
    const openBtn = document.getElementById('sandbox-open-btn');
    if (openBtn) openBtn.click(); // Re-triggering click will refresh the list in main.js
}
