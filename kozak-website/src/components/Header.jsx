import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';

const Header = ({ t, language, setLanguage }) => {
    return (
        <header className="fixed top-0 w-full bg-white shadow-md z-50">
            <nav className="container mx-auto py-4 px-6 flex justify-center items-center">
                <div className="flex items-center">
                    <div className="mr-8">
                        <LanguageSwitcher language={language} setLanguage={setLanguage} />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800 font-playfair mx-auto">KOZAK</h1>
                    <div className="ml-8 flex space-x-6">
                        <a href="#services" className="nav-link text-gray-600 hover:text-gray-800">{t.services}</a>
                        <a href="#about" className="nav-link text-gray-600 hover:text-gray-800">{t.about}</a>
                        <a href="#gallery" className="nav-link text-gray-600 hover:text-gray-800">{t.gallery}</a>
                        <a href="#faq" className="nav-link text-gray-600 hover:text-gray-800">{t.faq}</a>
                        <a href="#contact" className="nav-link text-gray-600 hover:text-gray-800">{t.contact}</a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;