import { SerieCard } from './SerieCard';
import series from './seriesName.json'
import style from '../styles/Serie/SeriesGrid.module.css'

export function SeriesGrid() {
  return (
    <ul className={style.serieGrid}>
        {series.map((serie) =>(
            <SerieCard key={serie.id} serie={serie} />
        ))}
    </ul>
  );
}

export default SeriesGrid