import React, { useState } from "react";

import axios from "axios";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from 'uuid';

function SignUp() {
  const router = useRouter();
  const [uname, setuname] = useState("");
  const [password, setpassword] = useState("");
  const id=uuidv4()
  // console.log("id",id)
  
  function handleSubmit(e) {
    e.preventDefault();
    axios.post('api/sign-up', {
        id,
        uname,
        password
      })
      .then(function (response) {
        console.log(response,"user data signup");
        router.push('/')
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  
  return (
      <>
    <div className="ml-40 mr-48 bg-slate-100 m-9">
      <h2 className="pw-80 ml-72 ">SignUp Here!</h2>
      <form  className="flex flex-col" onSubmit={handleSubmit}>
        <label className="ml-48">User Name</label>
        <input
          type="text"
          placeholder="Enter Email"
          value={uname}
          onChange={(e) => setuname(e.target.value)}
          ></input>
        <label className="ml-48">Password</label>

        <input
          type="password"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => setpassword(e.target.value)}
          ></input>
        <button className="bg-red-400 hover:bg-red-600">SignUp</button>
      </form>
    </div>
  </>
);

}

export default SignUp;