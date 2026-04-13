window.Lessons.lesson7.modules[0] = {
    title: "1. The Power of CSS",
    body: `<p>HTML is the skeleton. CSS (Cascading Style Sheets) is the skin and clothes! Without CSS, the web is just boring black and white text.</p>
    <p>Let's prove it. Drag the CSS Clothes from the wardrobe onto the HTML Skeleton to dress it up!</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a; border-radius:8px;">
    <text x="120" y="80" fill="#67e8f9" font-family="monospace" font-size="28" font-weight="bold" text-anchor="middle">CSS</text>
    <rect x="165" y="55" width="15" height="30" fill="#ec4899">
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
    </rect>
</svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<script>
(function() {
    const editor = document.getElementById('code-editor');
    if (editor) {
        editor.readOnly = true;
        editor.style.opacity = "0.5";
        editor.value = "/* Complete the drag-and-drop mini-game below! */";
    }
})();
</script>`,
    previewScaffold: `<div style="display:flex; justify-content:space-around; align-items:center; height: 180px; text-align:center;">
    <div id="wardrobe" style="flex:1;">
        <p style="font-family: monospace; color: #a855f7;">CSS Wardrobe</p>
        <div draggable="true" id="drag-shirt" style="width: 60px; height: 50px; background:#ec4899; color:white; border-radius: 8px; margin: 10px auto; cursor:grab; line-height:50px; font-family:sans-serif; font-size:12px;">Shirt</div>
        <div draggable="true" id="drag-pants" style="width: 60px; height: 50px; background:#22d3ee; color:black; border-radius: 8px; margin: 10px auto; cursor:grab; line-height:50px; font-family:sans-serif; font-size:12px;">Pants</div>
    </div>
    <div id="skeleton-box" style="flex:1;">
        <p style="font-family: monospace; color: #94a3b8;">HTML Skeleton</p>
        <div id="dropzone" style="width: 80px; height: 130px; border: 2px dashed #475569; border-radius: 8px; margin: 0 auto; display:flex; flex-direction:column; justify-content:flex-start; align-items:center; padding-top:10px; transition: 0.3s background;">
            <div style="font-size: 28px; line-height:1;">💀</div>
            <div id="shirt-slot" style="width: 50px; height: 40px; margin-top:5px; border: 1px dotted #334155;"></div>
            <div id="pants-slot" style="width: 40px; height: 40px; margin-top:2px; border: 1px dotted #334155;"></div>
        </div>
    </div>
</div>
<script>
(function() {
    let itemsDropped = 0;
    const dropzone = document.getElementById('dropzone');
    const dragShirt = document.getElementById('drag-shirt');
    const dragPants = document.getElementById('drag-pants');
    const shirtSlot = document.getElementById('shirt-slot');
    const pantsSlot = document.getElementById('pants-slot');

    function handleDragStart(e) { e.dataTransfer.setData('text/plain', e.target.id); }
    dragShirt.addEventListener('dragstart', handleDragStart);
    dragPants.addEventListener('dragstart', handleDragStart);

    dropzone.addEventListener('dragover', e => { e.preventDefault(); dropzone.style.backgroundColor = '#1e293b'; });
    dropzone.addEventListener('dragleave', e => { dropzone.style.backgroundColor = 'transparent'; });
    dropzone.addEventListener('drop', e => {
        e.preventDefault();
        dropzone.style.backgroundColor = 'transparent';
        const id = e.dataTransfer.getData('text/plain');
        if (id === 'drag-shirt') {
            shirtSlot.style.background = '#ec4899';
            shirtSlot.style.border = 'none';
            dragShirt.style.display = 'none';
            itemsDropped++;
        } else if (id === 'drag-pants') {
            pantsSlot.style.background = '#22d3ee';
            pantsSlot.style.border = 'none';
            dragPants.style.display = 'none';
            itemsDropped++;
        }
        
        if (itemsDropped === 2) {
            dropzone.style.border = '2px solid #22c55e';
            const editor = document.getElementById('code-editor');
            if (editor) {
                editor.value = "READY";
                if (window.IntentEngine && window.Intents) {
                    window.IntentEngine.run(window.Intents.updatePreview, { code: editor.value });
                }
            }
        }
    });
})();
</script>`,
    initialCode: ``,
    preserveCode: false,
    progress: 5,
    validator: function(code) { return code.includes("READY"); }
};