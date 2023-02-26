const path = require('path');
const fs = require('fs');

module.exports = {
    name: 'message',

    async execute(client, event) {
        try {
            const files = await fs.promises.readdir(path.join(__dirname, '..', 'messages'));
            for (const file of files) {
                if (!file.endsWith('.js')) {
                    continue;
                }

                const command = require(path.join(__dirname, '..', 'messages', file));
                if (command.regex.test(event.message.text)) {
                    await command.execute(client, event);
                }
            }
        } catch (error) {
            logger.error('message.js', error);
        }
    }
};