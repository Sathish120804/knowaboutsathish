import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { SelectedWork } from './components/work/SelectedWork';
import { Services } from './components/services/Services';
import { Toolkit } from './components/tools/Toolkit';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-bg-light dark:bg-bg-dark text-textMain-light dark:text-textMain-dark transition-colors duration-200">
        <Navbar />
        <main>
          <Hero />
          <SelectedWork />
          <Services />
          <Toolkit />
          <About />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </ThemeProvider>
  );
}

export default App;
