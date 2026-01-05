const basePackagesEn = [
    {
        title: 'Package 1',
        desc: ['Planning & coordination', 'Photo/video guidance'],
        price: '€ —',
        alt: 'Proposal package 1',
    },
    {
        title: 'Package 2',
        desc: ['Location scouting', 'Timing & logistics'],
        price: '€ —',
        alt: 'Proposal package 2',
    },
    {
        title: 'Package 3',
        desc: ['Decor options', 'Coordination on-site'],
        price: '€ —',
        alt: 'Proposal package 3',
    },
    {
        title: 'Package 4',
        desc: ['Photographer add-on', 'Romantic setup'],
        price: '€ —',
        alt: 'Proposal package 4',
    },
    {
        title: 'Package 5',
        desc: ['Private location option', 'Full coordination'],
        price: '€ —',
        alt: 'Proposal package 5',
    },
    {
        title: 'Package 6',
        desc: ['Premium planning', 'Vendor coordination'],
        price: '€ —',
        alt: 'Proposal package 6',
    },
    {
        title: 'Package 7',
        desc: ['Luxury setup', 'Live coordination'],
        price: '€ —',
        alt: 'Proposal package 7',
    },
    {
        title: 'Package 8',
        desc: ['Eiffel Tower view option', 'Timing support'],
        price: '€ —',
        alt: 'Proposal package 8',
    },
    {
        title: 'Package 9',
        desc: ['Photoshoot included', 'Route planning'],
        price: '€ —',
        alt: 'Proposal package 9',
    },
    {
        title: 'Package 10',
        desc: ['Surprise coordination', 'On-site assistant'],
        price: '€ —',
        alt: 'Proposal package 10',
    },
    {
        title: 'Package 11',
        desc: ['Extended coverage', 'Backup plan'],
        price: '€ —',
        alt: 'Proposal package 11',
    },
    {
        title: 'Package 12',
        desc: ['Premium decor', 'Full-day coordination'],
        price: '€ —',
        alt: 'Proposal package 12',
    },
    {
        title: 'Package 13',
        desc: ['High-end planning', 'Vendor management'],
        price: '€ —',
        alt: 'Proposal package 13',
    },
    {
        title: 'Package 14',
        desc: ['Luxury experience', 'Priority support'],
        price: '€ —',
        alt: 'Proposal package 14',
    },
    {
        title: 'Package 15',
        desc: ['Small intimate setup'],
        price: '€ —',
        alt: 'Proposal package 15',
    },
    {
        title: 'Package 16',
        desc: ['Full premium experience', 'Coordination & styling'],
        price: '€ —',
        alt: 'Proposal package 16',
    },
    {
        title: 'Package 17',
        desc: ['Signature experience', 'All-inclusive coordination'],
        price: '€ —',
        alt: 'Proposal package 17',
    },
];

const baseFaqsEn = [
    {
        q: 'How far in advance should I book?',
        a: 'Ideally 1–2 weeks in advance, but we can sometimes arrange quicker.',
    },
    {
        q: 'Can you help pick the location and timing?',
        a: 'Yes — we suggest locations and the best timing based on your preferences.',
    },
    {
        q: 'Do you offer photographer options?',
        a: 'Yes, depending on the package and availability.',
    },
    {
        q: 'What if it rains?',
        a: 'We prepare a backup plan and can adjust timing when possible.',
    },
];

const translations = {
    en: {
        services: 'Packages',
        about: 'About us',
        gallery: 'Gallery',
        faq: 'FAQ',
        contact: 'Contact',
        reviews: 'Reviews',
        locations: 'Locations',

        title: 'KOZAK',
        subtitle: 'Romantic Marriage Proposal Planning in Paris',
        tagline: 'Make your dream proposal come true in the City of Love',
        cta: 'Plan Your Proposal',

        packages: basePackagesEn,
        faqs: baseFaqsEn,

        reviewsList: [
            {
                name: 'Anna & Mark',
                date: 'Jan 2024',
                text: 'An unforgettable evening — everything was coordinated perfectly and the surprise was flawless.',
            },
            {
                name: 'Sophia',
                date: 'Aug 2024',
                text: 'Great communication and a beautiful setup. Highly recommended!',
            },
        ],

        locationsList: [
            {
                title: 'Quai Debilly',
                text: 'A classic Eiffel Tower view spot, great for photos and a smooth surprise moment.',
                image: '/assets/images/locations/quai-debilly.jpg',
            },
            {
                title: 'Bir-Hakeim',
                text: 'Iconic bridge perspective with cinematic vibes — perfect for romantic proposals.',
                image: '/assets/images/locations/bir-hakeim.jpg',
            },
            {
                title: 'Private Location',
                text: 'A more intimate option with privacy and full coordination.',
                image: '/assets/images/locations/private-location.jpg',
            },
        ],

        aboutText:
            'We help you plan an unforgettable proposal in Paris, with clear communication and reliable coordination.',
        transparency: 'Transparency',
        transparencyText: 'Clear pricing and straightforward coordination from start to finish.',
        eiffelTrust: 'Local experience',
        eiffelTrustText: 'We know the best spots and how to make the moment smooth and stress-free.',
        multilingual: 'Multilingual',
        multilingualText: 'We can coordinate in multiple languages for your comfort.',

        contactText: 'Tell us your date, style, and budget — we will propose the best plan.',
        contactForm: {
            name: 'Name',
            email: 'Email',
            message: 'Message',
            submit: 'Send',
        },

        footer: '© 2026 KOZAK. All rights reserved.',
        privacy: 'Privacy',
        terms: 'Terms',
    },
    fr: {
        services: 'Packages',
        about: 'À propos',
        gallery: 'Galerie',
        faq: 'FAQ',
        contact: 'Contact',
        reviews: 'Avis',
        locations: 'Lieux',

        title: 'KOZAK',
        subtitle: 'Organisation de demandes en mariage romantiques à Paris',
        tagline: "Réalisez votre demande de rêve dans la Ville de l'Amour",
        cta: 'Planifier votre demande',

        packages: basePackagesEn.map((p, idx) => ({
            ...p,
            title: `Forfait ${idx + 1}`,
            alt: `Forfait demande en mariage ${idx + 1}`,
        })),
        faqs: [
            {
                q: 'Combien de temps à l’avance réserver ?',
                a: 'Idéalement 1 à 2 semaines avant, mais parfois c’est possible plus vite.',
            },
            {
                q: 'Pouvez-vous aider à choisir le lieu et le timing ?',
                a: 'Oui — nous proposons des lieux et le meilleur timing selon vos envies.',
            },
            {
                q: 'Proposez-vous un photographe ?',
                a: 'Oui, selon le forfait et les disponibilités.',
            },
            {
                q: 'Et s’il pleut ?',
                a: 'Nous prévoyons un plan B et ajustons l’horaire si possible.',
            },
        ],

        reviewsList: [
            {
                name: 'Anna & Mark',
                date: 'Jan 2024',
                text: 'Une soirée inoubliable — tout était parfaitement coordonné, surprise réussie !',
            },
            {
                name: 'Sophia',
                date: 'Août 2024',
                text: 'Très bonne communication et une installation magnifique. Merci !',
            },
        ],

        locationsList: [
            {
                title: 'Quai Debilly',
                text: 'Un spot classique avec vue Tour Eiffel, parfait pour des photos et une surprise fluide.',
                image: '/assets/images/locations/quai-debilly.jpg',
            },
            {
                title: 'Bir-Hakeim',
                text: 'Perspective iconique et ambiance cinéma — idéal pour une demande romantique.',
                image: '/assets/images/locations/bir-hakeim.jpg',
            },
            {
                title: 'Lieu privé',
                text: 'Option plus intime avec davantage de confidentialité et coordination complète.',
                image: '/assets/images/locations/private-location.jpg',
            },
        ],

        aboutText:
            'Nous vous aidons à organiser une demande inoubliable à Paris, avec une coordination fiable et une communication claire.',
        transparency: 'Transparence',
        transparencyText: 'Tarifs clairs et organisation simple du début à la fin.',
        eiffelTrust: 'Expérience locale',
        eiffelTrustText:
            'Nous connaissons les meilleurs spots et comment rendre le moment fluide et sans stress.',
        multilingual: 'Multilingue',
        multilingualText: 'Nous pouvons coordonner dans plusieurs langues selon vos besoins.',

        contactText: 'Donnez-nous la date, le style et le budget — nous vous proposerons la meilleure option.',
        contactForm: {
            name: 'Nom',
            email: 'Email',
            message: 'Message',
            submit: 'Envoyer',
        },

        footer: '© 2026 KOZAK. Tous droits réservés.',
        privacy: 'Confidentialité',
        terms: 'Conditions',
    },
    ru: {
        services: 'Пакеты',
        about: 'О нас',
        gallery: 'Галерея',
        faq: 'FAQ',
        contact: 'Контакты',
        reviews: 'Отзывы',
        locations: 'Локации',

        title: 'KOZAK',
        subtitle: 'Организация романтических предложений в Париже',
        tagline: 'Сделайте предложение мечты в городе любви',
        cta: 'Спланировать предложение',

        packages: basePackagesEn.map((p, idx) => ({
            ...p,
            title: `Пакет ${idx + 1}`,
            alt: `Пакет предложения ${idx + 1}`,
        })),
        faqs: [
            {
                q: 'За сколько времени лучше бронировать?',
                a: 'Лучше за 1–2 недели, но иногда можно организовать быстрее.',
            },
            {
                q: 'Поможете выбрать место и время?',
                a: 'Да — предложим лучшие локации и оптимальное время под ваши пожелания.',
            },
            {
                q: 'Есть ли варианты с фотографом?',
                a: 'Да, в зависимости от пакета и доступности.',
            },
            {
                q: 'Что если пойдёт дождь?',
                a: 'Мы подготовим план Б и при необходимости изменим время.',
            },
        ],

        reviewsList: [
            {
                name: 'Anna & Mark',
                date: 'Jan 2024',
                text: 'Незабываемый вечер — всё было организовано идеально, сюрприз удался!',
            },
            {
                name: 'Sophia',
                date: 'Aug 2024',
                text: 'Отличная коммуникация и красивая подготовка. Рекомендуем!',
            },
        ],

        locationsList: [
            {
                title: 'Quai Debilly',
                text: 'Классический вид на Эйфелеву башню — отлично для фото и сюрприза.',
                image: '/assets/images/locations/quai-debilly.jpg',
            },
            {
                title: 'Bir-Hakeim',
                text: 'Знаковый мост с кинематографичной атмосферой — идеально для предложения.',
                image: '/assets/images/locations/bir-hakeim.jpg',
            },
            {
                title: 'Private Location',
                text: 'Более приватный вариант с полной координацией.',
                image: '/assets/images/locations/private-location.jpg',
            },
        ],

        aboutText:
            'Мы помогаем организовать незабываемое предложение в Париже: чёткая коммуникация и надёжная координация.',
        transparency: 'Прозрачность',
        transparencyText: 'Понятные условия и координация от начала до конца.',
        eiffelTrust: 'Опыт на месте',
        eiffelTrustText:
            'Мы знаем лучшие места и поможем сделать момент спокойным и идеальным.',
        multilingual: 'Несколько языков',
        multilingualText: 'Можем координировать на нескольких языках для вашего удобства.',

        contactText: 'Напишите дату, стиль и бюджет — мы предложим лучший план.',
        contactForm: {
            name: 'Имя',
            email: 'Email',
            message: 'Сообщение',
            submit: 'Отправить',
        },

        footer: '© 2026 KOZAK. Все права защищены.',
        privacy: 'Конфиденциальность',
        terms: 'Условия',
    },
    uk: {
        services: 'Пакети',
        about: 'Про нас',
        gallery: 'Галерея',
        faq: 'FAQ',
        contact: 'Контакт',
        reviews: 'Відгуки',
        locations: 'Локації',

        title: 'KOZAK',
        subtitle: 'Організація романтичних пропозицій у Парижі',
        tagline: 'Зробіть пропозицію мрії у місті кохання',
        cta: 'Спланувати пропозицію',

        packages: basePackagesEn.map((p, idx) => ({
            ...p,
            title: `Пакет ${idx + 1}`,
            alt: `Пакет пропозиції ${idx + 1}`,
        })),
        faqs: [
            {
                q: 'За скільки часу краще бронювати?',
                a: 'Найкраще за 1–2 тижні, але інколи можемо організувати швидше.',
            },
            {
                q: 'Допоможете обрати місце та час?',
                a: 'Так — запропонуємо локації та найкращий таймінг під ваші побажання.',
            },
            {
                q: 'Чи є варіанти з фотографом?',
                a: 'Так, залежно від пакета та доступності.',
            },
            {
                q: 'Що якщо буде дощ?',
                a: 'Ми підготуємо план Б і за можливості скоригуємо час.',
            },
        ],

        reviewsList: [
            {
                name: 'Anna & Mark',
                date: 'Jan 2024',
                text: 'Незабутній вечір — усе було організовано ідеально!',
            },
            {
                name: 'Sophia',
                date: 'Aug 2024',
                text: 'Чудова комунікація та дуже красива підготовка. Рекомендуємо!',
            },
        ],

        locationsList: [
            {
                title: 'Quai Debilly',
                text: 'Класичний вид на Ейфелеву вежу — ідеально для фото та сюрпризу.',
                image: '/assets/images/locations/quai-debilly.jpg',
            },
            {
                title: 'Bir-Hakeim',
                text: 'Знаковий міст із атмосферою кіно — чудово для романтичної пропозиції.',
                image: '/assets/images/locations/bir-hakeim.jpg',
            },
            {
                title: 'Приватна локація',
                text: 'Більш приватний варіант із повною координацією.',
                image: '/assets/images/locations/private-location.jpg',
            },
        ],

        aboutText:
            'Ми допомагаємо організувати незабутню пропозицію у Парижі: чітка комунікація та надійна координація.',
        transparency: 'Прозорість',
        transparencyText: 'Зрозумілі умови та координація від початку до кінця.',
        eiffelTrust: 'Локальний досвід',
        eiffelTrustText: 'Ми знаємо найкращі місця та допоможемо зробити момент ідеальним.',
        multilingual: 'Підтримка мов',
        multilingualText: 'Можемо координувати кількома мовами для вашої зручності.',

        contactText: 'Напишіть дату, стиль і бюджет — ми запропонуємо найкращий план.',
        contactForm: {
            name: "Ім'я",
            email: 'Email',
            message: 'Повідомлення',
            submit: 'Надіслати',
        },

        footer: '© 2026 KOZAK. Усі права захищено.',
        privacy: 'Конфіденційність',
        terms: 'Умови',
    },
};

export default translations;