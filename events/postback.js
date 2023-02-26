const path = require('path');
const fs = require('fs');

module.exports = {
    name: 'postback',

    async execute(client, event) {
        try {
            const files = await fs.promises.readdir(path.join(__dirname, '..', 'postbacks'));
            for (const file of files) {
                const command = require(path.join(__dirname, '..', 'postbacks', file));
                if (command.name === event.postback.data) {
                    await command.execute(client, event);
                }
            }
        }
        catch (error) {
            logger.error('postback.js', error);
        }
    }
};