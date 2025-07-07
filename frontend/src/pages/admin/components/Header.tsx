import { UserButton } from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3 mb-8">
        <Link to="/">
          <img
            src="spotify.png"
            alt="spotify logo"
            className="size-10 text-black"
          />
        </Link>
      </div>
      <div>
        <h1 className="tex-3xl font-bold">Music Manager</h1>
        <p className="text-zinc-400 mt-1">Manage your music catalog</p>
      </div>
      <UserButton
        appearance={{
          elements: {
            userButtonBase: "flex items-center gap-2",
          },
        }}
      />
    </div>
  );
};

export default Header;
