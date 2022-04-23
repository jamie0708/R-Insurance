module.exports = {
    setLang: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{
                    text: '🇬🇧EN',
                    callback_data: '/enLang'
                }, {
                    text: '🇷🇺RU',
                    callback_data: '/ruLang'
                }, {
                    text: '🇺🇿UZ',
                    callback_data: '/uzLang'
                }, ]
            ],
        })
    },

    settingLangs: {
        text: `🇬🇧Please choose the language:
      
🇷🇺Пожалуйста выберите язык:
                  
🇺🇿Iltimos bot tilini tanlang:`,
    },

    setEn: {
        greeting: ', we are glad to welcome you on the official bot of the insurance company GROSS Insurance',
        fiz: '',
        yur: '',
    },

    setRu: {
        greeting: ', приветствуем Вас в Телеграм боте по онлайн оформлению ОСАГО',

        polis: `Давайте оформим ваш полис:

- Пожалуйста выберите тип оформления 👇🏻`,

        fiz: `Для оформления E-полиса ОСАГО (для физ.лица) необходимо:

1)	отправить тех.паспорт автомобиля (переднюю и заднюю сторону)

2)	отправить паспорт заявителя (или ID-карту)

3)	указать телефонный номер заявителя (+998 ** *** ** **)

4)	указать дату начала страхования (ДД/ММ/ГГГГ)

5)	оплатить на карту 8600 5729 9350 0300 (Nazarov Rustam Furqat Ogli) и отправить скриншот оплаты`,

        yur: `Для оформления E-полиса ОСАГО (для юр.лица) необходимо:

1)	отправить тех.паспорт автомобиля (переднюю и заднюю сторону)

2)	отправить реквизиты организации (ИНН, адрес, расчетный счет, банк, МФО, Ф.И.О. директора)

3)	указать телефонный номер заявителя (+998 ** *** ** **)

4)	указать дату начала страхования (ДД/ММ/ГГГГ)

5)	указать вид оплаты: 

a) Перечислением: оплатить по договору страхования и отправить платежное поручение

b) Картой: оплатить на карту 8600 5729 9350 0300 ‘Nazarov Rustam Furqat Ogli’ и отправить скриншот оплаты`,

        contacts: `Контактные данные: 
Tel: +998903255297
Telegram: @insurance_rustamnazarov
Instagram: @rustaminsurance`,
        
        consulting: `Связаться с онлайн консультантом 👇🏻`,

        infoRequest: `Пожалуйста отправьте вышеуказанные данные 👇🏻`,
    },


    setUz: {
        greeting: `, sizni GROSS Insurance kompaniyasining rasmiy telegram botida ko'rganimizdan xursandmiz!`,
        fiz: '',
        yur: '',
    },
}