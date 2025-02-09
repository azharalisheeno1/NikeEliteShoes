import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="padding-x py-6 sticky top-0 z-50 w-full bg-white shadow-md">
      <nav className="flex justify-between items-center max-container">
        {/* Logo */}
        <a href="/">
          <img
            className="w-[129px] h-[29px]"
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex flex-1 justify-center items-center gap-12">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a className="font-montserrat text-lg text-slate-gray hover:text-black" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Auth Links (Hidden on Mobile) */}
        <div className="hidden lg:flex gap-2 text-lg font-medium font-montserrat">
          <a className="hover:text-coral-red" href="#!">Sign in</a>
          <span>/</span>
          <a className="hover:text-coral-red" href="#!">Explore now</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-md"
          aria-label="Toggle navigation"
        >
          <img src={hamburger} alt="menu" width={25} height={25} />
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-white shadow-lg overflow-hidden"
          >
            <ul className="flex flex-col px-10 h-screen gap-6 py-6">
              {navLinks.map((item) => (
                <li  key={item.label}>
                  <a  className="text-lg font-montserrat text-slate-gray hover:text-black" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
              <div className="md:hidden text-lg">
                <div>
                  <button className="hover:text-coral-red bg-blue-400 px-4 py-1 rounded text-white mb-5">
                    Sign in
                  </button>
                </div>
                <div>
                  <button className="hover:text-coral-red bg-blue-400 px-4 py-1 rounded text-white">
                    Explore now
                  </button>
                </div>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
