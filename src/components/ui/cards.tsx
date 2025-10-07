export type CardsProps = {
  title: string;
  description: string;
  image: string;
}

export function Cards({ title, description, image }: CardsProps) {
  return (
    <article
      className="
        w-64 sm:w-72 md:w-80 mx-auto
        rounded-xl overflow-hidden
        bg-gradient-to-r from-green-500 to-[#24a9e7]
        shadow-md hover:shadow-xl
        transition-transform duration-300 hover:scale-[1.03]
      "
    >
      <div className="w-full h-36 sm:h-40 md:h-44">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover block"
        />
      </div>

      <div
        className="
          flex flex-col justify-center items-center
          text-center p-4 sm:p-5 gap-2 text-white
        "
      >
        <h3 className="text-xl font-bold tracking-wide">
          {title}
        </h3>

        <p className="text-sm sm:text-base leading-relaxed text-white/90 font-semibold">
          {description}
        </p>
      </div>
    </article>
  );
}
