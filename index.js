let myLibrary = [
  new Book("JK Rowling", "Harry Potter and the Sorcer's Stone", 200, "Yes"),
  new Book("Phil Knight", "Shoe Dog", 300, "Yes"),
  new Book("Sun Tzu", "The Art of War", 400, "No"),
  new Book("J.R.R Tolkein", "The Lord of the Rings", 500, "Yes"),
  new Book("Don Quixote", "Miguel de Cervantes", 400, "No")
];
let indexCount = 0;

function Book(author, title, numberOfPages, hasBeenRead) {
  this.author = author;
  this.title = title;
  this.numberOfPages = numberOfPages;
  this.hasBeenRead = hasBeenRead;
}

function addBookToLibrary() {
  let author;
  let title;
  let numberOfPages;
  let hasBeenRead;

  while (true) {
    author = prompt("Who's the author of the book?");

    if (author == "") {
      alert("Invalid input. Please try again.");
    } else {
      break;
    }
  }

  while (true) {
    title = prompt("What's the title of the book?");

    if (author == "") {
      alert("Invalid input. Please try again.");
    } else {
      break;
    }
  }

  while (true) {
    numberOfPages = parseInt(
      prompt("How many pages in the book? (Numbers only)")
    );

    if (isNaN(numberOfPages)) {
      alert("Invalid input. Please try again.");
    } else {
      break;
    }
  }

  while (true) {
    hasBeenRead = prompt("Have you read this book (Case Sensitive)? (Yes/No) ");

    if (hasBeenRead != "Yes" && hasBeenRead != "No") {
      alert("Invalid input. Please try again.");
    } else {
      break;
    }
  }

  myLibrary.push(new Book(author, title, numberOfPages, hasBeenRead));
  displayBook();
}

function displayBook() {
  for (let i = indexCount; i < myLibrary.length; i++) {
    createCard(myLibrary[i]);
    indexCount++;
  }
}

function createCard(bookObj) {
  let div = document.createElement("div");
  div.classList.add("card");
  div.setAttribute("id", "" + indexCount + "")

  let p1 = document.createElement("p");
  p1.innerText = "Author: " + bookObj.author;

  let p2 = document.createElement("p");
  p2.innerText = "Title: " + bookObj.title;

  let p3 = document.createElement("p");
  p3.innerText = "Number of pages: " + bookObj.numberOfPages;

  let p4 = document.createElement("p");
  p4.setAttribute("id", "changer");
  p4.innerText = "Read the book: " + bookObj.hasBeenRead;

  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete Book";
  deleteBtn.classList.add("delete");
  deleteBtn.setAttribute("id", "delete");
  deleteBtn.addEventListener("click", function () {
    deleteBtn.classList.add("delete-dark");
    setTimeout(function () {
      deleteBtn.classList.remove("delete-dark");
    }, 200);

    let parentDiv = deleteBtn.parentElement;
    parentDiv.remove();
  });

  let changeBtn = document.createElement("button");
  changeBtn.innerText = "Change Read Status";
  changeBtn.classList.add("change");
  changeBtn.setAttribute("id", "change");
  changeBtn.addEventListener("click", function(){
    changeBtn.classList.add("change-dark");
    setTimeout(function () {
      changeBtn.classList.remove("change-dark");
    }, 200);

    if(bookObj.hasBeenRead == "Yes"){
      let parentDiv = changeBtn.parentElement;
      let parentID = parseInt(parentDiv.id);
      let para = parentDiv.querySelector("#changer");
      myLibrary[parentID].hasBeenRead = "No";
      para.innerText = "Read the book: " + myLibrary[parentID].hasBeenRead;
    } else if(bookObj.hasBeenRead == "No"){
      let parentDiv = changeBtn.parentElement;
      let parentID = parseInt(parentDiv.id);
      let para = parentDiv.querySelector("#changer");
      myLibrary[parentID].hasBeenRead = "Yes";
      para.innerText = "Read the book: " + myLibrary[parentID].hasBeenRead;
    } 
  });

  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);
  div.appendChild(p4);
  div.appendChild(deleteBtn);
  div.appendChild(changeBtn);
  document.getElementById("library-div").appendChild(div);
}

document.getElementById("add").addEventListener("click", function () {
  addBookToLibrary();
});

displayBook();
