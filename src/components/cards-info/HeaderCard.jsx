import {headerCard} from "../component-styles/HeaderCard.module.css"

function HeaderCard({ name, id }) {
    function formatearID(numero) {
        if (numero < 10) {
            return "00" + numero
        } else if (numero < 100) {
            return "0" + numero
        } else {
            return numero.toString()
        }
    }
    const idFormateado = formatearID(id)

    return (
        <div className={headerCard}>
            <h2>{name}</h2>
            <p>#{idFormateado}</p>
        </div>
    )
}
export default HeaderCard
