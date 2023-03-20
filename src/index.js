// the React import (line 2) is not necessary in React 18
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

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

const author = 'Nathan Hunter';
const Book = () => {
    const title = 'The Art of Prompt Engineering with ChatGPT<';
    return (
        <article className="book">
            <img src='./images/book1.jpg' alt='The Art of Prompt Engineering with ChatGPT' />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render (<BookList />);