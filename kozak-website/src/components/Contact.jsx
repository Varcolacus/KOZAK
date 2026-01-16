import React from 'react';

const Contact = ({ t }) => {
    const contactEmail = (import.meta.env.VITE_CONTACT_EMAIL || 'bogdanakozak570@gmail.com').trim();
    const emailHref = contactEmail ? `mailto:${contactEmail}` : '';
    const formspreeFormId = (import.meta.env.VITE_FORMSPREE_FORM_ID || '').trim();
    const whatsappNumber = '380961146599';
    const [form, setForm] = React.useState({ name: '', email: '', message: '' });
    const [status, setStatus] = React.useState('idle'); // idle | sending | sent | error
    const messageRef = React.useRef(null);

    React.useEffect(() => {
        const onPrefill = (e) => {
            const details = e?.detail || {};
            const packageTitle = (details.packageTitle || '').toString().trim();
            const incomingMessage = (details.message || '').toString().trim();

            const templateWithPackage = (t?.contactPrefillPackage || "Hello! I'm interested in the package: {package}").toString();
            const templateGeneric = (t?.contactPrefillGeneric || "Hello! I'm interested in a package.").toString();

            const defaultPrefill = packageTitle
                ? templateWithPackage.replace('{package}', packageTitle)
                : templateGeneric;

            const prefillLine = incomingMessage || defaultPrefill;

            setStatus('idle');
            setForm((prev) => {
                const existing = (prev.message || '').toString();
                if (existing.includes(prefillLine)) return prev;
                const nextMessage = existing
                    ? `${prefillLine}\n\n${existing}`
                    : `${prefillLine}\n\n`;
                return { ...prev, message: nextMessage };
            });

            window.setTimeout(() => {
                messageRef.current?.focus?.();
            }, 150);
        };

        window.addEventListener('kozak:contactPrefill', onPrefill);
        return () => window.removeEventListener('kozak:contactPrefill', onPrefill);
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        const text = [
            `New inquiry from KOZAK website`,
            `Name: ${form.name}`,
            `Email: ${form.email}`,
            `Message: ${form.message}`,
        ].join('\n');

        // Open WhatsApp immediately (synchronous) to reduce popup-blocking risk.
        const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
        window.open(waUrl, '_blank', 'noopener,noreferrer');

        // Send email in the background via Formspree.
        if (!formspreeFormId) {
            // No form endpoint configured: we can only open WhatsApp and offer the mailto link.
            setStatus('sent');
            setForm({ name: '', email: '', message: '' });
            return;
        }

        setStatus('sending');

        const payload = new FormData();
        payload.append('name', form.name);
        payload.append('email', form.email);
        payload.append('message', form.message);
        payload.append('_subject', 'New inquiry from KOZAK website');
        payload.append('whatsapp', `+${whatsappNumber}`);

        fetch(`https://formspree.io/f/${formspreeFormId}`, {
            method: 'POST',
            headers: { Accept: 'application/json' },
            body: payload,
        })
            .then((res) => {
                if (!res.ok) throw new Error(`Formspree error: ${res.status}`);
                setStatus('sent');
                setForm({ name: '', email: '', message: '' });
            })
            .catch(() => {
                setStatus('error');
            });
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
                    {status === 'sending' ? (
                        <p className="text-gray-700 mb-4">{t?.contactForm?.sending || 'Sending...'}</p>
                    ) : null}
                    {status === 'sent' ? (
                        <p className="text-green-700 mb-4">
                            {t?.contactForm?.sent || 'Thanks! Your message was sent by email and WhatsApp opened.'}
                        </p>
                    ) : null}
                    {status === 'error' ? (
                        <p className="text-red-700 mb-4">
                            {t?.contactForm?.error || 'WhatsApp opened, but email sending failed. Please try again or email us.'}
                        </p>
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
                            ref={messageRef}
                        />
                        <button type="submit" className="bg-pink-600 text-white py-2 px-6 rounded-lg hover:bg-pink-700">{t.contactForm.submit}</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;