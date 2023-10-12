import React, { useLayoutEffect } from 'react'

function Component1({setBook}) {
    const Books =
        [
            { name: "book-name-1" },
            { name: "book-name-2" }
        ]
    useLayoutEffect(()=>{
        setBook(Books.length);
    });
    const BookList = Books.map((book,index)=>{
        return <h2 key={index}>{book.name}</h2>
    });
    return (
        <div>
            {BookList}
        </div>
    )
}

export default Component1
