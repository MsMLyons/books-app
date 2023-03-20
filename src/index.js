// the React import (line 2) is not necessary in React 18
import React from "react";
import ReactDOM from "react-dom/client";

// main component to be rendered
// section component to render the article component, according to the UI
const BookList = () => {
    return (
        <section>
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
        <article>
            <Image />
            <Title />
            <Author />
        </article>
    );
};

// additional components created to be nested in another component
// implicit return (Image component) and explicit return (Title component) examples
// implicit returns return a single expression, while explicit returns return more complex expressions and operations
const Image = () => <h2>Nara's picture (jk - this is a placeholder for the image)</h2>;
const Title = () => {
    return (<h2>This is a book title about Nara!</h2>)
}
const Author = () => <h4>Nara, the name of the Author</h4>

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render (<BookList />);