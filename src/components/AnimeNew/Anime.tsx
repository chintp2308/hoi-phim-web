import "./Anime.css";
export default function Anime() {
  return (
    <div className="container">
      <h1 className="header">Kho tàng Anime mới nhất</h1>
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-info">
            <h1 className="hero-title">Hoa Thơm Kiêu Hãnh</h1>
            <p className="sub-title">The Fragrant Flower Blooms with Dignity</p>
            <div className="more-info">
              <span className="year">2024</span>
              <span className="genre">Romance, Drama</span>
              <span className="duration">24 min</span>
            </div>
            <div className="genre">
              <span>Romance</span>
              <span>Drama</span>
              <span>Romance</span>
              <span>Drama</span>
              <span>Romance</span>
              <span>Drama</span>
              <span>Romance</span>
              <span>Drama</span>
            </div>
            <p className="hero-description" />Ở một nơi nào đó, có 2 trường cao
            trung lân cận. Cao trung Chidori, một trường nam sinh cấp thấp hội
            tụ đủ những thằng đần, trường nữ sinh Kikyo, một trường nữ sinh danh
            giá . Rintaro Tsugumi, một nam sinh năm 2 to khỏe và trầm tính tại
            trường Chidori, bắt gặp Kaoruko Waguri...
            <div className="hero-controls">
              <button className="play-btn">▶</button>
              <div className="goup-action">
                <button className="pause-btn">⏸</button>
                <button className="next-btn">⏭</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="hero-image">
            <div className="items">
              <img src="/images/image1.png" alt="" />
              <img src="/images/image1.png" alt="" />
              <img src="/images/image1.png" alt="" />
              <img src="/images/image1.png" alt="" />
              <img src="/images/image1.png" alt="" />
              <img src="/images/image1.png" alt="" />
              <img src="/images/image1.png" alt="" />
              <img src="/images/image1.png" alt="" />
              <img src="/images/image1.png" alt="" />
              <img src="/images/image1.png" alt="" />
              <img src="/images/image1.png" alt="" />
              <img src="/images/image1.png" alt="" />
              <img src="/images/image1.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
