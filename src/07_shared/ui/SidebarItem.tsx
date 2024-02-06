"use client";

import cn from "classnames";

import { motion } from "framer-motion";

type itemVariantsProps = {
  closed: {
    opacity: number;
  };
  open: {
    opacity: number;
  };
};

type Props = {
  href?: string;
  text?: string;
  badgeText?: string;
  badgeColor?: string;
  icon: React.ReactElement;
  itemVariants: itemVariantsProps;
  isSelected?: boolean;
  element?: React.ReactElement;
};

const SidebarItem = ({ href, text, icon, isSelected, itemVariants }: Props) => {
  const className = cn(
    "relative flex flex-row items-center h-11 focus:outline-none border-l-4 border-transparent hover:border-green-500 transition px-6",
    {
      "bg-green-900": isSelected,
    }
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={className}
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
      >
        <div>{icon}</div>
        <span className="ml-2 text-md tracking-wide truncate">{text}</span>
      </motion.a>
    );
  }

  return (
    <div className="relative flex flex-row items-center h-11 focus:outline-none border-l-4 border-transparent hover:border-green-500 transition px-6">
      <div>{icon}</div>
    </div>
  );
};

export default SidebarItem;
