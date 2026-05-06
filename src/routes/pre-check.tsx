import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Button } from "@/components/ui/button";
import { Check, Volume2 } from "lucide-react";

export const Route = createFileRoute("/pre-check")({
  head: () => ({ meta: [{ title: "شروع کرنے سے پہلے — اِدراک" }] }),
  component: PreCheck,
});

function PreCheck() {
  const navigate = useNavigate();
  const [c, setC] = useState([true, true, false]);
  const items = [
    "کیا آپ ایک پرسکون جگہ پر ہیں؟",
    "کیا آپ کا فون چارج ہے؟",
    "کیا آپ ۱۵ منٹ کے لیے تیار ہیں؟",
  ];
  const allOk = c.every(Boolean);

  return (
    <PhoneFrame>
      <div className="px-6 pt-8 flex flex-col h-full">
        <h2 className="font-urdu text-2xl text-right mb-6">شروع کرنے سے پہلے</h2>

        <div className="space-y-4">
          {items.map((t, i) => (
            <button
              key={i}
              onClick={() => setC(c.map((v, j) => (j === i ? !v : v)))}
              className="w-full flex items-center justify-between gap-3 text-right py-2"
            >
              <span className="font-urdu text-base flex-1">{t}</span>
              <span
                className={`h-6 w-6 rounded-md border-2 flex items-center justify-center transition-colors ${
                  c[i] ? "bg-primary border-primary" : "border-border bg-card"
                }`}
              >
                {c[i] && <Check className="h-4 w-4 text-primary-foreground" />}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-6 bg-mint/60 rounded-xl px-4 py-3 flex items-center gap-3">
          <Volume2 className="h-5 w-5 text-primary shrink-0" />
          <div className="flex-1 flex items-center gap-2 justify-between">
            <span className="font-urdu text-sm text-mint-foreground">آواز سنی جا رہی ہے...</span>
            <div className="flex items-end gap-0.5 h-4">
              {[3, 6, 4, 8, 5, 7, 3, 5].map((h, i) => (
                <span key={i} className="w-0.5 bg-primary rounded-full" style={{ height: `${h * 2}px` }} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1" />

        <Button
          size="lg"
          disabled={!allOk}
          onClick={() => navigate({ to: "/assessment" })}
          className="w-full h-14 font-urdu text-lg mb-6"
        >
          ابھی شروع کریں
        </Button>
      </div>
    </PhoneFrame>
  );
}
