import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { FiHome, FiMap, FiUser } from "react-icons/fi";

import { PiTreeThin } from "react-icons/pi";

export const sidebarItems = [
  {
    href: "/",
    text: "Home",
    icon: <FiHome />,
  },
  {
    href: "/map",
    text: "Map",
    icon: <FiMap />,
  },
  {
    href: "/my-trees",
    text: "My Trees",
    icon: <PiTreeThin />,
  },
  {
    icon: (
      <div>
        <SignedIn>
          <div className="flex flex-row items-center justify-center gap-3">
            <UserButton />
            <p className="text-md tracking-wide truncate">Profile</p>
          </div>
        </SignedIn>
        <SignedOut>
          <div className="flex flex-row items-center gap-3">
            <FiUser />
            <SignInButton />
          </div>
        </SignedOut>
      </div>
    ),
  },
];
