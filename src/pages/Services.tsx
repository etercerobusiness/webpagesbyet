import { motion } from 'motion/react';
import { Code, Layout, Smartphone, Search, Rocket, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
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
            <p className="text-emerald-600 font-semibold tracking-wide uppercase mb-4">What we do</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">Our Services<span className="text-emerald-500">.</span></h1>
            <p className="text-xl text-slate-600">
              We offer a comprehensive website package for $350. Everything you need to establish a professional online presence.
            </p>
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100 mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 md:p-20 bg-slate-900 text-white flex flex-col justify-center">
                <h2 className="text-4xl font-bold mb-6">The $350 Business Package<span className="text-emerald-400">.</span></h2>
                <p className="text-slate-300 mb-10 text-lg leading-relaxed">
                  A complete, custom-designed React website built from scratch. No templates, no bloat. Just clean, fast code tailored to your brand.
                </p>
                <ul className="space-y-5 mb-12">
                  {[
                    "Custom Landing Page",
                    "Detailed Services Page",
                    "About Us Page",
                    "Contact Page with Form",
                    "Integration of your photos & copy",
                    "Mobile Responsive Design"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-4">
                      <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-200 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-full transition-colors self-start text-lg">
                  Get Started
                  <Rocket className="ml-2 w-5 h-5" />
                </Link>
              </div>
              <div className="p-12 md:p-20 bg-white grid grid-cols-1 sm:grid-cols-2 gap-10">
                {[
                  {
                    icon: <Code className="w-8 h-8 text-emerald-600" />,
                    title: "Custom React Code",
                    desc: "Built from scratch using modern web technologies for maximum performance."
                  },
                  {
                    icon: <Layout className="w-8 h-8 text-emerald-600" />,
                    title: "Bespoke Design",
                    desc: "Unique layouts that match your brand identity and stand out."
                  },
                  {
                    icon: <Smartphone className="w-8 h-8 text-emerald-600" />,
                    title: "Responsive",
                    desc: "Looks perfect on desktops, tablets, and smartphones."
                  },
                  {
                    icon: <Search className="w-8 h-8 text-emerald-600" />,
                    title: "SEO Friendly",
                    desc: "Optimized structure to help you rank better on search engines."
                  }
                ].map((feature, i) => (
                  <div key={i} className="flex flex-col">
                    <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
