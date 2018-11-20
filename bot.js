const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['412373041675370497'];


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`~`,'https://www.twitch.tv/Mdax')
  client.user.setStatus("idle")
});

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('Mwt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
  client.user.setStatus("idle")
    message.channel.send(` ** ${argresult} \ ** `)
} else 
if (message.content.startsWith('Mls')) {
client.user.setActivity(argresult , {type:'LISTENING'});
  client.user.setStatus("idle")
    message.channel.send(` ** ${argresult} \ ** `)
} else 
if (message.content.startsWith('Mst')) {
  client.user.setGame(argresult, "https://www.twitch.tv/Mdax");
  client.user.setStatus("idle")
   message.channel.send(` ** ${argresult} \ ** `)
}
});

client.on('message', message => {
        if (!developers.includes(message.author.id)) return;
  if (message.content === '0..') {
  let channel = client.channels.get('511744532992229377');

  channel.join()
  .then(connection => console.log('Connected'))
  .catch(console.error);
    
  }
          
});
client.login(process.env.BOT_TOKEN);
