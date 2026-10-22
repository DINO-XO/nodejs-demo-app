
const { test } = require('node:test');
const assert = require('node:assert');
const { createServer } = require('./app');

test('The app should return a successful response', async () => {
    const server = createServer();

    await new Promise((resolve) => {
        server.listen(0, '127.0.0.1', resolve);
    });

    try {
        const port = server.address().port;
        const response = await fetch(`http://127.0.0.1:${port}`);

        assert.strictEqual(response.status, 200);

        const message = await response.text();

        assert.strictEqual(
            message,
            'Hello! My Node.js app is working.'
        );
    } finally {
        await new Promise((resolve, reject) => {
            server.close((error) => {
                if (error) reject(error);
                else resolve();
            });
        });
    }
});
