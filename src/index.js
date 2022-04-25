//IMPORTS:
const TelegramApi = require('node-telegram-bot-api');

const { commands, btnCommands, btnRecieveCommands, } = require('./Settings/bot_commands');

const { setLang, settingLangs, } = require('./Localization/languages');
const { setEn } = require('./Localization/en')
const { setRu } = require('./Localization/ru')
const { setUz } = require('./Localization/uz')

const {
  commandsRuOpt,
  commandsEnOpt,
  commandsUzOpt,
  polisRuOpt,
  polisEnOpt,
  polisUzOpt,
  yurRuOpt,
  fizRuOpt,
  consultingRuOpt,
  contactsRuOpt,
} = require('./Settings/options');

//DATA:
const token = '5221401286:AAGqaPWjwhzZfvPgdX_AqiRXpHXL5nhzgXY'; //@InsuranceUZBOT
const moderator = 927953904; //Aziz
const superAdmin = 69875236; //Rustam
const group = -732005497; //BotTest
const admin = 5260387729; //InsuranceUZB
const manager = 353327; //Vazira

//BOT:
const bot = new TelegramApi(token, {
  polling: true
});

//SETTING:
const start = async () => {
  //Commands' menu:
  bot.on('message', async msg => {
    const text = msg.text;
    const chatId = msg.chat.id;
    const delMsg = msg.message_id;
    console.log(msg);

    commands(bot, text, '/start', chatId, `${settingLangs.text}`, setLang);
    commands(bot, text, '/polis', chatId, `${setRu.polis}`, polisRuOpt);
    commands(bot, text, '/contacts', chatId, `${setRu.contacts}`, contactsRuOpt);
    commands(bot, text, '/consulting', chatId, `${setRu.consulting}`, consultingRuOpt);
    commands(bot, text, '/language', chatId, `${settingLangs.text}`, setLang);

    commands(bot, text, '🇷🇺RU', chatId, `${msg.from.first_name} ${setRu.greeting}`, commandsRuOpt);
    commands(bot, text, '🇬🇧EN', chatId, `${msg.from.first_name} ${setEn.greeting}`, commandsEnOpt);
    commands(bot, text, '🇺🇿UZ', chatId, `${msg.from.first_name} ${setUz.greeting}`, commandsUzOpt);

    commands(bot, text, `Оформить полис 📄`, chatId, `${setRu.polis}`, polisRuOpt);
    commands(bot, text, `Get a policy 📄`, chatId, `${setEn.polis}`, polisEnOpt);
    commands(bot, text, `Polis olish 📄`, chatId, `${setUz.polis}`, polisUzOpt);

    commands(bot, text, `Физическое лицо 🧑🏻‍🦱`, chatId, `${setRu.fiz}`, fizRuOpt);
    // commands(bot, text, `Физическое лицо 🧑🏻‍🦱`, chatId, `${setRu.fiz}`, fizRuOpt);
    // commands(bot, text, `Физическое лицо 🧑🏻‍🦱`, chatId, `${setRu.fiz}`, fizRuOpt);

    commands(bot, text, `Юридическое лицо 🏢`, chatId, `${setRu.yur}`, yurRuOpt);
    // commands(bot, text, `Юридическое лицо 🏢`, chatId, `${setRu.yur}`, yurRuOpt);
    // commands(bot, text, `Юридическое лицо 🏢`, chatId, `${setRu.yur}`, yurRuOpt);

    btnRecieveCommands(bot, text, `Отправить данные 🧑🏻‍🦱`, chatId, `${setRu.infoRequest}`, moderator, admin, group, `Пользователь ${msg.from.first_name} ${msg.from.last_name}(@${msg.from.username}) отправил вам данные 👇🏻`);
    btnRecieveCommands(bot, text, `Отправить данные 🏢`, chatId, `${setRu.infoRequest}`, moderator, admin, group, `Пользователь ${msg.from.first_name} ${msg.from.last_name}(@${msg.from.username}) отправил вам данные 👇🏻`);

    commands(bot, text, `Контакты 📞`, chatId, `${setRu.contacts}`, contactsRuOpt);
    commands(bot, text, `Назад 🔙`, chatId, `${msg.from.first_name} ${setRu.greeting}`, commandsRuOpt);
    commands(bot, text, `Назад ◀️`, chatId, `${setRu.polis}`, polisRuOpt);
    commands(bot, text, `Главное меню 🏠`, chatId, `${msg.from.first_name} ${setRu.greeting}`, commandsRuOpt);

    commands(bot, text, `Консультант 👨‍💼`, chatId, `${setRu.consulting}`, consultingRuOpt);

    commands(bot, text, `Изменить язык 🌐`, chatId, `${settingLangs.text}`, setLang);
  });

  //Buttons' menu:
  bot.on('callback_query', async msg => {
    const data = msg.text;
    const chatId = msg.message.chat.id;
    console.log(msg);

    btnCommands(bot, delMsg, data, `/contacts`, chatId, `${setRu.contacts}`, contactsRuOpt);
    btnCommands(bot, delMsg, data, `/consulting`, chatId, `${setRu.contacts}`);
    btnCommands(bot, delMsg, data, `/language`, chatId, `${settingLangs.text}`, setLang);
    btnRecieveCommands(bot, data, `/yurInfo`, chatId, `${setRu.infoRequest}`, moderator, admin, group, `Пользователь ${msg.from.first_name} ${msg.from.last_name}(@${msg.from.username}) отправил вам данные 👇🏻`);
    btnCommands(bot, delMsg, data, `🇷🇺RU`, chatId, `${msg.from.first_name} ${setRu.greeting}`, commandsRuOpt);
  });
}

start();