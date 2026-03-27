function finalizeUpdateSandbox(payload, newState, oldState, context) {
    const iframe = document.getElementById('sandbox-preview');
    if (iframe) {
        const project = newState.sandboxProject || { files: {} };
        const files = project.files || {};
        const htmlFile = (project.activeFile && String(project.activeFile).endsWith('.html') ? project.activeFile : null)
            || Object.keys(files).find(name => name.endsWith('.html'))
            || 'index.html';
        const html = files[htmlFile] || '';
        const css = Object.keys(files).filter(name => name.endsWith('.css')).map(name => files[name] || '').join('\n\n');
        const js = Object.keys(files).filter(name => name.endsWith('.js')).map(name => files[name] || '').join('\n\n');
        const combined = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>${css}</style>
            </head>
            <body>
                ${html}
                <script>
                    (function() {
                        const send = function(level, args) {
                            try {
                                const text = Array.from(args).map(function(item) {
                                    if (typeof item === 'string') return item;
                                    try { return JSON.stringify(item); } catch (e) { return String(item); }
                                }).join(' ');
                                parent.postMessage({ source: 'sandbox-preview', level: level, message: text }, '*');
                            } catch (err) {}
                        };
                        ['log', 'warn', 'error'].forEach(function(level) {
                            const original = console[level];
                            console[level] = function() {
                                send(level, arguments);
                                if (original) {
                                    original.apply(console, arguments);
                                }
                            };
                        });
                        window.addEventListener('error', function(event) {
                            send('error', [event.message + ' @ ' + event.filename + ':' + event.lineno]);
                        });
                        window.addEventListener('unhandledrejection', function(event) {
                            const reason = event.reason && event.reason.message ? event.reason.message : String(event.reason);
                            send('error', ['Unhandled promise rejection: ' + reason]);
                        });
                    })();
                <\/script>
                <script>${js}<\/script>
            </body>
            </html>
        `;
        iframe.srcdoc = combined;
    }
}
