window.Lessons.lesson1.modules[15] = {
    title: "16. Head vs Body Sorting 🧠",
    body: `<p>The <code>&lt;head&gt;</code> is for invisible setup (like title and metadata). The <code>&lt;body&gt;</code> is for visible content that your users actually see.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Drag the tags from the tray into the correct bucket!</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="30" width="80" height="90" fill="none" stroke="#a855f7" stroke-width="2" stroke-dasharray="5 5" rx="8"/>
                <text x="60" y="80" fill="#a855f7" font-size="20" text-anchor="middle" font-weight="bold">HEAD</text>
                
                <rect x="140" y="30" width="80" height="90" fill="none" stroke="#eab308" stroke-width="2" stroke-dasharray="5 5" rx="8"/>
                <text x="180" y="80" fill="#eab308" font-size="20" text-anchor="middle" font-weight="bold">BODY</text>
            </svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.sort-game { background: #0f172a; height: 350px; border-radius: 12px; padding: 20px; display: flex; flex-direction: column; position: relative;}
.sg-top { display: flex; gap: 20px; flex: 1; align-items: stretch;}
.bucket { flex: 1; border: 2px dashed #475569; border-radius: 8px; display: flex; flex-direction: column; align-items: center; padding: 10px; transition: 0.2s;}
.bucket.head-b { border-color: #a855f7; background: rgba(168,85,247,0.1); }
.bucket.body-b { border-color: #eab308; background: rgba(234,179,8,0.1); }
.bucket.drag-over { background: rgba(255,255,255,0.1); transform: scale(1.02); }
.bucket h3 { margin: 0 0 10px 0; font-size: 16px; text-transform: uppercase;}
.head-b h3 { color: #a855f7; }
.body-b h3 { color: #eab308; }

.tray { height: 80px; background: #1e293b; border-radius: 8px; margin-top: 15px; display: flex; align-items: center; justify-content: center; gap: 10px; padding: 10px; flex-wrap: wrap;}
.drag-item { background: #3b82f6; color: white; padding: 8px 12px; border-radius: 6px; cursor: grab; font-family: monospace; font-size: 14px; font-weight: bold; user-select: none;}
.drag-item:active { cursor: grabbing; transform: scale(0.95); opacity: 0.8;}
.drag-item.correct { background: #10b981; cursor: default; margin-top: 5px;}
.drag-item.wrong { background: #ef4444; animation: shake 0.4s;}
@keyframes shake { 0%, 100% {transform: translateX(0);} 25% {transform: translateX(-5px);} 75% {transform: translateX(5px);} }
</style>
<script>
(function() {
    window.sortCount = 0;
    window.initDragSort = function() {
        const items = document.querySelectorAll('.drag-item');
        const buckets = document.querySelectorAll('.bucket');

        items.forEach(i => {
            i.addEventListener('dragstart', e => {
                if(i.classList.contains('correct')) { e.preventDefault(); return; }
                e.dataTransfer.setData('text/plain', i.id);
                i.style.opacity = '0.5';
            });
            i.addEventListener('dragend', e => {
                i.style.opacity = '1';
            });
        });

        buckets.forEach(b => {
            b.addEventListener('dragover', e => {
                e.preventDefault();
                b.classList.add('drag-over');
            });
            b.addEventListener('dragleave', e => {
                b.classList.remove('drag-over');
            });
            b.addEventListener('drop', e => {
                e.preventDefault();
                b.classList.remove('drag-over');
                const id = e.dataTransfer.getData('text/plain');
                if(!id) return;
                const item = document.getElementById(id);
                if(!item) return;
                
                const targetType = b.getAttribute('data-target');
                const itemType = item.getAttribute('data-type');
                
                if(targetType === itemType) {
                    item.classList.add('correct');
                    item.draggable = false;
                    b.appendChild(item);
                    window.sortCount++;
                    if(window.sortCount === 4) {
                        setTimeout(() => window.completeModule('SORTED_HEAD_BODY'), 500);
                    }
                } else {
                    item.classList.add('wrong');
                    setTimeout(() => item.classList.remove('wrong'), 400);
                }
            });
        });
    }
})();
</script>
<div class="sort-game">
    <div class="sg-top">
        <div class="bucket head-b" id="b-head" data-target="head">
            <h3>&lt;head&gt;</h3>
            <p style="color:#cbd5e1; font-size:12px; margin:0 0 10px 0; text-align:center;">Invisible Setup</p>
        </div>
        <div class="bucket body-b" id="b-body" data-target="body">
            <h3>&lt;body&gt;</h3>
            <p style="color:#cbd5e1; font-size:12px; margin:0 0 10px 0; text-align:center;">Visible Content</p>
        </div>
    </div>
    <div class="tray" id="tray">
        <div class="drag-item" draggable="true" id="di1" data-type="head">&lt;title&gt;</div>
        <div class="drag-item" draggable="true" id="di2" data-type="body">&lt;p&gt; Paragraph</div>
        <div class="drag-item" draggable="true" id="di3" data-type="body">&lt;img&gt; Image</div>
        <div class="drag-item" draggable="true" id="di4" data-type="head">&lt;meta&gt; Data</div>
    </div>
    <script>window.initDragSort();</script>
</div>`,
    initialCode: ``,
    progress: 80,
    validator: function (code) { return code.includes("SORTED_HEAD_BODY"); }
};