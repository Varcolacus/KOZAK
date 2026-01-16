import React from 'react';

const Contact = ({ t }) => {
    const contactEmail = (import.meta.env.VITE_CONTACT_EMAIL || '').trim();
    const emailHref = contactEmail ? `mailto:${contactEmail}` : '';
    const whatsappNumber = '380961146599';
    const [form, setForm] = React.useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = React.useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        const text = [
            `New inquiry from KOZAK website`,
            `Name: ${form.name}`,
            `Email: ${form.email}`,
            `Message: ${form.message}`,
        ].join('\n');

        const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
        window.open(waUrl, '_blank', 'noopener,noreferrer');
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-16 section-bg">
            <div className="container mx-auto px-4 sm:px-6 text-center">
                <h2 className="text-3xl font-bold text-center mb-8 font-playfair">{t.contact}</h2>
                <p className="text-lg text-gray-600 mb-8">{t.contactText}</p>
                <div className="flex flex-col items-center">
                    <div className="flex flex-wrap justify-center gap-4 mb-6">
                        <a href="https://wa.me/380961146599" className="text-blue-600 hover:underline">WhatsApp</a>
                        {emailHref ? (
                            <a href={emailHref} className="text-blue-600 hover:underline">Email</a>
                        ) : null}
                        <a href="https://www.instagram.com/proposal.in.paris.kozak?igsh=MWswajdwbmhmdDl2bw==" className="text-blue-600 hover:underline">Instagram</a>
                    </div>
                    {submitted ? (
                        <p className="text-green-700 mb-4">Thanks! WhatsApp opened with your message.</p>
                    ) : null}
                    <form className="w-full max-w-md" onSubmit={onSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder={t.contactForm.name}
                            className="w-full p-3 mb-4 border rounded-lg"
                            required
                            value={form.name}
                            onChange={(e) => setForm((v) => ({ ...v, name: e.target.value }))}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder={t.contactForm.email}
                            className="w-full p-3 mb-4 border rounded-lg"
                            required
                            value={form.email}
                            onChange={(e) => setForm((v) => ({ ...v, email: e.target.value }))}
                        />
                        <textarea
                            name="message"
                            placeholder={t.contactForm.message}
                            className="w-full p-3 mb-4 border rounded-lg h-32"
                            required
                            value={form.message}
                            onChange={(e) => setForm((v) => ({ ...v, message: e.target.value }))}
                        />
                        <button type="submit" className="bg-pink-600 text-white py-2 px-6 rounded-lg hover:bg-pink-700">{t.contactForm.submit}</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;