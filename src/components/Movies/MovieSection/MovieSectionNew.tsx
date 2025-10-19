import styles from "./MovieSectionNew.module.css";
import MovieCard from "../MovieCard/MovieCard";
import { ChevronRight } from "lucide-react";

type Props = {
  title: string;
  style?: React.CSSProperties;
};

const imagePaths = [
  "/images/movie/muahedianguc.png",
  "/images/movie/khongtamnhan.png",
  "/images/movie/the.png",
  "/images/movie/truongthanhlen.png",
  "/images/movie/muahedianguc.png",
  "/images/movie/thandenoiUocdi.jpg",
  "/images/movie/truongthanhlen.png",
  "/images/movie/khongtamnhan.png",
];

const movies = imagePaths.map((img) => ({
  image: img,
  title: "Quái Nhân Báo Thù",
  subtitle: "The Toxic Avenger",
  typeLeft: "PĐ.18",
  typeRight: "TM.16",
}));

export default function MovieSectionNew({ title }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <div className={styles.arrowBtn}>
          <ChevronRight />
        </div>
      </div>
      <div className={styles.movieList}>
        <div className={styles.left}>
          {movies.map((movie, index) => (
            <MovieCard key={index} data={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
