import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [{ title: "اکاؤنٹ بنائیں — اِدراک" }] }),
  component: Register,
});

function Register() {
  const navigate = useNavigate();
  return (
    <PhoneFrame>
      <div className="h-full flex flex-col px-6 pt-16">
        <div className="text-center mb-10">
          <h1 className="font-urdu text-5xl text-primary">اِدراک</h1>
          <p className="font-urdu text-sm text-muted-foreground mt-2">اپنے ذہن کی صحت جانیں</p>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); navigate({ to: "/onboarding" }); }}
          className="space-y-3"
        >
          <Input placeholder="ای میل" type="email" className="text-right h-12 bg-card" dir="rtl" />
          <Input placeholder="پاس ورڈ" type="password" className="text-right h-12 bg-card" dir="rtl" />
          <Input placeholder="پاس ورڈ کی تصدیق کریں" type="password" className="text-right h-12 bg-card" dir="rtl" />
          <Button type="submit" size="lg" className="w-full h-12 font-urdu text-lg mt-6">
            اکاؤنٹ بنائیں
          </Button>
        </form>
        <Link to="/login" className="text-primary font-urdu text-center mt-6 hover:underline">
          لاگ ان کریں
        </Link>
      </div>
    </PhoneFrame>
  );
}
