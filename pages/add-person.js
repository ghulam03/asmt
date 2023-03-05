import React, { useState } from "react";

import axios from "axios";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

function AddPerson() {
  const router = useRouter();
  const id = uuidv4();
  console.log("id add-person", id);
  const [uname, setuname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState(123);
  const [company, setcompany] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post('api/add-person', {
        id,
        uname,
        email,
        phone,
        company,
      })
      .then(function (response) {
        console.log(response, "person data added");
        router.push("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <div
        className="m-9 bg-slate-100 
    
    "
      >
        <h2 className="pw-80">Add Person Here!</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label>User Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={uname}
            onChange={(e) => setuname(e.target.value)}
          ></input>
          <label>Email</label>

          <input
            type="text"
            value={email}
            placeholder="Enter Unique Email "
            onChange={(e) => setemail(e.target.value)}
          ></input>
          <label>Phone</label>

          <input
            type="number"
            value={phone}
            placeholder="Enter Phone Number "
            onChange={(e) => setphone(e.target.value)}
          ></input>
          <label>Company</label>

          <input
            type="text"
            value={company}
            placeholder="Enter Company Details "
            onChange={(e) => setcompany(e.target.value)}
          ></input>
          <button>Add Person</button>
        </form>
      </div>
    </>
  );
}

export default AddPerson;
