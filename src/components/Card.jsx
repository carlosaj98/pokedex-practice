import HeaderCard from "./cards-info/HeaderCard"

function Card({name, id}) {


    return (
        <div className="card-container">
            <HeaderCard name={name} id={id} />
        </div>
    )
}
export default Card
