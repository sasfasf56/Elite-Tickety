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
	let newname = message.content.split(' ').slice(1).join(' ');
	let elite = message.guild.channels.find("name", "Elite Tickets ♪..");
			     const rerole = new Discord.RichEmbed()
     .setDescription(":x: Please first make a role called exactly \`\`Elite Team ♪..\`\`")  
     .setColor("22BF41");		    
        if (!message.guild.roles.exists("name", "Elite Team ♪..")) return message.channel.send(rerole);
	          const already = new Discord.RichEmbed()
     .setDescription(":x: You can only have \`\`1\`\` ticket in this server! you already have \`\`1\`\`")  
     .setColor("22BF41");
        if (message.guild.channels.exists("name", "ticket-" + ticketnumber)) return message.channel.send(already); 
	if (message.guild.channels.exists("name", `${newname}-` + ticketnumber)) return message.channel.send(already); 
	   if(!elite) {
                message.guild.createChannel("Elite Tickets ♪..", "category");
            };
	   
        message.guild.createChannel(`ticket-${ticketnumber}`, "text").then(ticketx => {
            let role = message.guild.roles.find("name", "Elite Team ♪..");
            let role2 = message.guild.roles.find("name", "@everyone");
		  ticketx.setParent(elite);
                  elite.setPosition(1);
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
     .setColor("22BF41")
     .setFooter(`Elite Tickety v1.0` , client.user.avatarURL)
     .setTimestamp();
            ticketx.send({
                embed: nonedear
            });
        }).catch(console.error);
   }
	  
  if (message.content.startsWith("-close")) {
	              	   const d11xxx = new Discord.RichEmbed()
     .setDescription(":x: You do not have permission for that command! If you believe this is a mistake please add the role called \`\`Elite Team ♪..\`\` to yourself.")  
     .setColor("22BF41");
	  if(!message.member.roles.find("name", "Elite Team ♪..")) return message.channel.send(d11xxx);
	   	   const d1x = new Discord.RichEmbed()
     .setDescription(`:x: Please only run this command in a ticket channel!`)  
     .setColor("22BF41")
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(d1x);
            	   const d1152354525 = new Discord.RichEmbed()
     .setDescription(`Are you sure you want to close this ticket? The channel will be deleted.\n**Repeat the command to close the ticket.**\nYour request will be voided in 20 seconds.`)  
     .setColor("22BF41");
        message.channel.send(d1152354525)
            .then((m) => {
                const filter = msg => msg.content.startsWith('-close');
                message.channel.awaitMessages(response => response.content === '-close', {
                        max: 1,
                        time: 20000,
                        errors: ['time'],
                    }) 
                    .then((collected) => {
                        message.delete();
                        message.channel.delete();
                    })  
                    .catch(() => {
                      const d11x = new Discord.RichEmbed()
     .setDescription(`:x: Ticket close timed out , the ticket was not closed.`)  
     .setColor("22BF41")
                        m.edit(d11x).then(m2 => {
                        }, 3000);
                    });
            });
    }
 
	if (message.content.startsWith("-rename")) {
	let ticketnumber = message.author.discriminator;
         let newname = message.content.split(' ').slice(1).join(' ');
		              	   const d11x1xx = new Discord.RichEmbed()
     .setDescription(":x: You do not have permission for that command! If you believe this is a mistake please add the role called \`\`Elite Team ♪..\`\` to yourself.")  
     .setColor("22BF41");
	  if(!message.member.roles.find("name", "Elite Team ♪..")) return message.channel.send(d11x1xx);
	   	   const d1dx = new Discord.RichEmbed()
     .setDescription(`:x: Please only run this command in a ticket channel!`)  
     .setColor("22BF41")
	if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(d1dx);
		const usageof = new Discord.RichEmbed()
     .setDescription(`:x: Usage: \`\`-rename <name>\`\``)  
     .setColor("22BF41");
	  if(!newname) return message.channel.send(usageof);
		
		
	if (message.channel.name.startsWith(`${newname}-` + ticketnumber)) {	
	message.channel.setName(`${newname}-` + ticketnumber);
		
		const renamed = new Discord.RichEmbed()
     .setDescription(`:white_check_mark: The channel has been renamed to ` + `\`\`${newname}\`\``)  
     .setColor("22BF41");
		
         message.channel.send(renamed);
	
	}
         
      }
	
});

client.login(process.env.ELITE_TOKEN);
