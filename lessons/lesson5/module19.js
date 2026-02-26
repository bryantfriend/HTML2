window.Lessons.lesson5.modules[18] = {
            title: "19. Fix broken links",
            body: `<p>Never let a dead link survive. It ruins user experience. Maintain your databanks securely.</p>
            <p class="text-sm italic text-gray-400 mt-4">Mission: Type "MAINTENANCE".</p>`,
            svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="40" width="40" height="70" rx="4" fill="#666"/><circle cx="120" cy="55" r="8" fill="white"/><circle cx="120" cy="95" r="8" fill="white"/></svg>`,
            initialCode: "",
            progress: 95,
            validator: function (code) { return code.toUpperCase().includes("MAINTENANCE"); }
        };