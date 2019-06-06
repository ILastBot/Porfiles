const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://fozercode.glitch.me/`);
}, 280000);
 
// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {TOKEN, YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const daily = Math.floor(Math.random() * 350) + 10;
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} !`);
          client.user.setActivity("+help | LastBot 🌀",{type: 'playing'});
  
  });


client.on('message', message =>{
  if(message.content === '+ping'){
let start = Date.now(); message.channel.send('**LastBot**').then(message => { 
message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);//لا تغير شي الكود حساس
  });
  }
}); 


client.on('message', function(message) {//Texo
    if(!message.channel.guild) return;
    if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if (message.author.equals(client.user)) return;
    if (!message.content.startsWith(prefix)) return;
   
    var args = message.content.substring(prefix.length).split(' ');//Texo
    switch (args[0].toLocaleLowerCase()) {//Texo
    case "clear" :
    message.delete()
    if(!message.channel.guild) return
    if(message.member.hasPermissions(0x2000)){ if (!args[1]) {//Texo
    message.channel.fetchMessages()
    .then(messages => {
    message.channel.bulkDelete(messages);
    var messagesDeleted = messages.array().length;
    message.channel.sendMessage(' '+ "**```fix\n" + messagesDeleted + " " +  ': عدد الرسائل التي تم مسحها' + "```**").then(m => m.delete(5000));
    })
    } else {
    let messagecount = parseInt(args[1]);
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    message.channel.sendMessage(' '+ "**```fix\n" + args[1] + " " +  ': عدد الرسائل التي تم مسحها' + "```**").then(m => m.delete(5000));
    message.delete(60000);
    }
    } else {
    var manage = new Discord.RichEmbed()
    .setDescription('**ليس لديك الصلاحية :(**')
    .setColor("RANDOM")
    message.channel.sendEmbed(manage)
    return;
    }
    }
    }); //ItzTexo





client.on('message', message => {
if (message.author.bot) return;
     if (message.content  === prefix + "link") {
    const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setThumbnail('https://cdn.glitch.com/548ce615-2ad0-4e43-a1d8-16a0f3e68be0%2Fimage.png?1558210263214')//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
.setTitle('**Click Here To Invite The Bot Your Server 🌀**')
.setURL('https://discordapp.com/api/oauth2/authorize?client_id=575656961949958165&permissions=8&scope=bot')
message.channel.send({embed});
    }
});


client.on("message", (message) => {
if (message.content.startsWith("+rv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
message.channel.sendMessage('**تـم إنـشاء روم كـتابـي**')
   
}
});


client.on("message", (message) => {
if (message.content.startsWith("+rc")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('**تـم إنـشاء روم كـتابـي**')
 
}
});


client.on('message', function(msg) {
    const prefix = '+'
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`**${msg.guild.name}**`)
      .addField('🌐**__نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`**[${msg.guild.members.filter(m=>m.presence.status == 'online').size}]**`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      .setFooter('LastBot ','https://media.discordapp.net/attachments/581879213338918912/584823027074596943/Untitled-1.png?width=376&height=376') 
      msg.channel.send({embed:embed});
    }
  });


client.on('message', message => {
    var prefix = "+";
     if(message.content === prefix + "mc") {
     if(!message.channel.guild) return message.reply('** This command only for servers**');
                    
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
         message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false
                    
    }).then(() => {
             message.reply("**__تم تقفيل الشات__ ✅ **")
       });
    }
    if(message.content === prefix + "unmc") {
    if(!message.channel.guild) return message.reply('** This command only for servers**');
                    
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
        message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
                    
         }).then(() => {
          message.reply("**__تم فتح الشات__✅**")
      });
  }
                           
});


client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
    .setColor(0x5500ff)
    .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
        guild.owner.send(embed)
  });


client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**:rose:Welcome To Server :rose:** 
:crown:**Name**  ${member}:crown:  
**انت العضو رقم** **${member.guild.memberCount}** `) 
}).catch(console.error)
})


client.on('message' , message => {
  if (message.author.dark) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
      /*let banlog = client.channels.find("name", "ban-log");
  if(!banlog) return message.reply("I've detected that this server doesn't have a ban-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الباند**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني ابند شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);
  message.channel.sendMessage("**لقد تم اعطاء الباند الي شخص بنجاح** ✅");
}
});


client.on("message", message => {
if(message.content.startsWith(prefix + `contact`)){
if(message.author.bot || message.channel.type == 'dm') return;
let args = message.content.split(" ").slice(1);
let msg = args.join(' ');
let dev = client.users.get("480114808444682271"); //Your id
if(!args) return message.reply("يجب كتابة الرسالة");
dev.send(`• | User: **${message.author.tag}**\n\n• | Message: **${msg}**`).then(() =>{
message.channel.send(`Your message has been successfully delivered to the bot owner`)
}).catch(console.error);
}
});



client.on('message', async message => {
 
if(message.content.startsWith( prefix + 'invite')) {
        let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id;
        let Tag = message.mentions.users.first() ? message.mentions.users.first().tag : message.author.tag;
        let Username = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;
        let Avatar = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL;
       
        message.guild.fetchInvites().then(invs => {
            let member = client.guilds.get(message.guild.id).members.get(oi);
            let personalInvites = invs.filter(i => i.inviter.id === oi);
            let urll = invs.filter(i => i.inviter.id === oi);
            let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);
            let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
            let inviteCode = personalInvites.reduce((p, v) => v.code);
            let possibleInvites = [['Total de membros recrutados:']];
            possibleInvites.push([inviteCount, inviteCode]);
            let user = message.mentions.users.first() || message.author;
            let mem = message.guild.member(user);
            let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
            let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
           
            var inviteInfo = new Discord.RichEmbed()
            .setTitle(`:incoming_envelope: **[INVITE INFO]** ${Username}`)
            .setThumbnail(client.user.avatarURL)
            .addField('**الدعوات**', `**➥** [ شخص **${Number(inviteCount)}** ]`)
            .addField('**تم الانضمام للسيرفر من**', `**➥** [ يوم **${daysJoined.toFixed(0)}** ]`)
            .addField('**رابط دعوة الانضمام**', `**➥** [ **https://discord.gg/${inviteCode || 'Zm2U6we'}** ]`)
            .setColor('ORANGE')
            .setTimestamp()
            .setFooter(Tag, Avatar)
           
            message.channel.send(inviteInfo);
            });
    };
});


client.on('message',async message => {
  var room;
  var title;//HactorMC
  var duration;//HactorMC
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {
     //return message.channel.send('**في مشكله ببعض الاساسيات من فضلك انتظر شوي**');
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`**اكتب اسم الروم**`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,//HactorMC
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name', collected.first().content);
        if(!room) return message.channel.send('**لم اقدر علي ايجاد الروم | اعد المحاوله لاحقا**');
        room = collected.first().content;
        collected.first().delete();
        msgg.edit('**اكتب مدة القيف اواي بالدقائق**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,//HactorMC
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit(':eight_pointed_black_star:| **اكتب على ماذا تريد القيف اواي**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setAuthor(message.guild.name, message.guild.iconURL)
                  .setTitle(title)
                  .setDescription(`المدة : ${duration / 60000} دقائق`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**لم يتم التحديد**';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('انتهى القيف اواي !',`الفائز هو : ${gFilter}`)
                       .setFooter(message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msgg.edit(`:heavy_check_mark:| **تم اعداد القيف اواي**`);
                } catch(e) {
                  msgg.edit(`:heavy_multiplication_x:| **لم اقدر علي اعداد القيف اواي بسبب عدم توفر البرمشن المطلوب**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});


client.on("reachLimit", (limit)=> {
  let log = limit.guild.channels.find( channel => channel.name === "security-log");
  log.send(limit.user.username+"\** سيرفر بيتهكر ! ** ");
  limit.guild.owner.send(limit.user.username+"\** سيرفرك بيتهكر ! ** ")
  limit.member.roles.map(role => {
    limit.member.removeRole(role.id)
    .catch(log.send)
  });
});


client.on("message", (message) => {
    /// ItzTexo
   if (message.content.startsWith("+new")) {     /// ItzTexo
        const reason = message.content.split(" ").slice(1).join(" ");     /// ItzTexo
        if (!message.guild.roles.exists("name", "Last Team")) return message.channel.send(`**و اعطيها للبوت لتشغيل التكت __Last Team__ قم بعمل رتبة اسمها**`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ItzTexo
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Last Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    /// ALPHA CODES
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: **تم انشاء تذكرتك, #${c.name}.**`);
            const embed = new Discord.RichEmbed()
                .setColor(`RANDOM`)
                .addField(`Hey ${message.author.username}!`, `**تم فتح التذكرة الرجاء الانتضار حنى يجي الشريف**`)
                .setThumbnail(`${message.author.avatarURL}`) 
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("+close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`**__+confirm__** **لو انك متاكد لقفلك لتدكرت سوي**`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === '+confirm', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })    /// ItzTexo
                   .then((collected) => {
                       message.channel.delete();
                   })    /// ItzTexo
                   .catch(() => {
                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});
 



var id = ['480114808444682271'] //تذكر إذا كنت تبي تضيف شخص معاك حط فاصله وبعدين العلامه '
var initcmd = '+'
const developers = id
const adminprefix = initcmd;
client.on('message', message => {
    var argresult = message.content.split(' ').slice(2).join(" ")
      if (!developers.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'vip ply')) {
    if (!argresult) return message.channel.send(':no_entry: | يرجى كتابة أي شيء بعد ألأمر')
    client.user.setGame(argresult);
      message.channel.send("**:white_check_mark: | The Playing Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else
  if (message.content.startsWith(adminprefix + 'vip wat')) {
        if (!argresult) return message.channel.send(':no_entry: | يرجى كتابة أي شيء بعد ألأمر')
 
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send("**:white_check_mark: | The Watching Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else
  if (message.content.startsWith(adminprefix + 'vip lis')) {
        if (!argresult) return message.channel.send(':no_entry: | يرجى كتابة أي شيء بعد ألأمر')
 
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send("**:white_check_mark: | The Listening Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else
  if (message.content.startsWith(adminprefix + 'vip stream')) {
        if (!argresult) return message.channel.send(':no_entry: | يرجى كتابة أي شيء بعد ألأمر')
 
    client.user.setGame(argresult, "https://www.twitch.tv/fadi_games2");
      message.channel.send("**:white_check_mark: | The Streaming Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  }
  if (message.content.startsWith(adminprefix + 'vip username')) {
        if (!argresult) return message.channel.send(':no_entry: | يرجى كتابة أي شيء بعد ألأمر')
 
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'vip avatar')) {
      if (!argresult) return message.channel.send(':no_entry: | يرجى كتابة أي شيء بعد ألأمر')
 
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});


client.on('message', function(message) { /// Snow Codes
    if (!message.member.hasPermissions(['ADMINISTRATOR'])){ /// Snow Codes
            let command = message.content.split(" ")[0]; /// Snow Codes
        if(message.content.includes('discord.gg')){ /// Snow Codes
        message.reply (' ') /// Snow Codes
           if(!message.channel.guild) return message.reply('** This command only for servers**'); /// Snow Codes
     message.member.addRole(message.guild.roles.find('name', 'Muted'));  /// Snow Codes
    const embed500 = new Discord.RichEmbed() /// Snow Codes
      .setTitle("❌ | تمت معاقبتك") /// Snow Codes
            .addField(`** لقد قمت بمخالفة قوانين السيرفر من خلال نشر سيرفرات اخرى  **` , `**ان كأن هاذه الميوت عن طريق الخطأ تواصل مع احد اعضاء الادارة**`) /// Snow Codes
      .addField(`Snow`,`ItzTexo`) 
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`) 
            .setAuthor(message.author.username, message.author.avatarURL) 
        .setFooter(`${message.guild.name} Server`)
     message.channel.send(embed500) 
    
        
    }
    }
})


client.on('message', msg => {
    if (msg.content === 'هلا') {
      msg.reply('**هلا بك**');
    }
  });


client.on('message', msg => {
    if (msg.content === 'السلام عليكم') {
      msg.reply('**و عليكم السلام**');
    }
  });







client.on('message', message => { 
let PREFIX = '+'
    if (message.content.startsWith(PREFIX + 'emolist')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('➠ Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});
 
 
client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {  // Alpha Codes Ghost
      msg.delete(3500);
      message.delete(3500);
    });
   if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
    if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let mention = message.mentions.members.first();
    if(!mention) return  message.channel.send('').then(msg => {  // Alpha Codes Ghost
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(mention.id === message.author.id) return message.channel.send('**:x:You Cannot give mute to your self**').then(msg => { // Alpha Codes Ghost
	
      message.delete(3500);
    });
   
    if(mention.hasPermission('ADMINISTRATOR')) return message.channel.send(`**:x: لا يمكن آعطاء ميوت لادارة السيرفر**`); 
 
    if(message.guild.member(mention).roles.find('name', 'Muted')) return message.channel.send(`**:information_source: ${mention.user.username} Already Muted**`);// Alpha Codes Ghost
 
   
    if(mention.position >= message.guild.member(message.author).positon) return message.channel.send('You Donot Have Permission **Muted_Members** ').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
   
    if(mention.positon >= message.guild.member(client.user).positon) return message.channel.send('I Donot Have Permission **Muted_Members**').then(msg => { // Alpha Codes Ghost
      msg.delete(3500);
      message.delete(3500); 
    });
   
    let duration = args[2];
    if(!duration) message.channel.send(`**:hash: You Can Use ${prefix}mute @user Time Reason**`).then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(isNaN(duration))  message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let reason = message.content.split(" ").slice(3).join(" "); // Alpha Codes Ghost
    if(!reason) reason = " [ **لم يذكر لماذا** ] ";
 
    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('**تم آعطائك ميوت**')
    .addField('**__السيرفر__**',[ message.guild.name ]) 
    .addField('**__تم آعطائك ميوت بواسطة__**', [ message.author ])
    .addField('**__آلسبب__**',reason)
    .addField('**__وقت الميوت__**',duration) // Alpha Codes Ghost
 
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0 
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false,  // Alpha Codes Ghost
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      }); 
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed); // Alpha Codes Ghost
      message.channel.send(`**:white_check_mark: ${mention.user.username}  Muted! :zipper_mouth:  **  `);
      mention.setMute(true); 
    });
    setTimeout(() => {
      if(duration === 0) return;
      mention.setMute(false);
      mention.removeRole(role)
    },duration * 60000); 
  } // Alpha Codes Ghost
});
client.on('message', async message => {
    let mention = message.mentions.members.first();
let command = message.content.split(" ")[0];
     command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);  
if(command === `unmute`) {2
  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**You Donot HavePermission Mute_Members**").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I donot Have Permission Mute_Members**").then(msg => msg.delete(6000))
 
  let kinggamer = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
     if(!kinggamer) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500); 
    }); // Alpha Codes Ghost
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !kinggamer.roles.has(role.id)) return message.channel.sendMessage(`**:information_source:${mention.user.username} لقد تم فك الميوت عنه مسبقا**`)
 
  await kinggamer.removeRole(role) 
  message.channel.sendMessage(`**:white_check_mark: ${mention.user.username}  Unmuted! **`);
 
  return;
 
  }
 
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
 

client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**https://media.discordapp.net/attachments/576168118833905676/578981786613448734/kick_metion.png?width=1029&height=579**");   if (!message.guild.member(user)
  .kickable) return message.reply("**This User Is Have High Role**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});

client.on('message', message => {
    if (message.content.startsWith("+bans")) {  // Alpha Codes Ghost
        message.guild.fetchBans()
        .then(bans => message.channel.send(`**__${bans.size}__ Banned**`))
  .catch(console.error);
}
});


client.on('message',function(message) {
    let prefix = "+";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`**${args}**`); 
}
});


client.on('message', async msg => { 
	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(prefix)) return undefined;
	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)
	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('يجب ان تكون بروم صوتي ');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			
			return msg.channel.send('ما عندي صلاحيات للدخول في هاد الرروم');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('ما عندي صلاحيات للتكلم في هاد الرروم');
		}

		if (!permissions.has('EMBED_LINKS')) {
			return msg.channel.sendMessage("**`EMBED LINKS يجب ان اتوفر برمشن **")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id);
				await handleVideo(video2, msg, voiceChannel, true);
			}
			return msg.channel.send(` **${playlist.title}** تم الضافة الي قائمة التشغبل`);
		} else {
			try {

				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
					const embed1 = new Discord.RichEmbed()
			        .setDescription(`**الرجاء اختيار رقم المقطع** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)

					.setFooter("Speed Bot")
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
					
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('لم يتم إختيآر اي مقطع صوتي');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(':X: لا يتوفر نتآئج بحث ');
				}
			}

			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === `skip`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('مافي اي مقطع لتجاوزه');
		serverQueue.connection.dispatcher.end('تم تجاوز المقطع');
		return undefined;
	} else if (command === `stop`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لمافي اي مقطع لايقافه');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('تم إيقاف المقطع');
		return undefined;
	} else if (command === `vol`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يوجد شيء شغآل.');
		if (!args[1]) return msg.channel.send(`:loud_sound: مستوى الصوت **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
		return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
	} else if (command === `np`) {
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي فالعمل.');
		const embedNP = new Discord.RichEmbed()
	.setDescription(`:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`)
		return msg.channel.sendEmbed(embedNP);
	} else if (command === `queue`) {
		
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي فالعمل.');
		let index = 0;
		
		const embedqu = new Discord.RichEmbed()

.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`)
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('تم إيقاف الموسيقى مؤقتا!');
		}
		return msg.channel.send('لا يوجد شيء حالي ف العمل.');
	} else if (command === "resume") {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('استأنفت الموسيقى بالنسبة لك !');
		}
		return msg.channel.send('لا يوجد شيء حالي في العمل.');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	
//	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائم!`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`بدء تشغيل : **${song.title}**`);
}

client.on('guildCreate', guild => {
    const embed = new Discord.RichEmbed()
.setColor("BLUE")
.setTitle('Click Here To Add Bot!')
.setURL('https://discordapp.com/api/oauth2/authorize?client_id=575656961949958165&permissions=8&scope=bot')
.setDescription(`**
New Server Add LastBot 🌀
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`);
client.channels.get("583358421332525178").sendEmbed(embed)
});



client.on('guildDelete', guild => {
    const embed = new Discord.RichEmbed()
.setColor("RED")
.setTitle('Click Here To Add Bot!')
.setURL('https://discordapp.com/api/oauth2/authorize?client_id=575656961949958165&permissions=8&scope=bot')
.setDescription(`**
Server kicked LastBot 🌀
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`);
client.channels.get("583358444686278677").sendEmbed(embed)
});


client.on("message", message => {
	var prefix = "+";
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك الصلاحية__**');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: Mention User**' );
		if( !args[1] ) return message.reply( '**:x: Write Name Of Role To Remove it From The User**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: Mention Role To Remove it From The User**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: Success Removed Role [ '+role1.name+' ] From [ '+args[0]+' ]**');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: Succes Removed Rank [ '+role1.name+' ]  From All**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: Succes Removed Rank [ '+role1.name+' ] From All Bots**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: Succes Removed Rank [ '+role1.name+' ] From All Humans**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: Mention User**' );
		if( !args[1] ) return message.reply( '**:x: Write Name Of Role To Give It To User**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: Write Name Of Role To Give It To User**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark:Success Gived Rank [ '+role1.name+' ] To [ '+args[0]+' ]**');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: Success Gived All Rank [ '+role1.name+' ]**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: Success Gived All Bots Rank [ '+role1.name+' ] **');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: Success Gived All Humans Rank [ '+role1.name+' ]**');
		} 
	} 
});


client.on('message', puz => {
    if (puz.content == "+lez") {
        var x = ["ما هي حاسة الشم عند الثعبان ؟",
"ما هو الشي الذي يكسو الناس و هو عار بدون ملابس ؟",
"ما هو الشي الذي لا يجري و لا يمشي ؟",
"ما هو إسم الشهر الميلادي الذي إذا حذفت أوله , تحول إلى إسم فاكهه ؟",
"ما هو الشي الذي لا يدخل الإ إذا ضرب على رأسه ؟",
"ما هو الشيء الذي اسمه على لونه ؟",
"ما هو الشي الذي كلما زاد نقص ؟",
"ما هي التي تحرق نفسها لتفيد غيرها ؟",
"كله ثقوب و مع ذلك يحفظ الماء ؟",
"ما هو الذي لحمه من الداخل و عظمه من الخارج ؟",
"يستطيع ان يخترق الزجاج من دون كسره .. فما هو ؟",
"ما هو الحيوان الدي لا يلد ولا يبيض",
"ما هو الذي يلف حول الغرفه دون أن يتحرك ؟",
];
        var x2 = ['اللسان',
        "الابره",
        "الماء",
        "تموز",
        "المسمار",
        "البيضة",
        "العمر",
        "الشمعة",
        "الاسفنج",
        "السلحفاة",
        "الضوء",
        "الذكر",
        "الحـائـط",
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        puz.channel.send(`السؤال هو:  __**${x[x3]}**__
لديك 20 ثانية للاجابة`).then(msg1=> {
            var r = puz.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return puz.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            `)
        })
        
        r.then((collected)=> {
            puz.channel.send(`${collected.first().author} لقد قمت بحل اللغز في الوقت المناسب  `);
        })
        })
    }
})

var Za7f = [
  "**صورة وجهك او رجلك او خشمك او يدك**.",
  "**اصدر اي صوت يطلبه منك الاعبين**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
  "**ذي المرة لك لا تعيدها**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**صور اي شيء يطلبه منك الاعبين**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**سو مشهد تمثيلي عن مصرية بتولد**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**ذي المرة لك لا تعيدها**.",
  "**تعطي اي شخص 5 الاف كرديت**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
  "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
  "**اتصل على امك و قول لها انك تحبها :heart:**.",
  "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
  "**قل لواحد ماتعرفه عطني كف**.",
  "**منشن الجميع وقل انا اكرهكم**.",
  "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
  "**روح المطبخ و اكسر صحن او كوب**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**قول لاي بنت موجود في الروم كلمة حلوه**.",
  "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
  "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من الس��رفر**.",
  "**قول قصيدة **.",
  "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**اول واحد تشوفه عطه كف**.",
  "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
  "**تاخذ عقابين**.",
  "**قول اسم امك افتخر بأسم امك**.",
  "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
  "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
  "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
  "**تتصل على الوالده  و تقول لها خطفت شخص**.",
  "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
  "**❤❤❤❤تصل على الوالده  و تقول لها  احب وحده**.",
    "**تتصل على شرطي تقول له عندكم مطافي**.",
    "**خلاص سامحتك**.",
    "** تصيح في الشارع انا  مجنوون**.",
    "** تروح عند شخص تقول له احبك**.",
 
];
 
client.on('message', message => {
 if (message.content.startsWith("+3ikab")) {
              if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
 .setThumbnail(message.author.avatarURL)
.addField('discord bot' ,
`${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
message.channel.sendEmbed(embed);
console.log('[عقاب] Send By: ' + message.author.username)
  }
});



const secre = [
  "**لو خيروك بين العيش وحدك في جزيرة كبيرة منعزلة مع أكبر درجات الرفاهية وبين العيش في مكان قديم ولكن مع أصدقائك المقربين**.",
  "**لو خيروك بين فقدان ذاكرتك والعيش مع أصدقائك وأقربائك أو بقاء ذاكرتك ولكن العيش وحيد**.",
  "**للو خيروك بين تناول الخضار والفاكهة طوال حياتك أو تناول اللحوم**.",
  "**لو خيروك بين رؤية الأشباح فقط أو سماع صوتها فقط**.",
  "**لو خيروك بين القدرة على سماع أفكار الناس أو القدرة على العودة في الزمن للخلف**.",
  "**لو خيروك بين القدرة على الاختفاء أو القدرة على الطيران**.",
  "**لو خيروك بين أن تعيش 5 دقائق في الماضي أو أن تعيشها في المستقبل**.",
  "**لو خيروك بين 5 ملايين دولار أو 5 ملايين لحظة سعادة حقيقيةا**.",
  "**لو خيروك بين الاعتذار عن خطأ اقترفته أو أن يقدم لك شخص أخطأ في حقق اعتذار**.",
  "**لو خيروك بين الحقد أو المسامحة**.",
  "**لو خيروك بين إنقاذ نفسك أو إنقاذ شخص وقد يعرضك ذلك للأذى**.",
  "**لو خيروك بين أن تعيش في القرن الرابع عشر أو القرن الحالي**.",
  "**لو خيروك بين امتلاك سرعة الفهد أو دهاء الثعلب**.",
  "**لو خيروك بين أن تحصل على درجة كاملة في كامل اختباراتك القادمة والسابقة أو أن تسافر إلى بلد تحبه**.",
  "**لو خيروك بين العيش بجانب الجبال والحدائق والأشجار أو العيش بجانب البحر**.",
  "**لو خيروك بين تحقيق 3 أمنيات (لا تتعلق بأشخاص) أو اختيار 3 أشخاص للعيش معهم طوال حياتك**.",
  "**لو خيروك بين النوم في غابة مظلمة أو على ظهر سفينة في يوم عاصف**.",
  "**لو خيروك بين المال أو الجمال**.",
  "**لو خيروك بين المال أو الذكاء**.",
  "**لو خيروك بين المال أو الصحة**.",
  "**لو خيروك بين الجمال أو الذكاء**.",
  "**لو خيروك بين الذكاء أو الصحة**.",
  "**لو خيروك بين إرسال رسالة صوتية لأمك مدة دقيقة كاملة لا تحتوي إلا على صراخك وخوفك، أو كسر بيضة نيئة على رأسك**.",
]
 
 
 client.on('message', message => {
   if (message.content.startsWith("+lk")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
 
   .setThumbnail(message.author.avatarURL)
 .addField('لعبه لو خيروك' ,
  `${secre[Math.floor(Math.random() * secre.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});


client.on('message', async message => {
      if (message.author.bot || message.channel.type === 'dm') return;
      if (message.content.startsWith(prefix + "steam")) {
          let args = message.content.split(" ");
          if (!args[1]) return;
          let i = new Discord.RichEmbed();
          i.setColor("#36393e");
          let o = await message.channel.send(`**:information_source: | Collecting data.. please wait.**`);
          require("steam-search").getFirstGameInfo(args.slice(1).join(" "), async function (data, err) {
              if (data !== "no") {
                  i.setThumbnail(data.image);
                  i.addField('• General', `→ Name: \`${data.title}\`\n→ Price: \`${data.price.includes("$") ? "$" + data.price.split("$")[1] : data.price}\`\n→ Release \`${pretty(Date.now() - new Date(data.release).getTime())}\``);
                  i.setFooter("Steam | LastBot.", "https://cdn.freebiesupply.com/images/large/2x/steam-logo-transparent.png");
  
                  await o.delete().catch(e => {});
                  await message.channel.send(i);
              } else {
                  await o.delete().catch(e => {});
                  return message.channel.send(`**:information_source: | Can\'t found any game with name : \`${args.slice(1).join(" ")}\`**`);
              }
          })
      }
  });


client.on('message', message => {
     if (message.content === (prefix + "roler")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .setDescription('')
  .setAuthor(message.author.username, message.author.avatarURL) 
  message.channel.sendEmbed(embed);
    }
});
client.on("message", message => {
    if (message.content === (prefix + "addrole")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
 للحذف أكتب الأمر التالي
${prefix}rolerRemove @mention اسم الرتبة
وللأضافة :
${prefix}role @mention اسم الرتبة
ويدعم كذلك :
لأعطاء الرتبة للكل
${prefix}role all اسم الرتبة 
لأعطاء الرتبة للبوتات
${prefix}role bots اسم الرتبة
لأعطاء الرتبة للبشريين
${prefix}role humans اسم الرتبة

   `)
.setAuthor(message.author.username, message.author.avatarURL) 
   message.author.sendEmbed(embed)
   
   }
   }); 

  client.on('message', message => {
const prefix = '+' 
    if(message.content === prefix + 'ccolor') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**');
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "1",
                    color: "#a70e02",
                    permissions: []
     })
           message.guild.createRole({
                  name: "2",
                    color: "#e56e06",
                    permissions: []
     })
                message.guild.createRole({
                  name: "3",
                    color: "#e5b206",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "4",
                    color: "#d8e506",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "5",
                    color: "#ade506",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "6",
                    color: "#77bb1b",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "7",
                    color: "#319014",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "8",
                    color: "#1adb33",
                    permissions: []
     })
                           message.guild.createRole({
                  name: "9",
                    color: "#10d59b",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "10",
                    color: "#57e5b9",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "11",
                    color: "#57e5cd",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "12",
                    color: "#4bcec3",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "13",
                    color: "#31c6c9",
                    permissions: []
     })
                          message.guild.createRole({
                  name: "14",
                    color: "#20c7d9",
                    permissions: []
     })
                          message.guild.createRole({
                  name: "15",
                    color: "#1493cc",
                    permissions: []
     })
                               message.guild.createRole({
                  name: "16",
                    color: "##147fcc",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "17",
                    color: "#43067c",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "18",
                    color: "#360564",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "19",
                    color: "#270349",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "20",
                    color: "#fa04a1",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "21",
                    color: "#ef069b",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "22",
                    color: "#c30781",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "23",
                    color: "#a80871",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "24",
                    color: "#970966",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "25",
                    color: "#7f0956",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "26",
                    color: "#f00d00",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "27",
                    color: "#f03900",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "28",
                    color: "#f05f00",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "29",
                    color: "#f08f00",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "30",
                    color: "#f0d900",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "31",
                    color: "#d9f000",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "32",
                    color: "#b8f000",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "33",
                    color: "#8ff000",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "34",
                    color: "#59f000",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "35",
                    color: "#59f000",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "36",
                    color: "#00f07d",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "37",
                    color: "#00f0b5",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "38",
                    color: "#00f0e2",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "39",
                    color: "#00b4f0",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "40",
                    color: "#0059f0",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "41",
                    color: "#6b030d",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "42",
                    color:"#4d00f0" ,
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "43",
                    color: "#7a00f0",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "44",
                    color: "#bc0bb3",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "45",
                    color: "#fc31e0",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "46",
                    color: "#fc31c4",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "47",
                    color: "#fc3195",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "48",
                    color: "#fe064f",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "49",
                    color: "#fe0654",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "50",
                    color: "#001419",
                    permissions: []
     })                     
          message.channel.sendMessage({embed: new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
     .setColor('#502faf').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription(':white_check_mark: ``يتم انشاء الالوان``')});
  }
    });


  client.on('message', async message => {
	  if (!message.guild || message.author.bot) return;
      if (message.author.bot) return;
  
  
      let command = message.content.split(" ")[0].slice(prefix.length);
      let args = message.content.split(" ").slice(1);
      if (!message.content.toLowerCase().startsWith(prefix)) return;
  
      if (command == 'dcolor') {
          if (!message.member.hasPermission("ADMINISTRATOR")) return;
          message.channel.send(`**:white_check_mark: » يتم الحدف**`).then(async m => {
              await message.guild.roles.forEach(role => {
                  if (/^\d+$/gi.test(role.name)) {
                      role.delete();
                  }
              });
              m.edit(`**:white_check_mark: » يتم الحدف **`)
          });
      }
  });


client.on('message', message => {
            let args = message.content.split(' ').slice(1);
            if(message.content.split(' ')[0] == `${prefix}color`){
            const embedd = new Discord.RichEmbed()
            .setFooter('Requested by '+message.author.username, message.author.avatarURL)
            .setDescription(`**لا يوجد لون بهذا الأسم ** ❌ `)
            .setColor(`ff0000`)
           
            if(!isNaN(args) && args.length > 0)
           
           
            if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);
           
           
            var a = message.guild.roles.find("name",`${args}`)
             if(!a)return;
            const embed = new Discord.RichEmbed()
           
            .setFooter('Requested by '+message.author.username, message.author.avatarURL)
            .setDescription(`**Done , تم تغير لونك . ✅ **`)
           
            .setColor(`${a.hexColor}`)
            message.channel.sendEmbed(embed);
            if (!args)return;
            setInterval(function(){})
               let count = 0;
               let ecount = 0;
            for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("name",`${x}`))
           
            }
             message.member.addRole(message.guild.roles.find("name",`${args}`));
           
           
            }
            });





client.on('message', message => { 
    const mm = message.mentions.members.first() || message.member;
    if(message.content.startsWith(prefix + "colors")){
        const embed = new Discord.RichEmbed()
            .setTitle('**                                                          __قائمة الالوان__**')
    .setImage('https://1.top4top.net/p_1251f3agh1.png')//Texo Colors
        .setColor("RANDOM")
        .setFooter(`Requested By : ${message.author.tag}`, message.author.avatarURL)
                  .setFooter('LastBot','https://3.top4top.net/p_124815bxe1.png') 
        message.channel.send(embed);
    }
});


client.on('message', message => { 
    const mm = message.mentions.members.first() || message.member;
    if(message.content.startsWith(prefix + "avatar")){
        const embed = new Discord.RichEmbed()
        .setAuthor(mm.user.tag, mm.user.avatarURL)
        .setTitle("Avatar Link")
        .setURL(mm.user.avatarURL)
        .setColor("RANDOM")
        .setImage(mm.user.avatarURL)
        .setFooter(`Requested By : ${message.author.tag}`, message.author.avatarURL)
        message.channel.send(embed);
    }
});



console.log("Welcome Again !");

client.on('ready', () => {
    client.user.setStatus('idle');
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**
                حياك الله 
       خش وضيف البوت في سيرفرك بتنورنا كل شيء حلو موجود
         بعد عيني الرابط تحت

                                 [https://discord.gg/aPdBbr] **`)
}).catch(console.error)
})

client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**
                 حياك الله  
       خش بتنور ناكل شيء حلو موجود 
        بعد عيني الرابط تحت
 
                                 [https://discord.gg/aPdBbr]**`)
}).catch(console.error)
})


 

client.on('message', message => {
if (message.author.x5bz) return;
if (!message.content.startsWith(prefix)) return;

let command = message.content.split(" ")[0];
command = command.slice(prefix.length);

let args = message.content.split(" ").slice(1);

if (command == "ban") {
             if(!message.channel.guild) return message.reply('** هذا الأمر شغال فقط في السيرفرات**');
       
if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("** ` BAN_MEMBERS ` انت ليس لديك خاصية **");
if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("** ` BAN_MEMBERS ` البوت لا يملك خاصية**");
let user = message.mentions.users.first();
let reason = message.content.split(" ").slice(2).join(" ");
if (message.mentions.users.size < 1) return message.reply("**منشن الشخص **");
if(!reason) return message.reply ("**اكتب السبب**");
if (!message.guild.member(user)
.bannable) return message.reply("**رتبه العضو اعلي من البوت لا يمكن طرده**");

message.guild.member(user).ban(7, user);

const banembed = new Discord.RichEmbed()
.setAuthor(`BANNED!`, user.displayAvatarURL)
.setColor("RANDOM")
.setTimestamp()
.addField("**الشخص المبند**",  '**[ ' + `${user.tag}` + ' ]**')
.addField("**من قبل:**", '**[ ' + `${message.author.tag}` + ' ]**')
.addField("**السبب:**", '**[ ' + `${reason}` + ' ]**')
client.channels.find("name",'logs').send('embed')
};
});


client.on('message', message => {
if (message.author.x5bz) return;
if (!message.content.startsWith(prefix)) return;

let command = message.content.split(" ")[0];
command = command.slice(prefix.length);

let args = message.content.split(" ").slice(1);

if (command == "kick") {
             if(!message.channel.guild) return message.reply('** هذا الأمر شغال فقط في السيرفرات**');
       
if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("** ` KICK_MEMBERS ` انت ليس عندك خاصية **");
if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("** ` KICK_MEMBERS ` البوت لا يملك خاصية **");
let user = message.mentions.users.first();
let reason = message.content.split(" ").slice(2).join(" ");
if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
if(!reason) return message.reply ("**اكتب السبب**");
if (!message.guild.member(user)
.kickable) return message.reply("**لا يمكن طرد العضو رتبته اعلي من البوت.**");

message.guild.member(user).kick();

var embed = new Discord.RichEmbed()
.setAuthor(`KICKED!`, user.displayAvatarURL)
.setColor("RANDOM")
.setTimestamp()
.addField("**الشخص المطرود :**",  '**[ ' + `${user.tag}` + ' ]**')
.addField("**من قبل:**", '**[ ' + `${message.author.tag}` + ' ]**')
.addField("**السبب:**", '**[ ' + `${reason}` + ' ]**')
client.channels.find("name",'logs').send(embed)
};
});



client.on('message',async message => {
 
  if(message.content.startsWith(prefix + "setvoice")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('✅| **تم عمل الروم بنجاح**');
  message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(function() {
      c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
    },1000);
  });
  }
});
 
client.on('message',async message => {
  if(message.content.startsWith(prefix + "setmember")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('✅| **تم عمل الروم بنجاح**');
  message.guild.createChannel(`Members Count : [ ${message.guild.members.size} ]` , 'voice').then(c => {
    console.log(`Count Members channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(function() {
      c.setName(`Members Count : [ ${message.guild.members.size} ]`)
    },1000);
  });
  }
});
 
 
client.on('message',async message => {
  if(message.content.startsWith(prefix + "settime")) {
  if(!message.guild.member(message.author).hasPermission('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermission(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('✅| **تم عمل الروم بنجاح**');
  message.guild.createChannel("🕐 - Time  00", 'voice').then((c) => {
    console.log(`Time channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });//ToxicCodes CopyRights
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
 
      c.setName("🕐 - Time   「" + hours + ":" + minutes  +" " + suffix + "」");
    },1000);
  });
  }
});
 
 
 
client.on('message',async message => {
  if(message.content.startsWith(prefix + "setdate")) {
      var currentTime = new Date(),
      years = currentTime.getFullYear(),
      month = currentTime.getMonth() + 1,
      day = currentTime.getDate(),
      week = currentTime.getDay();
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('✅| **تم عمل الروم بنجاح**');
  message.guild.createChannel("📅 - Date " + "「" + day + "-" + month + "-" + years + "」" , 'voice').then(c => {
    console.log(`Date channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(function() {
      c.setName("📅 - Date " + "「" + day + "-" + month + "-" + years + "」")
    },1000);
  });
  }
});
 
 
client.on('message',async message => {
  var moment = require('moment');
    if(message.content.startsWith(prefix + "setdays")) {
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
    message.channel.send('✅| **تم عمل الروم بنجاح**');
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
  })



client.on('message', message => {    
            if (message.content.startsWith(prefix + "cto")) {
                if(!message.channel.guild) return;
                if (!message.member.hasPermission("MANAGE_CHANNEL"))  return;
      var a= message.content.split(' ').slice(1).join("  ");
      if (!a) return message.reply("اكتب كلام لوضعه في التوبيك!")
      message.channel.setTopic(`${a}`)
      .then(newChannel => message.channel.send(`تم تغيير التوبيك لـ **${a}**`))
      .catch(console.error);
            }
        });




client.on("message", function(message) {
    var prefix = "+";
   if(message.content.startsWith(prefix + "help")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(message.author.avatarURL)
    .setImage('https://6.top4top.net/p_12515dswm1.gif')
    .addField("**__Puplic | عامه__**","👥",true)
    .addField("**__Admin | اداره__**","🔒",true)
    .addField("**__Games | الالعاب__**","🎮",true)
    .addField("**__Music | الموسيقة__**","🎶",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react('👥')
        msg.react("🔓")
        msg.react("🎮")
        msg.react("🎶")
.then(() => msg.react('👥'))
.then(() =>msg.react('🔓'))
.then(() => msg.react('🎮'))
.then(() => msg.react('🎶'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '👥' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '🔓' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '🎮' && user.id === message.author.id;
let reaction4Filter = (reaction, user) => reaction.emoji.name === '🎶' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 220000 });
       
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 220000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 220000 });
let reaction4 = msg.createReactionCollector(reaction4Filter, { time: 220000 });
reaction1.on("collect", r => {
  const embed = new Discord.RichEmbed()
      .setThumbnail('https://images-ext-2.discordapp.net/external/JD7xvknBVacXHoC2re78AtJN4PUY5IjUZy1uWIqzObI/https/s3.amazonaws.com/eclincher.wp.upload/wp-content/uploads/2015/08/25155834/people-icon.png')
      .setColor("RANDOM")
    .setImage('https://6.top4top.net/p_12515dswm1.gif')
         .setFooter('LastBot','https://3.top4top.net/p_124815bxe1.png') 
      .setDescription(`
** __LastBot🌀__

       __اوامر عامة__👥
❖ +credit ➾  معرفة رصيدك و تحويله
❖ +daily ➾   لزيادت رصيدك كل 24/24
❖ +profile ➾ معلومات عنك بالصورة
❖ +ms ➾ معرفة حالة الاعضاء
❖ +avatar ➾ شعار حسابك و حساب اخر
❖ +bans ➾ عدد المبندين 
❖ +new ➾ فتح التكت
❖ +emolist ➾ معرفة الايموجي حك اي سيرفر
❖ +say ➾ تخلي البوت يكتب الشيء الي بدك
❖ +invite ➾ رابط دخول سيرفرك
❖ +bot ➾ معلومات البوت
❖ +ping ➾ عرض سرعه اتصال البوت
❖ +top  ➾ توب انفايت
❖ +server ➾ معلومات السيرفر
❖ +colors ➾ لاضهار قاءمة الالوان
❖ +color [color]➾ لاختيار لون معين
❖ +link ➾ رابط دعوة البوت   
**
`)
   message.author.sendEmbed(embed)
      message.reply('**تم ارسالك بلخاص**')
})
reaction2.on("collect", r => {
      const embed = new Discord.RichEmbed()
    .setImage('https://6.top4top.net/p_12515dswm1.gif')
                  .setFooter('LastBot','https://3.top4top.net/p_124815bxe1.png') 
  .setThumbnail('https://images-ext-1.discordapp.net/external/MB1stPF-7596L9gz5xgH3dI0q_kOx4p_BaEqapTylqU/https/cdn.discordapp.com/attachments/576168118833905676/581982323868827648/admin-ea-logo-2.png')
      .setColor("RANDOM")
      .setDescription(`
 ** __LastBot🌀__
       
         __اوامر ادارية__🔒

❖ +kick <mention > ➾ لطرد عضو
❖ +clear  ➾ لتنضيف المحادثة 
❖ +rc <name> ➾ صنع روم صوتية
❖ +rv <name> ➾ صنع روم كتابية
❖ +ban <mention> ➾  لطرد الشخص من السيرفر
❖ +mute < mention > ➾ اسكات عضو
❖ +unmute <mention> ➾ فك الاسكات من العضو
❖ +mc  ➾ لقفل روم كتابي
❖ +unmc ➾  لفتح روم كتابي
❖ +giveaway ➾ لعمل قيف 
❖ +antihack-on/off  لحماية سيرفرك من التهكير
❖ +role @user <rank> ➾ لأعطاء رتبة لعضو  
❖ +roleRemove @user <rank> ➾ لحدف رتبة من عضو 
❖ +role all <rank>  ➾ لاعطاء جميع الاعضاء رتبة معينة
❖ +ccolor ➾  لمعمل 50 لون
❖ +dcolor ➾  لحدف جميع الاوان

         __الترحيب__

لتفعيل خاصية الترحيب و المغادرة قم بعمل قناة اسمها 
"__welcome__"**
`)
   message.author.sendEmbed(embed)
      message.reply('**تم ارسالك بلخاص**')
})
reaction3.on("collect", r => {
  const embed = new Discord.RichEmbed()
    .setImage('https://6.top4top.net/p_12515dswm1.gif')
                  .setFooter('LastBot','https://3.top4top.net/p_124815bxe1.png') 
  .setThumbnail('https://images-ext-1.discordapp.net/external/ngiMTR5NctHiNKvgPMDmlZVwKxyX7VRGzqsAuFagdYs/https/cdn.discordapp.com/attachments/576168118833905676/581981949879648276/logo-game.png?width=923&height=652')
      .setColor("RANDOM")
      .setDescription(`
    ** __LastBot🌀__

       __اوامر الالعاب__🎮
    
❖ +skin [name]  ➾  لاضهار شخصيتك في لعبة ماين كرفات
❖ +steam [name]  ➾   لمعرفة معلومات حول الالعاب
❖ +lk ➾  لعبة لو خيروك
❖ +lez ➾ لعبة الغاز
**
`)
   message.author.sendEmbed(embed)
   message.reply('**تم ارسالك بلخاص**')
})
reaction4.on("collect", r => {
  const embed = new Discord.RichEmbed()
    .setImage('https://6.top4top.net/p_12515dswm1.gif')
                  .setFooter('LastBot','https://3.top4top.net/p_124815bxe1.png') 
  .setThumbnail('https://cdn.discordapp.com/attachments/576168118833905676/581980559962538005/logo-VisualMusic.png')
      .setColor("RANDOM")
      .setDescription(`
 ** __LastBot🌀__
  

       __اوامر الموسيقة__🎶  

 ❖ -play ➾ لتشغيل أغنية برآبط أو بأسم
    ❖ -skip ➾ لتجآوز الأغنية الحآلية
    ❖ -pause ➾ إيقآف الأغنية مؤقتا
    ❖ -resume ➾ لموآصلة الإغنية بعد إيقآفهآ مؤقتا
    ❖ -vol ➾ لتغيير درجة الصوت 100 - 0
    ❖ -stop ➾ لإخرآج البوت من الروم
    ❖ -np ➾ لمعرفة الأغنية المشغلة حآليا
    ❖ -queue ➾ لمعرفة قآئمة التشغيل لأننتقال للاغنية التالية
**
`)
   message.author.sendEmbed(embed)
   message.reply('**تم ارسالك بلخاص**')
})
    })
}
});







const replyForMention = [   "** __+help__ للمساعدة اكتب **",  ]
client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply(replyForMention);
    }
});


client.on('message',message =>{
    if(message.content.startsWith('+top')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.RichEmbed()
  .setThumbnail(`${message.author.avatarURL}`) 
  .setColor("RANDOM")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("https://media.discordapp.net/attachments/583309217520418821/584464213830008832/image0.png?width=375&height=375")
            .setFooter('LastBot ','https://media.discordapp.net/attachments/581879213338918912/584823027074596943/Untitled-1.png?width=376&height=376') 
           message.channel.send({ embed: embed });
  
  });
   
    }
  });



client.on('message', message => {
    if (message.content.startsWith("+bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setThumbnail(`${message.author.avatarURL}`) 
            .setColor('RANDOM')
            .setTitle('**__معلومات البوت__** ')
            .addField('**``رماته🔰``**'               ,`**${(process.memoryUsage().rss / 1048576).toFixed()}MB**`, true)
            .addField('**``القنوات📡``**' ,         ` **${client.channels.size}**` , true)
            .addField('**``المستخدمين👨‍👨‍👧‍👧``**'        ,`**${client.users.size}**` , true)
			      .addField('**``البرنامج📋``**'          , `**Windows**` , true)
            .addField('**``ايدي البوت🆔``**'       , `**${client.user.id}**` , true)
			      .addField('**``البريفكس ▶``**'         , `**+**` , true)
 			      .addField('**``سيرفر البوت 🌀``**'       , `**https://discord.gg/Rjxj3ks**` , true)
            .addField('**``السيرفرات الي فييها البوت``📆**',`**${client.guilds.size}**`,true)
                  .setFooter('LastBot','https://3.top4top.net/p_124815bxe1.png') 
          })
}
});


client.on('message', function(msg) {
    if(msg.content.startsWith ('+profile')) {
      let embed = new Discord.RichEmbed()
            .setColor('RANDOM')
      .setTitle(`**__Profile__🔰**`)
      msg.channel.send({embed:embed})
    }
});


client.on('message', message => {
    if(message.content == '+ms') {
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
   .setThumbnail(`${message.author.avatarURL}`) 
 .addField(`**🌚__حالة الأعضاء__**`,'-',   true)
 .addField(`💚   **__اونلاين   ${message.guild.members.filter(m=>m.presence.status == 'online').size}__**`,'-',   true)
 .addField(`❤   **__مشغول     ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}__**`,'-',   true)
 .addField(`💛   **__خامل      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}__**`,'-',   true)   
 .addField(`🖤   **__اوفلاين   ${message.guild.members.filter(m=>m.presence.status == 'offline').size}__**`,'-',  true) 
                  .setFooter('LastBot','https://3.top4top.net/p_124815bxe1.png') 
         message.channel.send({embed});

    }
  });



client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`**__الله معاك ✋ 😢 😔__**`)
        .addField('**__شكرا لوقتك__**  ',`${member}`)
        .setDescription(`**__مع السلامه تشرفنا بك ✋😢 😔__** `)
        .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RANDOM')
        .setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
   
    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
    })



client.on("guildMemberAdd", member => {
        var embed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
.addField('**__شكرا الانضمامك الينا__**  ',`${member}`)
     .addField(' **__Welcome To Server__**', `**${member.guild.name}**`,true)
    .setImage('https://cdn.discordapp.com/attachments/580818609027416075/582000571397963796/tenor.gif')// صور ترحي
        .setThumbnail(member.user.avatarURL)
    .addField('**__انت العضو رقم__**',`**${member.guild.memberCount}**`)
    .setColor('RANDOM')
    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
    })




client.on('message', message => {
  const aa = message.content.split(" ").slice(1).join(" ");
  if(message.content.startsWith(prefix + "skin")){
    if(!aa) return message.reply(`‼    **${prefix}skin [__name__]**`);
    var ss = new Discord.RichEmbed()
    .setColor('RANDOM') 
    .setTitle(`${aa}'s`)
    .setURL(`https://minotar.net/armor/body/${aa}/100.png`)//Edit Texo
    .setThumbnail(`https://minotar.net/avatar/${aa}`)
    .setImage(`https://minotar.net/armor/body/${aa}/100.png`)
    .setFooter(`Requested By : ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(ss);
  }
});


let credits = JSON.parse(fs.readFileSync('./credits.json', 'utf8')); // Edit Texo
 
const cool = [];
client.on('message',async message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
 
  const args = message.content.split(' ');
  const credits = require('./credits.json');
  const path = './credits.json';
  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
  const author = message.author.id;
  const balance = args[2];
  const daily = Math.floor(Math.random() * 350) + 10;
 
  if(!credits[author]) credits[author] = {credits: 50};
  if(!credits[mention.id]) credits[mention.id] = {credits: 50};
  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});

 
  if(message.content.startsWith(prefix + "credit" || prefix + "credits")) {
  if(args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits`) return;
 
  if(args[2]) {
    if(isNaN(args[2]) || args[2] < 0) return message.channel.send(`:interrobang: **| ${message.author.username}, لقد حدت خطأ  **`);
    if(isNaN(args[2]) || args[2] < 0) return message.channel.send(`:interrobang: **| ${message.author.username}, لقد حدت خطأ  **`);
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
    if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:| لا يمكنك تحويل كردت لنفسك**');
    if(credits[author].credits < balance) return message.channel.send(`** :thinking: | ${message.author.username}, Your balance is not enough for that!**`);
    var one = Math.floor(Math.random() * 9) + 1;
    var two = Math.floor(Math.random() * 9) + 1; 
    var three = Math.floor(Math.random() * 9) + 1;
    var four = Math.floor(Math.random() * 9) + 1;
 
    var number = `${one}${two}${three}${four}`;
   
    message.channel.send(`**:heavy_dollar_sign:| \`${number}\`, أكتب الرقم للأستمرار**`).then(m => {
      message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
        if(c.first().content === number) {
          m.delete();
          message.channel.send(`**:moneybag: | ${message.author.username}, has transferred \`${balance}\` to ${mention}**`);
          credits[author].credits += (-balance);
          credits[mention.id].credits += (+balance);
          fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
        } else if(c.first().content !== number) {
          m.delete();
          message.channel.send(`** :money_with_wings: | تم الغاء الإرسال**`);
        }
      });
    });
  }
  if(!args[2]) {
    if(mention.bot) return message.channel.send(`:interrobang:**| ${message.author.username}, I can't find** ${message.content.split(' ')[1]}**!**`);
   message.channel.send(`**${mention.username}, your :credit_card: balance is** **\`$${credits[mention.id].credits}\`**. `);
 }
 
 }
       if(args[0].toLowerCase() === `${prefix}daily`) {  
     
if(credits[message.author.id].daily != moment().format('L')) {
 
      credits[message.author.id].daily = moment().format('L');
         
 
         let ammount = (30, 50, 60, 70, 80, 90, 100, 110,120,130);
         credits[author].credits += ammount;
     
       
         message.channel.send(`**:atm: | ${message.author.username}, you received your :yen: ${ammount} daily credits!**`);
   's'.writeFile("./credits.json", JSON.stringify(credits), function(e) {
           if (e) throw e;
       })
 
     }else{
     message.channel.send(`:stopwatch: : **Please cool down  ${moment().endOf('day').fromNow()}**`);
 
     }
 
       }
});


client.on('message', message => {
    if(message.content == ('+profiles')) {    
 
             if (message.channel.type === 'dm') return message.reply('This Command Is Not Avaible In Dm\'s :x:');   
            var Canvas = module.require('canvas');
            var jimp = module.require('jimp');
    
     const w = ['./ID1.png','./ID2.png','./ID3.png','./ID4.png','./ID5.png'];
    
             let Image = Canvas.Image,
                 canvas = new Canvas(802, 404),
                 ctx = canvas.getContext('2d');
             ctx.patternQuality = 'bilinear';
             ctx.filter = 'bilinear';
             ctx.antialias = 'subpixel';
             ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
             ctx.shadowOffsetY = 2;
             ctx.shadowBlur = 2;
             fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                 if (err) return console.log(err);
                 let BG = Canvas.Image;
                 let ground = new Image;
                 ground.src = Background;
                 ctx.drawImage(ground, 0, 0, 802, 404);
    
     })
                                let user = message.mentions.users.first();
          var men = message.mentions.users.first();
             var heg;
             if(men) {
                 heg = men
             } else {
                 heg = message.author
             }
           var mentionned = message.mentions.members.first();
              var h;
             if(mentionned) {
                 h = mentionned
             } else {
                 h = message.member
             }
             var ment = message.mentions.users.first();
             var getvalueof;
             if(ment) {
               getvalueof = ment;
             } else {
               getvalueof = message.author;
             }//ما خصك ,_,
                                           let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                                             jimp.read(url, (err, ava) => {
                                                 if (err) return console.log(err);
                                                 ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                                                     if (err) return console.log(err);
                            
                                                                                           //Avatar
                                                             let Avatar = Canvas.Image;
                                                             let ava = new Avatar;
                                                             ava.src = buf;
                                                             ctx.beginPath();
                                                           ctx.drawImage(ava, 335, 3, 160, 169);
                                                                            //wl
                                                     ctx.font = '35px Arial Bold';
                                                     ctx.fontSize = '40px';
                                                     ctx.fillStyle = "#dadada";
                                                     ctx.textAlign = "center";
                                                    
                            
                                                     ctx.font = '30px Arial Bold';//Name ,_,
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${getvalueof.username}`,655, 170);
                                                                            
                                                                        
                                                          moment.locale('ar-ly');        
                                            
                                            
                                                                    ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${moment(h.joinedAt).fromNow()}`,150, 305);
                                                              
                                                              
                                                                                                     ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                 ctx.fillText(`${moment(heg.createdTimestamp).fromNow()}`,150, 170); 
                            
                                                       let status;
     if (getvalueof.presence.status === 'online') {
         status = 'online';
     } else if (getvalueof.presence.status === 'dnd') {
         status = 'dnd';
     } else if (getvalueof.presence.status === 'idle') {
         status = 'Idle';
     } else if (getvalueof.presence.status === 'offline') {
         status = 'Offline';
     }
     
     
                                          ctx.cont = '35px Arial';
                                          ctx.fontSize = '30px';
                                          ctx.filleStyle = '#ffffff'
                                          ctx.fillText(`${status}`,655,305)
                  
                                                                   ctx.font = 'regular 30px Cairo';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                         ctx.fillText(`${h.presence.game === null ? "Dont Play" : h.presence.game.name}`,390,390);
                            
                               ctx.font = '35px Arial';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                                   ctx.fillText(`#${heg.discriminator}`,390,260)
                            
                                 ctx.beginPath();
                                 ctx.stroke();
                               message.channel.sendFile(canvas.toBuffer());
                            
                            
                          
                            
                             })
                            
                             })  //ههههههههه عمرك 14
 }
 }); // By Texo