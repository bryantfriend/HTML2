window.Lessons.lesson4.modules[11] = {
            title: "12. Image under text",
            body: `<p>Put the placeholder image we used earlier directly underneath the heading.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Add an img inside the body underneath the h1.</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="200" height="110" fill="none" stroke="#ff00e5" stroke-dasharray="4" stroke-width="2"/></svg>`,
            initialCode: "<h1>Look at this</h1>\n<!-- url: https://via.placeholder.com/100/00ff9d -->\n",
            progress: 60,
            validator: function (code) { return code.toLowerCase().includes("<img") && code.indexOf("<img") > code.indexOf("</h1>"); }
        };