import React from 'react';
import { scrollToSection } from '../utils/scrollToSection';

const PROFILE_IMAGE = `${process.env.PUBLIC_URL}/images/abdulrahman-chohan-portrait.jpg`;
const PROFILE_FALLBACK = 'https://via.placeholder.com/760x1024/0b1219/e6efff?text=Abdulrahman+Chohan';
const TRUST_BADGES = ['AI Engineering', 'RAG Pipelines', 'Shopify SaaS', 'Laravel', 'FastAPI', 'React'];

const Hero = () => {
  const handleImageError = (event) => {
    if (event.currentTarget.src !== PROFILE_FALLBACK) {
      event.currentTarget.src = PROFILE_FALLBACK;
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden text-white pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
      <div aria-hidden className="absolute inset-0 hero-mesh" />

      <div aria-hidden className="absolute inset-x-0 top-[18%] hidden lg:block pointer-events-none select-none">
        <p className="hero-faint-text">
          AI FULL-STACK ENGINEER AI FULL-STACK ENGINEER
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left px-4 sm:px-6 lg:px-0" data-reveal>
            <span className="inline-flex section-chip px-3 py-1 rounded-full text-sm">
              Trusted By Founders In US and Europe
            </span>

            <h1 className="mt-7 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.05] tracking-[-0.03em]">
              AI &amp; Full-Stack Engineer
              <span className="block mt-5 text-base sm:text-lg md:text-xl text-cyan-200/95 font-semibold tracking-normal">
                Building high-performance SaaS platforms, custom Shopify applications, and intelligent RAG pipelines.
              </span>
            </h1>

            <p className="mt-7 text-gray-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0">
              I ship enterprise-grade products where AI capabilities, backend resilience, and product experience all work as one system.
            </p>

            <div className="mt-10 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 font-semibold btn-primary w-full md:w-auto"
              >
                Start Your Project
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 font-semibold btn-secondary w-full md:w-auto"
              >
                View Featured Work
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 justify-center lg:justify-start">
              {TRUST_BADGES.map((item) => (
                <span key={item} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/14 text-white/90">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end mt-2 sm:mt-4 lg:mt-0" data-reveal data-reveal-delay="130">
            <div className="relative">
              <div className="portrait-shell w-[min(100%,292px)] h-[400px] sm:w-[292px] sm:h-[408px] md:w-[336px] md:h-[480px] lg:w-[376px] lg:h-[540px]">
                <img
                  src={PROFILE_IMAGE}
                  onError={handleImageError}
                  alt="Abdulrahman Chohan portrait for AI and full-stack portfolio"
                  className="portrait-image"
                />
              </div>

              <div className="absolute left-2 -bottom-4 sm:-left-6 sm:-bottom-6 rounded-2xl border border-white/15 bg-[#0b0f14]/90 backdrop-blur-md px-4 py-3 shadow-2xl max-w-[220px] sm:max-w-none">
                <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200/80">Availability</p>
                <p className="text-sm mt-1 text-white font-semibold">Open for May and June projects</p>
              </div>

              <div
                className="absolute -inset-8 -z-10 opacity-60 blur-3xl"
                style={{ background: 'radial-gradient(circle at 30% 20%, rgba(24, 220, 206, 0.45), transparent 55%)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
