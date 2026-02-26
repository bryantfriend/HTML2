window.Lessons.lesson4.modules[13] = {
            title: "14. Multiple images",
            body: `<p>You can add as many images as you like. They will tile across the screen right next to each other automatically.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Copy the image tag and paste it so you have 3 identical images side by side.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="50" width="50" height="50" fill="#ff00e5"/><rect x="95" y="50" width="50" height="50" fill="#ff00e5"/><rect x="170" y="50" width="50" height="50" fill="#ff00e5"/></svg>`,
            initialCode: "<img src=\"https://via.placeholder.com/50/ff00e5\">\n",
            progress: 70,
            validator: function (code) { return (code.toLowerCase().match(/<img/g) || []).length >= 3; }
        };