import React from 'react';

const LanguageSwitcher = ({ language, setLanguage }) => {
    return (
        <div className="flex space-x-2">
            <button
                onClick={() => setLanguage('fr')}
                className={`px-3 py-1 rounded ${
                    language === 'fr'
                        ? 'bg-pink-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
                FR
            </button>
            <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded ${
                    language === 'en'
                        ? 'bg-pink-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
                EN
            </button>
            <button
                onClick={() => setLanguage('ru')}
                className={`px-3 py-1 rounded ${
                    language === 'ru'
                        ? 'bg-pink-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
                RU
            </button>
        </div>
    );
};

export default LanguageSwitcher;
