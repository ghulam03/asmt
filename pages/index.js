import React, { useState } from "react";

import Link from "next/link";
import axios from "axios";
import prisma from "../prisma/prisma";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

function Index(props) {
  const router = useRouter();
  const isAuth = useSelector((state) => state.user.isAuthenticated);
  const [persons, setpersons] = useState(props.persons);
  const [isFiltered, setisFiltered] = useState(false);

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
  function sbName() {
    filteredPersons.sort((a, b) => a.uname.localeCompare(b.uname));
  }

  return (
    <>
      {isAuth && (
        <>
          <div className="mt-4 ml-56 bg-lime-100 mr-60">
            <input
              className="w-full px-5 bg-slate-300"
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            ></input>
            <h2 className="ml-20">Customer Details</h2>
            <div className="flex flex-row justify-between">
              <p className="ml-20">The terms you are tracking</p>
              <button className="w-24 bg-orange-200 hover:bg-slate-300"
                onClick={() => {
                  setisFiltered((state) => !state);
                }}
              >
                Filter
              </button>
              <Link href="/add-person">
                <button className="w-24 mr-40 bg-orange-200 hover:bg-slate-300">Add</button>
              </Link>
            </div>
            {isFiltered && (
        <div className=" bg-lime-300">
          <button className="bg-red-200 ml-60 hover:bg-red-300">Sort By Name</button>
          <button className="ml-40 bg-red-200 hover:bg-red-300">Sort By Company</button>
        </div>
      )}
            <div className=" bg-lime-200">
              <tr className="flex flex-row justify-between ">
                <td className="ml-10">Username</td>
                <td>E-mail</td>
                <td>Phone No.</td>
                <td>Company</td>
                <td className="mr-10">Action</td>
              </tr>
            </div>
          </div>
        </>
      )}

{/* {isAuth && isFiltered && (
        <div className="ml-56 bg-lime-300">
          <button className="ml-40 bg-red-200 hover:bg-red-300">Sort By Name</button>
          <button className="ml-40 bg-red-200 hover:bg-red-300">Sort By Company</button>
        </div>
      )} */}

      {isAuth &&
        filteredPersons.map((c) => {
          return (
            <>
              <div className="ml-56 bg-lime-200 mr-60 ">
                <tr className="flex flex-row justify-between ">
                  <td className="ml-10">{c.uname}</td>
                  <td>{c.email}</td>
                  <td>{c.phone}</td>
                  <td>{c.company}</td>
                  <td>
                    <span className="mr-4 bg-orange-200 hover:bg-slate-300">
                      <Link href={c.email}>
                        Edit
                      </Link>
                    </span>
                    <span>
                      <button className="mr-10 bg-orange-200 hover:bg-slate-300"
                        onClick={() => {
                          axios
                            .delete(
                              `api/${c.email}
                    `
                            )
                            .then(function (response) {
                              console.log("person deleted", response);
                              router.push("/");
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
  console.log("all persons",persons)
  return {
    props: { persons },
    revalidate: 10,
  };
}
