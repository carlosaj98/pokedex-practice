import HeaderCard from "./cards-info/HeaderCard"

function Card({name}) {
    return (
        <div className="card-container">
            <HeaderCard name={name}/>
        </div>
    )
}
export default Card
