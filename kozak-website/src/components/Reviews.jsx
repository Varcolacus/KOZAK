import React from 'react';

const Reviews = ({ t }) => {
    const reviews = t.reviewsList || [];

    return (
        <section id="reviews" className="py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8">{t.reviews}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-lg font-semibold font-playfair">{review.name}</h3>
                                <span className="text-sm text-gray-500">{review.date}</span>
                            </div>
                            <p className="text-gray-600">{review.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
