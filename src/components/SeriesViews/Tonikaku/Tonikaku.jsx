import React from 'react'
import InformationSeries from '../InformationSeries'
import Iframe from '../IframeContenido'



const episodioListData = [
 {
        titulo: "Tonikaku Kawaii",
        iframe: "https://www.youtube.com/embed/Cv1Y2chJRWM",
        id: 6,
        image: "https://www.themoviedb.org/t/p/original/uvwxHOc7RI9e3nVDnNuc2F61dOz.jpg",
        description: "La comedia romántica sigue a un chico llamado Nasa quien conoce a la hermosa chica Tsukasa el día de su ingreso a la preparatoria, e inmediatamente se enamora de ella. Nasa le confiesa sus sentimientos, pero ella le responde que solo saldrá con él si se casan. Años después, cuando Nasa cumple 18 años, Tsukasa aparece de nuevo en su vida solicitándole el prometido matrimonio. Así comenzará su vida de recién casados.",
    },
]

export const Tonikaku = () => {
    return (
        <div className='conteiner'>

            {episodioListData.map ((episodioData) => (
              <Iframe key={episodioData.id} {...episodioData}  />
            ))}

            {episodioListData.map ((episodioData) => (
            <InformationSeries key={episodioData.id} {...episodioData} />
            ))}
            
        </div>
    )
}
