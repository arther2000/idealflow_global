import { useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  SESSION_LABEL,
  isValidBooking,
  mailtoFallbackUrl,
  submitBooking,
  type BookingInput,
} from "@/lib/booking";

export const SIGNUP_ID = "signup";
export const NAME_INPUT_ID = "bkName";

export function BookingForm() {
  const navigate = useNavigate();
  const [data, setData] = useState<BookingInput>({ name: "", phone: "", email: "" });
  const [showErr, setShowErr] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (k: keyof BookingInput) => (e: { target: { value: string } }) =>
    setData((d) => ({ ...d, [k]: e.target.value }));

  const goThanks = () =>
    navigate({ to: "/thanks", search: { s: SESSION_LABEL, n: data.name.trim() } });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isValidBooking(data)) {
      setShowErr(true);
      return;
    }
    setShowErr(false);
    setSubmitting(true);
    try {
      await submitBooking(data);
      await goThanks();
    } catch {
      window.location.href = mailtoFallbackUrl(data);
      setTimeout(() => void goThanks(), 800);
    }
  };

  return (
    <form className="bk-form" id="bkForm" noValidate onSubmit={onSubmit}>
      <div className="fh">填寫報名資料</div>
      <p className="fs">★ 為必填，三個欄位就完成。</p>

      <div className="bk-field">
        <label htmlFor={NAME_INPUT_ID}>
          姓名／稱呼 <span className="req">★</span>
        </label>
        <input
          id={NAME_INPUT_ID}
          name="name"
          type="text"
          placeholder="王小明"
          required
          value={data.name}
          onChange={set("name")}
        />
      </div>

      <div className="bk-field">
        <label htmlFor="bkPhone">
          電話 <span className="req">★</span>
        </label>
        <input
          id="bkPhone"
          name="phone"
          type="tel"
          inputMode="tel"
          placeholder="0912-345-678"
          required
          value={data.phone}
          onChange={set("phone")}
        />
      </div>

      <div className="bk-field">
        <label htmlFor="bkEmail">
          Email <span className="req">★</span>
        </label>
        <input
          id="bkEmail"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          value={data.email}
          onChange={set("email")}
        />
      </div>

      <button className="btn btn-primary" type="submit" disabled={submitting}>
        {submitting ? (
          "報名中……"
        ) : (
          <>
            完成報名 <span className="arr">→</span>
          </>
        )}
      </button>
      <p className={showErr ? "bk-err show" : "bk-err"} id="bkErr">
        請確認姓名、電話與 Email（格式正確）都已填寫。
      </p>
      <p className="bk-note">
        送出即表示同意我們以你留下的方式通知講座地點與提醒。
        <br />
        你的資料僅用於本次講座聯繫，不會提供給第三方。
      </p>
    </form>
  );
}

/** 「回上面免費報名」：捲回表單並聚焦第一個欄位 */
export function BackToFormButton() {
  return (
    <a
      className="btn btn-primary"
      href={`#${SIGNUP_ID}`}
      id="backToForm"
      style={{ marginTop: "26px" }}
      onClick={(e) => {
        e.preventDefault();
        document.getElementById(SIGNUP_ID)?.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(
          () => document.getElementById(NAME_INPUT_ID)?.focus({ preventScroll: true }),
          500,
        );
      }}
    >
      回上面免費報名 <span className="arr">→</span>
    </a>
  );
}
