module.exports = {
    setLang: {
        reply_markup: JSON.stringify({
            keyboard: [
                [{
                    text: `🇬🇧EN`,
                    callback_data: '/enLang',
                    resize_keyboard: true
                }, {
                    text: `🇷🇺RU`,
                    callback_data: '/ruLang',
                    resize_keyboard: true
                }, {
                    text: `🇺🇿UZ`,
                    callback_data: '/uzLang',
                    resize_keyboard: true
                }, ],
            ],
            resize_keyboard: true
        })
    },

    settingLangs: {
        text: `🇬🇧Please choose the language:
      
🇷🇺Пожалуйста выберите язык:
                  
🇺🇿Iltimos bot tilini tanlang:`,
    },
};