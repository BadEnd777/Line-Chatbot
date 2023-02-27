const line = require('@line/bot-sdk');
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

require('./lib/logger').init();
require('dotenv').config();
require('colors');

const { PORT, ACCESS_TOKEN, SECRET_TOKEN } = process.env;

const config = {
    channelAccessToken: ACCESS_TOKEN,
    channelSecret: SECRET_TOKEN,
};

const client = new line.Client(config);

app.get('/', (req, res) => res.status(200).json({ message: 'Server is running' }));

app.post('/webhook', line.middleware(config), async (req, res) => {
    try {
        if (req.body.events.length === 0) {
            return res.status(200).end();
        }

        const event = req.body.events[0];

        if (event.type !== 'message' && event.type !== 'postback') {
            return;
        }

        const files = await fs.promises.readdir(path.join(__dirname, 'events'));
        for (const file of files) {
            const command = require(path.join(__dirname, 'events', file));
            if (command.type === event.type) {
                await command.execute(client, event);
            }
        }

        res.status(200).end();
    } catch (error) {
        logger.error('index.js', error);
        res.status(500).end();
    }
});

app.listen(PORT, () => {
    logger.info('index.js', `Server is running on port ${PORT}`);
}).on('error', (error) => {
    logger.error('index.js', error);
});
