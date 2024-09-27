function timeUntilNewYear() {
    const today = new Date(); // Получаем текущую дату
    const currentYear = today.getFullYear(); // Получаем текущий год
    const newYear = new Date(currentYear + 1, 0, 1); // Создаем объект даты для 1 января следующего года

    // Вычисляем разницу в миллисекундах между Новым годом и текущей датой
    const diffTime = newYear - today;

    // Преобразуем разницу в дни, часы, минуты и секунды
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);

    return {
        days: diffDays,
        hours: diffHours,
        minutes: diffMinutes,
        seconds: diffSeconds
    };
}

// const timeRemaining = timeUntilNewYear();
// console.log(`До Нового года осталось ${timeRemaining.days} дней, ${timeRemaining.hours} часов, ${timeRemaining.minutes} минут и ${timeRemaining.seconds} секунд.`);
