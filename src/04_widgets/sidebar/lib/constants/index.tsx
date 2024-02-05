import {
  FiHome,
  FiSettings,
  FiLogOut,
  FiUser,
  FiMap,
  FiBell,
} from "react-icons/fi";
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
    href: "/dashboard",
    text: "Dashboard",
    icon: <FiBell />,
  },
  {
    href: "/profile",
    text: "Profile",
    icon: <FiUser />,
    section: "Settings",
  },
  {
    href: "/settings",
    text: "Settings",
    icon: <FiSettings />,
  },
  {
    href: "/logout",
    text: "Logout",
    icon: <FiLogOut />,
  },
];
