import { typeColors } from "./utils";
import StatBar from "./StatBar";
import Loader from "./Loader";
import { useState, useEffect } from "react";

export default function PokemonCard({ pokemon, onVolver }) {
    const [data, setData] = useState(null)


    useEffect(() => {
        async function fetchDetail() {
            const res = await fetch(pokemon.url)
            const detalle = await res.json()
            setData(detalle)
        }
        fetchDetail()
    }, [pokemon])


    if (!data) return <Loader />


    return (
        <div className="card shadow p-4" style={{ backgroundColor: "#ffcb05" }}>
            <button className="btn btn-dark mb-3" onClick={onVolver}>⬅ Volver</button>


            <h2 className="text-center text-dark text-capitalize">{data.name}</h2>


            <div className="text-center mb-4">
                <img src={data.sprites.other['official-artwork'].front_default} alt={data.name} style={{ width: "200px" }} />
            </div>


            <h4>⚡ Stats</h4>
            <ul className="list-group mb-3">
                {data.stats.map((s, i) => (
                    <li className="list-group-item d-flex justify-content-between" key={i}>
                        <span className="text-capitalize">{s.stat.name}</span>
                        <span className="fw-bold">{s.base_stat}</span>
                    </li>
                ))}
            </ul>


            <h4>🔥 Tipo</h4>
            <div className="mb-3">
                {data.types.map((t, i) => (
                    <span key={i} className="badge bg-danger me-2 text-uppercase">{t.type.name}</span>
                ))}
            </div>


            <h4>🌀 Altura & Peso</h4>
            <p><strong>Altura:</strong> {data.height} decímetros</p>
            <p><strong>Peso:</strong> {data.weight} hectogramos</p>
        </div>
    )
}
