"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { singIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const isLoggedIn = true;
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Promptoptia"
          width={50}
          height={50}
          className="object-contain"
        />
        <p className="logo_text">Promptoptia</p>
      </Link>
      {/* Desktop navigation */}
      <div className="sm:flex hidden">
        {isLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link className="black_btn" href="/create-prompt">
              create prompt
            </Link>
          </div>
        ) : (
          <>
            
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
