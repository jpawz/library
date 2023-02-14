const myLibrary = [];

const form = document.getElementById("form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("read");
const libraryContainer = document.getElementById("library");

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? "already read" : "not yet read"
    }`;
  }
}

function addBookToLibrary() {
  if (form.checkValidity()) {
    const book = new Book(
      titleInput.value,
      authorInput.value,
      pagesInput.value,
      readInput.checked
    );
    myLibrary.push(book);
  }
}

function displayLibrary() {
  clearDisplayedLibrary();

  myLibrary.forEach((book, index) => {
    let row = libraryContainer.appendChild(document.createElement("tr"));
    row
      .appendChild(document.createElement("td"))
      .appendChild(document.createTextNode(index + 1));
    row
      .appendChild(document.createElement("td"))
      .appendChild(document.createTextNode(book.title));
    row
      .appendChild(document.createElement("td"))
      .appendChild(document.createTextNode(book.author));
    row
      .appendChild(document.createElement("td"))
      .appendChild(document.createTextNode(book.pages));
    row
      .appendChild(document.createElement("td"))
      .appendChild(document.createTextNode(book.read ? "yes" : "no"));
    let deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.addEventListener("click", () => deleteBook(index));

    let readButton = document.createElement("button");
    readButton.appendChild(document.createTextNode("Change read status"));
    readButton.addEventListener("click", () => changeReadStatus(index));
    let actions = row.appendChild(document.createElement("td"));
    actions.appendChild(deleteButton);
    actions.appendChild(readButton);
  });
}

function clearDisplayedLibrary() {
  libraryContainer.innerHTML = "";
}

function deleteBook(id) {
  myLibrary.splice(id, 1);
  displayLibrary();
}

function changeReadStatus(id) {
  myLibrary[id].read = !myLibrary[id].read;
  displayLibrary();
}
