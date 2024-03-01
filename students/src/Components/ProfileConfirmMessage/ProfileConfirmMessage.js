import React from "react";
import { Link } from "react-router-dom";

const ProfileConfirmMessage = () => {
  return (
    <>
      <div className="border border-black w-56 absolute top-2/4 left-2/4 shadow-xl">
        <div className="p-10">
          <h2>Please Create Profile</h2>
          <Link to="/profile">
            <button className="border border-black p-2"> Ok</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProfileConfirmMessage;
