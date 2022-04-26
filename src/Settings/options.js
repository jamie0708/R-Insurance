module.exports = {
    commandsRuOpt: {
        reply_markup: JSON.stringify({
            keyboard: [
                [{ text: `Оформить полис 📄` }, { text: `Консультант 👨‍💼` }],
                [{ text: `Контакты 📞`}, { text: `Изменить язык 🌐` }],
            ],
            resize_keyboard: true
        })
    },

    commandsEnOpt: {
        reply_markup: JSON.stringify({
            keyboard: [
                [{ text: `Get a policy 📄` }, { text: `Consultant 👨‍💼` }],
                [{ text: `Contacts 📞` }, { text: `Change language 🌐` }],
            ],
            resize_keyboard: true
        })
    },

    commandsUzOpt: {
        reply_markup: JSON.stringify({
            keyboard: [
                [{ text: `Polis olish 📄` }, { text: `Konsultant 👨‍💼` }],
                [{ text: `Aloqa 📞` }, { text: `Tilni o'zgartirish 🌐` }],
            ],
            resize_keyboard: true
        })
    },

    polisRuOpt: {
        reply_markup: JSON.stringify({
            keyboard: [
                [{ text: 'Физическое лицо 🧑🏻‍🦱' }, { text: 'Юридическое лицо 🏢' }],
                [{ text: `Назад 🔙` }]
            ],
            resize_keyboard: true
        })
    },

    polisEnOpt: {
        reply_markup: JSON.stringify({
            keyboard: [
                [{ text: 'Individual person 🧑🏻‍🦱' }, { text: 'Legal person 🏢' }],
                [{ text: `Back 🔙` }]
            ],
            resize_keyboard: true
        })
    },

    polisUzOpt: {
        reply_markup: JSON.stringify({
            keyboard: [
                [{ text: 'Jismoniy shaxs 🧑🏻‍🦱' }, { text: 'Yuridik shaxs 🏢' }],
                [{ text: `Ortga 🔙` }]
            ],
            resize_keyboard: true
        })
    },

    consultingRuOpt: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{
                    text: 'Онлайн-консультант 👨‍💼',
                    url: 'https://t.me/insurance_on'
                }],
            ],
            resize_keyboard: true
        })
    },
    
    consultingEnOpt: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{
                    text: 'Online consultant 👨‍💼',
                    url: 'https://t.me/insurance_on'
                }],
            ],
            resize_keyboard: true
        })
    },

    consultingUzOpt: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{
                    text: 'Onlayn konsultant 👨‍💼',
                    url: 'https://t.me/insurance_on'
                }],
            ],
            resize_keyboard: true
        })
    },


    contactsRuOpt: {
        reply_markup: JSON.stringify({
            keyboard: [
                [{ text: 'Назад 🔙' }],
            ],
            resize_keyboard: true
        })
    },

    contactsEnOpt: {
        reply_markup: JSON.stringify({
            keyboard: [
                [{ text: 'Back 🔙' }],
            ],
            resize_keyboard: true
        })
    },

    contactsUzOpt: {
        reply_markup: JSON.stringify({
            keyboard: [
                [{ text: 'Ortga 🔙' }],
            ],
            resize_keyboard: true
        })
    },

    fizRuOpt: {
        reply_markup: JSON.stringify({
            keyboard: [
                [{ text: 'Отправить данные 🧑🏻‍🦱' }],
                [{ text: `Назад ◀️` }, { text: `Главное меню 🏠` }]
            ],
            resize_keyboard: true
        })
    },

    fizEnOpt: {
        reply_markup: JSON.stringify({
            keyboard: [
                [{ text: 'Send data 🧑🏻‍🦱' }],
                [{ text: `Back ◀️` }, { text: `Main menu 🏠` }]
            ],
            resize_keyboard: true
        })
    },
 
    fizUzOpt: {
        reply_markup: JSON.stringify({
            keyboard: [
                [{ text: `Ma'lumotlarni yuborish 🧑🏻‍🦱`}],
                [{ text: `Ortga ◀️` }, { text: `Bosh menyu 🏠` }]
            ],
            resize_keyboard: true
        })
    },
 
    yurRuOpt: {
        reply_markup: JSON.stringify({
            keyboard: [
                [{ text: 'Отправить данные 🏢'}],
                [{ text: `Назад ◀️` }, { text: `Главное меню 🏠` }]
            ],
            resize_keyboard: true
        })
    },

    yurEnOpt: {
        reply_markup: JSON.stringify({
            keyboard: [
                [{ text: 'Send data 🏢'}],
                [{ text: `Back ◀️` }, { text: `Main menu 🏠` }]
            ],
            resize_keyboard: true
        })
    },

    yurUzOpt: {
        reply_markup: JSON.stringify({
            keyboard: [
                [{ text: `Ma'lumotlarni yuborish 🏢`}],
                [{ text: `Ortga ◀️` }, { text: `Bosh menyu 🏠` }]
            ],
            resize_keyboard: true
        })
    },
}