import React, {useState} from "react";
import { BASE_URL } from "../api";
import { Input } from "@material-ui/core";

const Message = ({token, post}) => {
    const [subject,  setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [username, setUsername] = useState("")
    
    const handleSubmit = (event) => {
        event.preventDefault();

    const subject = event.target.subject.value
    const message = event.target.message.value
    const username = event.target.username.value

    if (subject.length <= 7) {
        return alert("You must have at least 8 characters in your subject.")
    }
    if (message === "") {
        return alert("You must have a message to send.")
    }

    setSubject("");
    setMessage("");
    setUsername("");

    const postMessage = async () => {
        try {
          const response = await fetch(`${BASE_URL}/posts/${post._id}/messages`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                posts: {
                    user: `${username}`,
                subject: `${subject}`, 
              message: `${message}`,
            },
            }),
          });
          const result = await response.json();
          console.log(result);
          return result
        } catch (err) {
          console.error(err);
        }
      }

      postMessage();

    }
    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    };
      const handleSubjectChange = (event) => {
        setSubject(event.target.value)
      };
      const handleMessageChange = (event) => {
        setMessage(event.target.value)
      };
    
      return (
        <div>
            <form onSubmit={handleSubmit}>
        <label htmlFor="user">Username</label>
        <Input
          id="username"
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
        </form>
            <form onSubmit={handleSubmit}>
        <label htmlFor="subject">Subject</label>
        <Input
          id="subject"
          type="text"
          value={subject}
          onChange={handleSubjectChange}
        />
        </form>
        <form onSubmit={handleSubmit}>
        <label htmlFor="message">Message</label>
        <Input
          id="message"
          type="text"
          value={message}
          onChange={handleMessageChange}
          fullWidth label="fullWidth" 
        />
        </form>
        </div>
      ) 
}

export default Message;