import React, {useState} from "react";

function BookList({filterList}) {
    return (
        <div>
            {filterList.map((book) => {
                return <h3 key={book.id}>📖{book.title}</h3>;
            })}
        </div>
    );
}

export default BookList;