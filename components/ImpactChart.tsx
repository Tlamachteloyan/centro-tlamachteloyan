"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
  LabelList,
} from "recharts";

const data = [
  { name: "Educación", porcentaje: 50 },
  { name: "Infraestructura", porcentaje: 30 },
  { name: "Cultura", porcentaje: 20 },
];

const colors = ["#22c55e", "#3b82f6", "#f59e0b"];

export default function ImpactChart() {
  return (
    <div className="w-full h-[340px] bg-white rounded-2xl shadow p-6">

      <ResponsiveContainer>
        <BarChart data={data}>

          {/* GRID */}
          <CartesianGrid strokeDasharray="3 3" />

          {/* EJES */}
          <XAxis dataKey="name" />
          <YAxis />

          {/* TOOLTIP */}
          <Tooltip
            formatter={(value: number) => `${value}%`}
            contentStyle={{
              borderRadius: "10px",
              border: "none",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
            }}
          />

          {/* BARRAS */}
          <Bar dataKey="porcentaje" radius={[10, 10, 0, 0]}>
            
            {/* COLORES */}
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}

            {/* 🔥 ETIQUETAS ARRIBA */}
            <LabelList
              dataKey="porcentaje"
              position="top"
              formatter={(value: number) => `${value}%`}
              style={{
                fill: "#374151",
                fontWeight: "bold",
                fontSize: 14,
              }}
            />

          </Bar>

        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}