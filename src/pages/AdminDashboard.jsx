import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  X,
  TrendingUp,
} from "lucide-react";

/* IMAGES */
import face1 from "../assets/images/face1.jpg";
import face2 from "../assets/images/face2.jpg";
import face3 from "../assets/images/face3.jpg";
import face4 from "../assets/images/face4.jpg";

const faces = [face1, face2, face3, face4];

/* DATA */
const stats = [
  { title: "Total Users", value: "12,847", icon: Users },
  { title: "Skin Analyses", value: "48,291", icon: ScanFace },
  { title: "AI Accuracy", value: "97.8%", icon: ShieldCheck },
  { title: "Today Active", value: "324", icon: Activity },
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

export default function AdminDashboard() {
  const [dark, setDark] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dashboardRef = useRef(null);

  /* WebSocket (ready for AI live data) */
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5000");
    ws.onmessage = (msg) => console.log("Live:", JSON.parse(msg.data));
    return () => ws.close();
  }, []);

  /* SAFE PDF EXPORT */
  const exportPDF = async () => {
    const canvas = await html2canvas(dashboardRef.current, {
      scale: 2,
      useCORS: true,
    });

    const img = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const width = 210;
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(img, "PNG", 0, 0, width, height);
    pdf.save("ai-dashboard.pdf");
  };

  return (
    <div
      ref={dashboardRef}
      className={`min-h-screen flex flex-col md:flex-row font-sans transition ${
        dark ? "bg-[#070A12] text-white" : "bg-slate-100 text-slate-900"
      }`}
    >
      {/* PREMIUM BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[180px]" />
      </div>

      {/* MOBILE TOP BAR */}
      <div className="md:hidden flex justify-between items-center px-4 py-3 border-b border-white/10 backdrop-blur-xl">
        <button onClick={() => setSidebarOpen(true)}>
          <Menu />
        </button>
        <h1 className="font-semibold tracking-wide">AI Vision Panel</h1>
        <button onClick={() => setDark(!dark)}>
          {dark ? <Sun /> : <Moon />}
        </button>
      </div>

      {/* SIDEBAR */}
      <AnimatePresence>
        {(sidebarOpen || typeof window !== "undefined") && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: sidebarOpen ? 0 : 0 }}
            exit={{ x: -300 }}
            className="fixed md:static z-50 w-72 h-full bg-black/40 backdrop-blur-2xl border-r border-white/10 p-6"
          >
            <div className="md:hidden flex justify-end">
              <button onClick={() => setSidebarOpen(false)}>
                <X />
              </button>
            </div>

            <h2 className="text-xl font-bold mb-6">Control Center</h2>

            {["Dashboard", "Users", "Analytics", "AI Model", "Reports"].map(
              (item) => (
                <div
                  key={item}
                  className="p-3 rounded-xl hover:bg-cyan-500/10 cursor-pointer transition"
                >
                  {item}
                </div>
              )
            )}
          </motion.aside>
        )}
      </AnimatePresence>

      {/* MAIN */}
      <main className="flex-1 p-4 md:p-8 max-w-[1600px] mx-auto w-full space-y-6">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
              AI Skin Intelligence Dashboard
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Real-time machine learning analytics & insights
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setDark(!dark)}
              className="p-3 rounded-xl border border-white/10"
            >
              {dark ? <Sun /> : <Moon />}
            </button>

            <button
              onClick={exportPDF}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 font-medium"
            >
              Export Report
            </button>
          </div>
        </div>

        {/* KPI STRIP */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
              >
                <Icon className="text-cyan-400 mb-2" />
                <p className="text-xs text-slate-400">{s.title}</p>
                <h2 className="text-xl md:text-2xl font-bold">{s.value}</h2>
              </motion.div>
            );
          })}
        </div>

        {/* CHARTS */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex justify-between mb-4">
              <h3 className="font-semibold">AI Growth</h3>
              <TrendingUp className="text-cyan-400" />
            </div>

            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={chartData}>
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="analyses"
                  stroke="#06b6d4"
                  fill="#06b6d4"
                  fillOpacity={0.25}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-semibold mb-4">Trend Analysis</h3>

            <ResponsiveContainer width="100%" height={280}>
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

        {/* PIE + IMAGES */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-semibold mb-4">Skin Tone Distribution</h3>

            <ResponsiveContainer width="100%" height={280}>
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

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-semibold mb-4">Recent AI Scans</h3>

            <div className="grid grid-cols-2 gap-3">
              {faces.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="rounded-xl h-28 w-full object-cover hover:scale-105 transition"
                  alt="scan"
                />
              ))}
            </div>
          </div>
        </div>

      
      </main>
    </div>
  );
}