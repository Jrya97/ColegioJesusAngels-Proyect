export function MisionVision({
  className,
  imagen,
  titulo,
  children,
}: {
  className?: string;
  imagen: string;
  titulo: string;
  children?: React.ReactNode;
}) {
  return (
    <article
      className={`flex flex-col md:flex-row
            justify-center items-center
            py-15 px-5 md:px-10 lg:px-25
            gap-6             
            ${className}`}
    >
      <img
        loading="lazy"
        className="w-80 h-auto xm:w-xs lg:w-[30rem] rounded-xl hover:scale-115 transition shadow-2xl hover:shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
        src={imagen}
        alt={`imagen-${imagen}`}
      />
      <div className="flex flex-col gap-5">
        <h3
          className="
                    text-5xl font-extrabold text-center
                    text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.4)]"
        >
          {titulo}
        </h3>
        <p
          className="
                    text-justify max-w-3xl text-lg  md:text-2xl
                    px-2 sm:px-6 md:px-10 text-gray-600"
        >
          {children}
        </p>
      </div>
    </article>
  );
}
