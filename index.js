const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone : true});
const botconfig = require("./botconfig.json");

const fs = require("fs");
////////| BEÁLLÍTÁSOK |//////////////////////////
let name = "© Powered by: Minefactory Studio ©";
let botname = "SF security";


let channel_refesh_intervallum = 3; //Másodperc


//|| RPG SETTINGS |//

let fizu = "FT" //(pénz egysége)

// var opus = require('opusscript');







////////////////////////////////////////////////////////////////////////

bot.on("ready", async() => {
    console.log(`${bot.user.username} elindult sikeresen!`);


    let statusok = [
        "Yap!!",
        "SF BOT",
        `Szerverek: 4`
    ]

    setInterval(function(){
        let status = statusok[Math.floor(Math.random() * statusok.length)];
        bot.user.setActivity(status, {type: "PLAYING"}) 
    }, 3000) 

});

///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////bizonyos channelbe való írás
// let y = process.openStdin()
// y.addListener("data", res => {
//     let x = res.toString().trim().split(/ +/g)
//     bot.channels.get("678179487669682217").send(x.join(""));
// })


bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);


    if(cmd === `${prefix}gw`){
        if (message.member.hasPermission("KICK_MEMBERS")) {
            if(args[0] === "role" || args[0] === "member" || args[0] === "random") {
                if (isNaN(args[1])) return message.reply("Kérlek add meg, hogy hány percig tartosn a giveaway! (1-60)")
                if (args[1] < 0 || args[1] >= 60) return message.reply("Kérlek adj meg egy számot 1-60 között! (Hány perces lesz a giveaway)")

        
            if(args[0] === "random"){
                if(args[2]){


                    let botThumb = bot.user.displayAvatarURL;
            let nyer = new Discord.RichEmbed()
            .setTitle(`${message.author.username}`)
            .setColor("#2DE7F7")
            .addField(`**Nyeremény játék tárgya: ${args[2]}**`, `A szerverenlévő összes ember közül sorsoljuk ki az egyetlen nyertest!`)
            .setThumbnail(botThumb)
            .setTimestamp(message.createdAt)
            .setFooter(`${name}`);
        
            message.channel.send(nyer);
        
            await message.channel.send(`**Innentől számítva **${args[1]}** perc van hátra!**`);



            
            let asd = message.guild.members.filter(member => !member.user.bot).random();
            setTimeout(() => {
            message.channel.send(`A nyeremény játék nyertese: ${asd.user.username}. (<@${asd.user.id}>) | Nyeremény: ${args[2]}`);
            message.channel.send("**A nyeremény játéknak vége!**")
            }, 1000*60*args[1])

        } else message.channel.send("Add meg a nyeremény tárgyát!")

        }else if(args[0] === "member"){
            let mute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if(mute){
                if(args[3]){

                    let botThumb = bot.user.displayAvatarURL;
            let nyer = new Discord.RichEmbed()
            .setTitle(`${message.author.username}`)
            .setColor("#2DE7F7")
            .addField(`**Nyeremény játék tárgya: ${args[3]}**`, `A szerverenlévő összes ember közül sorsoljuk ki az egyetlen nyertest!`)
            .setThumbnail(botThumb)
            .setTimestamp(message.createdAt)
            .setFooter(`${name}`);
        
            message.channel.send(nyer);
        
            await message.channel.send(`**Innentől számítva **${args[1]}** perc van hátra!**`);



            
            
            setTimeout(() => {
            message.channel.send(`A nyeremény játék nyertese: ${mute.user.username}. (<@${mute.user.id}>) | Nyeremény: ${args[2]}`);
            message.channel.send("**A nyeremény játéknak vége!**")
            }, 1000*60*args[1])



                } else message.channel.send("Add meg a nyeremény tárgyát!")
            }  else message.channel.send("Adj meg egy nevet! pl: @asd123")



        }
        
        
            
        
        
        } else {
            let sorosEmbed = new Discord.RichEmbed()
            .setTitle(message.author.username)
            .addField("Használat:", `${prefix}gw member/random (1-60) *[@ember] {nyeremény}`)
            .setFooter("Giveaway Master 2019-2020")
    
            message.channel.send(sorosEmbed)

        }
            } else message.channel.send(`Ehhez a parancshoz nincs jogod! Szükséges permission: KICK_MEMBERS`)
             
    
    
    
    }

    if(cmd === "!buzi"){
        let üzik = args.join(" ");
              bot.channels.get("736962826752753714").send(`<RENDSZERGAZDA><(${message.author.tag})=> ${üzik}`);
        }

    if(message.guild){
        const generalChannel = bot.channels.get("736962826752753714");
        let szerverr = message.guild.name;
        let üzii = message.toString().trim().split(1)
          if (generalChannel.name === message.channel.name) {
            let userAvatar = message.member.user.displayAvatarURL;
            
            let avatarEmbed = new Discord.RichEmbed()
        
            .setTitle(message.channel.name +" | "+ message.author.tag)
            .setColor("#42c8f4")
            .setDescription(`**Üzenet=>** ${üzii}`)
            .setThumbnail(userAvatar)
            .setTimestamp(message.createdAt)
            .setFooter(`Innen: ${message.channel.id} (ID)`);
        
            bot.channels.get("771861003271929896").send(avatarEmbed)

                // bot.channels.get("771861003271929896").send(`<VEZETŐSÉG><${message.channel.id}>(${message.author.tag})=> ${üzii}`);
          }
          const generalChannell = message.guild.channels.find(`name`, `〘⛔〙olimposz`);
          let szerver = message.guild.name;
          let üzi = message.toString().trim().split(1)
            if (generalChannell.name === message.channel.name) {
                  bot.channels.get("771861003271929896").send(`<OLIMPOSZ><${message.channel.id}>(${message.author.tag})=> ${üzi}`);
            }
            
            const generalChannelll = message.guild.channels.find(`name`, `〘😎〙titkos-vezetőség`);
          let szerveri = message.guild.name;
          let üzik = message.toString().trim().split(1)
            if (generalChannelll.name === message.channel.name) {
                let userAvatar = message.member.user.displayAvatarURL;
            
                let avatarEmbed = new Discord.RichEmbed()
            
                .setTitle(message.channel.name +" | "+ message.author.tag)
                .setColor("#42c8f4")
                .setDescription(`**Üzenet=>** ${üzik}`)
                .setThumbnail(userAvatar)
                .setTimestamp(message.createdAt)
                .setFooter(`Innen: ${message.channel.id} (ID)`);
            
                bot.channels.get("771861003271929896").send(avatarEmbed)
            }
        }

        
        
        
    



});

bot.login(process.env.BOT_TOKEN);


