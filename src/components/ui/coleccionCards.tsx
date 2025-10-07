
interface ColeccionCards{
    children?: React.ReactNode;
    tituloGeneral: string;
}




export function ColeccionCards({children, tituloGeneral}: ColeccionCards) { 

    return (
        
        <article className="flex flex-col
            py-15 px-5 md:px-10 lg:px-25
            gap-12 mt-2 w-full">
            <h3 className="text-3xl md:text-4xl font-extrabold text-center md:text-left
            bg-gradient-to-r from-green-500 to-[#24a9e7]
            text-transparent bg-clip-text lg:ml-10">
            {tituloGeneral}
            </h3>
            <div className="
                grid 
                grid-cols-[repeat(auto-fill,minmax(320px,1fr))] 
                gap-10 
                mt-5 
                px-5 md:px-10
                justify-center
                "
            >
                {children}
            </div>
        </article>
    )
}