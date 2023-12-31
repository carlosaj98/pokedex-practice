import styles from "../component-styles/CardTypes.module.css"
import styles2 from "../component-styles/AboutInfo.module.css"
import textType from "../component-styles/TextType.module.css"

function AboutInfo({ type1, type2, typeClass1, typeClass2, weight, height, moves }) {
    function capitalizedType(type) {
        const capitalized = type.charAt(0).toUpperCase() + type.slice(1)
        return capitalized
    }
    return (
        <>
            <div className="p-types">
                <p className={`${styles2[type1]} ${styles[typeClass1]}`}>
                    {capitalizedType(type1)}
                </p>
                {typeClass2 && (
                    <p className={`${styles2[type2]} ${styles[typeClass2]}`}>
                        {capitalizedType(type2)}
                    </p>
                )}
            </div>
            <p id="aboutText" className={textType[type1]}>
                About
            </p>
            <div className="about-details">
                <div>
                    <p>{weight} kg</p>
                    <p>Weight</p>
                </div>
                <div>
                    <p>{height} m</p>
                    <p>Height</p>
                </div>
                <div>
                    <p>{moves}</p>
                    <p>Moves</p>
                </div>
            </div>
        </>
    )
}
export default AboutInfo
