const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");
const { DateTime } = require("luxon");

const client = new Discord.Client();

client.login(config.TOKEN);

const shouldSendMessage = () => {
  return config.SEND_HOURS.includes(DateTime.local().toFormat("HH:mm"));
};

const getMessage = () => {
  const messages = fs.readFileSync("./messages.txt").toString().split("\r\n");
  const messagesLength = messages.length;

  const randomLineIndex = Math.floor(Math.random() * messagesLength);
  console.log(randomLineIndex);
  return messages[randomLineIndex];
};

client.on("ready", () => {
  const channel = client.channels.cache.find(
    (channel) => channel.name === config.CHANNEL && channel.type === "text"
  );
  setInterval(() => {
    if(shouldSendMessage()) {
        channel.send(getMessage());
    }
  }, 60000);
});
