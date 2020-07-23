import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./action";
import "./App.css";

function App() {
  const users = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const onClick = () => {
    dispatch(fetchUsers());
  };

  return (
    <div className="App">
      <div className="block">
        {users.length !== 0 ? (
          users.map((u, i) => <h3 key={i}>{u.name}</h3>)
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
      <button onClick={onClick}>Reload</button>
    </div>
  );
}

export default App;
