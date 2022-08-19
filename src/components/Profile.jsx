import React from "react";
import { useUserContext } from "../contexts/userContext";

const Dashboard = () => {
  const { user } = useUserContext();

  console.log(user)
  return (
    <div className="row">
      <div className="auth-wrapper">
        <h1>Profile </h1>
        <h3>Name : {user.displayName}</h3>
        <h3>Email : {user.email}</h3>
      </div>
    </div>
  );
};

export default Dashboard;