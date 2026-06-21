import { useRef, useState, useEffect } from "react";
import { analyzeSkin } from "../services/api";
import {
  UploadCloud,
  ScanFace,
  Sparkles,
  Loader2,
  Camera,
  X,
} from "lucide-react";
import SkinAnalysisShowcase from "../components/home/SkinAnalysisShowcase";
import About from "./About";

const steps = [
  "Detecting Face",
  "Scanning Skin Region",
  "Analyzing Tone",
  "Classifying Skin Type",
  "Generating Report",
];

const Analyze = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [stream, setStream] = useState(null);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [step, setStep] = useState(0);

  /* ---------------- AI PIPELINE ANIMATION ---------------- */
  useEffect(() => {
    if (!loading) {
      setStep(0);
      return;
    }

    const interval = setInterval(() => {
      setStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 700);

    return () => clearInterval(interval);
  }, [loading]);

  /* ---------------- CAMERA ---------------- */
  const startCamera = async () => {
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user" },
    });

    videoRef.current.srcObject = mediaStream;
    await videoRef.current.play();

    setStream(mediaStream);
    setResult(null);
  };

  const stopCamera = () => {
    if (stream) stream.getTracks().forEach((t) => t.stop());
    setStream(null);
  };

  /* ---------------- FACE BOX (SIMULATED - READY FOR ML) ---------------- */
  const drawFaceBox = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");

    ctx.drawImage(video, 0, 0);

    // 🔥 Simulated face detection box (replace with AI model later)
    const box = {
      x: canvas.width * 0.3,
      y: canvas.height * 0.2,
      w: canvas.width * 0.4,
      h: canvas.height * 0.5,
    };

    ctx.strokeStyle = "#00ff88";
    ctx.lineWidth = 3;
    ctx.strokeRect(box.x, box.y, box.w, box.h);

    ctx.fillStyle = "#00ff88";
    ctx.font = "16px Arial";
    ctx.fillText("Face Detected", box.x, box.y - 10);

    const dataUrl = canvas.toDataURL("image/png");

    setPreview(dataUrl);
    setImage(dataUrl);
    stopCamera();
  };

  /* ---------------- UPLOAD ---------------- */
  const handleUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);

    setImage(file);
    setPreview(url);
    setResult(null);
  };

  /* ---------------- ANALYZE ---------------- */
  const handleAnalyze = async () => {
    if (!image) return;

    setLoading(true);
    setResult(null);

    try {
      const data = await analyzeSkin(image);
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const resetAll = () => {
    stopCamera();
    setImage(null);
    setPreview(null);
    setResult(null);
    setStep(0);
  };

  return (

    <section className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black text-white px-4 py-16">
         
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20">
            <Sparkles size={16} className="text-amber-400" />
            AI Dermatology Engine
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mt-5">
            Real-Time Skin Intelligence
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h2 className="flex items-center gap-2 text-xl mb-4">
              <ScanFace className="text-amber-400" />
              Input
            </h2>

            {/* CAMERA */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={startCamera}
                className="flex-1 bg-amber-500 text-black py-2 rounded-xl font-bold"
              >
                Open Camera
              </button>

              <button
                onClick={resetAll}
                className="px-4 bg-white/10 rounded-xl"
              >
                <X />
              </button>
            </div>

            {stream && (
              <div className="relative">
                <video ref={videoRef} className="w-full rounded-2xl" />

                {/* 🟢 Real-time scanning animation */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="scan-line" />
                </div>

                <button
                  onClick={drawFaceBox}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-amber-500 text-black px-4 py-2 rounded-full"
                >
                  Capture + Detect Face
                </button>
              </div>
            )}

            <canvas ref={canvasRef} className="hidden" />

            {/* UPLOAD */}
            <label className="block mt-4 cursor-pointer">
              <div className="border-2 border-dashed border-white/20 rounded-2xl p-6 text-center">
                {preview ? (
                  <img
                    src={preview}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                ) : (
                  <>
                    <UploadCloud className="mx-auto text-amber-400" />
                    <p className="text-gray-400 mt-2">Upload Image</p>
                  </>
                )}
              </div>

              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleUpload}
              />
            </label>

            {/* ANALYZE */}
            <button
              onClick={handleAnalyze}
              disabled={!image || loading}
              className="w-full mt-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold rounded-xl"
            >
              {loading ? (
                <span className="flex justify-center gap-2">
                  <Loader2 className="animate-spin" />
                  Analyzing...
                </span>
              ) : (
                "Generate AI Report"
              )}
            </button>
          </div>

          {/* RIGHT */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h2 className="text-xl mb-4">AI Pipeline</h2>

            {/* PIPELINE UI */}
            <div className="space-y-2 mb-6">
              {steps.map((s, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      i <= step ? "bg-green-400" : "bg-gray-600"
                    }`}
                  />
                  <span className="text-sm text-gray-300">{s}</span>
                </div>
              ))}
            </div>

            {/* RESULT */}
            {!result && !loading && (
              <div className="text-gray-500 text-center py-20">
                Awaiting AI analysis...
              </div>
            )}

            {loading && (
              <div className="text-amber-400 text-center py-20 animate-pulse">
                AI Processing Face Data...
              </div>
            )}

            {result && (
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-xl">
                  <p>Skin Tone</p>
                  <p className="text-amber-400 text-xl">{result.tone}</p>
                </div>

                <div className="p-4 bg-white/5 rounded-xl">
                  <p>Skin Type</p>
                  <p className="text-blue-400 text-xl">{result.type}</p>
                </div>

                <div className="p-4 bg-white/5 rounded-xl">
                  <p>Confidence</p>
                  <p className="text-green-400 text-xl">
                    {result.confidence}%
                  </p>
                </div>

                {/* CARE */}
                <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                  <p className="font-bold mb-2">Care Plan</p>
                  <p className="text-sm text-gray-300">
                    {result.advice}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* SCAN ANIMATION CSS */}
      <style>{`
        .scan-line {
          position: absolute;
          width: 100%;
          height: 2px;
          background: linear-gradient(to right, transparent, #fbbf24, transparent);
          animation: scan 2s linear infinite;
        }

        @keyframes scan {
          0% { top: 0%; }
          100% { top: 100%; }
        }
      `}</style>
      <div>
        <SkinAnalysisShowcase/>
      </div>
      <About/>
    </section>
  );
};

export default Analyze;