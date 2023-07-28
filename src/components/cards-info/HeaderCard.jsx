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
        <>
            <h2>{name}</h2>
            <p>#{idFormateado}</p>
        </>
    )
}
export default HeaderCard
