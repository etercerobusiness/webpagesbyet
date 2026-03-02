import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col"
    >
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-emerald-600 font-semibold tracking-wide uppercase mb-4">Get in touch</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">Contact Us<span className="text-emerald-500">.</span></h1>
            <p className="text-xl text-slate-600">
              Ready to start your $350 custom website project? Send us a message and we'll get back to you at lightspeed.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Info</h3>
                <div className="space-y-8">
                  <div className="flex items-start space-x-5">
                    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-1">Email</p>
                      <p className="text-slate-600 text-lg">hello@webpagesbyet.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-5">
                    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-1">Phone</p>
                      <p className="text-slate-600 text-lg">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-5">
                    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-1">Location</p>
                      <p className="text-slate-600 text-lg">Earth, Milky Way</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-xl border border-slate-100">
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-3">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-5 py-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-lg"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-3">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-5 py-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-lg"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-900 mb-3">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-5 py-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-lg"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-3">Message</label>
                    <textarea 
                      id="message" 
                      rows={6}
                      className="w-full px-5 py-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all resize-none text-lg"
                      placeholder="Tell us about your business and what you need..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full flex items-center justify-center px-8 py-5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors text-lg"
                  >
                    Send Message
                    <Send className="ml-3 w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
