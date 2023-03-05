import React, { useState } from 'react'

import Link from 'next/link'
import prisma from '../prisma/prisma'
import { useSelector } from 'react-redux'

function Index(props) {
    const [persons, setpersons] = useState(props.persons)
    

    const isAuth=useSelector((state)=>state.user.isAuthenticated)
    function deleteHandler(){
        
    }
  return (
  <>
  {isAuth && (
    <>
    <div className='bg-teal-300 ml-56 mb-36'>
        
    <h2>Customer Details</h2>
    <br></br>
    <div className='flex flex-row'>
        
    <p>The terms you are tracking</p>
    <button>Filter</button>
    <Link href="/add-person">
    <button >Add</button>
    </Link>
    
    </div>
    <div className='   bg-lime-100'>
        <tr className=' flex flex-row justify-between'>
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
  {isAuth && (
    persons.map((c) => {
        return (
          <>
              <div className='  ml-56  bg-yellow-300'>
        <tr className=' flex flex-row justify-between'>
            <td>{c.uname}</td>
            <td>{c.email}</td>
            <td>{c.phone}</td>
            <td>{c.company}</td>
            <td>
                <span>
                    <button>Edit</button>
                    <button onClick={deleteHandler}>Delete</button>
                </span>
            </td>
        </tr>
        

        </div>
          </>

  )})
  )}
  
  </>
  )
}

export default Index

export async function getStaticProps() {
    await prisma.$connect();
    const persons = await prisma.person.findMany();
  
    return {
      props: { persons },
      revalidate: 10,
    };
  }