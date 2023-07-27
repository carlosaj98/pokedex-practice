import pokemons from "../data.json"
import Navbar from "./components/Navbar"
import Logo from "./components/Logo"
import Counter from "./components/Counter"
import Card from "./components/cards/Card"
import "./global.css"

function App() {
    return (
        <div id="main-container">
            <header>
                <Logo />
                <Navbar />
            </header>
            <main>
                <Counter textCounter={pokemons.length} />
                <section>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </section>
            </main>
        </div>
    )
}

export default App
