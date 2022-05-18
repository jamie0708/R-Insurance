exports.debug = (obj = {}) => {
    return JSON.stringify(obj, null, 4)
};

exports.startCommand = async (bot, text, command, chat_id, message, form, photo) => {
    if (text === command || text === `${command}@InsuranceUZBOT`) {
        await bot.sendPhoto(chat_id, photo);
        await bot.sendMessage(chat_id, `${message}`, form);
    }
};

exports.commands = async (bot, text, command, chat_id, message, form) => {
    if (text === command || text === `${command}@InsuranceUZBOT`) {
        await bot.sendMessage(chat_id, `${message}`, form);
    }
};

exports.btnCommands = async (bot, del_msg, data, command, chat_id, message, form) => {
    if (data === command || data === `${command}@InsuranceUZBOT`) {
        await bot.deleteMessage(chat_id, del_msg);
        await bot.sendMessage(chat_id, message, form);
    }
};

exports.btnRecieveCommands = async (bot, data, command, chat_id, message, moderator, admin,  group, recMessage) => {
    if (data === command || data === `${command}@InsuranceUZBOT`) {
        bot.sendMessage(chat_id, message)
        .then(bot.on('message', msg => {
            //  await bot.sendMessage(moderator, this.debug(msg))
            switch (val) {
              case  msg.document ? bot.forwardMessage(moderator, msg.chat.id, msg.message_id) : bot.sendMessage(chat_id, `It's not a file`)
            }
            // bot.sendMessage(moderator, recMessage);            
            // bot.sendMessage(admin, recMessage);
            // bot.forwardMessage(admin, msg.chat.id, msg.message_id);
            // bot.sendMessage(group, recMessage);
            // bot.forwardMessage(group, msg.chat.id, msg.message_id);
        }));
    }
};

exports.paymentCommands = async (bot, text, command, chat_id, provider, currency, amount) => {
    if (text === command || text === `${command}@InsuranceUZBOT`) {
        await bot.sendInvoice(
          chat_id, 
          `Payment`, 
          `This is a test payment`, 
          `payload`, 
          provider, 
          `SOME_KEY`, 
          currency, 
          [{
            label:`insurance`,
            amount: amount
          }],
          {
            photo_url: `http://www.progressiveonline.com.au/wp-content/uploads/2021/12/pic-184.jpg`,
          },
        );
    }
};