window.IntentEngine = {
    run: function (intent, payload) {
        console.log("IntentEngine: Running intent", intent, "with payload", payload);
        const contextData = {};
        let currentPayload = payload;

        // 1. Validate
        if (intent.validate) {
            for (let i = 0; i < intent.validate.length; i++) {
                if (!intent.validate[i](currentPayload)) {
                    console.error("Validation failed at index", i, "for payload", currentPayload);
                    return;
                }
            }
        }

        // 2. Normalize
        if (intent.normalize) {
            for (let i = 0; i < intent.normalize.length; i++) {
                currentPayload = intent.normalize[i](currentPayload);
            }
        }

        // 3. Add Context
        if (intent.addContext) {
            for (let i = 0; i < intent.addContext.length; i++) {
                intent.addContext[i](currentPayload, contextData);
            }
        }

        // 4. Authorize
        if (intent.authorize) {
            for (let i = 0; i < intent.authorize.length; i++) {
                if (!intent.authorize[i](currentPayload, contextData)) {
                    console.error("Authorization failed at index", i);
                    return;
                }
            }
        }

        // 5. Process
        let newState = Object.assign({}, window.state);
        if (intent.process) {
            for (let i = 0; i < intent.process.length; i++) {
                newState = intent.process[i](currentPayload, newState, contextData);
            }
        }

        // 6. Update State
        const oldState = window.state; // Capture old state before updating
        window.state = newState;

        // 7. Emit & Finalize
        if (intent.finalize) {
            for (let i = 0; i < intent.finalize.length; i++) {
                try {
                    intent.finalize[i](currentPayload, newState, oldState, contextData);
                } catch (e) {
                    console.error("Finalizer error:", e);
                }
            }
        }

        // 8. Emit
        if (intent.emit) {
            for (let i = 0; i < intent.emit.length; i++) {
                intent.emit[i](currentPayload, window.state);
            }
        }
    }
};
