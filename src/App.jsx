import React from "react";

const Hello = (props) => {
  return (
    <div>
      {props.names.map((name, index) => (
        <p key={index}>Hello {name}</p>
      ))}
    </div>
  );
};

const App = () => {
  const names = ["Maya", "Pekka", "John", "Alice", "Oska"]; // Voit lisätä haluamiasi nimiä tähän

  return (
    <div>
      <h1>Greetings</h1>
      <Hello names={names} />
    </div>
  );
};

export default App;
