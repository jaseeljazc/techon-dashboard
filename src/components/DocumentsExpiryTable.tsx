import { boxIcon } from "@/assets/ui";
import { ArrowUpRight } from "lucide-react";

const columns = ["Document Type", "Document Name", "Status", "Detail"];

const DocumentsExpiryTable = () => {
  return (
    <div
      className="bg-card/30 rounded-[10px] sm:rounded-3xl p-4 glass-shadow  h-[235px] animate-fade-in"
      style={{ animationDelay: "0.3s" }}
    >
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold text-foreground">Documents Expiry</h2>
        <button className="w-8 h-8 rounded-full border border-border hidden sm:flex items-center justify-center hover:bg-muted transition-colors">
          <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      {/* Table Header */}
      <div className="border-b border-black pb-1 sm:pb-3 pr-5">
        <div className="flex justify-between">
          {columns.map((col, index) => (
            <span
              key={index}
              className="text-[10px] font-bold text-muted-foreground"
            >
              {col}
            </span>
          ))}
        </div>
      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center py-4">
        <div className="relative w-28 h-28">
          <img src={boxIcon} alt="Box Icon" className="opacity-20" />
        </div>
      </div>
    </div>
  );
};

export default DocumentsExpiryTable;
