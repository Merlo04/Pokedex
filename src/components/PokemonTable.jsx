import React, { useState } from "react";

export default function PokemonTable({ pokemons, onVerDetalle, pagina, setPagina }) {
    const porPagina = 20
    const inicio = (pagina - 1) * porPagina
    const paginados = pokemons.slice(inicio, inicio + porPagina)


    const totalPaginas = Math.ceil(pokemons.length / porPagina)


    return (
        <>
            <table className="table table-hover table-striped">
                <thead className="table-danger">
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {paginados.map((p, i) => (
                        <tr key={i}>
                            <td>{inicio + i + 1}</td>
                            <td className="text-capitalize fw-bold">{p.name}</td>
                            <td><button className="btn btn-primary" onClick={() => onVerDetalle(p)}>Ver</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>


            {/* Pagination */}
            <div className="d-flex justify-content-between mt-3">
                <button className="btn btn-secondary" disabled={pagina === 1} onClick={() => setPagina(pagina - 1)}>◀ Anterior</button>
                <span className="fw-bold">Página {pagina} / {totalPaginas}</span>
                <button className="btn btn-secondary" disabled={pagina === totalPaginas} onClick={() => setPagina(pagina + 1)}>Siguiente ▶</button>
            </div>
        </>
    )
}