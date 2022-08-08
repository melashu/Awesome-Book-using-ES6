class UI {
  static displayBook() {
    const monthList = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var today = new Date();

    var date =
      monthList[today.getMonth()] +
      "-" +
      today.getDate() +
      "-" +
      today.getFullYear();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + " " + time;
    document.querySelector("#date").innerHTML = dateTime;

    let bookList = BStorage.getBook();
    bookList.forEach((book, index) => {
      UI.addBookToScreen(book, index);
    });

    // bookList.forEach((book, index) => UI.addBookToScreen(book, index));
    //
  }

  static addBookToScreen(book, index) {
    document.querySelector(".book h2").style.display = "block";
    const table = document.getElementsByClassName("book-list")[0];
    let row = document.createElement("tr");
    let td = `
    <td>${book.title} By ${book.author}</td>
    <td class='btn-td'> <button type="button" id="${index}" class="btn-remove">
    Remove
  </button></td>   
    `;
    row.innerHTML = td;
    table.appendChild(row);
  }

  static getBook() {
    let b = document.getElementsByClassName("add-book-list")[0];
    return b;
  }
}
