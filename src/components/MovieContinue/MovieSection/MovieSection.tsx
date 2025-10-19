import styles from "./MovieSection.module.css";
import MovieCardContinue from "../MovieCardContinue/MovieCardContinue";
import { ChevronRight } from "lucide-react";

type Props = {
  title: string;
};

const movies = [
  {
    image: "/images/continue/ngaykhongngu.png",
    title: "Ngày Không Ngủ",
    subtitle: "Mobius",
    duration: "1h 18m / 1h 33m",
  },
  {
    image: "/images/continue/muahedianguc.png",
    title: "Mùa Hè Địa Ngục",
    subtitle: "Mobius",
    duration: "1h 18m / 1h 33m",
  },
  {
    image: "/images/continue/the.png",
    title: "The Conjuring",
    subtitle: "Mobius",
    duration: "1h 18m / 1h 33m",
  },
];

export default function MovieSection({ title }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <div className={styles.arrowBtn}>
          <ChevronRight />
        </div>
      </div>
      <div className={styles.movieList}>
        {movies.map((movie, i) => (
          <MovieCardContinue key={i} data={movie} />
        ))}
      </div>
    </section>
  );
}
