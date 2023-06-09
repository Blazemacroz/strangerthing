import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Login from "./Components/Login.js";
import Register from "./Components/Register.js";

import { fetchPosts } from "./api/index";

// const App = () => {
//   const [posts, setPosts] = useState([]);
//   useEffect(()=>{
//     const getPosts = async () => {
//         const data = await fetchPosts();
//         setPosts(data);
//     }
//     // getPosts()
//   }, [])
//   const fetchResults = fetchPosts();
//   console.log(fetchResults);
//   return <div>
//     <h1>Posts</h1>
//     <ul>
//         test
//         {posts.map((post) => (
//             <li key = {post.ID}>{post.title}</li>
//         ))}
//     </ul>
//   </div>;
// };

const App = () => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      const fetchResults = async () => {
        const response = await fetchPosts();
        setPosts(response.data.posts);
      };
      fetchResults();
    }, []);
  
    return (
        <div>
            <BrowserRouter>
        <div id="register">
            <Route path="/register">
                <Register />
            </Route>
        </div>
        <Route exact path='/'>
        <div>
            <Login />
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


// fetchPosts();
ReactDOM.render(<App />, document.getElementById("app"));