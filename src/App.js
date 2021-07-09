import React from "react";
import "./App.css";


const firstBook = {
  title: "Harry Potter And The Sorcerer's Stone, Book 1",
  author: "J.K. Rowling",
  img:
  "https://images-na.ssl-images-amazon.com/images/I/91tDBrO2u9L._AC_UL210_SR210,210_.jpg",
  book: "Audible Audio Book"
};

const secondBook = {
  title: "Harry Potter and the Chamber of Secrets, Book 2",
  author: "J.K. Rowling",
  img:
  "https://m.media-amazon.com/images/I/51RDEwuovQL.jpg",
  book: "Audible Audio Book"
};
const thirdBook = {
  title: "Harry Potter and the Prisoner of Azkaban, Book 3",
  author: "J.K. Rowling",
  img:
  "https://m.media-amazon.com/images/I/511LCj4HF2L.jpg",
  book: "Audible Audio Book"
};
const fourthBook = {
  title: "Harry Potter and the Chamber of Secrets",
  author: "J.K. Rowling",
  img:
  "https://m.media-amazon.com/images/I/51RDEwuovQL.jpg",
  book: "Audible Audio Book"
};
const fifthBook = {
  title: "Harry Potter and the Chamber of Secrets",
  author: "J.K. Rowling",
  img:
  "https://m.media-amazon.com/images/I/51RDEwuovQL.jpg",
  book: "Audible Audio Book"
};


function App() {
  return (
    <div className="book">
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} book={firstBook.book}/>
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
    </div>
  );
}


const Book = (props) => {
  const { img, title, author, book } = props;
  return (
    
    <section className="bookList">
      <img className="img" src={img} alt="Harry Potter" />
      <a href="#"> <h3 className="title">{title}</h3> </a>
      <h4 className="author">{author}</h4>
      <p>{book}</p>
    </section>
    
  );
};




export default App;
