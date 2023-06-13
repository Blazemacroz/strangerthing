import React, { useState } from "react";
import { BASE_URL } from "../api";

const Logout = ({ setToken }) => {
  const handleLogout = () => {};
  // need to finish the logout
  return (
    <div>
      {
        <form onReset={handleLogout}>
          <button type="reset">Logout</button>
        </form>
      }
    </div>
  );
};

export default Logout;
