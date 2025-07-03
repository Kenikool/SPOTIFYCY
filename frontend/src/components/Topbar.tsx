import {
  SignedOut,
  SignedIn,
  SignOutButton,
  UserButton,
} from "@clerk/clerk-react";
import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { Link } from "react-router-dom";
import SignInOAuthButton from "./SignInOAuthButton";
import { useAuthStore } from "@/store/useAuthStore";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
const Topbar = () => {
  // checking if is admin
  const { isAdmin } = useAuthStore();
  console.log(isAdmin);
  return (
    <div className="flex items-center justify-between p-4 sticky top-0 bg-zinc-500/75 backdrop-blur-md z-10">
      <div className="flex items-center gap-2 cursor-pointer">
        <img src="/spotify.png" className="size-8" alt="spotify logo" />
        Spotify
      </div>

      <div className="flex items-center gap-4 cursor-pointer">
        {isAdmin && (
          <Link
            to="/admin"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <LuLayoutDashboard />
            Admin Dashboard
          </Link>
        )}

        <SignedOut>
          <SignInOAuthButton />
        </SignedOut>

        <UserButton />
      </div>
    </div>
  );
};

export default Topbar;
