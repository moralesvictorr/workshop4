import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "../layout/Navbar";


export const CompLogout = () => {
  const { logout } = useAuth0();

  return (
    <div
      className="flex flex-col items-center 
     "
    >
      <button
        className="text-white h-10 w-32 rounded-xl bg-red-700 "
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Cerrar Session
      </button>
    </div>
  );
};

export const CompProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);
  if (isLoading) {
    return <div>Lodading...</div>;
  }
  return (
    isAuthenticated && (
      <div
        className=" flex flex-col items-center gap-5   
      "
      >
        <img
          src={user.picture}
          className="border-4 hover:border-red-500 border-white rounded-full mt-32"
          alt={user.name}
          width="100px"
          referrerPolicy="no-referrer"
        />
        <h2 className="text-white ">{user.name}</h2>
        <p className="text-white "> {user.email}</p>
        <p className="text-white ">{user.website}</p>
      </div>
    )
  );
};

const Profile = () => {
  return (
    <div className="bg-slate-800 h-screen ">
      <CompProfile  />
      <CompLogout />
        <Navbar />
    </div>
  );
};

export default Profile;
