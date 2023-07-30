import AboutInfo from "./AboutInfo"

function ContentCard({ type1, type2, typeClass1, typeClass2, weight, height, moves }) {
    return (
        <div className="container-info">
            <div className="bg-info">
                <AboutInfo
                    type1={type1}
                    type2={type2}
                    typeClass1={typeClass1}
                    typeClass2={typeClass2}
                    weight={weight}
                    height={height}
                    moves={moves}
                />
            </div>
        </div>
    )
}
export default ContentCard
