import React from "react";
import "./App.css";


const firstBook = {
  title: "Harry Potter And The Sorcerer's Stone",
  author: "JK Rowling",
  img:
  "https://images-na.ssl-images-amazon.com/images/I/91tDBrO2u9L._AC_UL210_SR210,210_.jpg"
};

const secondBook = {
  title: "Harry Potter and the Chamber of Secrets",
  author: "JK Rowling",
  img:
  "https://m.media-amazon.com/images/I/51RDEwuovQL.jpg"
};


function App() {
  return (
    <div className="book">
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
    </div>
  );
}


const Book = (props) => {
  return (
    
    <section className="bookList">
      <img className="img" src={props.img} alt="Harry Potter" />
      <h3 className="title">{props.title}</h3>
      <h4 className="author">{props.author.toUpperCase()}</h4>
    </section>
    
  );
};




export default App;
