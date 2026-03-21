window.LessonLoader = {
    loadAllMetadata: function () {
        return Promise.all(window.LessonManifest.lessons.map(lesson => {
            return this.loadScript(`lessons/${lesson.id}/metadata.js`);
        }));
    },

    loadLessonModules: function (lessonId) {
        const lesson = window.LessonManifest.lessons.find(l => l.id === lessonId);
        if (!lesson) return Promise.reject("Lesson not found in manifest: " + lessonId);

        return Promise.all(Array.from({ length: lesson.moduleCount }, (_, i) => {
            return this.loadScript(`lessons/${lesson.id}/module${i + 1}.js`);
        })).then(() => {
            if (lessonId === 'intro' && window.Lessons && window.Lessons.intro && Array.isArray(window.Lessons.intro.modules)) {
                const introOrder = [0, 1, 2, 3, 9, 10, 4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 19];
                window.Lessons.intro.modules = introOrder.map(index => window.Lessons.intro.modules[index]);
                window.Lessons.intro.modules.forEach((mod, index) => {
                    mod.title = mod.title.replace(/^\d+\.\s*/, (index + 1) + '. ');
                    mod.progress = (index + 1) * 5;
                });
            }
        });
    },

    loadScript: function (src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            // Cache buster for development mode to ensure latest modules are fetched
            script.src = src + '?v=' + new Date().getTime();
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }
};
