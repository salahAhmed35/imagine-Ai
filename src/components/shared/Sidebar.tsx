"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { navLinks } from "@/constants";
import { SignedIn } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { useClerk } from "@clerk/nextjs";
const Sidebar = () => {
  
  const pathname = usePathname();
  const { signOut } = useClerk();
  return (
    <aside className="sidebar pb-5 h-screen w-72 bg-white  shadow-md shadow-purple-200/50 ">
      <div className="flex size-full flex-col gap-4">
        <Link
          href="/"
          className="sidebar-logo mb-3 w-fit flex font-bold text-center"
        >
          <Image src='/assets/logo.svg' alt="logo" width={35} height={35} />
          <p className='text-blue-900 text-4xl font-mono'>ImagineAi</p>
        </Link>
        <nav className="py-4 px-2 flex flex-col justify-between h-full ">
          <SignedIn>
            <ul>
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname;
                return (
                  <Link
                    href={link.route}
                    key={link.route}
                    className={`sidebar-nav_element group flex items-center rounded my-2 p-2 ${isActive ? "bg-blue-500 text-white" : "text-gray-700"
                      }`}
                  >
                    <Image src={link.icon} alt={link.label} width={28} height={28} className="mr-3" />
                    {link.label}
                  </Link>
                );
              })}
            </ul>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname;
                return (
                  <Link
                    href={link.route}
                    key={link.route}
                    className={`sidebar-nav_element group flex items-center rounded my-2 p-2 ${isActive ? "bg-blue-500 text-white" : "text-gray-700"
                      }`}
                  >
                    <Image src={link.icon} alt={link.label} width={28} height={28} className="mr-3" />
                    {link.label}
                  </Link>
                );
              })}
              <li onClick={() => signOut()} className="sidebar-nav_element group flex items-center rounded my-2 p-2 text-gray-700 cursor-pointer w-fit font-bold">
                <Image src={'/assets/logout.svg'} alt="logout" width={28} height={28} className="mr-3" />
                Logout
              </li>
            </ul>
          </SignedIn>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
