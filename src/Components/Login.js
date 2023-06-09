import React, { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault();
        const username = event.target.username.value
        const password = event.target.password.value
        console.log(username);
        console.log(password)
        setUsername('')
        setPassword('')
    }
    const handleNameChange = (event) => {
        setUsername(event.target.value)
    }
    const handlePassChange = (event) => {
        setPassword(event.target.value)
    }
    return <div>
        {<form onSubmit={handleSubmit}>
            <label htmlFor='username'>Username:</label>
        <input type="text" name='username' value={username} onChange={handleNameChange}/>
        <label htmlFor='password'>Password:</label>
        <input type="text" name='password' value={password} onChange={handlePassChange}/>
        <button type='submit'>Submit</button>
        </form>}
    </div>
}

export default Login;