import React, { useState } from "react";
import {
  addUserToLocalStorage,
  checkUserImage,
  checkUserLogin,
} from "../../../helpers/functions";

const Navbar = () => {
  const [img, setImg] = useState();

  return (
    <div className="flex">
      <p>{checkUserLogin()}</p>

      <img
        src={`${
          checkUserImage()
            ? checkUserImage()
            : "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg"
        }`}
        alt=""
        height="50"
        width="50"
        className="rounded-full"
      />
      <div>
        <input
          type="text"
          onChange={(e) => {
            setImg(e.target.value);
          }}
        />
        <button
          onClick={() => {
            addUserToLocalStorage(false, false, img);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Navbar;
