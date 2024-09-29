// script.js
function timeUntilDate(targetDate) {
    const today = new Date(); // Получаем текущую дату
    const newYear = new Date(targetDate); // Создаем объект даты для целевой даты

    // Вычисляем разницу в миллисекундах между целевой датой и текущей датой
    const diffTime = newYear - today;

    // Проверяем, не прошла ли целевая дата
    if (diffTime < 0) {
        return null; // Возвращаем null, если дата уже прошла
    }

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

// Функция для вызова и отображения результата
function displayTimeUntil(targetDate) {
    const timeRemaining = timeUntilDate(targetDate);
    console.log(timeRemaining)
    if (timeRemaining) {
        let date = `
            До целевой даты осталось
            ${timeRemaining.days} дней, 
            ${timeRemaining.hours} часов, 
            ${timeRemaining.minutes} минут и 
            ${timeRemaining.seconds} секунд.
        `
        console.log(date);
        return date
    } else {
        let date = 'Целевая дата уже прошла.'
        console.log(date);
        return date
    }
}
