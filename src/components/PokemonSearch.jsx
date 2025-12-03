export default function PokemonSearch({ filtro, setFiltro }) {
    return (
        <div className="input-group mb-3">
            <span className="input-group-text">🔍</span>
            <input
                type="text"
                className="form-control"
                placeholder="Buscar Pokémon..."
                value={filtro}
                onChange={(e) => setFiltro(e.target.value.toLowerCase())}
            />
        </div>
    )
}