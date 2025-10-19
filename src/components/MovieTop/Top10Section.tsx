import styles from "./Top10Section.module.css";
interface Movie {
  id: number;
  title: string;
  engTitle: string;
  poster: string;
  rating1: string;
  rating2: string;
  info: string;
}

const movies: Movie[] = [
  {
    id: 1,
    title: "Mỹ Nhân Ngư",
    engTitle: "The Toxic Avenger",
    poster: "/images/movie/the.png",
    rating1: "PĐ.18",
    rating2: "TM.16",
    info: "T16 • Phần 1 • Tập 13",
  },
  {
    id: 2,
    title: "Thần Đèn Ơi, Ước Đi",
    engTitle: "The Toxic Avenger",
    poster: "/images/movie/muahedianguc.png",
    rating1: "PĐ.18",
    rating2: "TM.16",
    info: "T16 • Phần 1 • Tập 13",
  },
  {
    id: 3,
    title: "Mỹ Nhân Ngư",
    engTitle: "Adulthood",
    poster: "/images/movie/truongthanhlen.png",
    rating1: "PĐ.18",
    rating2: "TM.16",
    info: "T16 • Phần 1 • Tập 13",
  },
  {
    id: 4,
    title: "Thần Đèn Ơi, Ước Đi",
    engTitle: "The Toxic Avenger",
    poster: "/images/thandenoi.png",
    rating1: "PĐ.18",
    rating2: "TM.16",
    info: "T16 • Phần 1 • Tập 13",
  },
  {
    id: 5,
    title: "Mỹ Nhân Ngư",
    engTitle: "The Toxic Avenger",
    poster: "/images/movie/muahedianguc.png",
    rating1: "PĐ.18",
    rating2: "TM.16",
    info: "T16 • Phần 1 • Tập 13",
  },
  {
    id: 6,
    title: "Thần Đèn Ơi, Ước Đi",
    engTitle: "The Toxic Avenger",
    poster: "/images/thandenoi.png",
    rating1: "PĐ.18",
    rating2: "TM.16",
    info: "T16 - Phần 1 - Tập 13",
  },
];

export default function Top10Section() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Top 10 phim bộ hôm nay</h2>
      <div className={styles.list}>
        {movies.map((movie, index) => (
          <div key={movie.id} className={styles.card}>
            <div className={styles.posterContainer}>
              <img
                src={movie.poster}
                alt={movie.title}
                className={styles.poster}
              />
              <div className={styles.type}>
                <div className={styles.left}>{movie.rating1}</div>
                <div className={styles.right}>{movie.rating2}</div>
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles.rank}>{index + 1}</div>
              <div className={styles.textInfo}>
                <h3 className={styles.movieTitle}>{movie.title}</h3>
                <p className={styles.engTitle}>{movie.engTitle}</p>
                <p className={styles.detail}>{movie.info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
