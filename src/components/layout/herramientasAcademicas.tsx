import biblioteca from "../../assets/Biblioteca.jpg"
import comunidad from "../../assets/Comunidad-estudiantes.jpg"
import guiaestudio from "../../assets/Guia-de-estudio.jpg"
import { Cards } from "../ui/cards"
import type { CardsProps } from "../ui/cards"
import { ColeccionCards } from "../ui/coleccionCards"



const dataCards: CardsProps[] = [
        {
            title: "Biblioteca",
            description: "Accede a una amplia colección de recursos académicos, incluyendo libros, cuentos y artículos académicos.",
            image: biblioteca
        },        
        {
            title: "Guía de Estudio",
            description: "Encuentra materiales de estudio, guías y recursos útiles para preparar tus exámenes y trabajos académicos.",
            image: guiaestudio
        },
        {
            title: "Comunidad de Estudiantes",
            description: "Contactate con otros estudiantes y comparte experiencias academicas.",
            image: comunidad
        }
]


export function HerramientasAcademicas() {
    return ( 
        <ColeccionCards tituloGeneral="Herramientas Académicas">
          {dataCards.map((card, index) => (
            <Cards 
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            />
            ))}
        </ColeccionCards>
    )
}