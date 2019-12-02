const Discord = require('discord.js');
const {prefix, token} = require('./config.json');

const {Client, Attachment} = require('discord.js');
const client = new Discord.Client();

var sw = false

client.once('ready', () => {
  console.log('ready!')
  const channel = client.channels.find(ch => ch.name === 'bot-testing');
  //channel.send("I'M ALIVE: " + "<:stormkingnob6:563999362431057920>")
  channel.send(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setActivity("node.js", {type:"Playing"})
})
client.on('message', message => {
  if(message.author.bot) return; //return if sender is a bot
  // if (message.member.roles.some(r=>["Server Admin", "Moderator", "Goderator"].includes(r.name))){
  //   console.log(message.member.displayName + " can ban")
  // }
  // else {
  //   console.log(message.member.displayName + " has no power")
  // }
  let msg = message.content;
  let sender = message.author;
 //console.log(sender)
  if (msg.startsWith(`${prefix}ruleinqsd1`)){
    const channel = client.channels.find(ch => ch.name === 'rules');
    var rulelistSTR =
    "```css" + '\n' +
    "Rules:" + '\n' +
    "1. No harassment." + '\n' +
    "2. Keep language within tolerance." + '\n' +
    "3. Don't be dumb." + '\n' +
    "4. Enter !sweat in #roles to gain channel access." + '\n' +
    "5. :)" + '\n' +
    "```"
    channel.send(rulelistSTR)
  }
  if (msg.startsWith(`${prefix}sendtochannel`)){

  }
  if (message.channel.name === undefined){
    console.log(message.author.username + " said: " + msg)
  }
  if (msg.startsWith(`${prefix}editsample`)){
    // const guild = client.guilds.get("563217847556374528")
    // const role = guild.roles.find(role => role.name ==="Sweat")
    const myGuild = client.guilds.get(message.guild.id)
    var myUser = message.author
    var originch = message.channel
    const channel = client.channels.find(ch => ch.name ==='general');
  //  message.channel.send(channel.name + " " + channel.id)
  //  client.channels.get(outputch.id).send("hi")
    client.channels.get("564953474870149154").send('message').then((newMessage) =>{
     setTimeout(function(){
       newMessage.edit("edited")
     }, 500);})
  }
  if(msg.includes("pp up", 0)){
    message.react('577695919672131594')

  }

  if(msg.startsWith(`${prefix}rek`)){
    var channel = message.channel
    // Do nothing if the channel wasn't found on this server
    let memberid = message.mentions.members.first()
  //  var id = msg.substring(5,message.length)
    //console.log(id)
  //  var amount = parseInt(msg.substring(message.length-1,message.length))
  //  console.log(amount)
//    let memberSpam = message.guild.members.get(id)
    // Send the message, mentioning the member

      for(i = 0; i< 10; i++){
        channel.send(`${memberid}`);
      }


  }
  if(msg.startsWith(`${prefix}helpmedebug`)){
    var myGuild = message.guild
    var myUser = message.author
    var myChannel = message.channel
    message.reply("Sender: " + myUser.name + " User ID: " + myUser.id + "Guild: " + myGuild.name + " Guild ID: " + myGuild.id + " Channel:" + myChannel.name + " Channel ID: " + myChannel.id)
  }
  if (msg.startsWith(`${prefix}warn`)){
    //var content = msg.substring(8, msg.length)
    if (!(message.member.roles.some(r=>["Server Admin","Goderator"].includes(r.name)))){
      message.reply("get perms bitch")
      return
    }
    var id = msg.substring(6, 18+6)
    var contents = msg.substring(18+6+1, msg.length+1)
    var user = client.users.get(id)
    if (user === null){
      return
    }
    message.reply("To: " + user.username + " Send: " + contents )
    //client.users.get(id).send("hi")
    var str = "```css" + `\n` +
     "WARNING ISSUED" + `\n\n` +
     "BY: " + message.author.username + `\n` +
     "---------------------" + `\n` +
     "REASON: " + contents + `\n` +
     "```"

    user.send(str)
    //
    //rec.send("uwu")
  }
  if (msg.startsWith(`${prefix}sendintroqrsd`)){
    const channel = client.channels.find(ch => ch.name === 'intro');
    var rulelistSTR =
    "```css" + '\n'
    "```"

    var selfPromo = "```HTTP" + '\n' + "```"
    //channel.send(rulelistSTR)
    channel.send(selfPromo)
  }
  if (msg.startsWith(`${prefix}sweat`)){
    const guild = client.guilds.get("563217847556374528")
    const role = guild.roles.find(role => role.name ==="Sweat")
    console.log(role.name)
    if(message.channel.name == "roles"){
      if (message.member.roles.has(role.id)){
        message.reply("You already have this role!")
        return
      }
      else {
          message.member.addRole(role).catch(console.error)
          message.reply("You now have role " + role.name)
      }
    }
    else {
      message.reply("Fail")
    }

  }
  if (msg.startsWith(`${prefix}kick`)){
    if (message.member.roles.some(r=>["Server Admin", "Moderator", "Goderator"].includes(r.name))){
      //message.channel.send("kicked")
      let member = message.mentions.members.first()
      message.channel.send(member.displayName + " <= kicking this person!")

      member.kick("Kicked " + member.displayName)
        .catch(console.log("broken"))


    }
    else {
      message.channel.send("Insufficient permissions!")
    }
  }
  if (msg.startsWith(`${prefix}skick`)){
    if (message.member.roles.some(r=>["Server Admin", "Moderator", "Goderator"].includes(r.name))){
      //message.channel.send("kicked")
      var kickID = msg.substring(7,msg.length)
      message.reply("Searching for member with ID " + kickID)
      let memberTK = message.guild.members.get(kickID)
      if (memberTK == null){
        message.reply("no member")
        return;
      }
      message.reply("Kicking " + memberTK.displayName)
      memberTK.kick()
    }
    else {
      message.channel.send("Insufficient Permissions")
    }
  }
  if (msg.startsWith(`${prefix}rtd`)){
    console.log(msg)
    var i = 5
    while(msg.charAt(i) != ' ' && i != msg.length) i++
    var min = parseInt(msg.substring(5,i))

    var max = parseInt(msg.substring(i+1,msg.length))
    var roll = rtd(min,max)
    message.channel.send("<:dice:564370710277914646>" + "Rolled a " + roll + "<:dice:564370710277914646>")
  }
  if (msg.startsWith(`${prefix}zzz`)){

    message.channel.send("Good Night!");
    message.channel.send("https://tenor.com/view/goodnight-sleep-night-good-kiss-gif-13435713");
  }
  if (msg.startsWith(`${prefix}owo`)){
    var myStr = msg.substring(5,msg.length)

    var endingSub = myStr.substring(myStr.length - 2, myStr.length)
    endingSub = endingSub.toLowerCase()
    if(endingSub === "er" || endingSub ==="or"){
      myStr = myStr.substring(0,myStr.length-2)
      myStr = myStr + "ah"
    }
    myStr = myStr.replace(/er /gi, 'ah ')
    myStr = myStr.replace(/r/g, 'w')
    myStr = myStr.replace(/R/g, 'W')



    message.channel.send(myStr)
    message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error);
  }
  if (msg.startsWith(`${prefix}setcolor`)){
    if (message.member.roles.some(r=>["Server Admin", "Moderator", "Goderator"].includes(r.name))){
      //let member = message.mentions.members.first()
      if(!message.includes('#', 0)){
        message.reply("Formatt a # before hex value")
        return;
      }
      var space = 7
      while(msg.charAt(space)!='#' && space != msg.length) space++
      space--
      var roleName = msg.substring(7,space)
      var newColor = msg.substring(space+1, msg.length)

      let myRole = message.guild.roles.find(role => role.name === roleName).catch()
      message.channel.send("Role ID: " + myRole.id + " color value to set: " + newColor)
      myRole.setColor(newColor)
    }
    else {
      message.channel.send("Insufficient Permissions!")
    }
  }
  //https://imgur.com/a/2RMWQ
  if (msg.startsWith(`${prefix}adobe reader`)){
    message.channel.send('https://imgur.com/a/2RMWQ')
  }
  if (msg.startsWith(`${prefix}mute`)){
    message.channel.send("test");
  }
  if (msg.startsWith(`${prefix}exitjs1`)){
    if (message.member.roles.some(r=>["Server Admin","Goderator"].includes(r.name))){
      const channel = client.channels.find(ch => ch.name === 'bot-testing');
      channel.send("POWER DOWN")
      console.log('off');
      //wait(10)
      process.exit();
    }
    else {
      message.reply("get perms first")
    }
  }
  if (msg.startsWith(`${prefix}stfu`)){
    let member = message.mentions.members.first();
    if (member == null) return;
    message.channel.send("<a:pandacrazy:558317561989693442>" +
        "<a:pandacrazy:558317561989693442>" +
          "SILENCE! " + member.displayName + "<a:pandacrazy:558317561989693442>" +
            "<a:pandacrazy:558317561989693442>");
  }
})
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'new-members');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  //channel.send(`who this mans? , ${member}`);
  channel.send(member.displayName +
     " JOINED AT " + member.joinedAt +
     " TIMESTAMP: " + member.joinedTimestamp + " ID: " + member.id)
});
client.login(token);
function rtd(min,max){
  return Math.floor(Math.random() * (max-min))+min
}
function muteuser(){
  message.channel.send("Muted")
}
function checkRoles(message, roles){

}
function sendMessage(guild, channel, message){
  guild.channels.find(ch=>name === channel).send(message).catch(console.log("Fail to send message"))
}
function sendImage(message, image){
  const picture = new Attachment(image);
  message.channel.send(picture);
}
