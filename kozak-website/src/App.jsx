import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import translations from './data/translations';

function App() {
    const [language, setLanguage] = useState('en');
    const t = translations[language];

    return (
        <div>
            <Header t={t} language={language} setLanguage={setLanguage} />
            <Hero t={t} />
            <Services t={t} />
            <About t={t} />
            <Gallery t={t} />
            <FAQ t={t} />
            <Contact t={t} />
            <Footer t={t} />
        </div>
    );
}

export default App;