import { useEffect, useState } from "react";

/** 14 天啟動計畫頁：捲過 #offer 區後顯示底部懸浮 CTA，接近頁尾 .final 時收起。 */
export function useStartSticky() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const update = () => {
      const offer = document.getElementById("offer");
      const finalEl = document.querySelector<HTMLElement>(".final");
      if (!offer || !finalEl) return;
      const past = window.scrollY > offer.offsetTop + offer.offsetHeight;
      const nearEnd = window.scrollY + window.innerHeight > finalEl.offsetTop + 100;
      setShow(past && !nearEnd);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return show;
}
