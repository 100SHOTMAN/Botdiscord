const Discord = require('discord.js'); 

const bot = new Discord.Client();

bot.once('ready', () => { 
     console.log('Fratm sto online!')

});



bot.login('ODA5MTMyODQyOTY5MzMzODAx.YCQprg.TNHNxchodfqggihjnG2wVMghBxE');


bot.once('ready', () => {
console.log('Pornhub 🦈Grafica by: 👽👾☔123۷Ɩąɖı123☔👾👽#3248');
bot.user.setActivity('Pornhub 🦈Grafica by: 👽👾☔123۷Ɩąɖı123☔👾👽#3248', { type: 'PLAYING'});

});




bot.on("message", function (message) {
        if (message.content == "italo") {
            message.channel.send("Mi piace Chiara Silvestre");
        }
    });

    
    
    bot.on("message", function (message) {
        if (message.content == "turres") {
            message.channel.send("Sij o mej");
        }
    });
    
    
    bot.on("message", function (message) {
        if (message.content == "lello") {
            message.channel.send("M piac a nutell");
        }
    });

    
    bot.on("message", function (message) {
        if (message.content == "miriam") {
            message.channel.send("M piac a nutell");
        }
    });

    bot.on("message", function (message) {
        if (message.content == "vladi") {
            message.channel.send("è un russo di merda");
        }
    });


    bot.on("message", (message) => {
        if (message.content == "ora"){
            var data = new Date();
            var ora = data.getHours(); 
            var minuto = data.getMinutes();
            message.channel.send('Ora attuale :alarm_clock:' + ' ' + ora + ':' + minuto);
            

        }
    })
