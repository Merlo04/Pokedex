import { Navigate } from "react-router-dom"

export default function Encabezado() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">PokeAPI</a>
        <a className="navbar-brand" href="/">Inicio</a>
      </div>
    </nav>
    </>
  )
}
