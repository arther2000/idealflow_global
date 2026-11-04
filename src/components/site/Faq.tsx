import { createContext, useContext, useId, useRef, useState, type ReactNode } from "react";

type FaqContextValue = { openId: string | null; toggle: (id: string) => void };

const FaqContext = createContext<FaqContextValue | null>(null);

/** FAQ 手風琴容器：同一時間只展開一題。 */
export function FaqList({ className, children }: { className?: string; children: ReactNode }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const toggle = (id: string) => setOpenId((cur) => (cur === id ? null : id));
  return (
    <FaqContext.Provider value={{ openId, toggle }}>
      <div className={className}>{children}</div>
    </FaqContext.Provider>
  );
}

export function Qa({ question, children }: { question: string; children: ReactNode }) {
  const ctx = useContext(FaqContext);
  const id = useId();
  const ansRef = useRef<HTMLDivElement>(null);
  const isOpen = ctx?.openId === id;

  return (
    <div className={isOpen ? "qa open" : "qa"}>
      <button type="button" aria-expanded={isOpen} onClick={() => ctx?.toggle(id)}>
        {question}
        <span className="plus">＋</span>
      </button>
      <div
        className="ans"
        ref={ansRef}
        style={isOpen ? { maxHeight: `${ansRef.current?.scrollHeight ?? 1000}px` } : undefined}
      >
        {children}
      </div>
    </div>
  );
}
