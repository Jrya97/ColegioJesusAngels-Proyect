
    export function MisionVision({className, imagen, titulo, children}: {className?: string, imagen: string, titulo: string, children?: React.ReactNode}) {
        return (
            <article className=
            {`flex flex-col md:flex-row
            justify-center items-center
            py-15 px-5 md:px-10 lg:px-25
            gap-6             
            ${className}`
            }>
                <img className="w-80 h-auto xm:w-xs lg:w-[30rem]" src={imagen} alt={`imagen-${imagen}`} />
                <div className="flex flex-col gap-10">
                    <h3 className="
                    text-4xl font-bold text-center
                    bg-gradient-to-r from-green-500 to-[#24a9e7]
                    text-transparent bg-clip-text">{titulo}</h3>
                    <p
                    className="
                    text-justify text-lg  md:text-xl
                    px-2 sm:px-6 md:px-10"
                    >
                    {children}
                    </p>
                </div>

            </article>
        )
    }