import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import PokemonCard from "../components/PokemonCard"

function Pokemon() {
    const { pokemonName } = useParams()
    const navigate = useNavigate()
    const [pokemonSelect, setPokemonSelect] = useState("")
    const [selectedPokemon, setSelectedPokemon] = useState("")
    const [data, setData] = useState()

    const getData = () => {
        const route = "https://pokeapi.co/api/v2/pokemon"
        fetch(route)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setData(data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        getData()
    },[])

    useEffect(() => {
        if (pokemonName) {
            setSelectedPokemon(pokemonName)
            setPokemonSelect(pokemonName)
        }
    }, [pokemonName])

    const handleChange = (event) => {
        setPokemonSelect(event.target.value)
    }

    const handleClick = () => {
        setSelectedPokemon(pokemonSelect)
        navigate(`/pokemon/${pokemonSelect}`)
    }

    return (
      <>
      {
        (selectedPokemon == "" && data) ? 
            <div className="selectWrapper">
            <h2>Selecciona un pokemon</h2>
            <select onChange={(event) => handleChange(event)}>
                <option value="">Pokemones</option>
                {
                    data.results.map((pokemon, index) => (
                        <option key={index} value={pokemon.name}>{pokemon.name}</option>
                    ))
                }
            </select>
            <button onClick={() => handleClick()}>Ver detalle</button>
            </div>
            : null
      }
      {selectedPokemon !== "" && <PokemonCard pokeName={selectedPokemon} />}
      </>
    )
}

export default Pokemon