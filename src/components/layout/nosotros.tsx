import { MisionVision } from "./mision-vision";

import mision from '../../assets/Mision.jpg';
import vision from '../../assets/Vision.jpg';

export function DescripcionNostros() {
  return (
    <section className="w-full mt-10 font-sans">
      <article
        className="
          flex flex-col md:flex-row 
          justify-center items-center
          py-10 px-5 md:px-10 lg:px-40
          gap-6"
      >
        <h2
          className="
            text-3xl sm:text-4xl md:text-6xl
            font-extrabold text-center md:text-left
            bg-gradient-to-r from-green-500 to-[#24a9e7]
            text-transparent bg-clip-text"
        >
          ¿Quiénes Somos?
        </h2>

        <p
          className="
            text-justify text-lg sm:text-xl md:text-2xl 
            px-2 sm:px-6 md:px-10"
        >
          Somos un Colegio que ofrece una educación integral basada en el amor, los valores y la excelencia
          académica. <span className="bg-gradient-to-r from-green-500 to-[#24a9e7]
            text-transparent bg-clip-text font-bold">Formamos a niños y niñas de Inicial y Primaria en un ambiente seguro y alegre, promoviendo
          su desarrollo intelectual, emocional y espiritual</span>. Con un equipo docente comprometido y metodologías
          activas, cultivamos la curiosidad, la creatividad y los valores que hacen de nuestros estudiantes niños
          felices, seguros y con una sólida formación.
        </p>
      </article>
      <MisionVision
        className="mt-10"
        imagen={mision}
        titulo="Nuestra Misión">
        <p>
        Brindar una <span className="bg-gradient-to-r from-green-500 to-[#24a9e7]
        text-transparent bg-clip-text font-bold">educación integral y de calidad</span>, basada en el amor, los valores y 
        la excelencia académica, que forme niños y niñas con pensamiento crítico, espíritu solidario 
        y compromiso con su entorno. <span className="bg-gradient-to-r from-green-500 to-[#24a9e7]
        text-transparent bg-clip-text font-bold">Nuestro propósito es acompañar su desarrollo intelectual, emocional 
        y espiritual</span>, para que crezcan como personas felices, seguras y con una sólida formación en valores.
        </p>    
        </MisionVision>

      <MisionVision
        className="mt-10 md:flex-row-reverse"
        imagen={vision}
        titulo="Nuestra Visión">
        <p>
        Ser una <span className="bg-gradient-to-r from-green-500 to-[#24a9e7] text-transparent bg-clip-text font-bold">
        institución educativa líder</span>, reconocida por su calidad humana y académica, que inspire a los estudiantes a transformar 
        su comunidad con fe, responsabilidad y amor. Aspiramos a formar <span className="bg-gradient-to-r from-green-500 to-[#24a9e7] 
        text-transparent bg-clip-text font-bold">generaciones comprometidas con el bien común</span>, capaces de afrontar 
        los desafíos del futuro con creatividad, confianza y valores firmes.
        </p>
        </MisionVision>

    </section>
  );
}