import React, { useState } from "react";
import { BASE_URL } from "../api";

const Logout = ({ setToken }) => {
  const handleLogout = () => {
  setToken("");
  localStorage.removeItem('token');
  console.log(token);
  };
  return (
    <div>
          <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
