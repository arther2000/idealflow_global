import { Link, useRouterState } from "@tanstack/react-router";

export function NotFound() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const zh = pathname === "/tw" || pathname.startsWith("/tw/");

  return (
    <section className="ty">
      <div className="wrap">
        <div className="tick">404</div>
        {zh ? (
          <>
            <h1>
              找不到<span>這個頁面</span>
            </h1>
            <p className="ty-sub">您尋找的網址可能已搬移或不存在。請從下方連結回到網站繼續瀏覽。</p>
            <div className="hero-ctas">
              <Link className="btn btn-primary" to="/tw">
                返回首頁 <span className="arr">→</span>
              </Link>
              <Link className="btn btn-ghost" to="/tw/booking">
                免費報名講座
              </Link>
            </div>
          </>
        ) : (
          <>
            <h1>
              Page <span>not found</span>
            </h1>
            <p className="ty-sub">
              The page you’re looking for may have moved or no longer exists.
            </p>
            <div className="hero-ctas">
              <Link className="btn btn-primary" to="/">
                Back to Home <span className="arr">→</span>
              </Link>
              <Link className="btn btn-ghost" to="/tw">
                台灣（繁體中文）
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
