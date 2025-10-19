import Anime from "../components/AnimeNew/Anime";
import Banner from "../components/Banner/Banner";
import Footer from "../components/layout/Footer/Footer";
import MovieSection from "../components/MovieContinue/MovieSection/MovieSection";
import MovieCinema from "../components/MovieRap/MovieCinema";

import MovieSectionNew from "../components/Movies/MovieSection/MovieSectionNew";
import MovieSectionStandard from "../components/MovieStandard/MovieSectionGrid/MovieSectionStandard";
import Top10Section from "../components/MovieTop/Top10Section";
import DashboardSection from "../components/TopComment/DashboardSection";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Banner />
      <div className={styles.content}>
        <section className={styles.topicsSection}>
          <h2>Bạn đang quan tâm gì?</h2>
          <div className={styles.topicsGrid}>
            {[
              "Marvel",
              "4K",
              "Sitcom",
              "Lồng Tiếng Cực Mạnh",
              "Xuyên Không",
              "Cổ Trang",
              "+4 Chủ Đề",
            ].map((topic, i) => (
              <div className={styles.topicCard} key={i}>
                <img
                  src="/images/bg-qt.png"
                  alt="Topics Banner"
                  className={styles.topicImage}
                />
                <h3>{topic}</h3>
                <p>Xem chủ đề &gt;</p>
              </div>
            ))}
          </div>
        </section>

        <MovieSection title="Xem tiếp của bạn" />
        <div className={styles.standardSections}>
          <MovieSectionStandard title="Phim Hàn Quốc mới" color="#674196" />
          <MovieSectionStandard title="Phim Trung Quốc mới" color="#F7A10B" />
          <MovieSectionStandard title="Phim US-UK mới" color="#FF0099" />
        </div>
        <DashboardSection />
        <MovieSectionNew
          title="Phim Điện Ảnh Mới Coóng"
          style={{ fontSize: "28px" }}
        />
        <Top10Section />
        <MovieCinema title="Mãn Nhãn với Phim Chiếu Rạp" />
        <Top10Section />
        <MovieSectionNew
          title="Phim Nhật Mới Oanh Tạc Chốn Này"
          style={{ fontSize: "28px" }}
        />
        <MovieSectionNew
          title="Phim Thái New: Không Drama Đời Không Nể"
          style={{ fontSize: "28px" }}
        />
        <Anime />
        <MovieSectionNew
          title="Điện Ảnh Hồng Kông ở Chỗ Này Này"
          style={{ fontSize: "28px" }}
        />
        <MovieSectionNew
          title="Tôi Sợ Con Người Em Rồi Đó, nhưng Không Bằng Sợ Ma"
          style={{ fontSize: "28px" }}
        />
        <MovieSectionNew
          title="Đường về nhà là vào tim ta..."
          style={{ fontSize: "28px" }}
        />
      </div>
      <Footer />
    </div>
  );
}
