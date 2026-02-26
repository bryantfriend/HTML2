window.Lessons.lesson4.modules[15] = {
            title: "16. Add favorite animal image 🐼",
            body: `<p>Use the placeholder below (or a real URL if you have one) to display a picture of an animal!</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Add an image using: https://via.placeholder.com/150/000000/FFFFFF/?text=Panda</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="60" r="15" fill="white"/><circle cx="140" cy="60" r="15" fill="white"/><circle cx="105" cy="60" r="5" fill="black"/><circle cx="135" cy="60" r="5" fill="black"/><path d="M110 90 Q120 100 130 90" stroke="white" stroke-width="3" fill="none"/></svg>`,
            initialCode: "<h1>My Favorite Animal</h1>\n<!-- Add image below -->",
            progress: 80,
            validator: function (code) { return code.toLowerCase().includes("<img") && code.includes("text=Panda"); }
        };