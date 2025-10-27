"use client";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
import { LogOutIcon, Menu, User2, X } from "lucide-react";
import { useCart } from "react-use-cart";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const user = useAppSelector((store) => store.auth);
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false); // 🔹 login menu
  const loginMenuRef = useRef(null);
  const dispatch = useAppDispatch();
  const { totalItems, isEmpty } = useCart();

  const navLinks = [
    { href: "/shop", label: "Shop" },
    { href: "/buildBox", label: "Build your box" },
    { href: "/blogs", label: "Blogs" },
    { href: "/about", label: "About" },
    { href: "/faqs", label: "FAQ's" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    if (isBasketOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isBasketOpen]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // 🔹 Close login menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (loginMenuRef.current && !loginMenuRef.current.contains(e.target)) {
        setIsLoginMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="h-16 flex items-center justify-between px-4 md:px-20 bg-primary sticky top-0 z-50">
      {/* --- Mobile Nav --- */}
      <div className="flex items-center justify-end w-full lg:hidden">
        <div className="flex gap-6 relative items-center">
          <button
            className="flex gap-2 items-center text-white"
            style={{ fontFamily: "Poppins" }}
          >
            <LogOutIcon color="white" />
            LogIn
          </button>
          <button
            className="flex gap-2 items-center text-white"
            style={{ fontFamily: "Poppins" }}
            onClick={() => router.push("/register")}
          >
            <User2 color="white" />
            Register
          </button>
        </div>
      </div>

      {/* --- Desktop Nav --- */}
      <div className="hidden lg:flex justify-end items-center w-full">
        <div className="flex gap-6 relative items-center">
          <button
            className="flex gap-2 items-center text-white"
            style={{ fontFamily: "Poppins" }}
          >
            <LogOutIcon color="white" />
            LogIn
          </button>
          <button
            className="flex gap-2 items-center text-white"
            style={{ fontFamily: "Poppins" }}
            onClick={() => router.push("/register")}
          >
            <User2 color="white" />
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
