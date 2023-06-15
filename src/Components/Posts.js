import React, { useState } from "react";
import { BASE_URL } from "../api";

const Posts = async ({setToken}) => {
const tokenValue = setToken.value;
    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tokenValue}`

        },
        body: JSON.stringify({
          post: {
            title: "My favorite stuffed animal",
            description: "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
            price: "$480.00",
            willDeliver: true
          }
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }
  
  export default Posts;