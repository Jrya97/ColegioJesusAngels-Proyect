import { OpcionNav } from "../ui/opcionNav";

export function Navbar({ className = "" }: { className?: string }) {
  return (
    <nav className={`flex gap-3 lg:gap-6 text-lg font-medium transition-all ease-in ${className}`}>
      <OpcionNav href="inicio">Inicio</OpcionNav>
      <OpcionNav href="nosotros">Nosotros</OpcionNav>
      <OpcionNav href="estudiantes">Estudiantes</OpcionNav>
      <OpcionNav href="">Contactanos</OpcionNav>
    </nav>
  );
}