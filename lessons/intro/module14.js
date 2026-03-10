window.Lessons.intro.modules[13] = {
            title: "14. Save → Refresh cycle 🔄",
            body: `<p>When building on a real computer, you change code, <strong>save the file</strong>, and <strong>refresh the browser</strong>.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Change the text in the code editor to include the word "Hola", then click Refresh below!</p>`,
            svg: ``,
            initialCode: `<h2>Welcome</h2>`,
            progress: 70,
            validator: function (code) { return code.includes("REFRESHED"); }
        };