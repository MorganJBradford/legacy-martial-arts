import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";
import { AppProvider } from "../AppContext";

function App() {
  return (
    <AppProvider>
      <Header />
      <MainContent />
      <Footer />
    </AppProvider>
  );
}

export default App;
