import React from "react";
import { useSelector } from "react-redux";

const Users = () => {
  const { users } = useSelector((state) => state);

  return (
    <div className="block">
      {users.length !== 0 ? (
        users.map((u, i) => <h3 key={i}>{u.name}</h3>)
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export { Users };
