import React from 'react'
import styles from '../styles/SeriePrincipal.module.css'
import SeriesInformation from '../../assets/SeriesInformation'
import { Link } from "react-router-dom";

const SeriePrincipal = () => {
    return (
        <>
            <div className={styles.mainSerie}>
                <div className={styles.conteinerSerie}>
                    <h3 className={styles.title}>{SeriesInformation[0].title}</h3>
                    <p className={styles.description}>{SeriesInformation[0].description}</p>
                    <Link to="/tonikaku"><button className={styles.buttons}><i className="fas fa-play"></i>Reproducir</button></Link>
                </div>
            </div>
        </>
    )
}

export default SeriePrincipal
