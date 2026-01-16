import React from 'react';

const Contact = ({ t }) => {
    return (
        <section id="contact" className="py-16 section-bg">
            <div className="container mx-auto px-4 sm:px-6 text-center">
                <h2 className="text-3xl font-bold text-center mb-8 font-playfair">{t.contact}</h2>
                <p className="text-lg text-gray-600 mb-8">{t.contactText}</p>
                <div className="flex flex-col items-center">
                    <div className="flex flex-wrap justify-center gap-4 mb-6">
                        <a href="https://wa.me/380961146599" className="text-blue-600 hover:underline">WhatsApp</a>
                        <a href="mailto:[your_email]" className="text-blue-600 hover:underline">Email</a>
                        <a href="https://www.instagram.com/paris.marryme?igsh=amp4cjlscjR4YjRl" className="text-blue-600 hover:underline">Instagram</a>
                    </div>
                    <form className="w-full max-w-md" action="/submit-form" method="POST">
                        <input type="text" name="name" placeholder={t.contactForm.name} className="w-full p-3 mb-4 border rounded-lg" required />
                        <input type="email" name="email" placeholder={t.contactForm.email} className="w-full p-3 mb-4 border rounded-lg" required />
                        <textarea name="message" placeholder={t.contactForm.message} className="w-full p-3 mb-4 border rounded-lg h-32" required></textarea>
                        <button type="submit" className="bg-pink-600 text-white py-2 px-6 rounded-lg hover:bg-pink-700">{t.contactForm.submit}</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;