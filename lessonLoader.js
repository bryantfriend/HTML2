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
        }));
    },

    loadScript: function (src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }
};
