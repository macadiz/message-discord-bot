## SCHEDULED MESSAGES DISCORD BOT

This bot will send a random message, defined in `messages.txt` at every hour/minute defined in the configuration

### Configuration

You need to create the `config.json` file (you can use `config.template.json`). This file has the following parameters:
- **TOKEN** [String]: Your discord bot's token.
- **CHANNEL** [String]: Channel for your bot to send the message.
- **SEND_HOURS** [Array]: Hours of the day for your bot to send a random message. 24hrs format. Ex. values: "09:30" or "17:30".
- **MESSAGE_PREFIX** (Optional) [String] : A prefix for the message that will be sent.

### Running the project

This project runs using node.js, to start it just use:

```bash
yarn install
yarn start
```
