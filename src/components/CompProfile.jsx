import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const CompProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Lodading...</div>;
  }
  return (
    isAuthenticated && (
      <div className="bg-gray-400 flex flex-col ">
        <img src={user.picture} className="" alt={user.name} />
        <h2 className="bg-black">{user.name}</h2>
        <p className="bg-black">Email : {user.email}</p>
        <p className="bg-black">{user.website}</p>
      </div>
    )
  );
};

export default CompProfile;