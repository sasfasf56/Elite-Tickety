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



 
client.on("message", (message) => {
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
  if (message.content.toLowerCase().startsWith(prefix + `new`)) {
	 let subject = message.content.split(' ').slice(1).join(' '); 
	  if(!subject){
            read._number++;
            fs.writeFile("./Data/tickets.json", JSON.stringify(read), (err) => console.error);
			     const rerole = new Discord.RichEmbed()
     .setDescription(":x: Please first make a role called exactly \`\`● Élite » Team\`\`")  
     .setColor("22BF41");		    
        if (!message.guild.roles.exists("name", "● Élite » Team")) return message.channel.send(rerole);
	          const already = new Discord.RichEmbed()
     .setDescription(":x: You can only have \`\`1\`\` ticket in this server! you already have \`\`1\`\`")  
     .setColor("22BF41");
        if (message.guild.channels.exists("name", "ticket-" + read._number.toString())) return message.channel.send(already);
	if (message.channel.name.startsWith("ticket-")) return message.channel.send(already);
        if (message.channel.name.startsWith("ticket-" + read._number.toString())) return message.channel.send(already);
        message.guild.createChannel(`ticket-${read._number.toString()}`, "text").then(ticketx => {
		   if(CateWP[message.guild.id].room) {
        let EliteX = message.guild.channels.get(`${CateWP[message.guild.id].room.id}`);
        ticketx.setParent(EliteX);
  
      }
            let role = message.guild.roles.find("name", "● Élite » Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            ticketx.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });   
            ticketx.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            ticketx.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true

            }); 
	
		
	    const d1 = new Discord.RichEmbed()
     .setDescription(`:white_check_mark: Your ticket has been created <#${ticketx.id}>`)  
     .setColor("22BF41")
            message.channel.send(d1);
            const nonedear = new Discord.RichEmbed()
     .setDescription(`Dear ${message.author}, \n\nThank you for reaching out to our support team!\n\nWe will get back to you as soon as possible\n\n`) 
     .addField('Subject' , `No subject has been given`)
     .setColor("22BF41")
     .setFooter(`Nice-Ti v2 || By Sw3rD#0010` , client.user.avatarURL)
     .setTimestamp();
            ticketx.send({embed: nonedear });
        }).catch(console.error);

	  }
  
     if(subject){
	    read._number++;
            fs.writeFile("./Data/tickets.json", JSON.stringify(read), (err) => console.error);
			     const rerole = new Discord.RichEmbed()
     .setDescription(":x: Please first make a role called exactly \`\`● Élite » Team\`\`")  
     .setColor("22BF41");		    
        if (!message.guild.roles.exists("name", "● Élite » Team")) return message.channel.send(rerole);
	          const already = new Discord.RichEmbed()
     .setDescription(":x: You can only have \`\`1\`\` ticket in this server! you already have \`\`1\`\`")  
     .setColor("22BF41");
 if (message.guild.channels.exists("name", "ticket-" + read._number.toString())) return message.channel.send(already);
        message.guild.createChannel(`ticket-${read._number.toString()}`, "text").then(ticketx => {
        if(CateWP[message.guild.id].room) {
        let EliteX = message.guild.channels.get(`${CateWP[message.guild.id].room.id}`);
        ticketx.setParent(EliteX);
  
      }
            let role = message.guild.roles.find("name", "● Élite » Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            ticketx.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });   
            ticketx.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            ticketx.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true

            }); 
		
	    const d1 = new Discord.RichEmbed()
     .setDescription(`:white_check_mark: Your ticket has been created <#${ticketx.id}>`)  
     .setColor("22BF41")
            message.channel.send(d1);
            const nonedear = new Discord.RichEmbed()
     .setDescription(`Dear ${message.author}, \n\nThank you for reaching out to our support team!\n\nWe will get back to you as soon as possible\n\n`) 
     .addField('Subject' , subject)
     .setColor("22BF41")
     .setFooter(`Nice-Ti v2 || By Sw3rD#0010` , client.user.avatarURL)
     .setTimestamp();
            ticketx.send({embed: nonedear });
        }).catch(console.error);

	  }  
	  
	   if (message.content.toLowerCase().startsWith(prefix + `close`)) {
    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
  
    message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`>confirm\`. This will time out in 10 seconds and be cancelled.`)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '>confirm', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
  }
  
});

client.login(process.env.ELITE_TOKEN);
