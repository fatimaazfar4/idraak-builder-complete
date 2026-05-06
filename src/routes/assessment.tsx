import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Mic, Volume2, ImageIcon } from "lucide-react";

export const Route = createFileRoute("/assessment")({
  head: () => ({ meta: [{ title: "جانچ — اِدراک" }] }),
  component: Assessment,
});

type Task = {
  label: string;
  prompt: string;
  hint?: string;
  mode: "record" | "listen" | "picture" | "audio-question";
  duration: number;
};

const tasks: Task[] = [
  {
    label: "سوال ۱ از ۶ — یاداشت",
    prompt: "ابھی وہ الفاظ دہرائیں\nجو آپ نے سنے",
    hint: "بولنے کے ۲ سیکنڈ دبائیں",
    mode: "record",
    duration: 12,
  },
  {
    label: "سوال ۲ از ۶ — روانی",
    prompt: "جتنے جانوروں کے نام\nلے سکتے ہیں لیں",
    mode: "record",
    duration: 60,
  },
  {
    label: "سوال ۳ از ۶ — جملہ",
    prompt: "آواز سنیں...",
    hint: "جملہ سنیں پھر دہرائیں",
    mode: "listen",
    duration: 8,
  },
  {
    label: "سوال ۴ از ۶ — تصویر",
    prompt: "یہ تصویر دیکھ کر بتائیں کیا ہو رہا ہے",
    mode: "picture",
    duration: 60,
  },
  {
    label: "سوال ۵ از ۶ — تاخیری یاد",
    prompt: "یاد ہے وہ ۵ الفاظ؟\nانہیں ابھی بتائیں",
    mode: "record",
    duration: 30,
  },
  {
    label: "سوال ۶ از ۶ — واقفیت",
    prompt: "آج کون سا دن ہے؟",
    mode: "audio-question",
    duration: 10,
  },
];

function Assessment() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [time, setTime] = useState(0);
  const total = tasks.length;
  const t = tasks[step];

  useEffect(() => {
    setTime(0);
    const id = setInterval(() => setTime((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [step]);

  const fmt = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(1, "0")}:${String(s % 60).padStart(2, "0")}`;

  const next = () => {
    if (step < total - 1) setStep(step + 1);
    else navigate({ to: "/processing" });
  };

  return (
    <PhoneFrame>
      <div className="flex flex-col h-full">
        {/* Progress bar */}
        <div className="h-1 bg-muted">
          <div
            className="h-full bg-primary transition-all duration-500"
            style={{ width: `${((step + 1) / total) * 100}%` }}
          />
        </div>

        <div className="px-6 pt-4 flex items-center justify-between text-xs">
          <span className="text-muted-foreground">{step + 1}/{total}</span>
          <span className="font-urdu text-muted-foreground">{t.label}</span>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          {t.mode === "picture" && (
            <div className="w-full bg-muted rounded-2xl aspect-[4/3] flex flex-col items-center justify-center mb-8 border border-border">
              <ImageIcon className="h-10 w-10 text-muted-foreground/60" />
              <p className="font-urdu text-xs text-muted-foreground mt-2">بازار کی تصویر</p>
            </div>
          )}

          {t.mode === "audio-question" && (
            <div className="bg-mint/60 rounded-full px-6 py-3 mb-8 flex items-center gap-3">
              <Volume2 className="h-5 w-5 text-primary" />
              <span className="font-urdu text-base text-mint-foreground">{t.prompt}</span>
            </div>
          )}

          {t.mode !== "audio-question" && (
            <p className="font-urdu text-2xl whitespace-pre-line mb-10 leading-loose">
              {t.prompt}
            </p>
          )}

          {t.mode === "listen" ? (
            <>
              <div className="h-14 w-14 rounded-full bg-mint flex items-center justify-center mb-4">
                <Volume2 className="h-7 w-7 text-primary" />
              </div>
              <div className="flex items-end gap-1 h-10 mb-2">
                {[4, 8, 12, 16, 20, 24, 18, 12, 8, 14, 20, 16, 10, 6].map((h, i) => (
                  <span key={i} className="w-1 bg-primary rounded-full" style={{ height: `${h}px` }} />
                ))}
              </div>
              <p className="font-urdu text-sm text-muted-foreground">آواز سنیں...</p>
              <p className="font-urdu text-xs text-muted-foreground mt-1">جملہ سنیں پھر دہرائیں</p>
            </>
          ) : (
            <>
              <button
                onClick={next}
                className="relative h-20 w-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg ring-4 ring-destructive/30 hover:scale-105 transition-transform"
              >
                <Mic className="h-9 w-9" />
              </button>
              <div className="flex items-center gap-2 mt-4">
                <span className="font-mono text-sm">{fmt(time)}</span>
                <span className="h-2 w-2 rounded-full bg-destructive animate-pulse" />
              </div>
              {t.hint && (
                <p className="font-urdu text-xs text-muted-foreground mt-2">{t.hint}</p>
              )}
            </>
          )}
        </div>

        <button
          onClick={next}
          className="font-urdu text-sm text-primary py-4 mb-2 hover:underline"
        >
          اگلا سوال →
        </button>
      </div>
    </PhoneFrame>
  );
}
