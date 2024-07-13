const TelegramBot = require('node-telegram-bot-api');

// 6816437050:AAHD6_OR5-G-7oI7a3cJ96VrZSEFer14Xcw
const token = 'YOUR_TELEGRAM_BOT_TOKEN';

// Створюємо об'єкт бота
const bot = new TelegramBot(token, { polling: true });

// Обробник повідомлень від користувачів
bot.on('message', (msg) => {
    const chatId = msg.chat.id; // ID чату, з яким відбувається спілкування
    const messageText = msg.text; // Текст повідомлення від користувача

    // Приклад обробки команди "/add_contact"
    if (messageText === '/add_contact') {
        // Ваш код для додавання контакту до CRM
        // Наприклад, відправка повідомлення про успішне додавання
        bot.sendMessage(chatId, 'Контакт додано до CRM!');
