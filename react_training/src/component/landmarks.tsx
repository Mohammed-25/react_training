import React from "react";

const landmarks = () => {
  const landmarks = [
    { id: 1, name: "Eiffel Tower", location: "Paris, France" },
    { id: 2, name: "Great Wall of China", location: "China" },
    { id: 3, name: "Machu Picchu", location: "Peru" },
  ];
  return (
    <>
      {landmarks.map((landmarks) => {
        return (
          <div key={landmarks.id}>
            <h2>{landmarks.name}</h2>
            <p>Author: {landmarks.location}</p>
          </div>
        );
      })}
    </>
  );
};

export default landmarks;
