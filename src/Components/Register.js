import React, { useState } from "react";
import { BASE_URL } from "../api";

const Register = ({ setToken }) => {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmedPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    const newUsername = event.target.newUsername.value;
    const newPassword = event.target.newPassword.value;
    const confirmPassword = event.target.confirmPassword.value;
    if (newUsername === "") {
      return alert("Please enter a Username");
    }
    if (newPassword.length < 8) {
      return alert("Password must be 8 characters or more");
    }
    if (confirmPassword !== newPassword) {
      return alert("Passwords do not match");
    }

    console.log(newUsername);
    console.log(newPassword);
    setNewUsername("");
    setNewPassword("");
    setConfirmedPassword("");

    const registerUser = async () => {
      try {
        const response = await fetch(`${BASE_URL}/users/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: {
              username: `${newUsername}`,
              password: `${newPassword}`,
            },
          }),
        });
        const result = await response.json();
        // You can log ▲▲▲ the result
        // here ▼▼▼ to view the json object before returning it
        console.log(result);
        setToken(result.data.token);
        return result.data.token;
      } catch (err) {
        console.error(err);
      }
    };

    registerUser();
  };
  const handleNameChange = (event) => {
    setNewUsername(event.target.value);
  };
  const handlePassChange = (event) => {
    setNewPassword(event.target.value);
  };
  const handleConfirmChange = (event) => {
    setConfirmedPassword(event.target.value);
  };
  return (
    <div>
      {
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="newUsername"
            value={newUsername}
            onChange={handleNameChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            name="newPassword"
            value={newPassword}
            onChange={handlePassChange}
          />
          <label htmlFor="confirm password">Confirm Password:</label>
          <input
            type="text"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmChange}
          />

          <button type="submit">Submit</button>
        </form>
      }
    </div>
  );
};

export default Register;
