import React, { useState } from "react";

import axios from "axios";
import prisma from "../prisma/prisma";
import { useRouter } from "next/router";

function EditPerson(props) {
  const router = useRouter();
  const [email, setemail] = useState(props.person.email)
  const [uname, setuname] = useState(props.person.uname);
  const [phone, setphone] = useState(props.person.phone);
  const [company, setcompany] = useState(props.person.company);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post('api/edit-person', {
        
        uname,
        email,
        phone,
        company,
      })
      .then(function (response) {
        console.log(response, "person data edited");
        router.push("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <div
        className="ml-40 mr-48 m-9 bg-slate-100 "
      >
        <h2 className="ml-56 pw-80">Edit Person Here!</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label className="ml-40">User Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={uname}
            onChange={(e) => setuname(e.target.value)}
          ></input>
          <label className="ml-40">Email</label>

          <input
            type="text"
            disabled
            value={email}
          ></input>
          <label className="ml-40">Phone</label>

          <input
            type="number"
            value={phone}
            placeholder="Enter Phone Number "
            onChange={(e) => setphone(e.target.value)}
          ></input>
          <label className="ml-40">Company</label>

          <input
            type="text"
            value={company}
            placeholder="Enter Company Details "
            onChange={(e) => setcompany(e.target.value)}
          ></input>
          <button className="bg-red-400 hover:bg-red-200">Edit Person</button>
        </form>
      </div>
    </>
  );
}

export default EditPerson;

export async function getStaticProps(context) {
    const params = context.params;
    console.log("slug is",params);
    const email = params.email;
    await prisma.$connect();
    const person = await prisma.person.findUnique(
        { where: { email } });
  console.log('person to be edited',person)
    return {
      props: { person },
    };
  }
  
  export async function getStaticPaths() {
    await prisma.$connect();
    const data = await prisma.person.findMany();
    const paths = data.map((d) => ({
      params: {email: d.email },
    }));
    console.log(paths,"all possible path");
  
    return {
      paths,
      fallback: false,
    };
  }