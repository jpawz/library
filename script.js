const myLibrary = [];

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("read");
const libraryContainer = document.getElementById("library");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${
    this.read ? "already read" : "not yet read"
  }`;
};

function addBookToLibrary() {
  const book = new Book(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    readInput.checked
  );
  myLibrary.push(book);
}

function displayLibrary() {
  myLibrary.forEach((book) => {
    let row = libraryContainer.appendChild(document.createElement("tr"));
    row.appendChild(document.createElement("td")).appendChild(document.createTextNode(book.title));
    row.appendChild(document.createElement("td")).appendChild(document.createTextNode(book.author));
    row.appendChild(document.createElement("td")).appendChild(document.createTextNode(book.pages));
    row.appendChild(document.createElement("td")).appendChild(document.createTextNode(book.read));
  });
}
