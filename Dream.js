const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Hassan_Gamer");


client.on("ready", () => {
let channel =     client.channels.get("541618484174520330")
setInterval(function() {
channel.send(`Abram Ya zft`)
}, 25)
})
 
 
client.login("NTI5MDcwODk1NzI2MTk4ODA0.DziEZQ.yIPPM-2wVlTiCec5kZb-dcqQsBU");
