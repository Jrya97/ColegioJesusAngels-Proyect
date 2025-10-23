import { useState, useEffect } from "react";
import { Logo } from "../ui/logo";
import { Navbar } from "./navbar";
import { PrimaryLink } from "../ui/primaryButton";

export function HeaderLayout() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header
        className="
        sticky top-0 z-50
        bg-white
        flex items-center justify-between 
        border-b-2 border-gray-300 
        px-5 md:px-8 py-3 
        font-sans shadow-sm"
      >
        <Logo />

        <button 
          className="xm:hidden text-3xl p-2 hover:bg-gray-100 rounded transition-colors" 
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? "✕" : "☰"}
        </button>

        <div className="hidden xm:flex items-center gap-6">
          <Navbar />
          <PrimaryLink className="whitespace-nowrap">
            Iniciar Sesión
          </PrimaryLink>
        </div>

        {open && (
          <div
            className="
            absolute top-full left-0 right-0
            bg-white shadow-xl border-b-2 border-gray-200
            flex flex-col items-center gap-4 
            p-6 xm:hidden
            max-h-[calc(100vh-4rem)] overflow-y-auto
            transition-all duration-300 ease-out
            z-50"
          >
            <Navbar 
              className="flex flex-col gap-4 w-full text-center border-b-2 border-gray-200 pb-4"
            />
            <PrimaryLink 
              className="w-fit" 
            >
              Iniciar Sesión
            </PrimaryLink>
          </div>
        )}
      </header>
      
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 xm:hidden backdrop-blur-sm"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}