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

client.on('message', message => {
  let Category = message.content.split(" ").slice(1).join(" ")
  let Elite = message.guild.channels.find('name', `${Category}`)
if(message.content === `${prefix}setcategory`) {
  const nos = new Discord.RichEmbed()
     .setDescription(`:x: This command only for servers`)
     .setColor("22BF41");
  if(!message.channel.guild) return message.channel.send(nos).then(m => m.delete(5000));
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
	  	       const nos = new Discord.RichEmbed()
     .setDescription(`:x: This command only for servers`)
     .setColor("22BF41");
  if(!message.channel.guild) return message.channel.send(nos).then(m => m.delete(5000));
	              	   const d11xxx = new Discord.RichEmbed()
     .setDescription(":x: You do not have permission for that command! If you believe this is a mistake please add the role called \`\`● Élite » Team\`\` to yourself.")  
     .setColor("22BF41");
	  if(!message.member.roles.find("name", "● Élite » Team")) return message.channel.send(d11xxx);
	   	   const d1x = new Discord.RichEmbed()
     .setDescription(`:x: Please only run this command in a ticket channel!`)  
     .setColor("22BF41")
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(d1x);
            	   const d1152354525 = new Discord.RichEmbed()
     .setDescription(`Are you sure you want to close this ticket? The channel will be deleted.\n**Repeat the command to close the ticket.**\nYour request will be voided in 20 seconds.`)  
     .setColor("22BF41");
        message.channel.send(d1152354525)
            .then((m) => {
                message.channel.awaitMessages(response => response.content === '-close', {
                        max: 1,
                        time: 20000,
                        errors: ['time'],
                    }) 
                    .then((collected) => {
                        m.delete();
			m.delete(4000);
                        message.channel.delete();
                    })  
                    .catch(() => {
                      const d11x = new Discord.RichEmbed()
     .setDescription(`:x: Ticket close timed out , the ticket was not closed.`)  
     .setColor("22BF41")
                        m.edit(d11x);
        });
    });
  }

  if (message.content.toLowerCase().startsWith(prefix + `rename`)) {
	let newname = message.content.split(' ').slice(1).join(' ');
	  	       const nos = new Discord.RichEmbed()
     .setDescription(`:x: This command only for servers`)
     .setColor("22BF41");
  if(!message.channel.guild) return message.channel.send(nos).then(m => m.delete(5000));
		              	   const d11x1xx = new Discord.RichEmbed()
     .setDescription(":x: You do not have permission for that command! If you believe this is a mistake please add the role called \`\`● Élite » Team\`\` to yourself.")  
     .setColor("22BF41");
	  if(!message.member.roles.find("name", "● Élite » Team")) return message.channel.send(d11x1xx);
	   	   const d1dx = new Discord.RichEmbed()
     .setDescription(`:x: Please only run this command in a ticket channel!`)  
     .setColor("22BF41")
	if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(d1dx);
		const usageof = new Discord.RichEmbed()
     .setDescription(`:x: Usage: \`\`-rename <name>\`\``)  
     .setColor("22BF41");
	  if(!newname) return message.channel.send(usageof);
		
	message.channel.setName(`ticket-` + newname);
		
		const renamed = new Discord.RichEmbed()
     .setDescription(`:white_check_mark: The channel has been renamed to ` + `\`\`${newname}\`\``)  
     .setColor("22BF41");
		
         message.channel.send(renamed);
	
         
	}
	
	

});



	

client.login(process.env.ELITE_TOKEN);
