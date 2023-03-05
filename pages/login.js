import React, { useState } from "react";

import { addUser } from "../store/userSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

function Login() {
    const dispatch=useDispatch()
  const router = useRouter();
  const [uname, setuname] = useState("");
  const [password, setpassword] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();
    axios.post('api/login', {
        
        uname,
        password
      })
      .then(function (response) {
        console.log(response,"user data login");
        if(response.data.uname===uname){
            dispatch(addUser())
            
            router.push('/')
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    // fetch("/api/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ userName, password }),
    // })
    //   .then((data) => data.json())
    //   .then((datta) => {
    //     console.log(datta);
    //     if (datta.isAuthenticated) {
    //       console.log("logged in");
    //       router.push("/");
    //       dispatch(addUser());
    //     } else {
    //       console.log("Invalid Credential");
    //       setloginFB("Invalid Credential");
    //     }
    //   });
//   }

  
  
  return (
      <>
    <div className="bg-slate-100 m-9 
    
    ">
      <h2 className="pw-80">Login Here!</h2>
      <form  className="flex flex-col" onSubmit={handleSubmit}>
        <label>User Name</label>
        <input
          type="text"
          placeholder="Enter Email"
          value={uname}
          onChange={(e) => setuname(e.target.value)}
          ></input>
        <label>Password</label>

        <input
          type="password"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => setpassword(e.target.value)}
          ></input>
        <button>Login</button>
      </form>
    </div>
  </>
);

}

export default Login;