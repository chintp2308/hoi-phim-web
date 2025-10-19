import { ChevronRight } from "lucide-react";
import styles from "./MovieUpcoming.module.css";
import MovieUpcomingCard from "./MovieUpcomingCard";

type Props = {
  title: string;
};
const movies = [
  {
    image: "/images/Upcoming1.png",
    title: "Năm Của Anh, Ngày Của Em",
    subtitle: "Measure in Love",
    typeLeft: "Sắp Chiếu",
  },
  {
    image: "/images/Upcoming2.png",
    title: "Trò Chơi Ảo Giác: Ares",
    subtitle: "TRON: Ares",
    typeLeft: "Sắp Chiếu",
  },
  {
    image: "/images/Upcoming1.png",
    title: "Năm Của Anh, Ngày Của Em",
    subtitle: "Measure in Love",
    typeLeft: "Sắp Chiếu",
  },
  {
    image: "/images/Upcoming2.png",
    title: "Trò Chơi Ảo Giác: Ares",
    subtitle: "TRON: Ares",
    typeLeft: "Sắp Chiếu",
  },
  {
    image: "/images/Upcoming1.png",
    title: "Năm Của Anh, Ngày Của Em",
    subtitle: "Measure in Love",
    typeLeft: "Sắp Chiếu",
  },
];

export default function MovieUpcoming({ title }: Props) {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <ChevronRight className={styles.icon} />
      </div>
      <div className={styles.movieList}>
        <div className={styles.left}>
          {movies.map((movie, index) => (
            <MovieUpcomingCard key={index} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
