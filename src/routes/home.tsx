import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export const Route = createFileRoute("/home")({
  head: () => ({ meta: [{ title: "ہوم — اِدراک" }] }),
  component: Home,
});

function Home() {
  const navigate = useNavigate();
  return (
    <PhoneFrame
      headerContent={
        <div className="bg-primary text-primary-foreground px-5 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate({ to: "/login" })}
            className="flex items-center gap-1 font-urdu text-sm hover:opacity-80"
          >
            <LogOut className="h-4 w-4" />
            لاگ آؤٹ
          </button>
          <h1 className="font-urdu text-2xl">اِدراک</h1>
        </div>
      }
    >
      <div className="px-6 pt-8 flex flex-col h-full">
        <h2 className="font-urdu text-3xl text-right mb-6">السلام علیکم!</h2>

        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
          <p className="font-urdu text-sm text-muted-foreground text-right">آخری جانچ</p>
          <div className="flex items-baseline justify-end gap-1 mt-2">
            <span className="text-muted-foreground text-sm">/100</span>
            <span className="text-5xl font-bold text-primary">74</span>
          </div>
          <p className="font-urdu text-xs text-muted-foreground text-right mt-1">
            12 اپریل 2026
          </p>
          <div className="mt-4 inline-block bg-mint text-mint-foreground font-urdu px-4 py-1.5 rounded-full text-sm">
            سامان ٹھیک ہے
          </div>
        </div>

        <Button
          size="lg"
          onClick={() => navigate({ to: "/pre-check" })}
          className="w-full h-14 font-urdu text-lg mt-8"
        >
          جانچ شروع کریں
        </Button>

        <p className="font-urdu text-xs text-muted-foreground text-center mt-4">
          آواز کے ذریعے ۸ سوال — تقریباً ۱۵ منٹ
        </p>
      </div>
    </PhoneFrame>
  );
}
