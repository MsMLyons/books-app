// the React import (line 2) is not necessary in React 18
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';


// variables for Book component
const author = 'Nathan Hunter';
const title = 'The Art of Prompt Engineering with ChatGPT';
const img = './images/book1.jpg';


// main component to be rendered
// section component to render the nested article (Book) component
const BookList = () => {
    return (
        <section className="booklist">
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
};


const Book = () => {    
    return (
        <article className="book">
            <img 
                src={img} 
                alt='The Art of Prompt Engineering with ChatGPT' 
            />
            <h2>{title}</h2>
            <h4>{author.toUpperCase()}</h4>
        </article>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render (<BookList />);