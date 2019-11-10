const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("NDA5MDk1OTA3NTgyMjc5Njgw.XchH1A.-EyI8_bqlcQDFXBW_AE3IyA-QgY")
setInterval(function() {
channel.send(`Spam by Fareseslam Or Evil ARE back`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
