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

export default function AdminDashboard() {
  const [dark, setDark] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const dashboardRef = useRef(null);

  /* RESPONSIVE DETECTION (FIXED) */
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  /* AUTO CLOSE SIDEBAR ON DESKTOP */
  useEffect(() => {
    if (!isMobile) setSidebarOpen(false);
  }, [isMobile]);

  /* CLOSE SIDEBAR */
  const closeSidebar = () => setSidebarOpen(false);

  /* PDF EXPORT */
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
    pdf.save("dashboard.pdf");
  };

  return (
    <div
      ref={dashboardRef}
      className={`min-h-screen flex flex-col md:flex-row transition-all duration-300 ${
        dark ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-900"
      }`}
    >
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 md:w-[500px] h-72 md:h-[500px] bg-cyan-500/20 blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-72 md:w-[500px] h-72 md:h-[500px] bg-purple-500/20 blur-[160px]" />
      </div>

      {/* MOBILE TOP BAR */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-white/10 backdrop-blur-xl">
        <button onClick={() => setSidebarOpen(true)}>
          <Menu />
        </button>

        <h1 className="font-semibold">AI Dashboard</h1>

        <button onClick={() => setDark(!dark)}>
          {dark ? <Sun /> : <Moon />}
        </button>
      </div>

      {/* OVERLAY */}
      <AnimatePresence>
        {sidebarOpen && isMobile && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeSidebar}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* SIDEBAR (FIXED) */}
      <motion.aside
        initial={false}
        animate={{
          x: isMobile ? (sidebarOpen ? 0 : -320) : 0,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 25 }}
        className="fixed md:static z-50 w-72 h-full bg-black/40 backdrop-blur-xl border-r border-white/10 p-5"
      >
        {/* CLOSE BUTTON (MOBILE) */}
        <div className="md:hidden flex justify-end mb-4">
          <button onClick={closeSidebar}>
            <X />
          </button>
        </div>

        <h2 className="text-xl font-bold mb-6">AI Panel</h2>

        {["Dashboard", "Users", "Analytics", "AI Model", "Reports"].map(
          (item) => (
            <div
              key={item}
              onClick={closeSidebar}
              className="p-3 my-2 rounded-xl hover:bg-cyan-500/10 cursor-pointer transition"
            >
              {item}
            </div>
          )
        )}
      </motion.aside>

      {/* MAIN */}
      <main className="flex-1 p-4 md:p-6 space-y-6 overflow-x-hidden">
        {/* HEADER */}
        <div className="hidden md:flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">
              AI Skin Tone Dashboard
            </h1>
            <p className="text-slate-400">
              Real-time AI analytics system
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
              className="px-4 py-2 bg-cyan-500 rounded-xl font-medium"
            >
              Export PDF
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
              >
                <Icon className="text-cyan-400 mb-2" />
                <p className="text-sm text-slate-400">{s.title}</p>
                <h2 className="text-2xl font-bold">{s.value}</h2>
              </motion.div>
            );
          })}
        </div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="mb-4 font-semibold">Growth</h3>
            <ResponsiveContainer width="100%" height={260}>
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

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="mb-4 font-semibold">Trend</h3>
            <ResponsiveContainer width="100%" height={260}>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="mb-4 font-semibold">Distribution</h3>
            <ResponsiveContainer width="100%" height={260}>
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
            <h3 className="mb-4 font-semibold">Recent Uploads</h3>
            <div className="grid grid-cols-2 gap-3">
              {faces.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="rounded-xl h-24 md:h-28 w-full object-cover hover:scale-105 transition"
                  alt="face"
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}