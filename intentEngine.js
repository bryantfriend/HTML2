window.IntentEngine = {
    run: function (intent, payload) {
        const contextData = {};
        let currentPayload = payload;

        // 1. Validate
        for (let i = 0; i < intent.validate.length; i++) {
            if (!intent.validate[i](currentPayload)) {
                console.error("Validation failed at index", i, "for payload", currentPayload);
                return;
            }
        }

        // 2. Normalize
        for (let i = 0; i < intent.normalize.length; i++) {
            currentPayload = intent.normalize[i](currentPayload);
        }

        // 3. Add Context
        for (let i = 0; i < intent.addContext.length; i++) {
            intent.addContext[i](currentPayload, contextData);
        }

        // 4. Authorize
        for (let i = 0; i < intent.authorize.length; i++) {
            if (!intent.authorize[i](currentPayload, contextData)) {
                console.error("Authorization failed at index", i);
                return;
            }
        }

        // 5. Process
        let newState = window.state;
        for (let i = 0; i < intent.process.length; i++) {
            newState = intent.process[i](currentPayload, newState, contextData);
        }

        // 6. Finalize
        for (let i = 0; i < intent.finalize.length; i++) {
            intent.finalize[i](currentPayload, newState, window.state, contextData);
        }

        window.state = newState;

        // 7. Emit
        for (let i = 0; i < intent.emit.length; i++) {
            intent.emit[i](currentPayload, window.state);
        }
    }
};
