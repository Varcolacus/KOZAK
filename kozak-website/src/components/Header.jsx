import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';

const Header = ({ t, language, setLanguage }) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    return (
        <header className="fixed top-0 w-full bg-white shadow-md z-50">
            <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between sm:grid sm:grid-cols-3 sm:items-center relative">
                {/* Left: language + icons */}
                <div className="flex items-center space-x-2 sm:space-x-4 justify-start">
                    <div>
                        <LanguageSwitcher language={language} setLanguage={setLanguage} />
                    </div>

                    {/* Desktop icons */}
                    <div className="hidden sm:flex items-center space-x-2">
                        <a
                            href="mailto:[your_email]"
                            aria-label="Email"
                            title="Email"
                            className="contact-icon inline-flex items-center bg-white border border-gray-200 text-gray-800 px-2 py-1 rounded-lg shadow hover:bg-gray-50"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M3 8.5v7A2.5 2.5 0 0 0 5.5 18h13A2.5 2.5 0 0 0 21 15.5v-7A2.5 2.5 0 0 0 18.5 6h-13A2.5 2.5 0 0 0 3 8.5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21 8.5l-9 6-9-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="sr-only">Email</span>
                        </a>
                        <a
                            href="https://wa.me/[your_whatsapp]"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            title="WhatsApp"
                            className="contact-icon inline-flex items-center bg-green-500 text-white px-2 py-1 rounded-lg shadow hover:bg-green-600 transition-transform hover:scale-105"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <span className="sr-only">WhatsApp</span>
                        </a>
                        <a
                            href="https://www.instagram.com/paris.marryme"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            title="Instagram"
                            className="contact-icon inline-flex items-center bg-pink-500 text-white px-2 py-1 rounded-lg shadow hover:bg-pink-600"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.2" />
                                <path d="M8.2 8.2h0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                                <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a
                            href="https://www.facebook.com/[your_facebook]"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            title="Facebook"
                            className="contact-icon inline-flex items-center bg-blue-600 text-white px-2 py-1 rounded-lg shadow hover:bg-blue-700"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v7h4v-7h3l1-4h-4V6a1 1 0 0 1 1-1h3V2z" fill="currentColor" />
                            </svg>
                            <span className="sr-only">Facebook</span>
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="sm:hidden">
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-expanded={mobileOpen}
                            aria-controls="mobile-contact-menu"
                            className="p-2 rounded-md hover:bg-gray-100"
                        >
                            {!mobileOpen ? (
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Center: brand */}
                <div className="flex justify-center">
                    <a href="#hero-section" className="brand text-2xl font-bold text-gray-800 font-playfair">KOZAK</a>
                </div>

                {/* Right: navigation links */}
                <div className="flex items-center justify-end space-x-4 hidden sm:flex">
                    <a href="#services" className="nav-link text-gray-600 hover:text-gray-800 whitespace-nowrap">{t.services}</a>
                    <a href="#about" className="nav-link text-gray-600 hover:text-gray-800 whitespace-nowrap">{t.about}</a>
                    <a href="#gallery" className="nav-link text-gray-600 hover:text-gray-800 whitespace-nowrap">{t.gallery}</a>
                    <a href="#reviews" className="nav-link text-gray-600 hover:text-gray-800 whitespace-nowrap">{t.reviews}</a>
                    <a href="#locations" className="nav-link text-gray-600 hover:text-gray-800 whitespace-nowrap">{t.locations}</a>
                    <a href="#faq" className="nav-link text-gray-600 hover:text-gray-800 whitespace-nowrap">{t.faq}</a>
                    <a href="#contact" className="nav-link text-gray-600 hover:text-gray-800 whitespace-nowrap">{t.contact}</a>
                </div>
            </nav>

            {/* Mobile Navigation Drawer */}
            {mobileOpen && (
                <div id="mobile-contact-menu" className="sm:hidden bg-white border-t shadow-lg">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex flex-col space-y-3">
                            <a href="#services" onClick={() => setMobileOpen(false)} className="text-gray-700 hover:text-pink-600 py-2">{t.services}</a>
                            <a href="#about" onClick={() => setMobileOpen(false)} className="text-gray-700 hover:text-pink-600 py-2">{t.about}</a>
                            <a href="#gallery" onClick={() => setMobileOpen(false)} className="text-gray-700 hover:text-pink-600 py-2">{t.gallery}</a>
                            <a href="#reviews" onClick={() => setMobileOpen(false)} className="text-gray-700 hover:text-pink-600 py-2">{t.reviews}</a>
                            <a href="#locations" onClick={() => setMobileOpen(false)} className="text-gray-700 hover:text-pink-600 py-2">{t.locations}</a>
                            <a href="#faq" onClick={() => setMobileOpen(false)} className="text-gray-700 hover:text-pink-600 py-2">{t.faq}</a>
                            <a href="#contact" onClick={() => setMobileOpen(false)} className="text-gray-700 hover:text-pink-600 py-2">{t.contact}</a>
                            <hr className="my-2" />
                            <div className="flex space-x-3 pt-2">
                                <a href="mailto:[your_email]" aria-label="Email" className="inline-flex items-center bg-white border border-gray-200 text-gray-800 px-3 py-2 rounded-lg shadow hover:bg-gray-50">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path d="M3 8.5v7A2.5 2.5 0 0 0 5.5 18h13A2.5 2.5 0 0 0 21 15.5v-7A2.5 2.5 0 0 0 18.5 6h-13A2.5 2.5 0 0 0 3 8.5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M21 8.5l-9 6-9-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                                <a href="https://wa.me/[your_whatsapp]" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="inline-flex items-center bg-green-500 text-white px-3 py-2 rounded-lg shadow hover:bg-green-600 transition-transform hover:scale-105">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/paris.marryme" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex items-center bg-pink-500 text-white px-3 py-2 rounded-lg shadow hover:bg-pink-600">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.2" />
                                        <path d="M8.2 8.2h0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                                        <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;