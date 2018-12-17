const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const fs = require("fs");
const prefix = "e#";
const dateFormat = require('dateformat');
var AsciiTable = require('ascii-data-table').default
const moment = require("moment");
moment.locale('ar');

client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '521743798682910720').setName("E");
client.channels.find('id', '521743798682910720').setName("El");
client.channels.find('id', '521743798682910720').setName("Eli");
client.channels.find('id', '521743798682910720').setName("Elit");
client.channels.find('id', '521743798682910720').setName("Elite");
client.channels.find('id', '521743798682910720').setName("Elite C");
client.channels.find('id', '521743798682910720').setName("Elite Co");
client.channels.find('id', '521743798682910720').setName("Elite Com");
client.channels.find('id', '521743798682910720').setName("Elite Comm");
client.channels.find('id', '521743798682910720').setName("Elite Commu");
client.channels.find('id', '521743798682910720').setName("Elite Commun");
client.channels.find('id', '521743798682910720').setName("Elite Communi");
client.channels.find('id', '521743798682910720').setName("Elite Communit");
client.channels.find('id', '521743798682910720').setName("Elite Community ♪");
client.channels.find('id', '521743798682910720').setName("Elite Community ♪.");
client.channels.find('id', '521743798682910720').setName("Elite Community ♪..");
  }, 3000);
});


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

  let ar = JSON.parse(fs.readFileSync(`./Data/AutoRole.json`, `utf8`))
client.on('guildMemberAdd', member => {
if(!ar[member.guild.id]) ar[member.guild.id] = {
onoff: 'معطل',
role: 'Members ♪..'
}
if(ar[member.guild.id].onoff === 'معطل') return;
member.addRole(member.guild.roles.find(`name`, ar[member.guild.id].role)).catch(console.error)
})
client.on('message', message => {
if(!message.guild) return
if(!ar[message.guild.id]) ar[message.guild.id] = {
onoff: 'معطل',
role: 'Members ♪..'
}
if(message.content.startsWith(prefix + `autorole`)) {
 const nos = new Discord.RichEmbed()
     .setDescription("**:x: | هذا الأمر فقط للسيرفرات**")
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();	  
  if(!message.channel.guild) return message.channel.send(nos).then(m => m.delete(5000));	
let perms = message.member.hasPermission(`MANAGE_ROLES`)
  const nopermission = new Discord.RichEmbed()
     .setDescription("**:x: | MANAGE_ROLES للأسف لا ... تمتلك صلاحية**")
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
if(!perms) return message.channel.send(nopermission)
  const nopermissionme = new Discord.RichEmbed()
     .setDescription("**:x: | MANAGE_ROLES للأسف أنا لا ... أملك صلاحية*")
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_ROLES'])) return message.channel.send(nopermissionme);
let args = message.content.split(" ").slice(1)
const usage = new Discord.RichEmbed()
     .setDescription(`**: امثله على الأوامر \n${prefix}autorole toggle\n${prefix}autorole setrole [ROLE_NAME]**`)
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
if(!args.join(" ")) return message.channel.send(usage)
let state = args[0]
const ON = new Discord.RichEmbed()
     .setDescription(`**☑ | تم ... تفعيل خاصية الرتبة التلقائية**`)
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
	const OFF = new Discord.RichEmbed()
     .setDescription(`**☑ | تم ... تعطيل خاصية الرتبة التلقائية**`)
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
	
		const NOT = new Discord.RichEmbed()
     .setDescription(`**: مثال على الأمر \n${prefix}autorole setrole [ROLE_NAME]**`)
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
if(!state.trim().toLowerCase() == 'toggle' || !state.trim().toLowerCase() == 'setrole') return message.channel.send(NOT)
if(state.trim().toLowerCase() == 'toggle') {
if(ar[message.guild.id].onoff === 'معطل') return [message.channel.send(ON), ar[message.guild.id].onoff = 'مفعل']
if(ar[message.guild.id].onoff === 'مفعل') return [message.channel.send(OFF), ar[message.guild.id].onoff = 'معطل']
}
if(state.trim().toLowerCase() == 'setrole') {
let newRole = message.content.split(" ").slice(2).join(" ")
		const NOTX = new Discord.RichEmbed()
     .setDescription(`**: مثال على الأمر \n${prefix}autorole setrole [ROLE_NAME]**`)
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
if(!newRole) return message.reply(NOTX)
	
			const CANT = new Discord.RichEmbed()
     .setDescription(`**:interrobang: | ${newRole} لا ... أستطيع وجود هذه الرتبة**`)
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
if(!message.guild.roles.find(`name`,newRole)) return message.channel.send(CANT)
ar[message.guild.id].role = newRole
			const NEW = new Discord.RichEmbed()
     .setDescription(`**☑ | ${newRole} تم ... تغير الرتبة إلى**`)
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
message.channel.send(NEW)
}
  }
if(message.content === prefix + 'autorole info') {
const nos1 = new Discord.RichEmbed()
     .setDescription("**:x: | هذا الأمر فقط للسيرفرات**")
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();	  
  if(!message.channel.guild) return message.channel.send(nos1).then(m => m.delete(5000));
let perms = message.member.hasPermission(`MANAGE_GUILD`)
const nopermission1 = new Discord.RichEmbed()
     .setDescription("**:x: | MANAGE_GUILD للأسف لا ... تمتلك صلاحية**")
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
if(!perms) return message.reply(nopermission1)
		    const nopermissionme = new Discord.RichEmbed()
     .setDescription("**:x: | MANAGE_GUILD للأسف أنا لا ... أملك صلاحية*")
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_GUILD'])) return message.channel.send(nopermissionme);
var embed = new Discord.RichEmbed()
.addField(`AutoRole : :sparkles:  `, `
الحالة : **${ar[message.guild.id].onoff}**
الرتبة : **${ar[message.guild.id].role}**`)
.setColor(000000)
.setAuthor(`${message.author.tag}`, message.author.avatarURL)
.setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
.setTimestamp();
message.channel.send({embed})
}
fs.writeFile("./Data/AutoRole.json", JSON.stringify(ar), (err) => {
if (err) console.error(err)
});
})

client.on('message',async message => {
    if(message.content.startsWith(prefix + "setVoice")) {
	     const nos2 = new Discord.RichEmbed()
     .setDescription("**:x: | هذا الأمر فقط للسيرفرات**")
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();	  
  if(!message.channel.guild) return message.channel.send(nos2).then(m => m.delete(5000));
	const nopermission = new Discord.RichEmbed()
     .setDescription("**:x: | MANAGE_CHANNELS للأسف لا ... تمتلك صلاحية**")
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.channel.send(nopermission);
	    const nopermissionme = new Discord.RichEmbed()
     .setDescription("**:x: | MANAGE_CHANNELS للأسف أنا لا ... أملك صلاحية*")
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.channel.send(nopermissionme);
    			const VOICE = new Discord.RichEmbed()
     .setDescription(`**☑ | تم ... إنشاء الروم بنجاح**`)
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
    message.channel.send(VOICE);
    message.guild.createChannel(`🎤 - Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
      console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName(`🎤 - Voice Online : 「${message.guild.members.filter(m => m.voiceChannel).size}」`)
      },1000);
    });
    }
  });

  client.on('message',async message => {
    if(message.content.startsWith(prefix + "setCount")) {
	    	   const nos3 = new Discord.RichEmbed()
     .setDescription("**:x: | هذا الأمر فقط للسيرفرات**")
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();	  
  if(!message.channel.guild) return message.channel.send(nos3).then(m => m.delete(5000));
  const nopermission = new Discord.RichEmbed()
     .setDescription("**:x: | MANAGE_CHANNELS للأسف لا ... تمتلك صلاحية**")
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.channel.send(nopermission);
	    const nopermissionme = new Discord.RichEmbed()
     .setDescription("**:x: | MANAGE_CHANNELS للأسف أنا لا ... أملك صلاحية*")
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.channel.send(nopermissionme);
   			const COUNT = new Discord.RichEmbed()
     .setDescription(`**☑ | تم ... إنشاء الروم بنجاح**`)
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
	    message.channel.send(COUNT);
    message.guild.createChannel(`👪 - Members Count : [ ${message.guild.members.size} ]` , 'voice').then(c => {
      console.log(`Count Members channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName(`👪 - Members Count : 「${message.guild.memberCount}」`)
      },1000);
    });
    }
  });



  client.on('message',async message => {
    if(message.content.startsWith(prefix + "setTime")) {
	    	     const nos4 = new Discord.RichEmbed()
     .setDescription("**:x: | هذا الأمر فقط للسيرفرات**")
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();	  
  if(!message.channel.guild) return message.channel.send(nos4).then(m => m.delete(5000));
   const nopermission = new Discord.RichEmbed()
     .setDescription("**:x: | MANAGE_CHANNELS للأسف لا ... تمتلك صلاحية**")
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.channel.send(nopermission);
	    const nopermissionme = new Discord.RichEmbed()
     .setDescription("**:x: | MANAGE_CHANNELS للأسف أنا لا ... أملك صلاحية*")
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.channel.send(nopermissionme);
   	const TIME = new Discord.RichEmbed()
     .setDescription(`**☑ | تم ... إنشاء الروم بنجاح**`)
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
	    message.channel.send(TIME);
    message.guild.createChannel("🕐 - Time  00", 'voice').then((c) => {
      console.log(`Time channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
          setInterval(function() {

        var currentTime = new Date(),
        hours = currentTime.getHours() + 3 ,
        minutes = currentTime.getMinutes(),
        seconds = currentTime.getSeconds(),
        years = currentTime.getFullYear(),
        month = currentTime.getMonth(),
        day = currentTime.getDate(),
        week = currentTime.getDay();

        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        var suffix = "AM";
        if (hours >= 12) {
            suffix = "PM";
            hours = hours - 12;
        }
        if (hours == 0) {
            hours = 12;
        }

        c.setName("🕐 - Time : 「" + hours + ":" + minutes  +" " + suffix + "」");
      },1000);
    });
    }
  });


  client.on('message',async message => {
    if(message.content.startsWith(prefix + "setDate")) {
	       const nos5 = new Discord.RichEmbed()
     .setDescription("**:x: | هذا الأمر فقط للسيرفرات**")
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();	  
  if(!message.channel.guild) return message.channel.send(nos5).then(m => m.delete(5000));
        var currentTime = new Date(),
        years = currentTime.getFullYear(),
        month = currentTime.getMonth() + 1,
        day = currentTime.getDate(),
        week = currentTime.getDay();
const nopermission = new Discord.RichEmbed()
     .setDescription("**:x: | MANAGE_CHANNELS للأسف لا ... تمتلك صلاحية**")
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.channel.send(nopermission);
	    const nopermissionme = new Discord.RichEmbed()
     .setDescription("**:x: | MANAGE_CHANNELS للأسف أنا لا ... أملك صلاحية*")
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.channel.send(nopermissionme);
	const DATE = new Discord.RichEmbed()
     .setDescription(`**☑ | تم ... إنشاء الروم بنجاح**`)
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
	    message.channel.send(DATE);
    message.guild.createChannel("📅 - Date " + "「" + day + "-" + month + "-" + years + "」" , 'voice').then(c => {
      console.log(`Date channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName("📅 - Date : " + "「" + day + "-" + month + "-" + years + "」")
      },1000);
    });
    }
  });

client.on('message',async message => {
  var moment = require('moment');
    if(message.content.startsWith(prefix + "setDays")) {
	     const nos6 = new Discord.RichEmbed()
     .setDescription("**:x: | هذا الأمر فقط للسيرفرات**")
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();	  
  if(!message.channel.guild) return message.channel.send(nos6).then(m => m.delete(5000));
   const nopermission = new Discord.RichEmbed()
     .setDescription("**:x: | MANAGE_CHANNELS للأسف لا ... تمتلك صلاحية**")
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.channel.send(nopermission);
	    const nopermissionme = new Discord.RichEmbed()
     .setDescription("**:x: | MANAGE_CHANNELS للأسف أنا لا ... أملك صلاحية*")
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.channel.send(nopermissionme);
  	const DAYS = new Discord.RichEmbed()
     .setDescription(`**☑ | تم ... إنشاء الروم بنجاح**`)
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
	    message.channel.send(DAYS);
    message.guild.createChannel(`Day : ${moment().format('dddd')}` , 'voice').then(c => {
      console.log(`Day channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName(`📅 - Day : 「${moment().format('dddd')}」`);
      },1000);
    });
    }
  });

client.on('message', message => {
if(message.content.startsWith(prefix + "server")){
	     const nos6 = new Discord.RichEmbed()
     .setDescription("**:x: | هذا الأمر فقط للسيرفرات**")
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();	  
  if(!message.channel.guild) return message.channel.send(nos6).then(m => m.delete(5000));
   const nopermission = new Discord.RichEmbed()
     .setDescription("**:x: | ADMINISTRATOR للأسف لا ... تمتلك صلاحية**")
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
    if(!message.guild.member(message.author).hasPermissions('ADMINISTRATOR')) return message.channel.send(nopermission);
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var infoserver  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField(`🆔 Server ID:`, message.guild.id,true)
.addField(`📅 Created On`, message.guild.createdAt.toLocaleString() + `\n\`\`${moment(message.guild.createdAt).fromNow()}\`\`` , true)
.addField(`👑 Owned by`,`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator} [${message.guild.owner.user.id}]`, true)
.addField(`👥 Members [${message.guild.memberCount}]`,`**${message.guild.members.filter(m => m.presence.status !== 'offline').size}** Online`, true)
.addField(`💬 Channels [${message.guild.channels.size}]`,`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' Text | ' + `**${message.guild.channels.filter(m => m.type === 'voice').size}** ` + ' Voice', true)
.addField(`🌍 Others ` , `**Region: ** ` + message.guild.region + "\n**Verification Level: ** " +  message.guild.verificationLevel, true)
.addField(`🔐 Roles [${message.guild.roles.size}]`,`To see a list with all roles use **${prefix}roles**`, true)
.setColor('#000000')
.setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
.setTimestamp()	  
message.channel.sendEmbed(infoserver)

}
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
    if(command === "clear") {
	     const nos = new Discord.RichEmbed()
     .setDescription("**:x: | هذا الأمر فقط للسيرفرات**")
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();	  
  if(!message.channel.guild) return message.channel.send(nos).then(m => m.delete(5000));	
let perms = message.member.hasPermission(`MANAGE_MESSAGES`)
  const nopermission = new Discord.RichEmbed()
     .setDescription("**:x: | MANAGE_MESSAGES للأسف لا ... تمتلك صلاحية**")
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
if(!perms) return message.channel.send(nopermission)
  const nopermissionme = new Discord.RichEmbed()
     .setDescription("**:x: | MANAGE_MESSAGES للأسف أنا لا ... أملك صلاحية*")
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_MESSAGES'])) return message.channel.send(nopermissionme);
     const emoji = client.emojis.find("name", "wastebasket")
    let deleted = args.slice(0).join("");    
    if (deleted == "") {
        message.delete().then
        message.channel.bulkDelete(1000).then(m => m.delete(3000));
} else {
    message.delete().then
    message.delete().then
    message.channel.bulkDelete(deleted);
       message.channel.send("```php\nعدد الرسائل التي تم مسحها: " + deleted + "\n```").then(m => m.delete(3000));
        }    
    }
});

client.on('message', message =>{

if(message.content.startsWith(prefix + `roles`)) {
	     const nos = new Discord.RichEmbed()
     .setDescription("**:x: | هذا الأمر فقط للسيرفرات**")
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();	  
  if(!message.channel.guild) return message.channel.send(nos).then(m => m.delete(5000));	
let perms = message.member.hasPermission(`ADMINISTRATOR`)
  const nopermission = new Discord.RichEmbed()
     .setDescription("**:x: | ADMINISTRATOR للأسف لا ... تمتلك صلاحية**")
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
if(!perms) return message.channel.send(nopermission)
        var 
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});

client.on('message', async message => {
  if(message.author.bot || message.channel.type === 'e#bc') return;
  let args = message.content.split(' ');
  if(args[0] === `e#bc`) {
    const nos = new Discord.RichEmbed()
     .setDescription("**:x: | هذا الأمر فقط للسيرفرات**")
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();	  
  if(!message.channel.guild) return message.channel.send(nos).then(m => m.delete(5000));
     const nopermission = new Discord.RichEmbed()
     .setDescription("**:x: | ADMINISTRATOR للأسف لا ... تمتلك صلاحية**")
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(nopermission);
	   let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
	  const nope = new Discord.RichEmbed()
     .setDescription("**:interrobang: | يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**")
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
  if (!args) return message.channel.send(nope);
	   const broadcast = new Discord.RichEmbed()
     .setDescription(`**:thinking: | هل أنت متأكد من إرسالك البرودكاست ؟ \nمحتوى البرودكاست على : ** ` + `\n\`\`${args}\`\``)
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();  
    let msgCount = 0;
    let errorCount = 0;
    let successCount = 0;
	  const DUDEX = new Discord.RichEmbed()
     .setDescription(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`)
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
	  message.channel.send(broadcast).then(msg => {
  msg.react('✅')
  .then(() => msg.react('❌'))
  .then(() => msg.react('✅'))

  let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
  let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
  let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
  let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
		  	reaction2.on("collect", r => {
	const Cancel = new Discord.RichEmbed()
     .setDescription(`**:x: | تم ... إلغاء البرودكاست**`)
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();  
  message.channel.send(Cancel).then(m => m.delete(5000));
  msg.delete();
	  })
  reaction1.on("collect", r => {
    msg.delete();
    message.channel.send(DUDEX).then(msg => {
      message.guild.members.forEach(m => {
        m.send(`${args}\n\n${m}`).then(() => {
          successCount++;
          msgCount++;
		  const DUDEX1 = new Discord.RichEmbed()
     .setDescription(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`)
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
          msg.edit(DUDEX1);
	  })
        }).catch(e => {
          errorCount++;
          msgCount++;
		  const DUDEX2 = new Discord.RichEmbed()
     .setDescription(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`)
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
          msg.edit(DUDEX2);
        })
        });
      });
    });
  }
});

client.login(process.env.ELITE_TOKEN);
