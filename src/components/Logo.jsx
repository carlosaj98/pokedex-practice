import logoIMG from "../assets/logo.png"
import iconIMG from "../assets/Pokeball.svg"

function Logo() {
    return (
        <>
            <div id="header-container">
                <div id="iconID">
                    <img src={iconIMG} alt="" />
                </div>
                <div id="logoID">
                    <img src={logoIMG} alt="" />
                </div>
            </div>
        </>
    )
}

export default Logo
