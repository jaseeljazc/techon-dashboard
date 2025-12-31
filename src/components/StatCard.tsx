import { MoreHorizontal } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  delay?: string;
}

const StatCard = ({ icon, label, value, delay = "0s" }: StatCardProps) => {
  return (
    <div
      className="
        relative
        bg-stat
        rounded-[10px] lg:rounded-2xl
        px-1 sm:p-3
        min-h-[60px] lg:min-h-[160px]
        shadow-card
        animate-fade-in
      "
      style={{ animationDelay: delay }}
    >
      {/* Top section */}
      <div className="flex items-center gap-2 z-10 relative h-6 sm:pt-3 sm:h-0">
        <div className="w-2 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-xl flex items-center justify-center pt-1">
        {icon}
        </div>
        <span className="text-stat-foreground font-semibold text-[5px] lg:text-xs leading-tight">
          {label}
        </span>
      </div>

      {/* Center value */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-xl sm:text-6xl lg:text-7xl font-bold text-stat-foreground">
          {value}
        </span>
      </div>

      {/* Three dots */}
      <button className="
        absolute bottom-0.5 right-2
        lg:bottom-3 lg:right-3
        sm:p-2
        rounded-lg
        hover:bg-stat-foreground/10
        transition-colors
        
      ">
        <MoreHorizontal className="w-4 h-4  text-[#C8E764] lg:w-7 lg:h-7" />
      </button>
    </div>
  );
};

export default StatCard;
