import arte from '../../assets/Arte.jpg'
import deporte from '../../assets/Deporte.jpg'
import estimulacion from '../../assets/Estimulacion.jpg'
import campañaSolidaria from '../../assets/CampañasSolidarias.jpg'

import { Cards } from '../ui/cards'
import type {CardsProps} from '../ui/cards'
import { ColeccionCards } from '../ui/coleccionCards'


const dataCards: CardsProps[] = [
    {
        title: "Talleres Creativos",
        description:"Espacios donde los estudiantes desarrollan su imaginación y habilidades artísticas a través del arte, la danza y la musica",
        image:arte
    },
    {
        title: "Deportes y Recreación",
        description:"Actividades que promueven el trabajo en equipo, la disciplina y una vida saludable mediante el juego y el deporte.",
        image:deporte
    },
    {
        title: "Campañas Solidarias",
        description:"Iniciativas que fomentan la empatía, la generosidad y el compromiso con los demás a través de acciones de ayuda social.",
        image:campañaSolidaria
    },
    {
        title: "Estimulacion temprana",
        description:"Actividades lúdicas diseñadas para potenciar el desarrollo físico, cognitivo y emocional de los niños.",
        image:estimulacion
    }

]

export function VidaEscolar (){
    return (
        <ColeccionCards tituloGeneral="Actividades y Vida Escolar">
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