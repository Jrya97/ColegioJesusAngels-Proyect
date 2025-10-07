import { PrimaryButton } from "../ui/primaryButton";

export function BanerMatricula() {
  return (
    <div id="inicio" className="absolute top-15 left-0 right-0 flex flex-col justify-center items-center gap-2 text-center px-5 z-10">
      <h1 
        className="
        text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
        text-white font-extrabold drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]
        mb-6"
        >
        MATRÍCULAS ABIERTAS
      </h1>
      <PrimaryButton 
        href="https://wa.me/51987197782?text=¡Hola!%0AQuiero%20más%20información%20sobre%20la%20matricula%20del%202026."
        target="_blank"
        rel="noopener noreferrer"
        className="sm:px-6 md:px-8 sm:py-3"
      >
        ⭢ Más Información ⭠
      </PrimaryButton>
    </div>
  );
}
