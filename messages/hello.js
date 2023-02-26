module.exports = {
    regex: /^hello$/i,
    
    execute: async (client, event) => {
        await client.replyMessage(event.replyToken, {
            type: 'template',
            altText: 'Hello',
            template: {
                type: 'buttons',
                text: 'Hello',
                actions: [
                    {
                        type: 'postback',
                        label: 'Hello',
                        data: 'hello'
                    }
                ]
            }
        });
    },
};