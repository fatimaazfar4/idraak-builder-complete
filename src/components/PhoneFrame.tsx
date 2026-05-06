import { ReactNode } from "react";
import { Signal, Wifi, BatteryFull } from "lucide-react";

interface PhoneFrameProps {
  children: ReactNode;
  headerBg?: "default" | "primary";
  headerContent?: ReactNode;
}

export function PhoneFrame({ children, headerBg = "default", headerContent }: PhoneFrameProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4 sm:p-8">
      <div className="relative w-full max-w-[400px] h-[820px] max-h-[95vh] bg-card rounded-[42px] shadow-2xl border border-border/50 overflow-hidden flex flex-col" dir="rtl">
        {/* Status bar */}
        <div
          className={`flex items-center justify-between px-6 pt-3 pb-2 text-xs ${
            headerBg === "primary" ? "bg-primary text-primary-foreground" : "bg-card text-foreground"
          }`}
        >
          <div className="flex items-center gap-1">
            <BatteryFull className="h-3 w-3" />
            <Wifi className="h-3 w-3" />
            <Signal className="h-3 w-3" />
          </div>
          <span className="font-medium">9:41</span>
        </div>
        {headerContent}
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
