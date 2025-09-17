import React from "react";
import "./App.css";

// Import custom components
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Counter from "./components/Counter"; // ✅ Added Counter

function App() {
  return (
    <>
      {/* Custom Components */}
      <Header />
      <MainContent />
      <Counter /> {/* ✅ Our new counter */}
      <Footer />
    </>
  );
}
