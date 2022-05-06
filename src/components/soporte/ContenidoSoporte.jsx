import React from 'react'
import styles from './ContenidoSoporte.module.css'

export const ContenidoSoporte = ({titulo, descripcion, app, image, alt}) => {
    return (
        <div className={styles.contenido}>
            <li className={styles.title}>{titulo}</li>
            <p className={styles.descrip}>{descripcion}</p>
            <p className={styles.app}>{app}</p>
            <img width={957} height={589} className={styles.image} src={image} alt={alt} />
        </div>
    )
}
