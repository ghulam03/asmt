import { useDispatch, useSelector } from "react-redux";

import Link from "next/link";
import React from "react";
import { deleteUser } from "../store/userSlice";
import { useRouter } from "next/router";

function Header() {
  const dispatch = useDispatch();
  const router = useRouter();
  const isAuth = useSelector((state) => state.user.isAuthenticated);

  return (
    <>
      <div className=" h-14 bg-stone-400">
        {!isAuth && (
          <>
            <div className="flex flex-row justify-end">
              <Link href="/login">
                <button className="mt-3 mr-8 bg-amber-500">Login</button>
              </Link>
              <Link href="/sign-up">
                <button className="mt-3 mr-8 bg-amber-500">SignUp</button>
              </Link>
            </div>
          </>
        )}

        {isAuth && (
          <div className="flex flex-row justify-end">
            <button
            className="mt-3 mr-8 bg-amber-500"
              onClick={() => {
                dispatch(deleteUser());
                router.push("/");
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
