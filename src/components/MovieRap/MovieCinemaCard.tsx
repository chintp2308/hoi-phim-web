import styles from "./MovieCinemaCard.module.css";

interface Movie {
  id: number;
  title: string;
  engTitle: string;
  year: number;
  duration: string;
  rating1: string;
  rating2: string;
  poster: string;
  thumb: string;
}

export default function MovieCinemaCard({ data }: { data: Movie }) {
  return (
    <div className={styles.card}>
      <img src={data.poster} alt={data.title} className={styles.poster} />

      <div className={styles.thumbBox}>
        <img
          src={data.thumb}
          alt={`${data.title} thumb`}
          className={styles.thumb}
        />
        <div className={styles.overlay}>
          <div className={styles.tags}>
            <span className={styles.tagLeft}>{data.rating1}</span>
            <span className={styles.tagRight}>{data.rating2}</span>
          </div>
          <div className={styles.info}>
            <h3 className={styles.title}>{data.title}</h3>
            <p className={styles.engTitle}>{data.engTitle}</p>
            <p className={styles.subInfo}>
              T18 - {data.year} - {data.duration}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
