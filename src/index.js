//IMPORTS:
const TelegramApi = require('node-telegram-bot-api');

const { commands, btnRecieveCommands, } = require('./Settings/bot_commands');

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
  yurEnOpt,
  yurUzOpt,
  fizRuOpt,
  fizEnOpt,
  fizUzOpt,
  consultingRuOpt,
  consultingEnOpt,
  consultingUzOpt,
  contactsRuOpt,
  contactsEnOpt,
  contactsUzOpt,  
} = require('./Settings/options');

//DATA:
const token = '5221401286:AAGqaPWjwhzZfvPgdX_AqiRXpHXL5nhzgXY'; //@InsuranceUZBOT
const moderator = 927953904; //Aziz
const superAdmin = 69875236; //Rustam
const group = -732005497; //BotTest
const admin = 5260387729; //InsuranceUZB
const manager = 353327; //Vazira
const click_uz = `398062629:TEST:999999999_F91D8F69C042267444B74CC0B3C747757EB0E065` //CLICK Terminal TEST

//BOT:
const bot = new TelegramApi(token, {
  polling: true
});

bot.on("polling_error", (msg) => console.log(msg));

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
  {
    command: '/payment',
    description: 'Оплатить за страхования'
  },
]);

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
    commands(bot, text, `Individual person 🧑🏻‍🦱`, chatId, `${setEn.fiz}`, fizEnOpt);
    commands(bot, text, `Jismoniy shaxs 🧑🏻‍🦱`, chatId, `${setUz.fiz}`, fizUzOpt);

    commands(bot, text, `Юридическое лицо 🏢`, chatId, `${setRu.yur}`, yurRuOpt);
    commands(bot, text, `Legal person 🏢`, chatId, `${setEn.yur}`, yurEnOpt);
    commands(bot, text, `Yuridik shaxs 🏢`, chatId, `${setUz.yur}`, yurUzOpt);

    btnRecieveCommands(bot, text, `Отправить данные 🧑🏻‍🦱`, chatId, `${setRu.infoRequest}`, moderator, admin, group, `Пользователь ${msg.from.first_name} ${msg.from.last_name}(@${msg.from.username}) отправил вам данные 👇🏻`);
    btnRecieveCommands(bot, text, `Send data 🧑🏻‍🦱`, chatId, `${setEn.infoRequest}`, moderator, admin, group, `Пользователь ${msg.from.first_name} ${msg.from.last_name}(@${msg.from.username}) отправил вам данные 👇🏻`);
    btnRecieveCommands(bot, text, `Ma'lumotlarni yuborish 🧑🏻‍🦱`, chatId, `${setUz.infoRequest}`, moderator, admin, group, `Пользователь ${msg.from.first_name} ${msg.from.last_name}(@${msg.from.username}) отправил вам данные 👇🏻`);

    btnRecieveCommands(bot, text, `Отправить данные 🏢`, chatId, `${setRu.infoRequest}`, moderator, admin, group, `Пользователь ${msg.from.first_name} ${msg.from.last_name}(@${msg.from.username}) отправил вам данные 👇🏻`);
    btnRecieveCommands(bot, text, `Send data 🏢`, chatId, `${setEn.infoRequest}`, moderator, admin, group, `Пользователь ${msg.from.first_name} ${msg.from.last_name}(@${msg.from.username}) отправил вам данные 👇🏻`);
    btnRecieveCommands(bot, text, `Ma'lumotlarni yuborish 🏢`, chatId, `${setUz.infoRequest}`, moderator, admin, group, `Пользователь ${msg.from.first_name} ${msg.from.last_name}(@${msg.from.username}) отправил вам данные 👇🏻`);

    commands(bot, text, `Контакты 📞`, chatId, `${setRu.contacts}`, contactsRuOpt);
    commands(bot, text, `Contacts 📞`, chatId, `${setEn.contacts}`, contactsEnOpt);
    commands(bot, text, `Aloqa 📞`, chatId, `${setUz.contacts}`, contactsUzOpt);

    commands(bot, text, `Консультант 👨‍💼`, chatId, `${setRu.consulting}`, consultingRuOpt);
    commands(bot, text, `Consultant 👨‍💼`, chatId, `${setEn.consulting}`, consultingEnOpt);
    commands(bot, text, `Konsultant 👨‍💼`, chatId, `${setUz.consulting}`, consultingUzOpt);

    commands(bot, text, `Изменить язык 🌐`, chatId, `${settingLangs.text}`, setLang);
    commands(bot, text, `Change language 🌐`, chatId, `${settingLangs.text}`, setLang);
    commands(bot, text, `Tilni o'zgartirish 🌐`, chatId, `${settingLangs.text}`, setLang);

    commands(bot, text, `Назад 🔙`, chatId, `${msg.from.first_name} ${setRu.greeting}`, commandsRuOpt);
    commands(bot, text, `Back 🔙`, chatId, `${msg.from.first_name} ${setEn.greeting}`, commandsEnOpt);
    commands(bot, text, `Ortga 🔙`, chatId, `${msg.from.first_name} ${setUz.greeting}`, commandsUzOpt);

    commands(bot, text, `Назад ◀️`, chatId, `${setRu.polis}`, polisRuOpt);
    commands(bot, text, `Back ◀️`, chatId, `${setEn.polis}`, polisEnOpt);
    commands(bot, text, `Ortga ◀️`, chatId, `${setUz.polis}`, polisUzOpt);

    commands(bot, text, `Главное меню 🏠`, chatId, `${msg.from.first_name} ${setRu.greeting}`, commandsRuOpt);
    commands(bot, text, `Main menu 🏠`, chatId, `${msg.from.first_name} ${setEn.greeting}`, commandsEnOpt);
    commands(bot, text, `Bosh menyu 🏠`, chatId, `${msg.from.first_name} ${setUz.greeting}`, commandsUzOpt);
    
    
  });
};

start();