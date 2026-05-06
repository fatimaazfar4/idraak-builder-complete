import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/results")({
  head: () => ({ meta: [{ title: "نتائج — اِدراک" }] }),
  component: Results,
});

const breakdown = [
  { label: "یاداشت", score: 8 },
  { label: "روانی", score: 7 },
  { label: "جملہ", score: 8 },
  { label: "تصویر", score: 7 },
  { label: "تاخیری یاد", score: 6 },
  { label: "واقفیت", score: 10 },
];

function Results() {
  const navigate = useNavigate();
  return (
    <PhoneFrame
      headerContent={
        <div className="bg-primary text-primary-foreground px-5 py-4 text-center">
          <h1 className="font-urdu text-2xl">نتائج</h1>
        </div>
      }
    >
      <div className="px-6 pt-6 pb-6 flex flex-col items-center">
        {/* Score circle */}
        <div className="relative h-36 w-36 mb-2">
          <svg viewBox="0 0 120 120" className="absolute inset-0 -rotate-90">
            <circle cx="60" cy="60" r="52" stroke="var(--mint)" strokeWidth="8" fill="none" />
            <circle
              cx="60" cy="60" r="52"
              stroke="var(--primary)" strokeWidth="8" fill="none"
              strokeDasharray={`${(74 / 100) * 326.7} 326.7`} strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold text-primary">74</span>
            <span className="text-xs text-muted-foreground">/100</span>
          </div>
        </div>

        <p className="font-urdu text-sm text-muted-foreground">آپ کا اسکور</p>

        <div className="mt-3 bg-mint text-mint-foreground font-urdu px-5 py-1.5 rounded-full text-sm">
          سامان ٹھیک ہے
        </div>

        <p className="font-urdu text-sm text-center mt-3 mb-5">
          آپ کی یادداشت معمول کے مطابق ہے
        </p>

        <div className="w-full space-y-3">
          {breakdown.map((b) => (
            <div key={b.label}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-muted-foreground tabular-nums">{b.score}/10</span>
                <span className="font-urdu text-sm">{b.label}</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden" dir="ltr">
                <div
                  className="h-full bg-primary rounded-full transition-all"
                  style={{ width: `${b.score * 10}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="w-full mt-6 space-y-2">
          <Button variant="outline" size="lg" className="w-full h-12 font-urdu border-primary/40">
            نتائج شیئر کریں
          </Button>
          <Button
            size="lg"
            onClick={() => navigate({ to: "/home" })}
            className="w-full h-12 font-urdu"
          >
            مکمل
          </Button>
        </div>
      </div>
    </PhoneFrame>
  );
}
