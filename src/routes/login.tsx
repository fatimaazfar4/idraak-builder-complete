import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "لاگ ان — اِدراک" }] }),
  component: Login,
});

function Login() {
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !pwd) { setShowError(true); return; }
    navigate({ to: "/onboarding" });
  };

  return (
    <PhoneFrame>
      <div className="h-full flex flex-col px-6 pt-16">
        <div className="text-center mb-10">
          <h1 className="font-urdu text-5xl text-primary">اِدراک</h1>
          <p className="font-urdu text-sm text-muted-foreground mt-2">اپنے ذہن کی صحت جانیں</p>
        </div>
        <form onSubmit={submit} className="space-y-3">
          <Input
            placeholder="ای میل"
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setShowError(false); }}
            className="text-right h-12 bg-card"
            dir="rtl"
          />
          <Input
            placeholder="پاس ورڈ"
            type="password"
            value={pwd}
            onChange={(e) => { setPwd(e.target.value); setShowError(false); }}
            className="text-right h-12 bg-card"
            dir="rtl"
          />
          {showError && (
            <p className="text-destructive text-sm text-right font-urdu">
              ای میل یا پاس ورڈ غلط ہے
            </p>
          )}
          <Button type="submit" size="lg" className="w-full h-12 font-urdu text-lg mt-6">
            لاگ ان
          </Button>
        </form>
        <Link to="/register" className="text-primary font-urdu text-center mt-6 hover:underline">
          نیا اکاؤنٹ بنائیں
        </Link>
      </div>
    </PhoneFrame>
  );
}
