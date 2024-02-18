const myLibrary = [];
function Book(title, author, isRead, description) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
    this.description = description
}
const description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, rerum? Consectetur voluptates vel deserunt eos dolore vero. Repudiandae, porro sequi assumenda neque enim minima officia doloremque cumque voluptatum quis distinctio!"
const book1 = new Book('Book1', 'Pooja', true, description);
myLibrary.push(book1);
const book2 = new Book('Book2', 'Pooja', false, description);
myLibrary.push(book2);
const book3 = new Book('Book3', 'Pooja', true, description);
myLibrary.push(book3);

const addBookToLibrary = () => {
    console.log("njnjken");
    const title = document.querySelector('input[name="title"]').value;
    const author = document.querySelector('input[name="author"]').value;
    const isRead = document.querySelector('input[name="isRead"]').checked;
    const description = document.querySelector('#desc').value;
    const book = new Book(title, author, isRead, description);
    myLibrary.push(book);
    displayBook();
    dialog.close();
}
const dialog = document.querySelector("dialog");
const closeDialog = () => {
    dialog.close();
}
const show = () => {
    dialog.showModal();
}
const note = document.querySelector(".displayBooks");
const displayBook = () => {
    note.innerHTML = "";
    myLibrary.forEach((book) => {
        const htmlData = ` <div class="Books">
    <h2 class="title">${book.title}</h2>
    <h3 class="Author">${book.author}</h3>
    <p class="Description">${book.description}</p> 
    <p>Read:${book.isRead?"Yes":"No"}</p>
    </div>`;
        note.insertAdjacentHTML("afterbegin", htmlData);
    })
}
displayBook();