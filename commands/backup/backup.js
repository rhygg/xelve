const Discord = require('discord.js');
const backup = require('discord-backup');
const db = require('quick.db');
const TokenGenerator = require('tokgen');
let generator = new TokenGenerator();
exports.run = async (client, message, args) => {
  if(!message.member.hasPermission('MANAGE_MESSAGES')){
        return message.channel.send({embed:{description:'**You must have at-least \`ADMINISTRATOR\` permission to view a backup, on this server!**', color:'#7289DA'}});
    }
  let token = generator.generate(18);
  const backed = new Discord.MessageEmbed()
  .setAuthor('🗳️ Sucessfully proccessed a Backup! 🗳️')
  .setDescription('Youre **backup** has been sucessful! Now you can use \`xel install\` to backup your server! You\'ll be needing a backup key for the process, here\'s some information upon your backup and the \`key\`')
  .addField('-------------------------------------------------','--------------------------------------------------',false)
  .addField('**Transact**',`\`\`\` \n User Who processed the request:: ${message.author.id} \n Key:: ${token} \n Guid name:: ${message.guild.name} \n GuildID:: ${message.guild.id}  \n Transaction Type:: Basic\`\`\``)
  .setColor('#7289DA');
  message.channel.send(backed)
 const guildData = await backup.create(message.guild, {
			jsonSave: false,
      doNotBackup: ["bans" ],
    saveImages: "base64"
		});

    db.set(`backup_${token}`, guildData);

  
}

exports.help = {
  name: "backup",
  description: "Backup you server!",
  usage: "xel backup",
  example: "xel backup"
};

exports.conf = {
  aliases: ["back"],
  cooldown: 5 
}
