import React, { useEffect, useRef, useState } from 'react';

const Hero = ({ t }) => {
    const videoRef = useRef(null);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    
    const videos = [
        '/assets/videos/2509249934464396961.MP4',
        '/assets/videos/7722248337195238409.MP4',
        '/assets/videos/IMG_3325.MP4'
    ];

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleVideoEnd = () => {
            // Passer à la vidéo suivante et boucler sur la première après la dernière
            setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        };

        video.addEventListener('ended', handleVideoEnd);
        
        return () => {
            video.removeEventListener('ended', handleVideoEnd);
        };
    }, [videos.length]);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.load();
            // Tentative de lecture automatique
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(err => console.log('Autoplay prevented:', err));
            }
        }
    }, [currentVideoIndex]);

    return (
        <section id="hero-section" className="hero-bg h-screen flex items-center justify-center text-center text-white relative overflow-hidden">
            <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                muted
                playsInline
            >
                <source src={videos[currentVideoIndex]} type="video/mp4" />
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
            <div className="relative z-10 bg-black bg-opacity-50 p-10 rounded-lg">
                <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-4">{t.title}</h1>
                <p className="text-xl md:text-2xl mb-6">{t.subtitle}</p>
                <p className="text-lg">{t.tagline}</p>
                <a href="#contact" className="mt-6 inline-block bg-pink-600 text-white py-2 px-6 rounded-full hover:bg-pink-700">{t.cta}</a>
            </div>
        </section>
    );
};

export default Hero;