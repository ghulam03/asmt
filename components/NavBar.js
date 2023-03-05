import Link from "next/link";
import React from "react";
// import styles from "./navbar.module.css";
function NavBar() {
  return (
    <>
      <nav 
      // className={styles.navbar}
      >
        <ul>
          <Link href="/">
            <h2>Home</h2>
          </Link>
        </ul>
        <ul>
         
            <h2 className="bg-orange-200">Matches</h2>
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
    </>
  );
}

export default NavBar;
