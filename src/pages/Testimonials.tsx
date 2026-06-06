import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const allTestimonials = [
  { name: 'Rahul M.', role: 'Beginner Acting Course', quote: 'Great learning environment for beginners. The practical approach really helps you grow as an actor from day one.', rating: 5 },
  { name: 'Priya S.', role: 'Theatre Workshop', quote: 'Helped me improve confidence and stage presence. The trainers are exceptional and truly care about each student\'s growth.', rating: 5 },
  { name: 'Arjun K.', role: 'Camera Acting Training', quote: 'Very practical acting exercises and guidance. I feel ready for auditions now. The mock audition sessions were incredibly helpful.', rating: 5 },
  { name: 'Sneha R.', role: 'Voice & Body Training', quote: 'The voice training completely transformed my speech clarity and confidence. I can now project my voice properly on stage.', rating: 5 },
  { name: 'Vikram D.', role: 'Theatre Workshop', quote: 'The improvisation exercises pushed me out of my comfort zone in the best way. I discovered sides of myself I didn\'t know existed.', rating: 4 },
  { name: 'Ananya P.', role: 'Beginner Acting Course', quote: 'As someone with zero experience, this course gave me a solid foundation. The small batch size means real personal attention.', rating: 5 },
  { name: 'Rohan T.', role: 'Camera Acting Training', quote: 'The camera facing sessions were a game-changer. Understanding how to act for the lens vs stage is something you can only learn by doing.', rating: 5 },
  { name: 'Meera J.', role: 'Weekend Workshop', quote: 'Perfect for working professionals like me. The weekend format is well-structured and every minute counts toward learning.', rating: 4 },
  { name: 'Karan B.', role: 'Theatre Workshop', quote: 'The stage performance at the end was the highlight. Performing in front of a live audience was nerve-wracking but absolutely thrilling.', rating: 5 },
];

export default function Testimonials() {
  const [featuredIndex, setFeaturedIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % allTestimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goNext = () => setFeaturedIndex((featuredIndex + 1) % allTestimonials.length);
  const goPrev = () => setFeaturedIndex((featuredIndex - 1 + allTestimonials.length) % allTestimonials.length);
  const featured = allTestimonials[featuredIndex];

  return (
    <div className="bg-transparent text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Testimonials"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-theatre-black/90 via-theatre-blood/70 to-theatre-black/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-theatre-black via-transparent to-theatre-black/50" />
        </div>
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gold-500/[0.06] rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-medium">Student Voices</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Testimonials</span>
            </h1>
            <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">Hear from our students about their experience at Theatre Thesis.</p>
          </motion.div>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="py-24 bg-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-medium">Featured Review</span>
          </motion.div>

          <div className="relative bg-theatre-black/60 border border-gold-900/30 rounded-2xl p-10 sm:p-14 text-center">
            <Quote className="w-10 h-10 text-gold-500/30 mx-auto mb-6" />
            <motion.div key={featuredIndex} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className={`w-5 h-5 ${j < featured.rating ? 'text-gold-500 fill-gold-500' : 'text-gray-600'}`} />
                ))}
              </div>
              <p className="text-gray-200 text-lg sm:text-xl leading-relaxed font-display italic mb-8 max-w-2xl mx-auto">
                &ldquo;{featured.quote}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-600 to-gold-800 flex items-center justify-center text-white font-display font-bold text-lg">
                  {featured.name.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="text-white font-medium">{featured.name}</div>
                  <div className="text-gold-500 text-sm">{featured.role}</div>
                </div>
              </div>
            </motion.div>

            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <button onClick={goPrev} className="w-10 h-10 rounded-full bg-gold-900/30 border border-gold-800/30 flex items-center justify-center text-gold-400 hover:bg-gold-500/20 hover:border-gold-500/30 transition-all duration-300">
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <button onClick={goNext} className="w-10 h-10 rounded-full bg-gold-900/30 border border-gold-800/30 flex items-center justify-center text-gold-400 hover:bg-gold-500/20 hover:border-gold-500/30 transition-all duration-300">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {allTestimonials.map((_, i) => (
                <button key={i} onClick={() => setFeaturedIndex(i)} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === featuredIndex ? 'bg-gold-500 w-6' : 'bg-gold-900/40 hover:bg-gold-700/40'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Reviews */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-medium">All Reviews</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">
              What Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Students Say</span>
            </h2>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allTestimonials.map((t, i) => (
              <motion.div key={t.name} variants={fadeInUp} custom={i} className="group bg-theatre-dark/50 border border-gold-900/20 rounded-xl p-6 hover:border-gold-500/30 transition-all duration-500">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className={`w-4 h-4 ${j < t.rating ? 'text-gold-500 fill-gold-500' : 'text-gray-600'}`} />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-5 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gold-900/20">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-600 to-gold-800 flex items-center justify-center text-white font-display font-bold text-xs">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{t.name}</div>
                    <div className="text-gold-600 text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
