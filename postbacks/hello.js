module.exports = {
    data: 'hello',

    async execute(client, event) {
        await client.replyMessage(event.replyToken, {
            type: 'text',
            text: 'Hello, world!'
        });
    }
};
