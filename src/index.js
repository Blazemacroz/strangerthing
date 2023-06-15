import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Login from "./Components/Login.js";
import Register from "./Components/Register.js";
import Logout from "./Components/Logout.js";
import Posts from "./Components/Posts.js";

import { fetchPosts } from "./api/index";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState("");
  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetchPosts();
      setPosts(response.data.posts);
    };
    fetchResults();
  }, []);

useEffect(() => {
const storedToken = localStorage.getItem('token');
if (storedToken) {
    setToken(storedToken);
};
}, []);

const setStoredToken = (token) => {
    localStorage.setItem('token', token);
    setToken(token);
}

  return (
    <div>
      <BrowserRouter>
        <div id="register">
          <Route path="/register">
            <Register setToken={setStoredToken} />
          </Route>
        </div>
        <Route exact path="/">
          <div>
            <Login setToken={setToken} />
          </div>
          <div>
            <Logout setToken={setToken}/>
          </div>
          <div>
            <Posts setToken={setToken}/>
          </div>
          <h1>Stranger's Things</h1>
          <h2>Posts</h2>
          {posts &&
            posts.map((post) => {
              return (
                <div key={post._id}>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                </div>
              );
            })}
        </Route>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
