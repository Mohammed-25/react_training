import React from "react";

const user = () => {
  const user = [
    { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jane Smith", age: 25 },
  ];
  return (
    <>
      {user.map((user) => {
        return (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>age: {user.age}</p>
          </div>
        );
      })}
    </>
  );
};

export default user;
