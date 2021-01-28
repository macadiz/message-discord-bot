## SCHEDULED MESSAGES DISCORD BOT

This bot will send a random message, defined in `messages.txt` at every hour/minute defined in the configuration

### Configuration

This is in the `config.json` file and it has the following parameters:
- **TOKEN** [String]: Your discord bot token
- **CHANNEL** [String]: Channel for your bot to send the message
- **SEND_HOURS** [Array]: Hours of the day for your bot to send a random message. Ex. value: "09:30"

### Running the project

This project runs using node.js, to start it just use:

```bash
yarn install
yarn start
```
