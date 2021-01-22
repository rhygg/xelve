const {MessageEmbed} = require('discord.js');

exports.run = async (client, message, args) => {
  const help = new MessageEmbed()
  .setAuthor('Xelve Commands')
  .setDescription('**xel help**             a list of useful commands(the one you just used) \n **xel info** Information about the bot \n **xel backup**                     backup your discord.js server \n **xel chatlog**                                  load chats from a specific channel \n **xel install**                                  install a backup with a \`specific key\` \n **xel premium**                                 Information about xelve premium!')
  .setColor('#7289DA');
  message.author.send(help)
}
exports.help = {
  name: "help",
  description: "Helpful commands",
  usage: "xel help",
  example: "xel help"
};

exports.conf = {
  aliases: ["h"],
  cooldown: 1
}
