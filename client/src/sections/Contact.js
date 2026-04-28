import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const emailTo = 'abdulrahmanchohan4181@gmail.com';
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
    setSubmitMessage('Your email app has been opened. Please send the drafted message there.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#07060a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16" data-reveal>
          <div className="inline-block mb-4">
            <span className="text-sm section-chip px-3 py-1 rounded-full">Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Let&apos;s Build Something Premium</h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            Share your requirements and timeline. I respond quickly with a practical technical plan and transparent next steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
          {/* Contact Information */}
          <div data-reveal data-reveal-delay="80">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start sm:items-center rounded-2xl p-4 border border-white/10 bg-white/[0.03]">
                <div className="bg-white/6 border border-white/15 p-3 rounded-lg mr-4 icon-wrap text-cyan-200">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Email</h4>
                  <p className="text-gray-300 break-all">abdulrahmanchohan4181@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start sm:items-center rounded-2xl p-4 border border-white/10 bg-white/[0.03]">
                <div className="bg-white/6 border border-white/15 p-3 rounded-lg mr-4 icon-wrap text-cyan-200">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Phone</h4>
                  <p className="text-gray-300">+92 341 6195046</p>
                </div>
              </div>

              <div className="flex items-start sm:items-center rounded-2xl p-4 border border-white/10 bg-white/[0.03]">
                <div className="bg-white/6 border border-white/15 p-3 rounded-lg mr-4 icon-wrap text-cyan-200">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Location</h4>
                  <p className="text-gray-300">Lahore, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-medium text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/abdurahman-chohan-a74234303" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="bg-white/6 hover:bg-white/10 text-white rounded-lg transition-colors duration-200 icon-wrap w-11 h-11">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://github.com/AbdulrahmanChohan" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="bg-white/6 hover:bg-white/10 text-white rounded-lg transition-colors duration-200 icon-wrap w-11 h-11">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-reveal data-reveal-delay="140">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">Send a Message</h3>
            {submitMessage && (
              <div className={`mb-6 p-4 rounded-lg border ${submitMessage.includes('opened') ? 'bg-emerald-500/15 border-emerald-300/40 text-emerald-100' : 'bg-red-500/15 border-red-300/40 text-red-100'}`}>
                {submitMessage}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5 p-6 md:p-7 rounded-2xl border border-white/12 bg-[#0d1218]/86 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="contact-input w-full px-4 py-3 rounded-lg disabled:opacity-50 text-white"
                  placeholder="Abdulrahman Chohan"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="contact-input w-full px-4 py-3 rounded-lg disabled:opacity-50 text-white"
                  placeholder="name@company.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="contact-input w-full px-4 py-3 rounded-lg disabled:opacity-50 text-white"
                  placeholder="Project scope"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={6}
                  className="contact-input w-full min-h-[120px] px-4 py-3 rounded-lg disabled:opacity-50 text-white"
                  placeholder="Tell me about your goals, timeline, and any reference websites..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-[#04161a] py-3 px-6 rounded-lg font-semibold transition-colors duration-200 disabled:cursor-not-allowed btn-primary"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
