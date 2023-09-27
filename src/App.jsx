import React from "react";

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  );
};

const App = () => {
  const friends = [
    { name: "Leevi", age: 4 },
    { name: "Venla", age: 10 },
  ];

  return (
    <div>
      {friends.map((friend, index) => (
        <Hello key={index} name={friend.name} age={friend.age} />
      ))}
      <Footer />
    </div>
  );
};

export default App;
