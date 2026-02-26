window.Lessons.lesson4.modules[16] = {
            title: "17. Add vacation image 🌴",
            body: `<p>Add a second image right next to the animal image.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Add another image: https://via.placeholder.com/150/000000/FFFFFF/?text=Beach</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="30" width="60" height="60" fill="gray"/><rect x="140" y="30" width="60" height="60" fill="gray"/></svg>`,
            initialCode: "<h1>My Favorite Things</h1>\n<img src=\"https://via.placeholder.com/150/000000/FFFFFF/?text=Panda\">",
            progress: 85,
            validator: function (code) { return (code.toLowerCase().match(/<img/g) || []).length >= 2 && code.includes("text=Beach"); }
        };