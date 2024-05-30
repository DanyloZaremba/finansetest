function openEmailForm() {
    // Створіть нове вікно
    const newWindow = window.open("", "", "width=600,height=400");
  
    // Створіть HTML-код для форми складання листа
    const formHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Надіслати електронний лист</title>
        </head>
        <body>
          <h1>Надіслати електронний лист</h1>
          <form action="mailto:m.omelian@atom-finance.com.ua" method="post">
            <label for="to">Кому:</label>
            <input type="email" id="to" name="to" required>
  
            <label for="subject">Тема:</label>
            <input type="text" id="subject" name="subject" required>
  
            <label for="message">Повідомлення:</label>
            <textarea id="message" name="message" rows="10" required></textarea>
  
            <button type="submit">Надіслати</button>
          </form>
        </body>
      </html>
    `;
  
    // Завантажте HTML-код у нове вікно
    newWindow.document.write(formHTML);
  }