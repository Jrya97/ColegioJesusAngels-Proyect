export type CardsProps = {
  title: string;
  description: string;
  image: string;
};

export function Cards({ title, description, image }: CardsProps) {
  return (
    <article
      className="
        relative p-[3px] rounded-xl overflow-hidden
        bg-gradient-to-r from-green-500 via-[#24a9e7] to-green-500
        animate-gradient-x bg-[length:200%_200%]
        hover:animate-gradient-x-fast
        w-64 sm:w-72 md:w-80 mx-auto
        transition-transform duration-300 hover:scale-110
      "
    >
      <div className="bg-white rounded-xl h-full overflow-hidden">
        <div className="w-full h-36 sm:h-40 md:h-44">
          <img
            loading="lazy"
            src={image}
            alt={title}
            className="w-full h-full object-cover block"
          />
        </div>

        <div
          className="
            flex flex-col justify-center items-center
            text-center p-4 sm:p-5 gap-2
          "
        >
          <h3
            className="text-xl font-bold tracking-wide
            bg-gradient-to-r from-green-500 to-[#24a9e7]
            text-transparent bg-clip-text"
          >
            {title}
          </h3>

          <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-semibold">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
