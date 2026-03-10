window.Lessons.intro.modules[12] = {
            title: "13. Editing text live",
            body: `<p>In our editor below, what you type automatically becomes rendered by our mini-browser on the right.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Change the word "Change" to "Changed".</p>`,
            svg: ``,
            initialCode: "<p>Change this text.</p>",
            progress: 65,
            validator: function (code) { return code.toLowerCase().includes("changed"); }
        };