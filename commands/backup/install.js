const Discord = require('discord.js');
const backup = require('discord-backup');
const db = require('quick.db');
const { MessageCollector } = require("discord.js-collector");

exports.run = async (client, message, args) =>{
const backupID = args.join(' ');
if(!message.member.hasPermission('ADMINISTRATOR')){
        return message.channel.send({embed:{description:'**You must have at-least \`ADMINISTRATOR\` permission to view a backup, on this server!**', color:'#7289DA'}});
    }

if(!backupID){
  return message.channel.send({embed:{description:'Please send a backup key with the message. \n For example: \`xel install ipri1j2epi1jp2ji1j1dda\`',color:'#7289DA'}})

}
const inem = new Discord.MessageEmbed()
.setAuthor('♻ Installing Backup ♻️')
.setDescription('This process will clear your guild before installing the new guild. Although this is a 100% safe process, we want your confirmation. Please type \`confirm\` to execute this process and \`cancel\` to cancel it.')
.setColor('#7289DA');
const botMessage = await message.channel.send(inem);
const userMessage = await MessageCollector.asyncQuestion({
  botMessage,
  user: message.author.id,
});
if (userMessage.content === "confirm") {
  
const backupData = db.get(`backup_${backupID}`);
backup.load(backupData, message.guild);


}
if(userMessage.content ==="cancel"){
  const cancelled = new Discord.MessageEmbed()
  .setAuthor('Sucessfully cancelled backup!')
  .setDescription('The backup was sucessfully cancelled without any \`terminal\` errors!')
  .setColor('#7289DA');
  message.channel.send(cancelled);

}



}
exports.help = {
  name: "install",
  description: "Install your backup using the key!",
  usage: "xel install",
  example: "xel install fai2eh1pe1"
};

exports.conf = {
  aliases: ["inst"],
  cooldown: 5 
}
