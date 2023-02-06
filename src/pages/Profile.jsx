import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import CompLogout2 from "../components/CompLogout2";
import Navbar from "../layout/Navbar";
import CompLogin from "../components/CompLogin";

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

export const CompProfile2 = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);
  if (isLoading) {
    return <div>Lodading...</div>;
  }
  return (
    isAuthenticated && (
      <div
        className=" flex flex-col items-center gap-5   mt-16
      "
      >
        <img
          src={user.picture}
          className="border-4 hover:border-red-500 border-white rounded-full"
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
      <CompLogin />
      <CompProfile2 />
      <CompLogout />

      <div className="mt-36">
        <Navbar />
      </div>
    </div>
  );
};

export default Profile;
