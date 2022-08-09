import BStorage from './BStorage.js';
import { DateTime } from './Luxon.js';

export default class UI {
  static displayBook = () => {
    const dateUI = document.querySelector('#date');
    dateUI.innerText = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

    setInterval(() => {
      dateUI.innerText = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
    }, 10000);

    // document.querySelector("#date").innerHTML = today;

    const bookList = BStorage.getBook();
    bookList.forEach((book) => {
      UI.addBookToScreen(book);
    });
  };

  static addBookToScreen = (book) => {
    document.querySelector('.book h2').style.display = 'block';
    const table = document.getElementsByClassName('book-list')[0];
    const row = document.createElement('tr');
    const td = `
    <td>${book.title} By ${book.author}</td>
    <td class='btn-td'> <button type="button" id="${book.id}" class="btn-remove">
    Remove
  </button></td>   
    `;
    row.innerHTML = td;
    table.appendChild(row);
  };

  static getBook = () => {
    const b = document.getElementsByClassName('add-book-list')[0];
    return b;
  };
}
