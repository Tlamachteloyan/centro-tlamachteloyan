"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Educación", value: 50 },
  { name: "Infraestructura", value: 30 },
  { name: "Cultura", value: 20 },
];

const colors = ["#22c55e", "#3b82f6", "#f59e0b"];

export default function PieChartSection() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow h-[320px]">

      <h3 className="font-semibold mb-4">Distribución porcentual</h3>

      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={colors[index]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: number) => `${value}%`} />
        </PieChart>
      </ResponsiveContainer>

    </div>
  );
}