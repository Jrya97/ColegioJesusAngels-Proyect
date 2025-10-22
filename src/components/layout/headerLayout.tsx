import { useState } from "react";
import { Logo } from "../ui/logo";
import { Navbar } from "./navbar";
import { PrimaryButton } from "../ui/primaryButton";

export function HeaderLayout() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="
        flex items-center justify-between 
        border-b-2 border-gray-300 
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
          <PrimaryButton
          className="whitespace-nowrap"
          >
            Iniciar Sesión            
          </PrimaryButton>

        </div>
      </header>

      {open && (
        <div className="
          bg-white shadow-md 
          flex flex-col items-center gap-4 
          p-4 xm:hidden"
        >
          <Navbar className="flex flex-col gap-3 w-full text-center border-b-2 border-gray-200 pb-3" />
          <PrimaryButton className="w-fit">
            Iniciar Sesión
          </PrimaryButton>
        </div>
      )}
    </>)
}