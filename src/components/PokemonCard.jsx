import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function PokemonCard() {
    const { pokemonName } = useParams()
    const [pokeDetails, setPokeDetails] = useState()
    const getDetails = () => {
        const route = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        fetch(route)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setPokeDetails(data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        getDetails()
    },[])

    return (
        <>
            {
                pokemonName !== "" && pokeDetails && (
                    <div className="statWrapper">
                        <img src={pokeDetails.sprites.front_default}/>
                        <ul>
                            <h3>{pokemonName}</h3>
                            <li>HP: {pokeDetails.stats[0].base_stat}</li>
                            <li>Attack: {pokeDetails.stats[1].base_stat}</li>
                            <li>Defense: {pokeDetails.stats[2].base_stat}</li>
                            <li>Sp. Attack: {pokeDetails.stats[3].base_stat}</li>
                            <li>Sp. Defense: {pokeDetails.stats[4].base_stat}</li>
                            <li>Speed: {pokeDetails.stats[5].base_stat}</li>
                            <li>Type: {pokeDetails.types[0].type.name}</li>
                        </ul>
                    </div>
                )
            }
            
        </>
    )
}

export default PokemonCard