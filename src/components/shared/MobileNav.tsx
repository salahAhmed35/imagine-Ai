"use client"
import React from "react";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { useClerk } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";


const MobileNav = () => {
    const pathname = usePathname();
    const { signOut } = useClerk()
    return (
        <header className="header px-3 py-2 flex justify-between items-center">
            <Link href="/" className="flex gap2 flex-center">
                <Image alt="logo" src='/assets/logo.svg' height={28} width={28} />
                <p className='text-blue-900 text-xl font-mono ml-1'>ImagineAi</p>
            </Link>
            <div className="flex items-center gap-2">
                <SignedIn>
                    <UserButton />
                    <Sheet>
                        <SheetTrigger>
                            <Image alt="menu" src='/assets/menu.svg' height={30} width={30} />
                        </SheetTrigger>
                        <SheetContent className="sheet-content flex flex-col justify-between">
                            <ul className="mt-2">
                                {navLinks.slice(0, 6).map((link) => {
                                    const isActive = link.route === pathname;
                                    return (
                                        <Link
                                            href={link.route}
                                            key={link.route}
                                            className={`group flex items-center rounded my-2 p-2 ${isActive ? "font-bold text-blue-500" : "text-gray-700"
                                                }`}
                                        >
                                            <Image src={link.icon} alt={link.label} width={28} height={28} className="mr-3" />
                                            {link.label}
                                        </Link>
                                    );
                                })}
                            </ul>
                            <ul className="">
                                {navLinks.slice(6).map((link) => {
                                    const isActive = link.route === pathname;
                                    return (
                                        <Link
                                            href={link.route}
                                            key={link.route}
                                            className={` group flex items-center rounded my-2 p-2 ${isActive ? "font-bold text-blue-500" : "text-gray-700"
                                                }`}
                                        >
                                            <Image src={link.icon} alt={link.label} width={28} height={28} className="mr-3" />
                                            {link.label}
                                        </Link>
                                    );
                                })}
                                <li onClick={() => signOut()} className="group flex items-center rounded my-2 p-2 text-gray-700 cursor-pointer w-fit font-bold">
                                    <Image src={'/assets/logout.svg'} alt="logout" width={28} height={28} className="mr-3" />
                                    Logout
                                </li>
                            </ul>
                        </SheetContent>
                    </Sheet>

                </SignedIn>
            </div>
        </header>
    )
}
export default MobileNav