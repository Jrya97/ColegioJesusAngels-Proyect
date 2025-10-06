import { useState } from "react";
import { Logo } from "./logo";
import { Navbar } from "./navbar";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="
        flex items-center justify-between 
        border-b-2 border-gray-200 
        px-5 md:px-8 py-3 
        relative font-sans"
      >
        <Logo />

        <button 
          className="xm:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <div className="hidden xm:flex items-center gap-6">
          <Navbar />
          <a className="
            bg-gradient-to-r from-green-500 to-[#24a9e7]
            text-white font-bold
            px-4 py-2 rounded 
            cursor-pointer whitespace-nowrap "
          >
            Iniciar Sesión
          </a>
        </div>
      </header>

      {open && (
        <div className="
          bg-white shadow-md 
          flex flex-col items-center gap-4 
          p-4 xm:hidden"
        >
          <Navbar className="flex flex-col gap-3 w-full text-center border-b-2 border-gray-200 pb-3" />
          <a className="
            bg-gradient-to-r from-green-500 to-[#24a9e7]
            text-white font-bold
            px-4 py-2 
            rounded cursor-pointer 
            w-fit "
          >
            Iniciar Sesión
          </a>

        </div>
      )}
    </>)
}