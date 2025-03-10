import React from "react";
import { navLinks } from "@/constants";
import Link from "next/link";
const Home = () => {
  return (
    <>
      <section className="home mx-auto">
        <div className="landing-content bg-blue-300 rounded p-3 flex flex-col justify-center">
          <h1 className="home-header my-2 text-3xl font-bold text-white">
            Enhance Your Creative Vision With AI
          </h1>
          <ul className="flex gap-2">
            {navLinks.slice(1, 6).map((link) => (
              <Link
                key={link.route}
                href={link.route}
                className="gap-2 bg-blue-900 text-white  p-2 rounded " >
                <li>
                  {link.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
export default Home