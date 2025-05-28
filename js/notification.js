// JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const emailLink = document.querySelector('.contact-link.email');
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = 'Email скопирован в буфер обмена';
  document.body.appendChild(notification);

  emailLink.addEventListener('click', async function(e) {
    e.preventDefault();
    
    // Извлечение email из текста
    const emailText = emailLink.querySelector('span').textContent;
    const email = emailText.split(' - ')[1];

    try {
      // Копирование в буфер
      await navigator.clipboard.writeText(email);
      
      // Показ уведомления
      notification.classList.remove('hide');
      notification.classList.add('show');
      
      // Скрытие через 2 секунды
      setTimeout(() => {
        notification.classList.remove('show');
        notification.classList.add('hide');
      }, 2000);
      
    } catch (err) {
      console.error('Ошибка копирования: ', err);
      notification.textContent = 'Ошибка копирования';
      notification.classList.remove('hide');
      notification.classList.add('show');
      
      setTimeout(() => {
        notification.classList.remove('show');
        notification.classList.add('hide');
      }, 2000);
    }
  });
});