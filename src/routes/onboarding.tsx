import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/onboarding")({
  head: () => ({ meta: [{ title: "ابتدائی معلومات — اِدراک" }] }),
  component: Onboarding,
});

const steps = [
  {
    q: "آپ کی عمر کیا ہے؟",
    options: ["18-30", "31-45", "46-60", "61-75", "75 سے زیادہ"],
  },
  {
    q: "آپ نے کتنا پڑھا ہے؟",
    options: ["کوئی تعلیم نہیں", "پرائمری", "مڈل", "میٹرک", "انٹر", "گریجویشن یا زیادہ"],
  },
  {
    q: "آپ کی جنس کیا ہے؟",
    options: ["مرد", "عورت", "دیگر"],
  },
  {
    q: "کیا آپ کو پہلے کوئی یاداشت کا مسئلہ ہوا ہے؟",
    options: ["جی نہیں", "جی ہاں", "یقین نہیں"],
  },
];

function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [picked, setPicked] = useState<Record<number, string>>({});
  const total = steps.length;
  const cur = steps[step - 1];

  const next = () => {
    if (step < total) setStep(step + 1);
    else navigate({ to: "/home" });
  };

  return (
    <PhoneFrame>
      <div className="h-full flex flex-col px-6 pt-6">
        <div className="flex items-center justify-between mb-2 text-xs">
          <span className="font-urdu text-muted-foreground">مرحلہ {step} از {total}</span>
          <span className="text-primary font-medium">Step {step} of {total}</span>
        </div>
        <div className="h-1.5 bg-muted rounded-full overflow-hidden mb-8">
          <div
            className="h-full bg-primary transition-all duration-500"
            style={{ width: `${(step / total) * 100}%` }}
          />
        </div>

        <h2 className="font-urdu text-2xl text-right mb-8">{cur.q}</h2>

        <div className="space-y-3 flex-1">
          {cur.options.map((opt) => {
            const active = picked[step] === opt;
            return (
              <button
                key={opt}
                onClick={() => setPicked({ ...picked, [step]: opt })}
                className={`w-full text-right font-urdu px-5 py-3.5 rounded-xl border-2 transition-all ${
                  active
                    ? "border-primary bg-mint text-mint-foreground"
                    : "border-border bg-card hover:border-primary/40"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>

        <Button
          size="lg"
          onClick={next}
          disabled={!picked[step]}
          className="w-full h-12 font-urdu text-lg mt-6 mb-4"
        >
          {step === total ? "مکمل کریں" : "اگلا"}
        </Button>
      </div>
    </PhoneFrame>
  );
}
