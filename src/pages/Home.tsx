import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Rocket, Zap, Globe, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col"
    >
      {/* Hero Section */}
      <section className="relative bg-slate-50 text-slate-900 overflow-hidden py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <p className="text-emerald-600 font-semibold tracking-wide uppercase mb-4">Our mission is simple</p>
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
              >
                Help your business launch online<span className="text-emerald-500">.</span>
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-slate-600 mb-10 leading-relaxed"
              >
                We build custom, high-performance React websites from scratch for just $350. Get a landing page, services, about, and contact page tailored to your business.
              </motion.p>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-full transition-all">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-semibold rounded-full transition-all border border-slate-200">
                  View Services
                </Link>
              </motion.div>
            </div>
            <div className="relative hidden lg:block">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                className="relative z-10 bg-slate-900 rounded-full aspect-square flex items-center justify-center shadow-2xl"
              >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay rounded-full"></div>
                <Rocket className="w-48 h-48 text-emerald-400 drop-shadow-[0_0_30px_rgba(52,211,153,0.5)]" />
              </motion.div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">There is a better way to build<span className="text-emerald-500">.</span></h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Forget about bloated templates and slow page builders. Web Pages by ET offers custom-coded React websites to help your business be more professional, productive and flexible.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Globe className="w-8 h-8 text-emerald-600" />,
                title: "4 Custom Pages",
                description: "Landing, Services, About Us, and Contact pages built specifically for your brand."
              },
              {
                icon: <Zap className="w-8 h-8 text-emerald-600" />,
                title: "Lightning Fast",
                description: "Built with modern React and Tailwind CSS for incredible performance and SEO."
              },
              {
                icon: <CheckCircle2 className="w-8 h-8 text-emerald-600" />,
                title: "Your Content",
                description: "We integrate your custom photos and writing seamlessly into the design."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to beam up your business<span className="text-emerald-400">?</span></h2>
          <p className="text-xl text-slate-300 mb-10">Get a complete, custom-coded React website for just $350.</p>
          <Link to="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-full transition-all text-lg">
            Contact Us Today
            <Rocket className="ml-3 w-6 h-6" />
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
