import React from 'react';
import { scrollToSection } from '../utils/scrollToSection';

const PROFILE_IMAGE = `${process.env.PUBLIC_URL}/images/abdulrahman-chohan-portrait.jpg`;
const PROFILE_FALLBACK = 'https://via.placeholder.com/760x1024/0b1219/e6efff?text=Abdulrahman+Chohan';

const About = () => {
  const handleImageError = (event) => {
    if (event.currentTarget.src !== PROFILE_FALLBACK) {
      event.currentTarget.src = PROFILE_FALLBACK;
    }
  };

  return (
    <section id="about" className="py-20 sm:py-24 bg-[#07060a] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          {/* Left: image card with badge */}
          <div className="relative flex justify-center lg:justify-start mt-8 lg:mt-0" data-reveal>
            <div className="relative">
              {/* image container */}
              <div className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-96 h-[400px] sm:h-[430px] md:h-[520px] rounded-[30px] p-3 portrait-shell">
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-black/40 flex items-center justify-center">
                  <img
                    src={PROFILE_IMAGE}
                    onError={handleImageError}
                    alt="Abdulrahman Chohan portrait for the portfolio about section"
                    className="w-full h-full object-cover mx-auto portrait-image"
                  />
                </div>
              </div>

              {/* circular badge */}
              <div className="absolute -top-8 -left-2 sm:-top-6 sm:-left-6 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center rounded-full" aria-hidden>
                <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-600 to-pink-500 p-[6px] shadow-lg">
                  <div className="w-full h-full rounded-full bg-[#07060a] flex flex-col items-center justify-center text-center">
                    <span className="text-white font-extrabold text-base sm:text-lg md:text-xl">3.5+</span>
                    <span className="text-[10px] sm:text-xs text-white/70 leading-tight">Years<br />Deep Building</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: text content */}
          <div className="pt-2 sm:pt-6 lg:pt-0 text-center lg:text-left" data-reveal data-reveal-delay="120">
            <div className="inline-block mb-4">
              <span className="text-sm section-chip px-3 py-1 rounded-full">About Me</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Independent Engineer,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Enterprise-Grade Output</span>
            </h2>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Over the last 3.5+ years, I have self-taught and executed advanced engineering systems end-to-end—shipping scalable APIs, architecting resilient SaaS platforms, and deploying AI features that deliver measurable business impact in production.
            </p>

            <p className="text-gray-300 mb-8 leading-relaxed">
              My specialization sits at the intersection of backend architecture and applied AI: RAG pipelines, semantic search, queue-driven automation, and Shopify SaaS operations built for high-volume workflows. I operate independently, move fast, and focus on technical output that compounds client revenue, reliability, and speed.
            </p>

            <div>
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center justify-center gap-3 px-5 py-3 rounded-full font-medium transition btn-primary w-full sm:w-auto"
              >
                View Flagship Builds
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14" stroke="#07060a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 5l7 7-7 7" stroke="#07060a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
