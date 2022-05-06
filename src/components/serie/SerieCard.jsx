import { Link } from "react-router-dom";
import style from "../styles/Serie/SerieCard.module.css";

export function SerieCard({ serie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + serie.poster_path;
  return (
    <li className={style.serieCard}>
      <Link to={serie.id}>
      <img width={230} height={345} className={style.serieImage} src={imageUrl} alt="" />
      {serie.title}
      </Link>
    </li>
  );
}

