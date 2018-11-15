const Discord = require('discord.js');
const client = new Discord.Client();
const adminprefix = "+";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
const devs = ['427611667631964180'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
if (message.content.startsWith(adminprefix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
       if(message.author.id !== '427611667631964180') return;
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}

});

client.on('message',function(message) {
    let args = message.content.split(" ").slice(1).join(" ");
   if(message.content.startsWith(adminprefix + "setWatch")) {
       if(message.author.id !== '427611667631964180') return;
       client.user.setActivity(args,{type: 'WATCHING'});
       message.channel.send("**- :white_check_mark: Done!,**");
   } 
});
client.on('message',function(message) {
    let args = message.content.split(" ").slice(1).join(" ");
   if(message.content.startsWith(adminprefix + "setListen")) {
       if(message.author.id !== '427611667631964180') return;
       client.user.setActivity(args,{type: 'LISTENING'});
       message.channel.send("**- :white_check_mark: Done!,**");
   } 
});

client.login(process.env.BOT_TOKEN);
