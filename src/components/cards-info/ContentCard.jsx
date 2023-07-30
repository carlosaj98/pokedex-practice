import AboutInfo from "./AboutInfo"

function ContentCard({ type1, type2, typeClass1, typeClass2 }) {
    return (
        <div className="container-info">
            <div className="bg-info">
                <AboutInfo
                    type1={type1}
                    type2={type2}
                    typeClass1={typeClass1}
                    typeClass2={typeClass2}
                />
            </div>
        </div>
    )
}
export default ContentCard
