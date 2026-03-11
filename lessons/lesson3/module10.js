window.Lessons.lesson3.modules[9] = {
    title: "10. Lists for favorites",
    body: `<p>Bullet lists are perfect for grouping your favorite things together!</p>
    <p class="text-sm italic text-gray-400 mt-4">Mission: Pick 3 of your favorite movies to create a bullet list (<code>&lt;ul&gt;</code>).</p>`,
    svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" style="display:none;"></svg>`,
    widgetCode: `<!-- INTERACTIVE MODULE -->
<style>
.m10-container { display: flex; flex-direction: column; gap: 10px; background: #1e293b; padding: 10px; border-radius: 8px; font-family: sans-serif; color: white; }
.m10-carousel { display: flex; gap: 10px; overflow-x: auto; padding-bottom: 5px; }
.m10-carousel::-webkit-scrollbar { height: 6px; }
.m10-carousel::-webkit-scrollbar-thumb { background: #475569; border-radius: 3px; }
.m10-movie { min-width: 80px; height: 100px; background: #334155; border-radius: 6px; display: flex; align-items: center; justify-content: center; text-align: center; font-size: 12px; cursor: pointer; border: 2px solid transparent; user-select: none; transition: transform 0.2s; }
.m10-movie:hover { transform: translateY(-5px); border-color: #3b82f6; }
.m10-movie.selected { border-color: #10b981; background: #064e3b; }
.m10-tracker { display: flex; justify-content: space-between; font-size: 12px; color: #94a3b8; }
</style>
<div class="m10-container">
    <div class="m10-tracker">Movies Picked: <span id="m10-count" class="text-green-400">0 / 3</span></div>
    <div class="m10-carousel" id="m10-carousel">
        <div class="m10-movie" data-title="Spiderman">🕷️<br>Spiderman</div>
        <div class="m10-movie" data-title="Toy Story">🤠<br>Toy Story</div>
        <div class="m10-movie" data-title="Avatar">🔵<br>Avatar</div>
        <div class="m10-movie" data-title="Harry Potter">⚡<br>Harry Potter</div>
        <div class="m10-movie" data-title="Star Wars">⚔️<br>Star Wars</div>
    </div>
</div>
<script>
(function() {
    const movies = document.querySelectorAll('.m10-movie');
    const countSpan = document.getElementById('m10-count');
    const editor = document.getElementById('code-editor');
    let selected = [];
    
    movies.forEach(movie => {
        movie.addEventListener('click', () => {
            const title = movie.dataset.title;
            if (selected.includes(title)) {
                selected = selected.filter(t => t !== title);
                movie.classList.remove('selected');
            } else if (selected.length < 3) {
                selected.push(title);
                movie.classList.add('selected');
            }
            countSpan.innerText = selected.length + " / 3";
            
            if (editor) { editor.readOnly = false; editor.style.opacity = '1';
                let codeStr = "<ul>\\n";
                selected.forEach(t => codeStr += "  <li>" + t + "</li>\\n");
                codeStr += "</ul>";
                editor.value = codeStr;
                editor.dispatchEvent(new Event('input', { bubbles: true }));
            }
        });
    });
    
    if (editor) {
        editor.addEventListener('keyup', (e) => {
            const val = e.target.value.toLowerCase();
            const liMatches = val.match(/<li>/gi);
            if (liMatches) {
                countSpan.innerText = Math.min(3, liMatches.length) + " / 3";
            }
        });
    }
})();
</script>`,
    initialCode: ``,
    progress: 50,
    validator: function (code) {
        return code.toLowerCase().includes("<ul>") && code.toLowerCase().includes("</ul>") && (code.match(/<li>/gi) || []).length >= 3;
    }
};