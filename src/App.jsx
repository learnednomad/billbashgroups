
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import RealEstatePage from "@/pages/RealEstatePage";
import TruckImportationPage from "@/pages/TruckImportationPage";
import FarmingPage from "@/pages/FarmingPage";
import SparePartsPage from "@/pages/SparePartsPage";
import ContactPage from "@/pages/ContactPage"; 
import ScrollToTop from "@/components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/real-estate" element={<RealEstatePage />} />
            <Route path="/truck-importation" element={<TruckImportationPage />} />
            <Route path="/farming" element={<FarmingPage />} />
            <Route path="/spare-parts" element={<SparePartsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
