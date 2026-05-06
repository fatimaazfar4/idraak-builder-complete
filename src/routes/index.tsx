import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PhoneFrame } from "@/components/PhoneFrame";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "اِدراک — Idraak Cognitive Health" },
      { name: "description", content: "Idraak — Urdu cognitive health assessment app." },
    ],
  }),
  component: Splash,
});

function Splash() {
  const navigate = useNavigate();
  const [dot, setDot] = useState(0);

  useEffect(() => {
    const i = setInterval(() => setDot((d) => (d + 1) % 3), 500);
    const t = setTimeout(() => navigate({ to: "/login" }), 2400);
    return () => { clearInterval(i); clearTimeout(t); };
  }, [navigate]);

  return (
    <PhoneFrame>
      <div className="h-full flex flex-col items-center justify-center px-8 text-center">
        <h1 className="font-urdu text-7xl text-primary mb-6 animate-in fade-in zoom-in duration-700">
          اِدراک
        </h1>
        <p className="font-urdu text-base text-muted-foreground">
          اپنے ذہن کی صحت جانیں
        </p>
        <div className="flex gap-2 mt-12">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full transition-all ${
                dot === i ? "bg-primary w-6" : "bg-primary/30"
              }`}
            />
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}
