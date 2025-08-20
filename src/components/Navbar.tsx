"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "../public/Logo.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeIn" }}
      className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-500 ${scrolled ? "bg-white/90 shadow-md py-2" : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={"/"}>
            <div className="w-[102px] h-[50px]">
              <Image src={Logo} width={900} height={900} alt="Rambap" />
            </div>
          </Link>

          {/* Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="text-[#282828] text-[18px] font-medium hover:text-[#4B1E2F] transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[#282828] text-[18px] font-normal hover:text-[#4B1E2F] transition"
            >
              About
            </Link>
          </div>

          {/* Button */}
          <Link href={"/sign-up"}>
            <Button className="bg-[#4B1E2F] text-white hover:bg-[#4b1e2fa9]">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
