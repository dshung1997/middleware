import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./users/action";
import { Users } from "./users/Users";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const onClick = () => {
    dispatch(fetchUsers());
  };

  return (
    <div className="App">
      <Users />
      <button onClick={onClick}>Reload</button>
    </div>
  );
}

export default App;
