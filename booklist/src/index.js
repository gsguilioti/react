import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'

const books = [
  {
    id: 1,
    author: 'Dav Pilkey',
    title: 'Dog Man: Big Jim Believes',
    img: 'https://images-na.ssl-images-amazon.com/images/I/91cUuNGL-GL._AC_UL600_SR600,400_.jpg'
  },
  {
    id: 2,
    author: ' Alice Walstead',
    title: 'How to Catch Santa Claus',
    img: 'https://images-na.ssl-images-amazon.com/images/I/91G2sdFZ3LL._AC_UL600_SR600,400_.jpg'
  },
];

const BookList = () => {
  return ( 
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book}/>
      })}
    </section>
  );
}

const Book = ({ img, author, title, children }) => {
  return ( 
    <article className='book'>
      <img src={img}/>
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      {children}
    </article>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
