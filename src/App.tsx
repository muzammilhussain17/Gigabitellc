import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { ProductsPage } from "./pages/ProductsPage";
import { CarriersPage } from "./pages/CarriersPage";
import { AgentsPage } from "./pages/AgentsPage";
import { ContactPage } from "./pages/ContactPage";
import { AboutPage } from "./pages/AboutPage";
import { TransamericaPage } from "./pages/TransamericaPage";
import { ScrollToTop } from "./components/layout/ScrollToTop";

function AppRoutes() {
  return (
    <Routes>
      {/* ── Gigabyte LLC Public Pages ───────────────── */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/carriers" element={<CarriersPage />} />
      <Route path="/join" element={<AgentsPage />} />
      <Route path="/carriers/transmerica" element={<TransamericaPage />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* Fallback */}
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
}

export default App;
