import React from "react";

const Library = () => {
  const Library = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "1984", author: "George Orwell" },
  ];
  return (
    <>
      {Library.map((Library) => {
        return (
          <div key={Library.id}>
            <h2>{Library.title}</h2>
            <p>Author: {Library.author}</p>
          </div>
        );
      })}
    </>
  );
};

export default Library;
