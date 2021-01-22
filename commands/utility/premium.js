const {MessageEmbed} = require('discord.js');
const { Menu } = require('discord.js-menu');

exports.run = async (client, message, args) => {
let helpMenu = new Menu(message.channel, message.author.id, [
            // Each object in this array is a unique page.
            {
              
                name: 'main',
              
                content: new MessageEmbed({
                    title: '**Why Xelve Premium?**',
                    description: ` **We\'ve always wanted to serve people for free and yes, we are doing so still. Buying premium motivates us as developers to farcast thoughts and a more better way to serve you.** \n
                    What we\'ve added to Xelve Bot Premium? We\'ve added a reactive page so that you can get a good look at all of them, react to **move!**`,
                    color:'#7289DA'
                    
                }).setColor(`GREEN`),
                reactions: {
                    '⏹': 'delete',
                    '▶': 'number2'
                }
            },
           {
              
                name: 'number2',
              
                content: new MessageEmbed({
                    title: '**Xelve Bot Silver Premium**',
                    description:'With the help of Xelve Bot Silver perks, you can even get the backup of your **bans**. Other than that you can get backups of whatever you like, and yes I mean it, even **chat backups!** \n Xelve Bot Silver Premium for this actually costs a low $5!',
                    color:'#7289DA'
                }),
                 reactions: {
                    '◀': 'first',
                    '⏹': 'delete',
                    '▶': 'extra2'
                }

           },
           {
             name: 'extra2',
              
                content: new MessageEmbed({
                    title: '**Xelve Bot Gold Premium!**',
                    description:'Mhm, you saw it right! **Xelve Bot** gold premium gives you everything that silver does and in addition to it it gives you access to some **badass** server templates that, well **silver or basic** doesn\'t provide! \n Costs you a one-time **$10!** ',
                    color:'#7289DA'
                }),
                 reactions: {
                    '◀': 'number2',
                    '⏹': 'delete',
                    '▶': 'extra3'
                }

           },
           {
             name: 'extra3',
              
                content: new MessageEmbed({
                    title: '**Xelve Bot Platinum!**',
                    description:'This is the furthest as far as our premium perks go to! It provides you everything that the other does except it gives you not only the oppertunity to get a place in **\`platinums\`** command as well as advertisement of your server in the \`help\` command and \`sponsers\` command\n Costs you nothing but **$15!**',
                    color:'#7289DA'
                }),
                 reactions: {
                    '◀': 'extra2',
                    '⏹': 'delete',
                    '▶': 'extra4'
           }
           },
           
             {
             name: 'extra4',
              
                content: new MessageEmbed({
                    title: '**Nitro Boosters!**',
                    description:'Ayo! Want to boost our server! \n You get a 1 month free trial of **Gold Premium** if you do so! \n [Join](https://discord.gg/RTh79cwxxp) to get to know more about it!',
                    color:'#7289DA'
                }),
                 reactions: {
                    '◀': 'extra3',
                    '⏹': 'delete'
           }
           
           },
], 300000)
helpMenu.start()


}
exports.help = {
  name: "premium",
  description: "Premium perks and informations!",
  usage: "xel premium",
  example: "xel premium"
};

exports.conf = {
  aliases: ["prem"],
  cooldown: 1
}
