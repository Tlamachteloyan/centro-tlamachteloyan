"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { año: "2021", personas: 100 },
  { año: "2022", personas: 200 },
  { año: "2023", personas: 350 },
  { año: "2024", personas: 500 },
];

export default function LineChartSection() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow h-[320px]">

      <h3 className="font-semibold mb-4">Crecimiento del impacto</h3>

      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="año" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="personas"
            stroke="#22c55e"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}