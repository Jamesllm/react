import React from 'react'
import { Link } from 'react-router-dom'
import './seriePrincipal.css'

export const SeriePrincipalCard = ({titulo, imageSerie, descripcion}) => {
    return (
        <div className="card bg-dark text-dark main-serie">
            <img src={imageSerie} className="card-img mt-2" alt="..." />
            <div className="card-img-overlay conteiner text-conteiner">
                <h5 className="card-title title">{titulo}</h5>
                <p className="card-text description">{descripcion}</p>
                <Link to="./tonikaku"> <button className='button'><i className="fas fa-play"></i>Ver Opening</button></Link>
            </div>
        </div>
    )
}
