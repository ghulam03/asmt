import { AiOutlineAlert, AiOutlineHome, AiOutlineSetting } from "react-icons/ai";

import Link from "next/link";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import React from "react";
import { TbFriends } from "react-icons/tb";
import { useSelector } from "react-redux";

function NavBar() {
  const isAuth = useSelector((state) => state.user.isAuthenticated);
  return (
    <>
      {!isAuth && <p className="ml-12  bg-amber-500">Login to see details..</p>}

      {isAuth && (
        <nav className="bg-red-100 h-60">
          <ul className=" ml-14">
            <Link href="/">
              <div className="flex flex-row justify-start w-36 hover:bg-cyan-500">
                <AiOutlineHome></AiOutlineHome>

                <h2 className="ml-5">Home</h2>
              </div>
            </Link>
          </ul>
          <ul className="ml-14">
            <div className="flex flex-row justify-start w-36 hover:bg-cyan-500">
              <TbFriends></TbFriends>
              <h2 className="ml-5">Matches</h2>
            </div>
          </ul>
          <ul className="ml-14">
          <div className="flex flex-row justify-start w-36 hover:bg-cyan-500">
            <MdOutlineIntegrationInstructions></MdOutlineIntegrationInstructions>
              <h2 className="ml-5">Sources</h2>
            </div>
          </ul>
          <ul className="ml-14">
          <div className="flex flex-row justify-start w-36 hover:bg-cyan-500">
            <MdOutlineIntegrationInstructions></MdOutlineIntegrationInstructions>
              <h2 className="ml-5">Integration</h2>
            </div>
          </ul>
          <ul className="ml-14">
          <div className="flex flex-row justify-start w-36 hover:bg-cyan-500">
            <AiOutlineAlert></AiOutlineAlert>
              <h2 className="ml-5">Alerts</h2>
            </div>
          </ul>
          <ul className="ml-14">
          <div className="flex flex-row justify-start w-36 hover:bg-cyan-500">
            <AiOutlineSetting></AiOutlineSetting>
              <h2 className="ml-5">Settings</h2>
            </div>
          </ul>
        </nav>
      )}
    </>
  );
}

export default NavBar;
