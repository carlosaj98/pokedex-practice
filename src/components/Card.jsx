import HeaderCard from "./cards-info/HeaderCard"
import ContentCard from "./cards-info/ContentCard"

import styles from "./component-styles/CardTypes.module.css"

function Card({ name, id, type1}) {
    function typePokemonColor(type){
        if (type === "bug") return "type-bug"
        if (type === "dark") return "type-dark"
        if (type === "dragon") return "type-dragon"
        if (type === "electric") return "type-electric"
        if (type === "fairy") return "type-fairy"
        if (type === "fighting") return "type-fighting"
        if (type === "fire") return "type-fire"
        if (type === "flying") return "type-flying"
        if (type === "ghost") return "type-ghost"
        if (type === "normal") return "type-normal"
        if (type === "grass") return "type-grass"
        if (type === "ground") return "type-dark"
        if (type === "ice") return "type-ice"
        if (type === "poison") return "type-poison"
        if (type === "psychic") return "type-psychic"
        if (type === "rock") return "type-rock"
        if (type === "steel") return "type-steel"
        if (type === "water") return "type-water"
    }

    const typeClass = typePokemonColor(type1)

    return (
        <div className={`card-container ${styles[typeClass]}`}>
            <HeaderCard name={name} id={id} />
            <ContentCard />
        </div>
    )
}
export default Card
