import React from "react";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const users = useSelector((state) => state);

  return (
    <div className="App">
      <div className="block">
        {users.length !== 0 ? (
          users.map((u, i) => <h3 key={i}>{u.name}</h3>)
        ) : (
          <h3>None...</h3>
        )}
      </div>
      <h1>he</h1>
    </div>
  );
}

export default App;
