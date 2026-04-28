import React from 'react';

const PROJECTS = [
  {
    id: 'clip-matters',
    title: 'Clip Matters (AI Video Intelligence Platform)',
    summary: 'AI-powered video intelligence platform with semantic search, speaker identification, and automated transcription powered by sub-500ms vector retrieval.',
    technologies: ['Laravel 11', 'React 18', 'Qdrant', 'AssemblyAI', 'FastAPI'],
    github: 'https://github.com',
    live: 'https://example.com',
    tones: ['#14e0d6', '#1178b6']
  },
  {
    id: 'pod-fulfillment-saas',
    title: 'POD Fulfillment SaaS',
    summary: 'Multi-vendor print-on-demand Shopify app featuring automated fulfillment tracking, usage-based billing, and 19 Redis-backed async jobs for webhook scale.',
    technologies: ['Laravel 12', 'React 18', 'Shopify API', 'Redis', 'Zakeke'],
    github: 'https://github.com',
    live: 'https://example.com',
    tones: ['#00f0d2', '#2d5cff']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 sm:py-24 bg-[#07060a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16" data-reveal>
          <div className="inline-block mb-4">
            <span className="text-sm section-chip px-3 py-1 rounded-full">Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            Production-ready systems designed for measurable business outcomes across ecommerce and SaaS products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {PROJECTS.map((project, index) => (
            <article
              key={project.id}
              data-reveal
              data-reveal-delay={String((index % 2) * 110)}
              className="project-card rounded-2xl overflow-hidden border border-white/10 flex flex-col h-full"
            >
              <div
                className="project-mockup-wrap"
                style={{
                  '--mockup-a': project.tones[0],
                  '--mockup-b': project.tones[1]
                }}
              >
                <div className="device-laptop" aria-hidden>
                  <div className="device-screen">
                    <div className="screen-topbar">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="screen-layout">
                      <div className="screen-sidebar" />
                      <div className="screen-main">
                        <div className="screen-main-row" />
                        <div className="screen-main-grid">
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="device-base" />
                </div>

                <div className="device-phone" aria-hidden>
                  <div className="device-phone-screen">
                    <div className="phone-notch" />
                    <div className="phone-content">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-5 leading-relaxed flex-1">{project.summary}</p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={`${project.id}-${tech}`}
                      className="stack-pill"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 icon-wrap border border-white/20 text-white text-center py-2.5 px-4 rounded-lg transition-colors duration-200 hover:border-cyan-200/50"
                  >
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 icon-wrap text-[#04161a] text-center py-2.5 px-4 rounded-lg transition-colors duration-200 btn-primary"
                  >
                    Live Preview
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3" data-reveal data-reveal-delay="120">
          {['AI Systems', 'RAG Pipelines', 'Laravel', 'React', 'FastAPI', 'Shopify', 'Redis'].map((tech) => (
            <span key={`global-${tech}`} className="stack-pill stack-pill-global">{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
