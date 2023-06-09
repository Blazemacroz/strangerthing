import React, { useState } from "react";

const Register = () => {
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        const newUsername = event.target.newUsername.value
        const newPassword = event.target.newPassword.value
        console.log(newUsername);
        console.log(newPassword)
        setNewUsername('')
        setNewPassword('')
    }
    const handleNameChange = (event) => {
        setNewUsername(event.target.value)
    }
    const handlePassChange = (event) => {
        setNewPassword(event.target.value)
}
return <div>
        {<form onSubmit={handleSubmit}>
            <label htmlFor='username'>Username:</label>
        <input type="text" name='newUsername' value={newUsername} onChange={handleNameChange}/>
        <label htmlFor='password'>Password:</label>
        <input type="text" name='newPassword' value={newPassword} onChange={handlePassChange}/>
        <button type='submit'>Submit</button>
        </form>}
    </div>
}




export default Register;