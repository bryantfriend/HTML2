function finalizePreviewRender(payload, newState, oldState, contextData) {
    if (newState.view === 'LESSON' && !newState.isComplete) {
        const previewArea = document.getElementById('preview-area');
        if (previewArea) {
            const lesson = (contextData.courseData && contextData.courseData.lessons) ? contextData.courseData.lessons[newState.currentLessonIndex] : null;
            const currentModule = lesson ? lesson.modules[newState.currentModuleIndex] : null;
            const scaffold = currentModule && currentModule.previewScaffold ? currentModule.previewScaffold : "";
            
            // Robustly scope 'body' styles to the preview area only.
            // CSS lessons use the editor like a styles.css file, so wrap CSS in a style tag
            // and show it against the module's preview scaffold.
            const isCssLesson = lesson && (lesson.id === 'lesson8' || lesson.id === 'lesson9');
            let editorCode = newState.editorContent || "";
            let scopedCode = editorCode.replace(/(^|\s|,|}|(?:<\/style>)|(?:<style>))body(\s*\{|\s*,)/gi, '$1#preview-area$2');
            if (isCssLesson && !/<\s*style\b/i.test(editorCode)) {
                const selector = currentModule && currentModule.cssSelector ? currentModule.cssSelector : '';
                const cssLooksBare = selector && !/[{}]/.test(editorCode) && /:\s*[^;]+;?/i.test(editorCode);
                const cssCode = cssLooksBare ? `${selector} {\n  ${editorCode.trim()}\n}` : editorCode;
                scopedCode = `<style>${cssCode}</style>`;
            }
            
            // DEFENSIVE: If it's Lesson 7 and the scaffold is empty, provide a fallback badge box
            // so the student at least sees a container to style.
            let finalHtml = scaffold;
            if (lesson && lesson.id === 'lesson7' && !finalHtml.trim()) {
                finalHtml = '<div id="badge" style="padding:20px; border:1px dashed #334155;">[NEURAL_LINK_ACTIVE]</div>';
            }

            const previewDefaults = `
                <style data-preview-defaults>
                    #preview-area ul {
                        list-style: disc;
                        list-style-position: outside;
                        padding-left: 1.5rem;
                        margin: 1em 0;
                    }
                    #preview-area ol {
                        list-style: decimal;
                        list-style-position: outside;
                        padding-left: 1.5rem;
                        margin: 1em 0;
                    }
                    #preview-area li {
                        display: list-item;
                        margin: 0.25em 0;
                    }
                </style>
            `;

            previewArea.innerHTML = previewDefaults + finalHtml + scopedCode;

            // SYNC STYLING TO TOP PANEL: If the user styles an ID like #shirt or #pants, 
            // we want it to reflect in the SVG/Widget panel too.
            const svgDisplay = document.getElementById('svg-display');
            if (svgDisplay && scopedCode.includes('<style>')) {
                const existingStyle = svgDisplay.querySelector('style.student-sync-css');
                if (existingStyle) existingStyle.remove();
                
                const styleMatch = scopedCode.match(/<style>([\s\S]*?)<\/style>/i);
                if (styleMatch) {
                    const newStyle = document.createElement('style');
                    newStyle.className = 'student-sync-css';
                    newStyle.textContent = styleMatch[1];
                    svgDisplay.appendChild(newStyle);
                }
            }

            // Execute any scripts that were injected via innerHTML
            const scripts = previewArea.querySelectorAll('script');
            scripts.forEach(oldScript => {
                const newScript = document.createElement('script');
                Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
                newScript.appendChild(document.createTextNode(oldScript.innerHTML));
                if (oldScript.parentNode) {
                    oldScript.parentNode.replaceChild(newScript, oldScript);
                }
            });

            // Ensure Lesson 4 preview buttons remain interactive even if inline scripts fail.
            if (lesson && lesson.id === 'lesson4') {
                const editor = document.getElementById('code-editor');
                if (!editor) return;
                const runPreview = () => {
                    if (window.IntentEngine && window.Intents && window.Intents.updatePreview) {
                        window.IntentEngine.run(window.Intents.updatePreview, { code: editor.value });
                    }
                };
                const bindOnce = (el, handler) => {
                    if (!el || el.dataset.bound === 'true') return;
                    el.dataset.bound = 'true';
                    el.addEventListener('click', handler);
                };

                // Module 1: photo picker buttons
                const pickers = [
                    ['pick-space-cat', 'assets/space-cat.svg'],
                    ['pick-happy-cat', 'assets/cat-demo.svg'],
                    ['pick-glitch-cat', 'assets/cat-glitch.svg']
                ];
                pickers.forEach(([id, src]) => {
                    const button = document.getElementById(id);
                    bindOnce(button, () => {
                        const tagRegex = /(<img\\b[^>]*data-challenge\\s*=\\s*["']starter-photo["'][^>]*)(>)/i;
                        if (tagRegex.test(editor.value)) {
                            editor.value = editor.value.replace(tagRegex, (match, start, end) => {
                                if (/\\bsrc\\s*=\\s*["'][^"']*["']/i.test(start)) {
                                    return start.replace(/\\bsrc\\s*=\\s*["'][^"']*["']/i, `src="${src}"`) + end;
                                }
                                return `${start} src="${src}"${end}`;
                            });
                            runPreview();
                        }
                    });
                });

                // Module 4: cat tag builder buttons
                const buildActions = {
                    'cat-build-src': (value) => {
                        if (!/<img\\b/i.test(value)) value = '<img data-challenge="cat-builder">';
                        return value.replace(/<img\\b([^>]*)>/i, (match, attrs) => {
                            if (/\\bsrc\\s*=/.test(attrs)) return '<img' + attrs.replace(/\\bsrc\\s*=\\s*["'][^"']*["']/i, ' src="assets/cat-demo.svg"') + '>';
                            return '<img' + attrs + ' src="assets/cat-demo.svg">';
                        });
                    },
                    'cat-build-alt': (value) => {
                        if (!/<img\\b/i.test(value)) value = '<img data-challenge="cat-builder">';
                        return value.replace(/<img\\b([^>]*)>/i, (match, attrs) => {
                            if (/\\balt\\s*=/.test(attrs)) return '<img' + attrs.replace(/\\balt\\s*=\\s*["'][^"']*["']/i, ' alt="Happy cat"') + '>';
                            return '<img' + attrs + ' alt="Happy cat">';
                        });
                    },
                    'cat-build-width': (value) => {
                        if (!/<img\\b/i.test(value)) value = '<img data-challenge="cat-builder">';
                        return value.replace(/<img\\b([^>]*)>/i, (match, attrs) => {
                            if (/\\bwidth\\s*=/.test(attrs)) return '<img' + attrs.replace(/\\bwidth\\s*=\\s*["'][^"']*["']/i, ' width="180"') + '>';
                            return '<img' + attrs + ' width="180">';
                        });
                    }
                };
                Object.keys(buildActions).forEach((id) => {
                    const button = document.getElementById(id);
                    bindOnce(button, () => {
                        editor.value = buildActions[id](editor.value || '');
                        runPreview();
                    });
                });

                // Module 5: repair buttons
                const repairMap = {
                    'repair-cat-path': 'assets/cat-demo.svg',
                    'keep-broken-path': 'assets/cat-broken.svg'
                };
                Object.keys(repairMap).forEach((id) => {
                    const button = document.getElementById(id);
                    bindOnce(button, () => {
                        const src = repairMap[id];
                        editor.value = editor.value.replace(/(<img\\b[^>]*data-challenge\\s*=\\s*["']broken-cat["'][^>]*\\bsrc\\s*=\\s*["'])[^"']*(["'][^>]*>)/i, `$1${src}$2`);
                        runPreview();
                    });
                });

                // Module 7: alt text demo toggles (preview-only helpers)
                bindOnce(document.getElementById('show-working-image'), () => {
                    const stage = document.getElementById('alt-stage');
                    if (stage) stage.innerHTML = '<img src="assets/cat-demo.svg" alt="Fluffy cat" width="140">';
                });
                bindOnce(document.getElementById('show-broken-image'), () => {
                    const stage = document.getElementById('alt-stage');
                    if (stage) stage.textContent = 'Broken image view: alt text like "Fluffy cat" tells people what should be here.';
                });

                // Module 11: allow click to apply GIF source as a fallback to drag
                const gifCard = document.getElementById('drag-gif-card');
                bindOnce(gifCard, () => {
                    const src = 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif';
                    if (/\\bsrc\\s*=\\s*["'][^"']*["']/i.test(editor.value)) {
                        editor.value = editor.value.replace(/\\bsrc\\s*=\\s*["'][^"']*["']/i, `src="${src}"`);
                    } else {
                        editor.value = editor.value.replace(/<img\\b([^>]*)>/i, `<img$1 src="${src}">`);
                    }
                    runPreview();
                });

                // Module 16: insert video tag button
                const insertVideo = document.getElementById('insert-video-demo');
                bindOnce(insertVideo, () => {
                    const openTag = '<video>';
                    const closeTag = '</video>';
                    const current = (editor.value || '').trim();
                    if (!current) editor.value = openTag + '\\n' + closeTag;
                    else if (!/<\\s*video\\b/i.test(current)) editor.value = current + (current.endsWith('\\n') ? '' : '\\n') + openTag + '\\n' + closeTag;
                    runPreview();
                });
            }
        }
    }
}
