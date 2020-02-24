let Library = {};
let bookId = 0;
let st;
const show = document.getElementById("show");
const addBtn = document.getElementById("add");
const addName = document.getElementById("name");
const addTitle = document.getElementById("title");
const addPages = document.getElementById("pages");
const xx = document.getElementById("xx");
let num = 0;

addBtn.addEventListener("click",()=>{
    if(document.getElementById("staty").checked){
        st=true;
    }
    else if(document.getElementById("statn").checked){
        st=false;
    }
    let newBook = new Book(addName.value,addTitle.value,addPages.value,st)
    addBookToLibrary(newBook);
    loadLibraryView();
}) 

function Book(name,title,pages,status){
    this.name=name;
    this.title=title;
    this.pages=pages;
    this.status=status;
    this.id=bookId++;
}

function addBookToLibrary(book){
    Library[book.id] = book;
}
function getBookView(book){
    const bookView = document.createElement("div");
    bookView.classList.add("book");
    if(book.status){
        bookView.style.border="3px solid green";
    }
    else{
        bookView.style.border="3px solid red";
    }
    // title view
    const titleView = document.createElement("div");
    titleView.innerText = book.title;
    titleView.classList.add("name");
    bookView.append(titleView);
    // author view
    const authorView = document.createElement("div");
    authorView.innerText = book.name;
    authorView.classList.add("author");
    bookView.append(authorView);
    // pages view
    const pagesView = document.createElement("div");
    pagesView.innerText = book.pages;
    pagesView.classList.add("pages");
    bookView.append(pagesView);
    //delete
    const deleteBtnView = document.createElement("button");
    deleteBtnView.innerText = "Remove";
    deleteBtnView.classList.add("deleteBtn");
    deleteBtnView.addEventListener("click" , ()=>deleteBook(book.id));
    bookView.append(deleteBtnView);
    //togle
    const toggleReadBtnView = document.createElement("button");
    toggleReadBtnView.innerText = "toggle";
    toggleReadBtnView.classList.add("toggleReadBtn");
    bookView.append(toggleReadBtnView);
    toggleReadBtnView.addEventListener("click" , ()=>{
        toggleRead(book.id);
        loadLibraryView();
    });
    return bookView;
    
}
function deleteBook(id) {
    removeBookFormLibrary(id);
    loadLibraryView();
}
function loadLibraryView(){
    xx.innerHTML = "";
    for(let key in Library){
        xx.append(getBookView(Library[key]));
    }
}
function removeBookFormLibrary(id) {
    delete Library[id];
}
function toggleRead(id) {
    Library[id].status = !Library[id].status;
}
