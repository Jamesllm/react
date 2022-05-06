import React from "react";
import { SeriePrincipalCard } from "../SeriePrincipalCard/SeriePrincipalCard";
import SeriesGrid from '../serie/SeriesGrid'
import VideoPlayer from "../VideoPlayer";



const principalListData = [
  {
    titulo: "Tonikaku Kawaii",
    id: 1,
    descripcion:
      "La comedia romántica sigue a un chico llamado Nasa quien conoce a la hermosa chica Tsukasa el día de su ingreso a la preparatoria, e inmediatamente se enamora de ella. Nasa le confiesa sus sentimientos, pero ella le responde que solo saldrá con él si se casan. Años después, cuando Nasa cumple 18 años, Tsukasa aparece de nuevo en su vida solicitándole el prometido matrimonio. Así comenzará su vida de recién casados.",
    imageSerie:
      "https://www.themoviedb.org/t/p/original/rnf2BDKeF1sxPEPhAcdvL0auuxr.jpg",
  }
];

const Inicio = () => {
  return (
    <div>
      {principalListData.map((principalData) => (
        <SeriePrincipalCard key={principalData.id} {...principalData} />
      ))}
      <SeriesGrid />
        <VideoPlayer />
    </div>
  );
};

export default Inicio;
