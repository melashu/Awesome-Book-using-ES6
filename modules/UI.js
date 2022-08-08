import { BStorage } from "./BStorage.js";
import { DateTime } from "./luxon.js";

export class UI {
  static displayBook = () => {
    const now = DateTime.now();
    document.querySelector("#date").innerHTML = now.toISO();

    const bookList = BStorage.getBook();
    bookList.forEach((book, index) => {
      UI.addBookToScreen(book, index);
    });
  };

  static addBookToScreen = (book, index) => {
    document.querySelector(".book h2").style.display = "block";
    const table = document.getElementsByClassName("book-list")[0];
    const row = document.createElement("tr");
    const td = `
    <td>${book.title} By ${book.author}</td>
    <td class='btn-td'> <button type="button" id="${index}" class="btn-remove">
    Remove
  </button></td>   
    `;
    row.innerHTML = td;
    table.appendChild(row);
  };

  static getBook = () => {
    let b = document.getElementsByClassName("add-book-list")[0];
    return b;
  };
}
