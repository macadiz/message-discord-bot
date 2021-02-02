const Discord = require("discord.js");
let config;
try {
  require("./config.json");
} catch {}
const fs = require("fs");
const { DateTime } = require("luxon");

const client = new Discord.Client();

const { TOKEN, SEND_HOURS, CHANNEL, MESSAGE_PREFIX } = config || process.env;

let sendHours = SEND_HOURS;

console.log('sendHours', SEND_HOURS);

if (!Array.isArray(sendHours)) {
  sendHours = sendHours.split(",");
  console.log('newSendHours', sendHours);
}

console.log('currentDatetime', DateTime.local().toFormat("HH:mm"));

client.login(TOKEN);

const shouldSendMessage = () => {
  return sendHours.includes(DateTime.local().toFormat("HH:mm"));
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
