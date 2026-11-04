import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <section className="ty">
      <div className="wrap">
        <div className="tick">404</div>
        <h1>
          找不到<span>這個頁面</span>
        </h1>
        <p className="ty-sub">您尋找的網址可能已搬移或不存在。請從下方連結回到網站繼續瀏覽。</p>
        <div className="hero-ctas">
          <Link className="btn btn-primary" to="/">
            返回首頁 <span className="arr">→</span>
          </Link>
          <Link className="btn btn-ghost" to="/booking">
            免費報名講座
          </Link>
        </div>
      </div>
    </section>
  );
}
