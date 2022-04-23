//IMPORTS:
const TelegramApi = require('node-telegram-bot-api');
const {
  commands,
  btnCommands,
  btnRecieveCommands
} = require('./bot_commands');

const {
  setLang,
  setEn,
  setRu,
  setUz,
  settingLangs
} = require('./languages');

const {
  commandsRuOpt,
  polisRuOpt,
  yurRuOpt,
  fizRuOpt
} = require('./options');

//DATA:
const token = '5221401286:AAGqaPWjwhzZfvPgdX_AqiRXpHXL5nhzgXY'; //@InsuranceUZBOT
const moderator = 927953904; //Aziz
const superAdmin = 69875236; //Rustam
const group = -732005497; //BotTest
const admin =  5260387729;//InsuranceUZB
const manager = 353327; //Vazira

//BOT:
const bot = new TelegramApi(token, {
  polling: true
});

//SETTING:
const start = async () => {

  //Commands:
  bot.setMyCommands([{
      command: '/start',
      description: 'Начало работы'
    },
    {
      command: '/polis',
      description: 'Оформите свой полис'
    },
    {
      command: '/contacts',
      description: 'Получите контактные данные'
    },
    {
      command: '/consulting',
      description: 'Получите онлайн консультацию'
    },
    {
      command: '/language',
      description: 'Выберите язык'
    },
  ]);

  //Commands' menu:
  bot.on('message', async msg => {
    const text = msg.text;
    const chatId = msg.chat.id;
    console.log(msg);

    commands(bot, text, '/start', chatId, `${settingLangs.text}`, setLang, 'https://www.gazeta.uz/media/img/2019/06/Q8wEZU15614395927082_b.jpg');
    commands(bot, text, '/polis', chatId, `Давайте оформим ваш полис!`, polisRuOpt);
    commands(bot, text, '/contacts', chatId, `${setRu.contacts}`, );
    commands(bot, text, '/consulting', chatId, `${setRu.consulting}`, );
    // commands(bot, text, '/language', chatId, `Давайте оформим ваш полис!`, polisRuOpt);
  });

  //Buttons' menu:
  bot.on('callback_query', async msg => {
    const data = msg.data;
    const chatId = msg.message.chat.id;
    const delMsg = msg.message.message_id;
    console.log(msg);

    btnCommands(bot, delMsg, data, `/enLang`, chatId, `${msg.from.first_name} ${setEn.greeting}`, commandsRuOpt);
    btnCommands(bot, delMsg, data, `/ruLang`, chatId, `${msg.from.first_name} ${setRu.greeting}`, commandsRuOpt);
    btnCommands(bot, delMsg, data, `/uzLang`, chatId, `${msg.from.first_name} ${setUz.greeting}`, commandsRuOpt);
    btnCommands(bot, delMsg, data, `/polis`, chatId, `${setRu.polis}`, polisRuOpt);
    btnCommands(bot, delMsg, data, `/fiz`, chatId, `${setRu.fiz}`, fizRuOpt);
    btnCommands(bot, delMsg, data, `/yur`, chatId, `${setRu.yur}`, yurRuOpt);
    btnCommands(bot, delMsg, data, `/contacts`, chatId, `${setRu.contacts}`)
    btnCommands(bot, delMsg, data, `/consulting`, chatId, `${setRu.contacts}`)
    btnRecieveCommands(bot, data, `/fizInfo`, chatId, `${setRu.techpassport}`, moderator, admin, group, `Пользователь ${msg.from.first_name} ${msg.from.last_name}(@${msg.from.username}) отправил вам данные 👇🏻`);
    btnRecieveCommands(bot, data, `/yurInfo`, chatId, `${setRu.techpassport}`, moderator, admin, group, `Пользователь ${msg.from.first_name} ${msg.from.last_name}(@${msg.from.username}) отправил вам данные 👇🏻`);
    // else if (data == "/main" || data === "/main@InsuranceUZBOT") {
    //   await bot.deleteMessage(chatId, msg.message.message_id)
    //   await bot.sendMessage(chatId, `${msg.from.first_name}, приветствуем вас в официальном телеграм боте страховой компании Gross Insurance!`, commandsRuOpt);
    // }
  });
}

start();