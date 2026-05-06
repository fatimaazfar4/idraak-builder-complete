import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { PhoneFrame } from "@/components/PhoneFrame";

export const Route = createFileRoute("/processing")({
  head: () => ({ meta: [{ title: "تجزیہ — اِدراک" }] }),
  component: Processing,
});

function Processing() {
  const navigate = useNavigate();
  useEffect(() => {
    const t = setTimeout(() => navigate({ to: "/results" }), 2800);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <PhoneFrame>
      <div className="h-full flex flex-col items-center justify-center px-8 text-center">
        <div className="relative h-24 w-24 mb-8">
          <div className="absolute inset-0 rounded-full border-4 border-mint" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin" />
        </div>
        <p className="font-urdu text-xl mb-2">آپ کی آواز کا تجزیہ ہو رہا ہے</p>
        <p className="font-urdu text-sm text-muted-foreground">براہِ کرم انتظار کریں</p>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-1 bg-foreground/40 rounded-full" />
      </div>
    </PhoneFrame>
  );
}
