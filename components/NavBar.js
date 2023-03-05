import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

function NavBar() {
  const isAuth = useSelector((state) => state.user.isAuthenticated);
  return (
    <>
      {!isAuth && <p>Login to see details..</p>}

      {isAuth && (
        <nav
        className="bg-red-100 h-60"
        >
          <ul className="ml-14">
            <Link href="/">
              <h2>Home</h2>
            </Link>
          </ul>
          <ul className="ml-14">
            <h2>Matches</h2>
          </ul>
          <ul className="ml-14">
            <h2>Manage sources</h2>
          </ul>
          <ul className="ml-14">
            <h2>Integration</h2>
          </ul>
          <ul className="ml-14">
            <h2>Alerts</h2>
          </ul>
          <ul className="ml-14">
            <h2>Settings</h2>
          </ul>
        </nav>
      )}
    </>
  );
}

export default NavBar;
