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
        .then(bot.on('message', async msg => {
            //  await bot.sendMessage(moderator, this.debug(msg))
             await bot.sendMessage(moderator, recMessage);
             await bot.forwardMessage(moderator, msg.chat.id, msg.message_id);
             await bot.sendMessage(admin, recMessage);
             await bot.forwardMessage(admin, msg.chat.id, msg.message_id);
             await bot.sendMessage(group, recMessage);
             await bot.forwardMessage(group, msg.chat.id, msg.message_id);
        }));
    }
};