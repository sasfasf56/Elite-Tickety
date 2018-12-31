const Discord = require('discord.js');
const read = require('./Data/tickets.json')
const client = new Discord.Client({disableEveryone: true});
const prefix = "-";
const fs = require('fs')
const CateWP = JSON.parse(fs.readFileSync('./Data/categories.json' , 'utf8'));


client.on('ready',  () => {
console.log(`

╭━━━┳╮╱╱╭━━┳━━━━┳━━━╮
┃╭━━┫┃╱╱╰┫┣┫╭╮╭╮┃╭━━╯
┃╰━━┫┃╱╱╱┃┃╰╯┃┃╰┫╰━━╮
┃╭━━┫┃╱╭╮┃┃╱╱┃┃╱┃╭━━╯
┃╰━━┫╰━╯┣┫┣╮╱┃┃╱┃╰━━╮
╰━━━┻━━━┻━━╯╱╰╯╱╰━━━╯
╭━━━┳━━━┳━╮╭━┳━╮╭━┳╮╱╭┳━╮╱╭┳━━┳━━━━┳╮╱╱╭╮
┃╭━╮┃╭━╮┃┃╰╯┃┃┃╰╯┃┃┃╱┃┃┃╰╮┃┣┫┣┫╭╮╭╮┃╰╮╭╯┃
┃┃╱╰┫┃╱┃┃╭╮╭╮┃╭╮╭╮┃┃╱┃┃╭╮╰╯┃┃┃╰╯┃┃╰┻╮╰╯╭╯
┃┃╱╭┫┃╱┃┃┃┃┃┃┃┃┃┃┃┃┃╱┃┃┃╰╮┃┃┃┃╱╱┃┃╱╱╰╮╭╯
┃╰━╯┃╰━╯┃┃┃┃┃┃┃┃┃┃┃╰━╯┃┃╱┃┃┣┫┣╮╱┃┃╱╱╱┃┃
╰━━━┻━━━┻╯╰╯╰┻╯╰╯╰┻━━━┻╯╱╰━┻━━╯╱╰╯╱╱╱╰╯


`)
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~Team #Elite©~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(`Logged in as  * [ "  Team #Elite© " ] servers! [ " ${client.guilds.size} " ] Users! [ " ${client.users.size} " ]`);
	
client.user.setStatus("dnd");
client.user.setGame(`● Élite Server ,,, 1K ..`,'https://www.twitch.tv/Elite-Server');	

});

client.on("message", async message => {
  let Category = message.content.split(" ").slice(1).join(" ");
  let Elite = message.guild.channels.find('name', `${Category}`);
    if(message.content === `${prefix}setcategory`) {
	const nos = new Discord.RichEmbed()
     .setDescription(`:x: This command only for servers`)
     .setColor("22BF41");
  if(!message.channel.guild) return message.channel.send(nos).then(m => m.delete(5000));
  if (!message.content.startsWith(prefix) || message.author.bot) return;
	function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }
      const d11x1xx = new Discord.RichEmbed()
     .setDescription(":x: You do not have permission for that command! If you believe this is a mistake please add the role called \`\`● Élite » Team\`\` to yourself.")  
     .setColor("22BF41");
     if(!message.member.roles.find("name", "● Élite » Team")) return message.channel.send(d11x1xx);
     const NOTX = new Discord.RichEmbed()
     .setDescription(`:x: Usage: \`\`-setcategory <name>\`\``)  
     .setColor("22BF41");	   
    if(!Category) return message.channel.send(NOTX);
     const NOTX1 = new Discord.RichEmbed()
     .setDescription(`:x: I can't find this category \`\`${Category}\`\``)  
     .setColor("22BF41");
	if(!Elite) return message.channel.send(NOTX1);
      const GF1 = new Discord.RichEmbed()
     .setDescription(`:white_check_mark: Your ticket category is now \`\`${Category}\`\``)  
     .setColor("22BF41");
		message.channel.send(GF1);
  CateWP[message.guild.id] = {
room: Category,
}
  fs.writeFile("./Data/categories.json", JSON.stringify(CateWP) ,(err) => {
  if (err) console.log(err.message);
});  	
	}
});

client.login(process.env.ELITE_TOKEN);
