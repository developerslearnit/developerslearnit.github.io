import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const validateForm = () => {
    let valid = true;
    const errors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      valid = false;
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
      valid = false;
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success notification after 5s
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
      {/* Background glow */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] bg-radial-gradient rounded-full blur-3xl pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct info */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-primary-500" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-primary-500 font-display">Get In Touch</span>
            </div>
            
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
              Let's build scalable and innovative software solutions.
            </h2>
            
            <p className="text-slate-400 text-sm leading-relaxed">
              Have a project query, technical leadership opportunity, or consultation request? Send a message and let's coordinate.
            </p>

            <div className="space-y-4 pt-4">
              {/* Email */}
              <a 
                href="mailto:mark.oadesina@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors w-fit group"
              >
                <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold block">Email Direct</span>
                  <span className="text-sm font-semibold text-slate-200">mark.oadesina@gmail.com</span>
                </div>
              </a>

              {/* Social links */}
              <div className="flex gap-3 pt-2">
                <a 
                  href="https://github.com/developerslearnit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:text-white transition-colors text-slate-400"
                  aria-label="GitHub Profiles"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/adesina-mark-omoniyi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:text-white transition-colors text-slate-400"
                  aria-label="LinkedIn Profile"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl glass-panel border border-white/10 p-6 sm:p-8 shadow-xl bg-black/40 relative">
              
              <h3 className="font-display font-bold text-lg text-white mb-6">Send a Message</h3>

              {isSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3 text-emerald-400 text-sm">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span>Your message was sent successfully! I will get back to you shortly.</span>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-400">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 outline-none focus:border-primary-500/60 focus:bg-white/[0.08] transition-all ${
                      formErrors.name ? 'border-red-500/50' : 'border-white/5'
                    }`}
                    placeholder="Enter your name"
                  />
                  {formErrors.name && (
                    <span className="text-[10px] text-red-400 font-semibold block">{formErrors.name}</span>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-400">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 outline-none focus:border-primary-500/60 focus:bg-white/[0.08] transition-all ${
                      formErrors.email ? 'border-red-500/50' : 'border-white/5'
                    }`}
                    placeholder="name@company.com"
                  />
                  {formErrors.email && (
                    <span className="text-[10px] text-red-400 font-semibold block">{formErrors.email}</span>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-400">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 outline-none focus:border-primary-500/60 focus:bg-white/[0.08] transition-all resize-none ${
                      formErrors.message ? 'border-red-500/50' : 'border-white/5'
                    }`}
                    placeholder="Describe your project, inquiry, or role criteria..."
                  />
                  {formErrors.message && (
                    <span className="text-[10px] text-red-400 font-semibold block">{formErrors.message}</span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center items-center gap-2 py-3.5 bg-primary-600 hover:bg-primary-700 disabled:opacity-50 text-white font-semibold rounded-xl transition-all shadow-lg shadow-primary-600/20 hover:shadow-glow-indigo"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
