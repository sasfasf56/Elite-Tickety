const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const prefix = "e#";


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
client.user.setGame(`Elite Community  ♪..`,'https://www.twitch.tv/Elite-Community');	

});

 
client.on("message", (message) => {
   if (message.content.startsWith("-new")) {
	let ticketnumber = message.author.discriminator;
	let subject = message.content.split(' ').slice(1).join(' ');
        let elite = message.guild.channels.find("name", "Elite Tickets ♪..");   
					    
        if (!message.guild.roles.exists("name", "Elite Team ♪..")) return message.channel.send(":x: Please first make a role called exactly `\`\`Elite Team ♪..\`\``");
	          const already = new Discord.RichEmbed()
     .setDescription(":x: You can only have `\`\`1\`\`` ticket in this server! you already have `\`\`1\`\``")  
     .setColor("1CE143");
        if (message.guild.channels.exists("name", "ticket-${ticketnumber}" + ticketnumber)) return message.channel.send(already); 
	   if(!elite) {
                message.guild.createChannel("Elite Tickets ♪..", "category");
            };
	   
        message.guild.createChannel(`ticket-${ticketnumber}`, "text").then(ticketx => {
            let role = message.guild.roles.find("name", "Elite Team ♪..");
            let role2 = message.guild.roles.find("name", "@everyone");
		  ticketx.setParent(elite);
                  elite.setPosition(2);
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
     .setColor("1CE143")
            message.channel.send(d1);
            const nonedear = new Discord.RichEmbed()
     .setDescription(`Dear ${message.author}, \nThank you for reaching out to our support team!\nWe will get back to you as soon as possible\n`)
     .addField(`Subject`, subject)    
     .setColor("1CE143")
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(client.user.avatarURL , `Elite Tickety v1.0`)
     .setTimestamp();
            ticketx.send({
                embed: nonedear
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("-close")) {
	              	   const d11xxx = new Discord.RichEmbed()
     .setDescription(":x: You do not have permission for that command! If you believe this is a mistake please add the role called `\`\`Elite Team ♪..\`\`` to yourself.")  
     .setColor("1CE143");
	  if(!message.member.hasRole("Elite Tickets ♪..")) return message.channel.send(d11xxx);
	   	   const d1x = new Discord.RichEmbed()
     .setDescription(`:x: Please only run this command in a ticket channel!`)  
     .setColor("1CE143")
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(d1x);
            	   const d11 = new Discord.RichEmbed()
     .setDescription(`Are you sure you want to close this ticket ? The channel will be deleted.\n**Repeat the command to close the ticket.\nYour request will be voided in 20 seconds.`)  
     .setColor("1CE143");
        message.channel.send(d11)
            .then((m) => {
                message.channel.awaitMessages(response => response.content === '-close', {
                        max: 1,
                        time: 10000,
                        errors: ['time'],
                    }) 
                    .then((collected) => {
                        message.channel.delete();
                    })  
                    .catch(() => {
                      const d11x = new Discord.RichEmbed()
     .setDescription(`:x: Ticket close timed out , the ticket was not closed.`)  
     .setColor("1CE143")
                        m.edit(d11x).then(m2 => {
                            m2.delete();
                        }, 3000);
                    });
            });
    }
 
});

client.login(process.env.ELITE_TOKEN);
