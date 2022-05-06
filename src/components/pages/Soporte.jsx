import React from 'react'
import { ContenidoSoporte } from '../soporte/ContenidoSoporte'

    const soporteListData = [
        {
            titulo: "¿Qué es Vejam?",
            descripcion: "VeJam es una pagina en la cual puedes ver los Opening de los Animes",
            image: "https://firebasestorage.googleapis.com/v0/b/vejam-d2129.appspot.com/o/vejam.jpg?alt=media&token=02834f2c-87e3-4393-9f2b-e88781b62247",
            id: 1,
            alt: "Vejam Web"
        },
        /*{
            titulo: "¿Cómo puedo quitar la publicidad en los videos? (solo aplica para PC)",
            descripcion: "Para poder quitar la publicidad molesta de los videos le recomendamos instalar la siguiente extension:",
            app: "AdGuard AdBlocker",
            image: "https://firebasestorage.googleapis.com/v0/b/vejam-d2129.appspot.com/o/adguard.jpg?alt=media&token=38e70884-1790-437c-bad0-f8385fd3034e",
            id: 2,
            alt: "AdGuard AdBlocker"
        },
        {
            titulo: "¿Cómo puedo quitar la publicidad en los videos? (solo aplica para mobile)",
            descripcion: "Para poder quitar la publicidad molesta de los videos le recomendamos usar el siguiente navegador:",
            app: "Kiwi Browser - Fast & Quiet",
            image: "https://firebasestorage.googleapis.com/v0/b/vejam-d2129.appspot.com/o/kiwi.jpg?alt=media&token=1a535fe4-132f-44c5-bd74-41da37af016d",
            id: 3,
            alt: "Kiwi Browser - Fast & Quiet"
        }*/
    ]

export const Soporte = () => {
    return (
        <div>
            {soporteListData.map((soporteData) => (
                <ContenidoSoporte key={soporteData.id} {...soporteData} />
            ))}
        </div>
    )
}

export default Soporte;