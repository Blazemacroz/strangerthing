import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link} from "react-router-dom";
import Login from "./Components/Login.js";
import Register from "./Components/Register.js";
import Logout from "./Components/Logout.js";
import Posts from "./Components/Posts.js";
import Delete from "./Components/Delete.js";
import Message from "./Components/Message.js";
import Search from "./Components/Search.js";
import Update from "./Components/Update.js";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Button, AppBar, Toolbar} from '@material-ui/core';
import { BASE_URL, fetchPosts } from "./api/index";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchResults = async () => {
      // preventDefault();
      try {
      const response = await fetchPosts( 
        `${BASE_URL}/posts`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
      );
      // const result = await response.json();

      setPosts(response.data.posts);
      setLoading(false);
      return response.data.posts
    } catch (err) {
      console.error(err);
    }
    };
    fetchResults();
  }, [token]);

useEffect (() => {
   const token = localStorage.getItem('token')
    if (token)  {
      setToken(token);
    }
}, []);
return (
  <BrowserRouter>
  <AppBar position="static">
        <Toolbar>{<nav>
      <Button
      variant="contained"
      size="small"
      >
      <Link to="/">Home</Link>
      </Button>
      {/* <div></div> */}
      <Button
      variant="contained"
      size="small"
      >
      <Link to="/login">Login</Link>
      </Button>
      {/* <div></div> */}
      <Button
      variant="contained"
      size="small"
      >
      <Link to="/register">Register</Link>
      </Button>
      {/* <div></div> */}
      <Button
      variant="contained"
      size="small"
      >
      <Link to="/logout">Logout</Link>
      </Button>
      {/* <div></div> */}
      <Button
      variant="contained"
      size="small"
      >
      <Link to="/search">Search</Link>
      </Button>
      {/* <div></div> */}
    </nav>}</Toolbar>
      </AppBar>
    
      <Route exact path="/">
        <h1>Home</h1>
        <Posts
          posts={posts}
          setPosts={setPosts}
          token={token}
          setToken={setToken}
        />
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          posts.map((post) => {
            return (
              <div key={post._id}>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <p>{post.price}</p>
                <p>{post.willDeliver}</p>
                <p>{post.author.username}</p>
                {post.isAuthor ? 
                <Button
                variant="contained"
                color="secondary"
                size="small">
                  Delete
                  <Delete token={token} post={post} />
                  </Button> && 
                    <Update token={token} post={post} />
                  
                 : (
                  <Link to="/Message">
                  <Button 
                  variant="contained" 
                  color="primary"
                  size="small"
                  > 
                    Message
                    </Button>
                    </Link>
                )}
              </div>
            );
          })
        )}
      </Route>
      <Route path="/login">
        <Login setToken={setToken} />
      </Route>
      <Route path="/register">
        <Register setToken={setToken} />
      </Route>
      <Route path="/logout">
        <Logout setToken={setToken} />
      </Route>
      <Route path="/Message">
          <Message setToken={setToken} token={token} post={posts}/>
          <Button 
          variant="contained"
          color="primary"
          >Send Message</Button>
      </Route>
      <Route path="/posts">
        <Posts posts={posts} loading={loading} />

        {posts.map((post) => {
          return (
            <div key={post._id}>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <p>{post.price}</p>
              <p>{post.willDeliver}</p>
              <p>{post.author.username}</p>
              {post.isAuthor ? (
                <Delete token={token} post={post} /> && (
                  <Update token={token} post={post} />
                )
              ) : (
                <button>Message</button>
              )}
            </div>
          );
        })}
      </Route>
      <Route path="/search">
        <Search setPosts={setPosts} token={token} />

        {posts.map((post) => {
          return (
            <div key={post._id}>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <p>{post.price}</p>
              <p>{post.willDeliver}</p>
              <p>{post.author.username}</p>
              {post.isAuthor ? (
                <Delete token={token} post={post} /> && (
                  <Update token={token} post={post} />
                )
              ) : (
                <button>Message</button>
              )}
            </div>
          );
        })}
      </Route>
      <Route path="/update">
        <Update token={token} />
      </Route>
  </BrowserRouter>
);
};
ReactDOM.render(<App />, document.getElementById("app"));