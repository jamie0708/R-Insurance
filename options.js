module.exports = {
    commandsRuOpt: {
       reply_markup: JSON.stringify({
           inline_keyboard: [
               [{text: 'Оформить полис 📄', callback_data: '/polis'}], 
               [{text: 'Онлайн-консультант 👨‍💼', url: 'https://t.me/insuranceuzb'}],
               [{text: 'Контакты 📞', callback_data: '/contacts'}],
               [{text: 'Изменить язык 🌐', callback_data: '/language'}],
           ]
       })
   },

   polisRuOpt: {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Физическое лицо 🧑🏻‍🦱', callback_data: '/fiz'}, {text: 'Юридическое лицо 🏢', callback_data: '/yur'}]
        ]
    })
   },

   consultingRuOpt: {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Онлайн-консультант 👨‍💼', url: 'https://t.me/insuranceuzb'}],
        ]
    })
   },

   fizRuOpt: {
       reply_markup: JSON.stringify({
           inline_keyboard: [
               [{text: 'Отправить данные', callback_data: '/fizInfo'}]
           ]
       })
   },
   
   yurRuOpt: {
       reply_markup: JSON.stringify({
           inline_keyboard: [
                [{text: 'Отправить данные', callback_data: '/yurInfo'}]
           ]
       })
   },
}