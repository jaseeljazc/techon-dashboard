import { boxIcon } from "@/assets/ui";
import { ArrowUpRight } from "lucide-react";

const columns = [
  "Entity",
  "Email",
  "Document Name",
  "Document Type",
  "Document Type",
  "Document Type",
  "Document Type",
];

const ThisMonthExpiresTable = () => {
  return (
    <div
      className="glass-shadow bg-card/30 rounded-[10px] sm:rounded-2xl p-4 h-full animate-fade-in"
      style={{ animationDelay: "0.2s" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg lg:text-xl font-bold text-foreground">
          This Month Expires Documents
        </h2>
        <button className="w-8 h-8 rounded-full border border-border hidden sm:flex items-center justify-center hover:bg-muted transition-colors">
          <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      {/* DESKTOP TABLE HEADER */}
      <div className=" border-b border-border pb-3">
        <div className="grid grid-cols-7 gap-4">
          {columns.map((col, index) => (
            <span
              key={index}
              className="text-[5px] sm:text-sm font-medium text-muted-foreground"
            >
              {col}
            </span>
          ))}
        </div>
      </div>

      {/* MOBILE EMPTY STATE */}
      <div className="flex lg:hidden flex-col items-center justify-center py-10">
        <img
          src={boxIcon}
          alt="No data"
          className="w-20 h-20 opacity-20"
        />
        
      </div>

      {/* DESKTOP EMPTY STATE */}
      <div className="hidden lg:flex flex-col items-center justify-center py-12">
        <img
          src={boxIcon}
          alt="No data"
          className="w-32 h-32 opacity-20"
        />
      </div>
    </div>
  );
};

export default ThisMonthExpiresTable;
