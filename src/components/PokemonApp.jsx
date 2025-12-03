import React, { useEffect, useState } from "react";
import PokemonTable from "./PokemonTable";
import PokemonCard from "./PokemonCard";
import Loader from "./Loader";
import PokemonSearch from "./PokemonSearch";
export default function PokemonApp() {
    const [pokemonList, setPokemonList] = useState([])
    const [filtro, setFiltro] = useState('')
    const [modo, setModo] = useState('CONSULTA')
    const [pokemonSeleccionado, setPokemonSeleccionado] = useState(null)
    const [pagina, setPagina] = useState(1)


    async function fetchPokemon() {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        const data = await res.json()
        setPokemonList(data.results)
    }


    useEffect(() => { fetchPokemon() }, [])


    const listaFiltrada = pokemonList.filter(p => p.name.includes(filtro))


    const handleVerDetalle = (pokemon) => {
        setPokemonSeleccionado(pokemon)
        setModo('DETALLE')
    }


    const handleVolver = () => {
        setModo('CONSULTA')
        setPokemonSeleccionado(null)
    }


    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4" style={{ color: "#ffcb05", textShadow: "2px 2px #3b4cca" }}>
                Pokédex  ⚡
            </h1>


            {modo === 'CONSULTA' && (
                <>
                    <PokemonSearch filtro={filtro} setFiltro={setFiltro} />
                    <PokemonTable pokemons={listaFiltrada} onVerDetalle={handleVerDetalle} pagina={pagina} setPagina={setPagina} />
                </>
            )}


            {modo === 'DETALLE' && <PokemonCard pokemon={pokemonSeleccionado} onVolver={handleVolver} />}
        </div>
    )
}