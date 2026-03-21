function finalizeUpdateSandbox(payload, newState, oldState, context) {
    const iframe = document.getElementById('sandbox-preview');
    if (iframe) {
        const s = newState.sandbox || { html: "", css: "", js: "" };
        const combined = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>${s.css || ""}</style>
            </head>
            <body>
                ${s.html || ""}
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
                <script>${s.js || ""}<\/script>
            </body>
            </html>
        `;
        iframe.srcdoc = combined;
    }
}
