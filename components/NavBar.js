import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
// import styles from "./navbar.module.css";
function NavBar() {
  const isAuth=useSelector((state)=>state.user.isAuthenticated)
  return (
    <>
    {!isAuth && (<p>
      Login to see details..
    </p>)}
    {isAuth &&(

   
      <nav 
      // className={styles.navbar}
      >
        <ul>
          <Link href="/">
            <h2>Home</h2>
          </Link>
        </ul>
        <ul>
         
            <h2 >Matches</h2>
        </ul>
        <ul>
            <h2>Manage sources</h2>
        </ul>
        <ul>
            <h2>Integration</h2>
        </ul>
        <ul>
            <h2>Alerts</h2>
        </ul>
        <ul>
            <h2>Settings</h2>
        </ul>
      </nav>
       )}
    </>
  );
}

export default NavBar;
