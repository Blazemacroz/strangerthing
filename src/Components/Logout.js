import React, { useState } from "react";
import { BASE_URL } from "../api";
import {Button} from '@material-ui/core';

const Logout = ({ setToken }) => {
  const handleLogout = () => {
  setToken("");
  localStorage.removeItem('token');
  console.log(token);
  };
  return (
    <div>
          <Button 
          onClick={handleLogout}
          color="secondary"
          >
            Logout
          </Button>
    </div>
  );
};

export default Logout;
