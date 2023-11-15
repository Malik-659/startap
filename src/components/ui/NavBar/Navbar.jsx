import React from "react";
import { useNavigate } from "react-router-dom";
import { checkUserLogin, logout } from "../../../helpers/functions";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black/75 w-full fixed top-0 py-5 z-[10000]">
      <div className="flex  justify-between px-5">
        <div className="w-1/2">
          <ul className="flex text-white font-normal font-archivoblack text-3xl gap-x-[52px]">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {!checkUserLogin() ? (
              <>
                <li>
                  <NavLink to="/sign-up">Registration</NavLink>
                </li>
                <li>
                  <NavLink to="sign-in">Authorization</NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    onClick={() => {
                      logout();
                    }}
                  >
                    Logout
                  </NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink to="posts">Posts</NavLink>
            </li>
            <li>
              <a
                href="https://guildhub-production.up.railway.app"
                target="_blank"
              >
                Chats
              </a>
            </li>
            <li>
              <NavLink>Education</NavLink>
            </li>
          </ul>
        </div>
        <div className="font-normal text-white font-jomhuria text-3xl flex items-center gap-2">
          <p>{checkUserLogin() ? checkUserLogin() : "User"}</p>
          <svg
            width="45"
            height="45"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.25 9C15.25 10.7949 13.7949 12.25 12 12.25V13.75C14.6234 13.75 16.75 11.6234 16.75 9H15.25ZM12 12.25C10.2051 12.25 8.75 10.7949 8.75 9H7.25C7.25 11.6234 9.37665 13.75 12 13.75V12.25ZM8.75 9C8.75 7.20507 10.2051 5.75 12 5.75V4.25C9.37665 4.25 7.25 6.37665 7.25 9H8.75ZM12 5.75C13.7949 5.75 15.25 7.20507 15.25 9H16.75C16.75 6.37665 14.6234 4.25 12 4.25V5.75ZM9 16.75H15V15.25H9V16.75ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75V1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75ZM12 2.75C17.1086 2.75 21.25 6.89137 21.25 12H22.75C22.75 6.06294 17.9371 1.25 12 1.25V2.75ZM21.25 12C21.25 14.6233 20.159 16.9905 18.4039 18.6748L19.4425 19.7571C21.4801 17.8016 22.75 15.0485 22.75 12H21.25ZM18.4039 18.6748C16.7412 20.2705 14.4858 21.25 12 21.25V22.75C14.8882 22.75 17.5117 21.61 19.4425 19.7571L18.4039 18.6748ZM15 16.75C16.576 16.75 17.8915 17.8726 18.1876 19.3621L19.6588 19.0697C19.226 16.8918 17.3055 15.25 15 15.25V16.75ZM12 21.25C9.51425 21.25 7.25884 20.2705 5.59612 18.6748L4.55751 19.7571C6.48833 21.61 9.11182 22.75 12 22.75V21.25ZM5.59612 18.6748C3.84103 16.9905 2.75 14.6233 2.75 12H1.25C1.25 15.0485 2.51989 17.8016 4.55751 19.7571L5.59612 18.6748ZM9 15.25C6.69445 15.25 4.77403 16.8918 4.3412 19.0697L5.81243 19.3621C6.10846 17.8726 7.42396 16.75 9 16.75V15.25Z"
              fill="#FAFAFA"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
