import { VidaEscolar } from "./actividadesVidaEscolar";
import { HerramientasAcademicas } from "./herramientasAcademicas";
import { ServiciosDeApoyo } from "./serviciosDeApoyo";

export function EstudiantesLayout() {
  return (
    <section id="estudiantes" className="w-full mt-20 font-sans scroll-mt-24 md:scroll-mt-26">
      <article
        className="flex flex-col
            justify-center items-center
            py-10 px-5 md:px-10 lg:px-25
            gap-12 "
      >
        <h2
          className="text-3xl sm:text-4xl md:text-6xl
            font-extrabold text-center
          text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.4)]"
        >
          Recursos para estudiantes
        </h2>
        <p className="text-justify text-lg sm:text-xl md:text-2xl px-2 sm:px-6 md:px-10 max-w-[1290px] text-gray-600">
          En el{" "}
          <span
            className="bg-gradient-to-r from-green-500 to-[#24a9e7]
                text-transparent bg-clip-text font-bold"
          >
            Colegio Jesus Angels
          </span>
          , acompañamos a nuestros estudiantes en cada etapa de su aprendizaje,
          brindándoles las{" "}
          <span
            className="bg-gradient-to-r from-green-500 to-[#24a9e7]
                text-transparent bg-clip-text font-bold"
          >
            {" "}
            herramientas necesarias para alcanzar su máximo potencial.{" "}
          </span>
          En esta sección encontrarás una selección de materiales educativos,
          guías y recursos interactivos diseñados para fortalecer sus
          habilidades, despertar su curiosidad y ayudarles a lograr el éxito
          académico con entusiasmo y confianza.
        </p>
      </article>

      <HerramientasAcademicas />
      <ServiciosDeApoyo />
      <VidaEscolar />

      <article></article>
    </section>
  );
}
