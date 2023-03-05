import React, { useState } from "react";

import Link from "next/link";
import axios from "axios";
import prisma from "../prisma/prisma";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

function Index(props) {
    
    const router=useRouter()
    const isAuth = useSelector((state) => state.user.isAuthenticated);
  const [persons, setpersons] = useState(props.persons);
  const [isFiltered, setisFiltered] = useState(false)

  const [searchTerm, setSearchTerm] = useState("");

  //filtered person
  //search on uname email & company
  const filteredPersons = persons.filter((person) => {
    const searchTermLowerCase = searchTerm.toLowerCase();
    return (
      person.uname.toLowerCase().includes(searchTermLowerCase) ||
      person.email.toLowerCase().includes(searchTermLowerCase) ||
      person.company.toLowerCase().includes(searchTermLowerCase)
    );
  });
  
//sort by name
function sbName(){
    filteredPersons.sort((a, b) => a.uname.localeCompare(b.uname));
    
}
  
  return (
    <>
      {isAuth && (
        <>
          <div className="ml-56 mb-36 bg-teal-300">
            <input className="bg-white" type="text" placeholder="Search" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            >
                
            </input>
            <h2>Customer Details</h2>
            <br></br>
            <div className="flex flex-row">
              <p>The terms you are tracking</p>
              <button
              onClick={()=>{
              setisFiltered((state)=>!state)
            }}
              >Filter</button>
              <Link href="/add-person">
                <button>Add</button>
              </Link>
            </div>
            <div className="   bg-lime-100">
              <tr className=" flex flex-row justify-between">
                <td>Username</td>
                <td>E-mail</td>
                <td>Phone No.</td>
                <td>Company</td>
                <td>Action</td>
              </tr>
            </div>
          </div>
        </>
      )}
      {isAuth && isFiltered && (
         <div className="ml-56  bg-teal-300">
            <button onClick={sbName}>Sort By Name</button>
            <button>Sort By Company</button>
         </div>

      )}
      {isAuth &&
      
        // persons
        filteredPersons
        .map((c) => {
          return (
            <>
              <div className="  ml-56  bg-yellow-300">
                <tr className=" flex flex-row justify-between">
                  <td>{c.uname}</td>
                  <td>{c.email}</td>
                  <td>{c.phone}</td>
                  <td>{c.company}</td>
                  <td>
                    <span>
                        <Link href={c.email} >
                      {/* <button> */}
                        Edit
                        {/* </button> */}
                      </Link>
                      

                      </span>
                      <span>
                      <button
                        onClick={() => {
                          axios
                            .delete(
                              `api/${c.email}
                      `)
                            .then(function (response) {
                              console.log("person deleted", response)
                              router.push('/')
                            })
                            .catch(function (error) {
                              console.log(error);
                            });
                        }}
                      >
                        Delete
                      </button>
                    </span>
                  </td>
                </tr>
              </div>
            </>
          );
        })}
    </>
  );
}

export default Index;

export async function getStaticProps() {
  await prisma.$connect();
  const persons = await prisma.person.findMany();

  return {
    props: { persons },
    revalidate: 10,
  };
}
