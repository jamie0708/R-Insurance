module.exports = {
    commandsRuOpt: {
       reply_markup: JSON.stringify({
           inline_keyboard: [
               [{text: 'Оформить полис 📄', callback_data: '/polis'}], 
               [{text: 'Онлайн-консультант 👨‍💼', url: 'https://t.me/The_Devil_JSM'}],
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

   fizRuOpt: {
       reply_markup: JSON.stringify({
           inline_keyboard: [
               [{text: 'Отправить тех.паспорт автомобиля', callback_data: '/techpassport'}], 
               [{text: 'Отправить паспорт заявителя', callback_data: '/requisite'}],
               [{text: 'Указать телефонный номер', callback_data: '/phone-number'}], 
               [{text: 'Указать дату начала страхования', callback_data: '/date'}],
               [{text: 'Отправить скриншот оплаты', callback_data: '/payment'}],
           ]
       })
   },
   
   yurRuOpt: {
       reply_markup: JSON.stringify({
           inline_keyboard: [
                [{text: 'Отправить тех.паспорт автомобиля', callback_data: '/techpassport'}],
                [{text: 'Отправить реквизиты организации', callback_data: '/requisite'}],
                [{text: 'Указать телефонный номер', callback_data: '/phone-number'}], 
                [{text: 'Указать дату начала страхования', callback_data: '/date'}],
                [{text: 'Отправить скриншот оплаты', callback_data: '/payment'}],
           ]
       })
   },
}