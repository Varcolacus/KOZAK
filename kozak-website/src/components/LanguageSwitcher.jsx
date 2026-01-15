import React from 'react';

const LanguageSwitcher = ({ language, setLanguage }) => {
    const languages = [
        { code: 'en', label: 'English' },
        { code: 'fr', label: 'Français' },
        { code: 'uk', label: 'Українська' },
        { code: 'ru', label: 'Русский' },
    ];

    return (
        <div className="language-switcher inline-flex items-center">
            <label htmlFor="site-language" className="sr-only">Language</label>
            <select
                id="site-language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="border rounded px-2 py-1 bg-white text-sm w-24 sm:w-auto"
            >
                {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                        {lang.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSwitcher;
