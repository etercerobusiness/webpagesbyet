import { motion } from 'motion/react';
import { Rocket } from 'lucide-react';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col"
    >
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-emerald-600 font-semibold tracking-wide uppercase mb-4">Who we are</p>
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-tight">About Web Pages by ET<span className="text-emerald-500">.</span></h1>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                We are on a mission to deliver out-of-this-world web design to small businesses across the galaxy. 
                Our philosophy is simple: high-quality, custom-coded websites shouldn't cost a fortune.
              </p>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                For just $350, we provide a complete digital presence built on modern React technology. 
                We take your vision, your photos, and your words, and craft them into a lightning-fast, 
                beautifully responsive website.
              </p>
              
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center">
                  <Rocket className="w-6 h-6 text-emerald-500 mr-3" />
                  Our Promise
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  No templates. No bloated page builders. Just clean, efficient code designed specifically for your business needs.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] bg-slate-900 flex items-center justify-center relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Rocket className="w-48 h-48 text-emerald-400 drop-shadow-[0_0_30px_rgba(52,211,153,0.5)]" />
                </motion.div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-10 -left-10 w-32 h-32 bg-emerald-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
              <div className="absolute bottom-10 -right-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
