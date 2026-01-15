import React from 'react';

const Footer = ({ t }) => {
    return (
        <footer className="py-6 bg-gray-800 text-white text-center">
            <p className="px-4 text-sm leading-relaxed">
                {t.footer} | <a href="/privacy" className="hover:underline">{t.privacy}</a> |{' '}
                <a href="/terms" className="hover:underline">{t.terms}</a>
            </p>
        </footer>
    );
};

export default Footer;