import asesoramiento from '../../assets/Asesoramiento.jpg'
import psicologia from '../../assets/Psicologia.jpg'
import danza from '../../assets/Danza.jpg'
import actividades from '../../assets/Actividades.jpg'

import { Cards } from '../ui/cards'
import type {CardsProps} from '../ui/cards'
import { ColeccionCards } from '../ui/coleccionCards'

const dataCards: CardsProps[] = [
    {
        title: "Asesoramiento Académico",
        description: "Recibe orientación y apoyo en el proceso de aprendizaje de tu hijo.",
        image: asesoramiento
    },
    {
        title: "Psicología",
        description: "Accede a servicios de apoyo psicológico para estudiantes.",
        image: psicologia
    },
    {
        title: "Danza",
        description: "Participa en talleres que insentivan y estimulan la creatividad y actividad fisica.",
        image: danza
    },
    {
        title: "Actividades Recreativas",
        description: "Disfruta de actividades recreativas para un equilibrio entre estudio y esparcimiento.",
        image: actividades
    }
]

export function ServiciosDeApoyo() {
  return (
    <ColeccionCards tituloGeneral="Servicios de Apoyo">
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