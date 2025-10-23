import { PrimaryLink } from "../ui/primaryButton";

export function BanerMatricula() {
  return (
    <div
      id="inicio"
      className="flex flex-col justify-center items-center gap-4 text-center 
                 px-4 sm:px-8 md:px-12 lg:px-20 pb-20 scroll-mt-30 md:scroll-mt-35"
    >
      <h1
        className="
          text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
          text-white font-extrabold 
          drop-shadow-[2px_2px_4px_rgba(0,0,0,0.4)]
          mb-4 sm:mb-6
        "
      >
        MATRÍCULAS ABIERTAS
      </h1>

      <p
        className="
          text-base sm:text-lg md:text-2xl 
          text-gray-600 sm:text-gray-600
          max-w-[750px] leading-relaxed sm:leading-normal
          mb-6 sm:mb-8
        "
      >
        📢 <span className="font-semibold">¡Cupos limitados!</span> Asegura la vacante de tu hijo hoy mismo.
        Matrículas 2026 abiertas — <span className="font-semibold">¡no te quedes fuera!</span> ✨
      </p>

      <PrimaryLink
        href="https://wa.me/51987197782?text=¡Hola!%0AQuiero%20más%20información%20sobre%20la%20matricula%20del%202026."
        target="_blank"
        rel="noopener noreferrer"
        className="sm:px-6 md:px-8 sm:py-3 text-base sm:text-lg md:text-xl"
      >
        ⭢ Más Información ⭠
      </PrimaryLink>
    </div>
  );
}
