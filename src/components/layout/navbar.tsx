export function Navbar({ className = "" }: { className?: string }) {
  return (
    <nav className={`flex gap-3 lg:gap-6 text-lg font-medium transition-all ease-in ${className}`}>
    <a
      href="#"
      className="
        font-semibold transition-all duration-300
        hover:text-transparent hover:bg-clip-text
        hover:bg-gradient-to-r hover:from-green-500 hover:to-[#24a9e7]
      ">
      Inicio
    </a>
    <a
      href="#"
      className="
        font-semibold transition-all duration-300
        hover:text-transparent hover:bg-clip-text
        hover:bg-gradient-to-r hover:from-green-500 hover:to-[#24a9e7]
      ">
      Nosotros
    </a>
    <a
      href="#"
      className="
        font-semibold transition-all duration-300
        hover:text-transparent hover:bg-clip-text
        hover:bg-gradient-to-r hover:from-green-500 hover:to-[#24a9e7]
      ">
      Contactanos
    </a>
    <a
      href="#"
      className="
        font-semibold transition-all duration-300
        hover:text-transparent hover:bg-clip-text
        hover:bg-gradient-to-r hover:from-green-500 hover:to-[#24a9e7]
      ">
      Estudiantes
    </a>
    </nav>
  );
}