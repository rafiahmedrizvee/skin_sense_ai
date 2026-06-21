import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50">
     <ScrollToTop />
    <AppRoutes />
  </div>;
}

export default App;