import { ChevronRight } from "lucide-react";
import MovieCardStandard from "../MovieCardStandard/MovieCardStandard";
import styles from "./MovieSectionStandard.module.css";
type Props = {
  title: string;
  color?: string;
};
const movies = Array(5).fill({
  image: "/images/continue/thoivangson.png",
  title: "Thời Vàng Son",
  subtitle: "Our Golden Days",
  typeLeft: "PĐ.18",
  typeRight: "TM.16",
});

export default function MovieSectionStandard({ title, color }: Props) {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h1 className={styles.title} style={{ color }}>
          {title}
        </h1>
        <div className={styles.viewAll}>
          <button>Xem toàn bộ</button>
          <img
            src="/icons/icon-qt.png"
            alt="arrow right"
            className={styles.icon}
          />
        </div>
      </div>
      <div className={styles.movieList}>
        <div className={styles.left}>
          {movies.map((movie, index) => (
            <MovieCardStandard key={index} data={movie} />
          ))}
        </div>

        <button className={styles.rightButton}>
          {" "}
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
