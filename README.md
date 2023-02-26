## Line Chatbot
This repository contains a Line Messaging API Chat Bot that is implemented using Node.js. The Line Messaging API allows developers to create chat bots that can interact with users on the Line platform.

#### Requirements
To use this chat bot, you will need to have the following:

- [Line Developer Account](https://developers.line.me/en/) (for creating a messaging API channel)
- [Node.js](https://nodejs.org/en/) (version 10 or higher)
- [ngrok](https://ngrok.com/) (for local testing)

### Getting Started
To get started with this chat bot, follow these steps:

1. Clone this repository: `git clone https://github.com/BadEnd777/Line-Chatbot.git` or [download](https://github.com/BadEnd777/Line-Chatbot/archive/refs/heads/main.zip) the source code.
2. Install the required dependencies: `npm install`
3. Create a `.env` file in the root directory of the project and add the following environment variables:
```bash
PORT=3000
SECRET_TOKEN=<your-channel-secret>
ACCESS_TOKEN=<your-channel-access-token>
```

You can obtain your Channel Access Token and Channel Secret by creating a new Line Bot channel on the Line Developers website.

4. Start the server: `npm start`
5. Use the [Line Developers console](https://developers.line.me/console/) to set the webhook URL to the URL of your server (e.g. `https://<your-server-url>/webhook`). You can use [ngrok](https://ngrok.com/) to expose your local server to the internet.
6. Add your bot as a friend on Line and start chatting!

### Features
This Line Messaging API Chat Bot has the following features:

- [x] Type Handler - Switch between different types of messages.
- [x] Text Message Handler - Handle text messages.
- [x] Postback Handler - Handle postback events.
- [x] Logger - Log errors and other information to the console.
- [ ] Other Message Types - (e.g. image, video, [etc...](https://developers.line.biz/en/reference/messaging-api/#message-objects))

Note: This chat bot is simply a template for developers to build their own chat bots. It does not have any features that are specific to a particular use case.

### Capabilities
This Line Messaging API Chat Bot has the following capabilities:

<details>
<summary>Click to expand</summary>

Message Type        | Limitations
------------------- | -------------------
Text Message        | Up to 2000 characters in length.
Image Message       | Image files must be JPEG or PNG format and up to 1 MB in size.
Video Message       | Video files must be MP4 format and up to 10 MB in size.
Audio Message       | Audio files must be M4A or MP3 format and up to 10 MB in size.
Location Message    | None specified.
Sticker Message     | None specified.
Template Message    | Each template message can include up to 4 actions (buttons) per column, and up to 2 columns per message. Additionally, each message can have up to 10 templates.
Flex Message        | Each flex message can include up to 20 bubbles (containers) per message.
Quick Reply Message | Each quick reply message can include up to 13 quick reply buttons.
Buttons Message     | Each buttons message can include up to 4 action buttons.
Carousel Message    | Each carousel message can include up to 10 columns (cards).

</details>

### License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.