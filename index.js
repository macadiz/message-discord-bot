const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");
const { DateTime } = require("luxon");

const client = new Discord.Client();

const { TOKEN, SEND_HOURS, CHANNEL, MESSAGE_PREFIX } = config;

client.login(TOKEN);

const shouldSendMessage = () => {
  return SEND_HOURS.includes(DateTime.local().toFormat("HH:mm"));
};

const getMessage = () => {
  const messages = fs.readFileSync("./messages.txt").toString().split("\r\n");
  const messagesLength = messages.length;

  const randomLineIndex = Math.floor(Math.random() * messagesLength);
  return messages[randomLineIndex];
};

client.on("ready", () => {
  const channel = client.channels.cache.find(
    (channel) => channel.name === CHANNEL && channel.type === "text"
  );
  setInterval(() => {
    if (shouldSendMessage()) {
      channel.send(`${MESSAGE_PREFIX ? MESSAGE_PREFIX : ""}${getMessage()}`);
    }
  }, 60000);
});
