const Discord = require('discord.js');
const ticket = require('./Data/tickets.json');
const client = new Discord.Client({disableEveryone: true});
const prefix = "-";
const fs = require('fs');


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

function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }

client.on("message", async message => {
	 const nos = new Discord.RichEmbed()
     .setDescription(`:x: This command only for servers`)
     .setColor("22BF41");
  if(!message.channel.guild) return message.channel.send(nos).then(m => m.delete(5000));
  if (!message.content.startsWith(prefix) || message.author.bot) return;
if(message.content.toLowerCase().startsWith(prefix + `new`)) {
   let subject = message.content.split(' ').slice(1).join(' '); 
   let ticketnumber = 0000;
	if(!subject[0]){
            ticketnumber++;
			     const rerole = new Discord.RichEmbed()
     .setDescription(":x: Please first make a role called exactly \`\`● Élite » Team\`\`")  
     .setColor("22BF41");		    
        if (!message.guild.roles.exists("name", "● Élite » Team")) return message.channel.send(rerole);
	          const already = new Discord.RichEmbed()
     .setDescription(":x: You can only have \`\`1\`\` ticket in this server! you already have \`\`1\`\`")  
     .setColor("22BF41");
        if (message.guild.channels.exists("name", "ticket-" + ticketnumber)) return message.channel.send(already);
	if (message.guild.channels.exists("name", "ticket-")) return message.channel.send(already);
	if (message.guild.channels.exists("name", "ticket")) return message.channel.send(already);
	if (message.channel.name.startsWith("ticket-")) return message.channel.send(already);
	if (message.channel.name.startsWith("ticket-" + ticketnumber)) return message.channel.send(already);
        message.guild.createChannel(`ticket-${ticketnumber}`, "text").then(ticketx => {
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
	
 if(subject[0]){
            ticketnumber++;
			     const rerole = new Discord.RichEmbed()
     .setDescription(":x: Please first make a role called exactly \`\`● Élite » Team\`\`")  
     .setColor("22BF41");		    
        if (!message.guild.roles.exists("name", "● Élite » Team")) return message.channel.send(rerole);
	          const already = new Discord.RichEmbed()
     .setDescription(":x: You can only have \`\`1\`\` ticket in this server! you already have \`\`1\`\`")  
     .setColor("22BF41");
        if (message.guild.channels.exists("name", "ticket-" + ticketnumber)) return message.channel.send(already);
	if (message.guild.channels.exists("name", "ticket-")) return message.channel.send(already);
	if (message.guild.channels.exists("name", "ticket")) return message.channel.send(already);
	if (message.channel.name.startsWith("ticket-")) return message.channel.send(already);
	if (message.channel.name.startsWith("ticket-" + ticketnumber)) return message.channel.send(already);
        message.guild.createChannel(`ticket-${ticketnumber}`, "text").then(ticketx => {
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
}


if(message.content.toLowerCase().startsWith(prefix + `close`)) {	
	let team = message.member.roles.find("name", "● Élite » Team");
	 const d11x1xx = new Discord.RichEmbed()
     .setDescription(":x: You do not have permission for that command! If you believe this is a mistake please add the role called \`\`● Élite » Team\`\` to yourself.")  
     .setColor("22BF41");
	if(!team) return message.channel.send(d11x1xx);
		 const d11x1xxNOT = new Discord.RichEmbed()
     .setDescription(":x: You only can run this command in a ticket channel!")  
     .setColor("22BF41");
	if (!message.channel.name.startsWith("ticket-")) return message.channel.send(d11x1xxNOT);
	 const yes = new Discord.RichEmbed()
     .setDescription(`:x: Are you sure you want close this ticket? The messages will be gone\nsend \`\`${prefix}close\`\` again to close the ticket.\nYour request will be voided in 20 seconds.`)  
     .setColor("22BF41");

    message.channel.send(yes)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '-close', {
        max: 1,
        time: 20000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
	      const yesw = new Discord.RichEmbed()
     .setDescription(`:x: Ticket close timed out, the ticket was not closed.`)  
     .setColor("22BF41");
          m.edit(yesw).then(m2 => {
             m2.delete();
          }, 7000);
        });
    });
  }
  
});

client.on("message", async message => {
		 const nos = new Discord.RichEmbed()
     .setDescription(`:x: This command only for servers`)
     .setColor("22BF41");
  if(!message.channel.guild) return message.channel.send(nos).then(m => m.delete(5000));
  if (!message.content.startsWith(prefix) || message.author.bot) return;
	
	if(message.content.toLowerCase().startsWith(prefix + `rename`)){
		let newname = message.content.split(' ').slice(1).join(' '); 
		let team = message.member.roles.find("name", "● Élite » Team");
	 const d11x1xx = new Discord.RichEmbed()
     .setDescription(":x: You do not have permission for that command! If you believe this is a mistake please add the role called \`\`● Élite » Team\`\` to yourself.")  
     .setColor("22BF41");
	if(!team) return message.channel.send(d11x1xx);
		 const d11x1xxNOT = new Discord.RichEmbed()
     .setDescription(":x: You only can run this command in a ticket channel!")  
     .setColor("22BF41");
	if (!message.channel.name.startsWith("ticket-")) return message.channel.send(d11x1xxNOT);
     const NOTX1 = new Discord.RichEmbed()
     .setDescription(`:x: Usage: \`\`${prefix}rename <name>\`\``)  
     .setColor("22BF41");
	if(!newname) return message.channel.send(NOTX1);
		message.channel.setName(`ticket-` + newname);
		  const D1 = new Discord.RichEmbed()
     .setDescription(`:white_check_mark: This ticket has been renamed to \`\`${newname}\`\``)  
     .setColor("22BF41");
	message.channel.send(D1);
		
	}
});

  

client.login(process.env.ELITE_TOKEN);
