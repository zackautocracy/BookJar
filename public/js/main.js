import {loadJSON , loadTemplate} from "./loaders.js";

// Selecting page elements
const inputField    = document.querySelector('#input');
const search        = document.querySelector('#search');
const responseField = document.querySelector('#responseField');
const authorToggle = document.querySelector('#toggle-1');
const titleToggle = document.querySelector('#toggle-2');
const collection = document.querySelector('#collection');
const footer = document.querySelector('#footer');
responseField.style.display = 'none';

let booksPromise = loadJSON('../data/dataOutput/books.json');

booksPromise.then(Start);

function Start(Books)
{

   const BookList = Books['books']['book'];

  // AJAX function
  const searchBooks = (queryBook,byAuthor = false ,byTitle = false) =>
  {
    const BookObject = {
      book : []
    }

    function searchHandler(book)  {
      if (byAuthor && byTitle) {
        return (book.title.toLocaleLowerCase().includes(queryBook.toLocaleLowerCase()) || book.authors.author.includes(queryBook));
      }else if (byAuthor && !byTitle){
        return book.authors.author.includes(queryBook);
      }else if (byTitle && !byAuthor){
        return book.title.toLocaleLowerCase().includes(queryBook.toLocaleLowerCase());
      }
    }

       BookObject.book = BookList.filter(searchHandler)

    return BookObject ;
  }


  const addTransitionToBooks = (booksClass) => {

    for (let i = 0; i < booksClass.length; i++)
    {
      booksClass[i].addEventListener('mouseover',() =>
      { booksClass[i].firstElementChild.style.paddingTop = 0;},false);

      booksClass[i].addEventListener('mouseout',() =>
      { booksClass[i].firstElementChild.style.paddingTop = '120px';},false);
    }

  }



  //Function that retrieves the books from the JSON object loaded in memory
  const displayBooks = (event) => {

    event.preventDefault();
    footer.style.display = 'none';

    if (collection.style.display === 'none') {
      collection.style.display = 'block'
    }

    //Handling empty input
    const  unsanitazedInput =  inputField.value || 'Unknown';
    const queryBook = encodeURIComponent(unsanitazedInput);
    const isAuthorChecked = authorToggle.checked;
    const isTitleChecked = titleToggle.checked;

    if (!isAuthorChecked && !isTitleChecked) {
      responseField.innerHTML = '<h3>ℹ️ Choose a Search Mode</h3>'
    }else
    {
      //Getting results
      const bookResult = searchBooks(queryBook, isAuthorChecked, isTitleChecked);
      if (bookResult.book.length > 0) {
        loadTemplate(bookResult, 'book-template', responseField)

        addTransitionToBooks(document.getElementsByClassName('book'));


      }else {
        responseField.innerHTML = "<h3>⚠️ No Result Were Found , Browse our collection to see what's available</h3>";
      }
    }
    responseField.style.display = 'block';
  }

  //Function that loads all the present books in JSON file
  const displayCollection = (event) => {

    collection.style.display = 'none';
    footer.style.display = 'none';

    loadTemplate(Books['books'],'book-template',responseField);
    addTransitionToBooks(document.getElementsByClassName('book'));

    responseField.style.display = 'block';
  }


  search.addEventListener('click',displayBooks)
  collection.addEventListener('click',displayCollection)

}
















