import Link from 'next/link'
import React from 'react'
import prisma from '../prisma/prisma'
import { useSelector } from 'react-redux'
function Index(props) {
    

    const isAuth=useSelector((state)=>state.user.isAuthenticated)
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
  {/* {isAuth && (

  )} */}
  
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