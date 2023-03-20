// the React import (line 2) is not necessary in React 18
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

// main component to be rendered
// section component to render the article component, according to the UI
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

// nested components
// article component to render specific data to the section component
const Book = () => {
    return (
        <article className="book">
            <Image />
            <Title />
            <Author />
        </article>
    );
};

// additional components created to be nested in another component
// implicit return (Author component) and explicit return (Title component) examples
// implicit returns return a single expression, while explicit returns return more complex expressions and operations
const Image = () => (
    <img src='./images/book1.jpg' alt='The Art of Prompt Engineering with ChatGPT' />
);
const Title = () => {
    return <h2>The Art of Prompt Engineering with ChatGPT</h2>;
}
const Author = () => <h4>Nathan Hunter</h4>

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render (<BookList />);