function finalizeUpdateSandbox(payload, newState, oldState, context) {
    const iframe = document.getElementById('sandbox-preview');
    if (iframe) {
        const s = newState.sandbox || { html: "", css: "", js: "" };
        const combined = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>${s.css || ""}</style>
            </head>
            <body>
                ${s.html || ""}
                <script>${s.js || ""}<\/script>
            </body>
            </html>
        `;
        iframe.srcdoc = combined;
    }
}