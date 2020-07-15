import React from "react";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const users = useSelector((state) => state);

  return (
    <div className="App">
      <div className="block">
        {users.map((u, i) => (
          <h3 key={i}>{u.name}</h3>
        ))}
      </div>
    </div>
  );
}

export default App;
