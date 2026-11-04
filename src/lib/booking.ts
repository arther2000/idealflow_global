// 講座報名：送進 GoHighLevel（Workflow → Inbound Webhook Trigger）。
// 欄位為扁平結構（GHL 對應巢狀 JSON 不穩），送出後導向感謝頁。

export const FORM_ENDPOINT =
  "https://services.leadconnectorhq.com/hooks/zY8JbOOVat7EkBLQyIkB/webhook-trigger/12sfMqNpJsSCz2uJTzZ3";
/** webhook 送不出去時的備援信箱 */
export const FORM_MAILTO = "arther.learn@gmail.com";

// 目前只有單一場次，直接寫死（不用再讓使用者選）
export const SESSION_LABEL = "10/3（六）14:00－19:00"; // 顯示用
export const SESSION_GHL = "10-03-2026 02:00 PM"; // GHL 日期格式：MM-DD-YYYY hh:mm AM/PM
export const VENUE = "台北市南京東路四段51-2號3樓";

export type BookingInput = { name: string; phone: string; email: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidBooking(d: BookingInput): boolean {
  return Boolean(d.name.trim() && d.phone.trim() && EMAIL_RE.test(d.email.trim()));
}

/** 台灣手機號轉 E.164（0912345678 → +886912345678），GHL 才認得 */
export function toE164(raw: string): string {
  const n = (raw || "").replace(/[^\d+]/g, "");
  if (n.startsWith("+")) return n;
  if (n.startsWith("886")) return "+" + n;
  if (n.startsWith("0")) return "+886" + n.slice(1);
  return n ? "+886" + n : "";
}

export function buildPayload(d: BookingInput) {
  const name = d.name.trim();
  return {
    full_name: name,
    first_name: name, // GHL 聯絡人必填的名字欄位
    email: d.email.trim(),
    phone: toE164(d.phone),
    phone_raw: d.phone.trim(), // 原始輸入，方便人工核對
    session: SESSION_GHL,
    session_label: SESSION_LABEL,
    venue: VENUE,
    source: "官網講座報名頁",
    page_url: typeof window !== "undefined" ? window.location.href : "",
    submitted_at: new Date().toISOString(),
  };
}

export async function submitBooking(d: BookingInput): Promise<void> {
  const res = await fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(buildPayload(d)),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
}

/** webhook 掛掉時不讓報名者的資料消失：改用郵件備援 */
export function mailtoFallbackUrl(d: BookingInput): string {
  const name = d.name.trim();
  const body = [
    "姓名：" + name,
    "電話：" + d.phone,
    "Email：" + d.email,
    "報名場次：" + SESSION_LABEL,
    "地點：" + VENUE,
  ].join("\n");
  return (
    "mailto:" +
    FORM_MAILTO +
    "?subject=" +
    encodeURIComponent("【講座報名】" + name + "｜" + SESSION_LABEL) +
    "&body=" +
    encodeURIComponent(body)
  );
}
