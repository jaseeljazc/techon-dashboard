import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ReferenceLine,
  Cell,
} from "recharts";
import { ArrowUpRight } from "lucide-react";

const data = [
  { month: "Jan", value: 10 },
  { month: "Feb", value: 25 },
  { month: "Mar", value: 20 },
  { month: "Apr", value: 23 },
  { month: "May", value: 18 },
  { month: "Jun", value: 28 }, // highlighted
  { month: "Jul", value: 15 },
  { month: "Aug", value: 26 },
  { month: "Sep", value: 5 },
  { month: "Oct", value: 25 },
  { month: "Nov", value: 12 },
  { month: "Dec", value: 17 },
];

const MAX_VALUE = 30;

const DocumentsExpiringChart = () => {
  return (
    <div className=" glass-shadow relative rounded-[10px] sm:rounded-3xl h-full flex flex-col bg-card/30 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-6  pt-4 px-5">
        <h2 className="text-xl font-semibold text-slate-900">
          Documents Expiring
        </h2>
        <button className="w-9 h-9 rounded-full border border-border hidden items-center justify-center sm:flex ">
          <ArrowUpRight className="w-4 h-4 text-black" />
        </button>
      </div>

      {/* Chart */}
      <div className="flex-1 pb-5">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barCategoryGap={5}
            margin={{ top: 20, right: 20, left: 20, bottom: 0 }}
          >
            {/* Category X axis (visible) */}
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#A3AED0", fontSize: 8 }}
            />

            {/* Numeric X axis (hidden, used for reference line) */}
            <XAxis
              xAxisId="index"
              type="number"
              domain={[0, data.length - 1]}
              hide
            />

            {/* Y Axis */}
            <YAxis hide domain={[0, MAX_VALUE]} />

            {/* ✅ Properly constrained reference line */}
            <ReferenceLine
              y={MAX_VALUE}
              stroke="#4B66E3"
              strokeDasharray="4 4"
              xAxisId="index"
              segment={[
                { x: 0.4, y: MAX_VALUE },
                { x: data.length - 1.4, y: MAX_VALUE },
              ]}
              label={{
                value: MAX_VALUE,
                position: "right",
                fill: "#4B66E3",
                fontSize: 10,
                fontWeight: 500,
              }}
            />

            {/* Bars */}
            <Bar dataKey="value" maxBarSize={36} radius={[6, 6, 6, 6]}>
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={index === 5 ? "#C8E764" : "#E9EDF7"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DocumentsExpiringChart;
