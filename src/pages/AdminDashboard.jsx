import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import {
  Users,
  ScanFace,
  ShieldCheck,
  Activity,
  Menu,
  Moon,
  Sun,
} from "lucide-react";

/* ---------------- IMAGES (FIXED) ---------------- */
/* 👉 Put images inside: src/assets/faces/ */

import face1 from "../assets/images/face1.jpg";
import face2 from "../assets/images/face2.jpg";
import face3 from "../assets/images/face3.jpg";
import face4 from "../assets/images/face4.jpg";

const faces = [face1, face2, face3, face4];

/* ---------------- DATA ---------------- */

const stats = [
  { title: "Total Users", value: "12,847", icon: Users },
  { title: "Skin Analyses", value: "48,291", icon: ScanFace },
  { title: "AI Accuracy", value: "97.8%", icon: ShieldCheck },
  { title: "Today", value: "324", icon: Activity },
];

const chartData = [
  { month: "Jan", analyses: 1200 },
  { month: "Feb", analyses: 1800 },
  { month: "Mar", analyses: 2400 },
  { month: "Apr", analyses: 3100 },
  { month: "May", analyses: 4200 },
  { month: "Jun", analyses: 5200 },
];

const pieData = [
  { name: "Light", value: 20 },
  { name: "Medium", value: 35 },
  { name: "Tan", value: 25 },
  { name: "Deep", value: 20 },
];

const COLORS = ["#06b6d4", "#3b82f6", "#8b5cf6", "#ec4899"];

const heatMap = [
  [99, 98, 97, 95],
  [97, 98, 96, 94],
  [99, 99, 98, 97],
  [95, 96, 94, 93],
];

const demographics = [
  { group: "18-24", percentage: 35 },
  { group: "25-34", percentage: 42 },
  { group: "35-44", percentage: 16 },
  { group: "45+", percentage: 7 },
];

/* ---------------- COMPONENT ---------------- */

export default function AdminDashboard() {
  const [dark, setDark] = useState(true);
  const [sidebar, setSidebar] = useState(true);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5000");

    ws.onmessage = (msg) => {
      console.log("Live update:", JSON.parse(msg.data));
    };

    return () => ws.close();
  }, []);

  const exportPDF = async () => {
    const element = document.getElementById("dashboard");
    const canvas = await html2canvas(element);
    const img = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    pdf.addImage(img, "PNG", 0, 0, 210, 297);
    pdf.save("ai-dashboard.pdf");
  };

  return (
    <div
      id="dashboard"
      className={`min-h-screen flex ${
        dark ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-900"
      }`}
    >
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[180px]" />
      </div>

      {/* SIDEBAR */}
      <div
        className={`transition-all duration-300 ${
          sidebar ? "w-64" : "w-20"
        } bg-black/30 backdrop-blur-xl border-r border-white/10 p-4`}
      >
        <button onClick={() => setSidebar(!sidebar)} className="mb-6">
          <Menu />
        </button>

        {["Dashboard", "Users", "Analytics", "AI Model", "Reports"].map(
          (item) => (
            <div
              key={item}
              className="p-3 my-2 rounded-xl hover:bg-cyan-500/10 cursor-pointer"
            >
              {sidebar ? item : item[0]}
            </div>
          )
        )}
      </div>

      {/* MAIN */}
      <div className="flex-1 p-6">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">AI Skin Tone Admin Dashboard</h1>
            <p className="text-slate-400">
              Real-time analytics & AI monitoring
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setDark(!dark)}
              className="p-3 rounded-xl border"
            >
              {dark ? <Sun /> : <Moon />}
            </button>

            <button
              onClick={exportPDF}
              className="px-4 py-2 bg-cyan-500 rounded-xl"
            >
              Export PDF
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-5 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10"
              >
                <Icon className="mb-2 text-cyan-400" />
                <p className="text-sm text-slate-400">{s.title}</p>
                <h2 className="text-2xl font-bold">{s.value}</h2>
              </motion.div>
            );
          })}
        </div>

        {/* CHARTS */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="p-5 rounded-3xl bg-white/5 border border-white/10">
            <h3 className="mb-4">Monthly Analysis Growth</h3>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={chartData}>
                <Tooltip />
                <Area
                  dataKey="analyses"
                  stroke="#06b6d4"
                  fill="#06b6d4"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="p-5 rounded-3xl bg-white/5 border border-white/10">
            <h3 className="mb-4">Trend Line</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={chartData}>
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="analyses"
                  stroke="#8b5cf6"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* PIE + HEATMAP */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="p-5 rounded-3xl bg-white/5 border border-white/10">
            <h3 className="mb-4">Skin Tone Distribution</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={pieData} dataKey="value" outerRadius={90}>
                  {pieData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="p-5 rounded-3xl bg-white/5 border border-white/10">
            <h3 className="mb-4">AI Confidence Heatmap</h3>

            <div className="grid grid-cols-4 gap-2">
              {heatMap.flat().map((val, i) => (
                <div
                  key={i}
                  className="h-14 flex items-center justify-center rounded-lg font-bold"
                  style={{
                    backgroundColor: `rgba(6,182,212,${val / 100})`,
                  }}
                >
                  {val}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DEMOGRAPHICS + IMAGES */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="p-5 rounded-3xl bg-white/5 border border-white/10">
            <h3 className="mb-4">User Demographics</h3>

            {demographics.map((d, i) => (
              <div key={i} className="mb-3">
                <div className="flex justify-between">
                  <span>{d.group}</span>
                  <span>{d.percentage}%</span>
                </div>

                <div className="h-2 bg-slate-700 rounded-full">
                  <div
                    className="h-full bg-cyan-400 rounded-full"
                    style={{ width: `${d.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* FIXED IMAGE SECTION */}
          <div className="p-5 rounded-3xl bg-white/5 border border-white/10">
            <h3 className="mb-4">Recent Uploads</h3>

            <div className="grid grid-cols-2 gap-3">
              {faces.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`face-${i}`}
                  className="rounded-xl h-28 w-full object-cover hover:scale-105 transition"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/150?text=No+Image";
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center text-slate-500 text-sm">
          AI Dashboard running with real-time analytics system
        </div>
      </div>
    </div>
  );
}