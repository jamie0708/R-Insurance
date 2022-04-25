module.exports = {
    commandsRuOpt: {
        reply_markup: JSON.stringify({
            keyboard: [
                [{
                    text: `Оформить полис 📄`,
                }, {
                    text: `Консультант 👨‍💼`,
                }],
                [{
                    text: `Контакты 📞`,
                }, {
                    text: `Изменить язык 🌐`,
                }],
            ],
            resize_keyboard: true
        })
    },

    commandsEnOpt: {
        reply_markup: JSON.stringify({
            keyboard: [
                [{
                    text: `Get a policy 📄`,
                }, {
                    text: `Consultant 👨‍💼`,
                }],
                [{
                    text: `Contacts 📞`,
                }, {
                    text: `Change language 🌐`,
                }],
            ],
            resize_keyboard: true
        })
    },

    commandsUzOpt: {
        reply_markup: JSON.stringify({
            keyboard: [
                [{
                    text: `Polis olish 📄`,
                }, {
                    text: `Konsultant 👨‍💼`,
                    url: `https://t.me/insurance_on`
                }],
                [{
                    text: `Aloqa 📞`,
                }, {
                    text: `Tilni o'zgartirish 🌐`,
                }],
            ],
            resize_keyboard: true
        })
    },

    polisRuOpt: {
        reply_markup: JSON.stringify({
            keyboard: [
                [{
                    text: 'Физическое лицо 🧑🏻‍🦱',
                }, {
                    text: 'Юридическое лицо 🏢',
                }],
                [{
                    text: `Назад 🔙`,
                }]
            ],
            resize_keyboard: true
        })
    },

    polisEnOpt: {
        reply_markup: JSON.stringify({
            keyboard: [
                [{
                    text: 'Individual person 🧑🏻‍🦱',
                }, {
                    text: 'Legal person 🏢',
                }],
            ],
            resize_keyboard: true
        })
    },

    polisUzOpt: {
        reply_markup: JSON.stringify({
            keyboard: [
                [{
                    text: 'Jismoniy shaxs 🧑🏻‍🦱',
                }, {
                    text: 'Yuridik shaxs 🏢',
                }],
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

    contactsRuOpt: {
        reply_markup: JSON.stringify({
            keyboard: [
                [{
                    text: 'Назад 🔙',
                }],
            ],
            resize_keyboard: true
        })
    },

    fizRuOpt: {
        reply_markup: JSON.stringify({
            keyboard: [
                [{
                    text: 'Отправить данные 🧑🏻‍🦱',
                    callback_data: '/fizInfo'
                }, {
                    text: `Отправить номер телефона 📱`,
                    request_contact: true
                }],
                [{
                    text: `Назад ◀️`
                }, {
                    text: `Главное меню 🏠`
                }]
            ],
            resize_keyboard: true
        })
    },

    yurRuOpt: {
        reply_markup: JSON.stringify({
            keyboard: [
                [{
                    text: 'Отправить данные 🏢',
                    callback_data: '/yurInfo'
                }],
                [{
                    text: `Назад ◀️`
                }, {
                    text: `Главное меню 🏠`
                }]
            ],
            resize_keyboard: true
        })
    },
}