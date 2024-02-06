"use client";

import { motion, useCycle, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

import { sidebarItems } from "../lib/constants";
import { SidebarItem } from "@/src/07_shared/ui";
import { SidebarSection } from "@/src/07_shared/ui";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { FiChevronRight, FiX } from "react-icons/fi";

import React from "react";

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const Sidebar = () => {
  const [open, cycleOpen] = useCycle(true, false);

  const pathname = usePathname();

  const isSelected = (path: string) => (pathname === path ? true : false);

  return (
    <div className="relative">
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{
              opacity: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
            className="absolute top-[50%] left-2 transform -translate-y-[50%] min-h-max flex flex-col justify-center flex-auto flex-shrink-0 antialiased bg-[#013220] text-gray-50 rounded-2xl max-w-[240px] z-50 shadow-xl"
          >
            <FiX
              onClick={() => cycleOpen()}
              size={24}
              className="flex self-end mr-2 mt-2"
            />
            <motion.div
              className="flex flex-col h-full"
              initial="open"
              exit="closed"
              animate="open"
              variants={sideVariants}
            >
              <div className="relative flex flex-col overflow-y-auto overflow-x-hidden">
                <ul className="flex flex-col pb-3 space-y-1 gap-0.5">
                  {sidebarItems.map((item, index) => (
                    <React.Fragment key={index}>
                      <SidebarItem
                        href={item.href}
                        text={item.text}
                        icon={item.icon}
                        isSelected={isSelected(item.href ?? "")}
                        itemVariants={itemVariants}
                      />
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>

      {!open && (
        <>
          <div className="absolute top-[50%] left-[0.5] bottom-0 w-1 rounded-xl bg-[#013220] z-20 h-[400px] transform -translate-y-[50%]" />
          <FiChevronRight
            className={
              "absolute top-[50%] left-2 transform -translate-y-[50%] cursor-pointer z-20 text-white transition"
            }
            size={30}
            onClick={() => cycleOpen()}
          />
        </>
      )}
    </div>
  );
};

export default Sidebar;
