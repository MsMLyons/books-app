// the React import (line 2) is not necessary in React 18
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';


// objects to represent each book
const firstbook = {
    author: 'Nathan Hunter',
    title:'The Art of Prompt Engineering with ChatGPT',
    img: './images/book1.jpg',
};

const secondbook = {
    author: 'Charles R. Severance',
    title: 'Python for Everybody',
    img: './images/book2.jpg',
};

const thirdbook = {
    author: 'Brandeis Hill Marshall',
    title: 'Data Conscience Algorithmic S1ege on Our Humanity',
    img: './images/book3.jpg',
};

const fourthbook = {
    author: 'Gayle Laakmann McDowell',
    title: 'Crack the Coding Interview',
    img: './images/book4.jpg',
};

// main component to be rendered
// section component to render the nested article (Book) component
const BookList = () => {
    return (
        <section className='booklist'>
            <Book
                author={firstbook.author}
                title={firstbook.title}
                img={firstbook.img}
            />
            <Book
                author={secondbook.author}
                title={secondbook.title}
                img={secondbook.img}
            />
            <Book
                author={thirdbook.author}
                title={thirdbook.title}
                img={thirdbook.img}
            />
            <Book
                author={fourthbook.author}
                title={fourthbook.title}
                img={fourthbook.img}
            />
        </section>
    );
};


const Book = (props) => { 
    console.log(props);   
    return (
        <article className="book">
            <img 
                src={props.img} 
                alt={props.title} 
            />
            <h2>{props.title}</h2>
            <h4>{props.author.toUpperCase()}</h4>
        </article>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render (<BookList />);