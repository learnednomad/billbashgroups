import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import LeadershipPage from "@/pages/LeadershipPage";
import ServicesPage from "@/pages/ServicesPage";
import BusinessesOverviewPage from "@/pages/BusinessesOverviewPage";
import BusinessShowcasePage from "@/pages/BusinessShowcasePage";
import RealEstatePage from "@/pages/RealEstatePage";
import TruckImportationPage from "@/pages/TruckImportationPage";
import FarmingPage from "@/pages/FarmingPage";
import SparePartsPage from "@/pages/SparePartsPage";
import ContactPage from "@/pages/ContactPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import TermsPage from "@/pages/TermsPage";
import ScrollToTop from "@/components/ScrollToTop";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import VehicleListingsPage from "@/pages/VehiclesListingPage.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      retry: 2,
    },
  },
});

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow ">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/about/leadership" element={<LeadershipPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/businesses" element={<BusinessesOverviewPage />} />
                <Route path="/businesses/real-estate" element={<RealEstatePage />} />
                <Route path="/businesses/truck-importation" element={<TruckImportationPage />} />
                <Route path="/businesses/farming" element={<FarmingPage />} />
                <Route path="/businesses/spare-parts" element={<SparePartsPage />} />
                <Route path="/businesses/:segment" element={<BusinessShowcasePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
                <Route path="/vehicle-listings" element={<VehicleListingsPage />} />

              </Routes>
            </main>
            <Footer />
            <Toaster />
            <CookieConsentBanner />
          </div>
        </Router>
      </QueryClientProvider>
  );
}

export default App;