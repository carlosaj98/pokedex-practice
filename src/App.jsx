import pokemons from "../data.json"
import Navbar from "./components/Navbar"
import Logo from "./components/Logo"
import Counter from "./components/Counter"
import Card from "./components/Card"
import "./global.css"
console.log(pokemons)
function App() {
    return (
        <div id="root-container">
            <header>
                <Logo />
                <Navbar />
            </header>
            <main>
                <Counter textCounter={pokemons.length} />
                <section>
                    {pokemons.map((pokemon) => (
                        <Card
                            key={pokemon.name}
                            type1={pokemon.type1}
                            name={pokemon.name}
                            id={pokemon.pokedex_number}
                        />
                    ))}
                </section>
            </main>
        </div>
    )
}

export default App
