export default class BStorage {
  static getBook = () => {
    let book = [];
    if (localStorage.getItem("ourbook") !== null) {
      book = JSON.parse(localStorage.getItem("ourbook"));
    } else {
      book = [];
    }
    return book;
  };

  static addBook = (book) => {
    const bookList = BStorage.getBook();
    bookList.push(book);
    localStorage.setItem("ourbook", JSON.stringify(bookList));
  };

  static removeBook = (e) => {
    if (e.target.classList.contains("btn-remove")) {
      let list = BStorage.getBook();
      const parent = e.target.parentElement.parentElement;
      const elementIndex = e.target;
      parent.remove();
      let result = list.filter((book) => book.id != elementIndex.id);
      localStorage.setItem("ourbook", JSON.stringify(result));
    }
  };
}
