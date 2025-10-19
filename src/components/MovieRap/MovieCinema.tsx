import MovieCinemaCard from "./MovieCinemaCard";
import styles from "./MovieCinema.module.css";
import { ChevronRight } from "lucide-react";

const cinemaMovies = [
  {
    id: 1,
    title: "Lời Chưa Nói",
    engTitle: "Family Secret",
    year: 2025,
    duration: "1h45p",
    rating1: "PĐ.8E",
    rating2: "T.Minh",
    poster: "/images/movie/loichuanoi.png",
    thumb: "/images/movie/loimini.png",
  },
  {
    id: 2,
    title: "Bầy Hồi Sinh",
    engTitle: "The Ghost Game",
    year: 2025,
    duration: "1h35p",
    rating1: "T18",
    rating2: "T.Minh",
    poster: "/images/movie/bayhoisinh.png",
    thumb: "/images/movie/hoisinh.png",
  },
  {
    id: 1,
    title: "Lời Chưa Nói",
    engTitle: "Family Secret",
    year: 2025,
    duration: "1h45p",
    rating1: "PĐ.8E",
    rating2: "T.Minh",
    poster: "/images/movie/loichuanoi.png",
    thumb: "/images/movie/loimini.png",
  },
  {
    id: 2,
    title: "Bầy Hồi Sinh",
    engTitle: "The Ghost Game",
    year: 2025,
    duration: "1h35p",
    rating1: "T18",
    rating2: "T.Minh",
    poster: "/images/movie/bayhoisinh.png",
    thumb: "/images/movie/hoisinh.png",
  },
];

export default function MovieCinema({ title }: { title: string }) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <ChevronRight className={styles.icon} />
      </div>

      <div className={styles.list}>
        {cinemaMovies.map((movie) => (
          <MovieCinemaCard key={movie.id} data={movie} />
        ))}
      </div>
    </section>
  );
}
