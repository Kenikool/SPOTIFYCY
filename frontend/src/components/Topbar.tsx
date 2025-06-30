import { SignedOut, SignedIn, SignOutButton } from "@clerk/clerk-react";
import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { Link } from "react-router-dom";
import SignInOAuthButton from "./SignInOAuthButton";
const Topbar = () => {
  // checking if is admin
  const isAdmin = false;
  return (
    <div className="flex items-center justify-between p-4 sticky top-0 bg-zinc-500/75 backdrop-blur-md z-10">
      <div className="flex items-center gap-2 cursor-pointer">Spotify</div>

      <div className="flex items-center gap-4 cursor-pointer">
        {isAdmin && (
          <Link to="/admin">
            <LuLayoutDashboard />
            Admin Dashboard
          </Link>
        )}

        <SignedIn>
          <SignOutButton />
        </SignedIn>
        <SignedOut>
          <SignInOAuthButton />
        </SignedOut>
      </div>
    </div>
  );
};

export default Topbar;
