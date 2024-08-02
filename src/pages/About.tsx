import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <section id="about" className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-primary mb-8 text-center">About Bonsai Tea</h1>
                <img
                    src="/images/team-photo.jpg"
                    alt="Bonsai Tea Team"
                    className="w-full h-auto rounded-lg mb-8 shadow-lg"
                />
                <div className="space-y-6 text-gray-700">
                    <p>
                        In 2022, Bonsai Tea began as a small dream shared by a group of friends who wanted to bring the artistry and tranquility of bonsai to the world of tea. Like the careful pruning and nurturing of a bonsai tree, we started small, tending to every detail with patience and love.
                    </p>
                    <p>
                        Our journey hasn't always been smooth. In the early days, we faced challenges that tested our resolve. There were late nights perfecting recipes, early mornings setting up shop, and countless cups of tea shared as we brainstormed and problem-solved together. But with each obstacle, our roots grew deeper, and our branches reached higher.
                    </p>
                    <p>
                        As word spread about our unique blends and welcoming atmosphere, our little tea shop began to flourish. Customers became friends, and friends became family. We've watched as first-time visitors became regulars, bringing their friends and family to share in the experience. Each familiar face that walks through our door reminds us of why we started this journey.
                    </p>
                    <p>
                        Our team, which we affectionately call the "Bonsai Tea Troops," has grown from a handful of dreamers to a diverse group of passionate individuals. Each member brings their unique flavor to our blend, much like the carefully selected ingredients in our teas. We've celebrated birthdays, comforted each other through losses, and cheered each other on through personal and professional milestones.
                    </p>
                    <p>
                        As we've grown, we've remained true to our roots. We still source our ingredients with the same care, craft each drink with the same attention to detail, and greet each customer with the same warmth as we did on day one. Our commitment to quality and community has never wavered.
                    </p>
                    <p>
                        Looking back, we're filled with gratitude for every person who has been part of our story - from our dedicated staff to our loyal customers. Each of you has helped shape Bonsai Tea into what it is today: not just a tea shop, but a home away from home for many.
                    </p>
                    <p>
                        As we look to the future, we're excited to continue growing, learning, and serving our community. Like a well-tended bonsai, we believe that with care, patience, and love, beautiful things can flourish in even the smallest spaces.
                    </p>
                    <p>
                        Thank you for being part of our journey. We invite you to come, sip, and grow with us.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;