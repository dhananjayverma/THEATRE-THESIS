import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Theater,
  Mic,
  Camera,
  Users,
  Award,
  Star,
  ChevronRight,
  Sparkles,
  Eye,
  Clapperboard,
  BookOpen,
  Calendar,
  Brain,
  UserCheck,
  Clapperboard as Film,
} from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: 'easeOut' },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const upcomingEvents = [
  { date: 'Jun 15, 2026', title: 'Open Workshop Day', desc: 'Free trial session for new students. Experience our teaching methods firsthand.', tag: 'Free' },
  { date: 'Jul 1, 2026', title: 'Summer Theatre Intensive', desc: '2-week intensive program focusing on live stage performance and scene work.', tag: 'New Batch' },
  { date: 'Jul 20, 2026', title: 'Student Showcase Night', desc: 'Watch our current students perform monologues and scenes on stage.', tag: 'Live' },
];

const serviceCategories = [
  { icon: Clapperboard, title: 'Acting Training', desc: 'Beginner to advanced courses with method acting & practical techniques', color: 'from-gold-600/20 to-gold-800/10', border: 'border-gold-700/30' },
  { icon: Camera, title: 'Camera & Audition', desc: 'On-camera performance, audition prep, self-tape guidance for TV, Film & OTT', color: 'from-amber-600/20 to-amber-800/10', border: 'border-amber-700/30' },
  { icon: Mic, title: 'Voice & Speech', desc: 'Voice modulation, diction, dialogue delivery, accent & speech clarity', color: 'from-red-600/20 to-red-800/10', border: 'border-red-700/30' },
  { icon: Sparkles, title: 'Body & Expression', desc: 'Body language, facial expressions, movement for stage & screen', color: 'from-orange-600/20 to-orange-800/10', border: 'border-orange-700/30' },
  { icon: Theater, title: 'Theatre Workshops', desc: 'Live performances, improvisation, script reading & scene work', color: 'from-rose-600/20 to-rose-800/10', border: 'border-rose-700/30' },
  { icon: Brain, title: 'Personality Dev', desc: 'Confidence building, public speaking, emotional intelligence, stage fear removal', color: 'from-emerald-600/20 to-emerald-800/10', border: 'border-emerald-700/30' },
  { icon: UserCheck, title: 'Career Guidance', desc: 'Portfolio guidance, industry insights, casting prep & grooming', color: 'from-cyan-600/20 to-cyan-800/10', border: 'border-cyan-700/30' },
  { icon: Film, title: 'Showreel Creation', desc: 'Professional photoshoot, acting showreel, scene recording & profile building', color: 'from-violet-600/20 to-violet-800/10', border: 'border-violet-700/30' },
];

const phrases = [
  {
    line1: "Theatre, Performance",
    line2: "& Camera Training",
    grad1: "from-gold-300 via-gold-400 to-gold-600",
    grad2: "from-red-400 via-red-500 to-primary-700"
  },
  {
    line1: "Method Acting",
    line2: "& Character Dev",
    grad1: "from-amber-300 via-amber-400 to-amber-500",
    grad2: "from-orange-400 via-orange-500 to-orange-700"
  },
  {
    line1: "Voice Modulation",
    line2: "& Speech Clarity",
    grad1: "from-red-300 via-red-400 to-red-600",
    grad2: "from-pink-400 via-pink-500 to-pink-700"
  },
  {
    line1: "Body Language",
    line2: "& Expression Work",
    grad1: "from-orange-300 via-orange-400 to-orange-600",
    grad2: "from-yellow-400 via-yellow-500 to-gold-600"
  },
  {
    line1: "Audition Prep",
    line2: "& Casting Guidance",
    grad1: "from-cyan-300 via-cyan-400 to-cyan-600",
    grad2: "from-blue-400 via-blue-500 to-indigo-700"
  },
  {
    line1: "AI-Based Scripts",
    line2: "& Practice Partner",
    grad1: "from-emerald-300 via-emerald-400 to-emerald-600",
    grad2: "from-teal-400 via-teal-500 to-teal-700"
  }
];

export default function Home() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-transparent text-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 opacity-70"
            poster="https://images.pexels.com/photos/45258/theatre-hall-theatre-stage-stage-performance-45258.jpeg?auto=compress&cs=tinysrgb&w=1920"
          >
            <source
              src="https://kid-sens.com/main/public/videos/atelier_theatre.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-theatre-black/85 via-theatre-blood/50 to-theatre-black/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-theatre-black via-transparent to-theatre-black/40" />
        </div>

        {/* Decorative spotlights */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gold-500/[0.07] rounded-full blur-[120px]" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary-700/[0.08] rounded-full blur-[100px]" />

        {/* Decorative lines */}
        <div className="absolute top-1/4 left-10 w-px h-40 bg-gradient-to-b from-gold-500/50 to-transparent" />
        <div className="absolute top-1/3 right-10 w-px h-40 bg-gradient-to-b from-gold-500/50 to-transparent" />
        <div className="absolute bottom-20 left-1/4 w-32 h-px bg-gradient-to-r from-gold-500/40 to-transparent" />
        <div className="absolute bottom-24 right-1/4 w-32 h-px bg-gradient-to-l from-gold-500/40 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-900/20 text-gold-400 text-xs uppercase tracking-[0.2em] font-medium backdrop-blur-sm">
              <Sparkles className="w-3 h-3" />
              Admissions Open 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] mb-6 flex flex-col items-center text-center justify-center min-h-[160px] sm:min-h-[200px] md:min-h-[280px]"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.9)' }}
          >
            <span className="text-white block mb-2 sm:mb-3">Learn Acting Through</span>
            <div className="relative w-full overflow-hidden h-24 sm:h-32 md:h-44 flex flex-col items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={phraseIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 flex flex-col items-center justify-center"
                >
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${phrases[phraseIndex].grad1} block text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.2] mb-0.5 sm:mb-1`}>
                    {phrases[phraseIndex].line1}
                  </span>
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${phrases[phraseIndex].grad2} block text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.2]`}>
                    {phrases[phraseIndex].line2}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}
          >
            Professional acting courses, theatre workshops, voice training, and career guidance for aspiring performers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-theatre-black font-bold text-sm uppercase tracking-wider rounded-lg overflow-hidden transition-all duration-300 shadow-xl shadow-gold-900/40 hover:shadow-gold-600/50 hover:scale-105"
            >
              <span className="relative z-10">Join Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-500 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              to="/services"
              className="group px-8 py-4 border border-gold-500/40 text-gold-400 font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-gold-500/10 hover:border-gold-500/60 transition-all duration-300 backdrop-blur-sm"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
            >
              Explore Services
              <ChevronRight className="inline w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator positioned directly relative to the viewport/section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-gold-500/30 rounded-full flex items-start justify-center p-1.5 backdrop-blur-sm bg-theatre-black/20">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-gold-400 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* STATS BAR */}
      <section className="relative py-16 bg-theatre-dark/30 backdrop-blur-sm border-y border-gold-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-900/10 via-transparent to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: 500, suffix: '+', label: 'Students Trained' },
              { value: 5, suffix: '+', label: 'Years Experience' },
              { value: 50, suffix: '+', label: 'Stage Shows' },
              { value: 15, suffix: '', label: 'Service Programs' },
            ].map((stat, i) => (
              <motion.div key={stat.label} variants={fadeInUp} custom={i} className="text-center">
                <div className="font-display text-3xl sm:text-4xl font-bold text-gold-400 mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section id="about" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-theatre-black via-theatre-dark to-theatre-black" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
                <img
                  src="https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Theatre Performance"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-theatre-black/70 via-theatre-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center backdrop-blur-sm">
                      <Theater className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-white font-display font-semibold">Founded 2020</p>
                      <p className="text-gold-400 text-xs uppercase tracking-wider">5+ Years of Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold-500/40 rounded-tl-lg" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold-500/40 rounded-br-lg" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-medium">About The Studio</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-6">
                Welcome to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Theatre Thesis</span>{' '}
                Acting Studio
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                A creative space for aspiring actors and performers to learn the art of acting through theatre and practical performance training. We focus on stage acting, camera acting, voice, movement, improvisation, and character development.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                With a balance of classical theatre techniques and modern acting practices, Theatre Thesis Studio builds confident, expressive, and skilled performers for stage and screen.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Clapperboard, label: 'Practical Training' },
                  { icon: Theater, label: 'Stage Performance' },
                  { icon: Eye, label: 'Confidence Building' },
                  { icon: Mic, label: 'Voice & Speech' },
                  { icon: BookOpen, label: 'Character Development' },
                  { icon: Award, label: 'Audition Prep' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-8 h-8 rounded-lg bg-gold-900/30 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-gold-500" />
                    </div>
                    {label}
                  </div>
                ))}
              </div>

              <Link to="/about" className="inline-flex items-center gap-2 text-gold-400 font-medium text-sm uppercase tracking-wider hover:text-gold-300 transition-colors group">
                Learn More About Us
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section id="services" className="relative py-24 bg-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/15 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-medium">What We Offer</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Services</span>
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">15 professional programs covering every aspect of acting, voice, body, and career development.</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {serviceCategories.map((svc, i) => (
              <motion.div
                key={svc.title}
                variants={fadeInUp}
                custom={i}
                className={`group relative bg-gradient-to-br ${svc.color} border ${svc.border} rounded-xl p-5 hover:border-gold-500/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-gold-900/20`}
              >
                <div className="w-10 h-10 rounded-lg bg-gold-900/40 border border-gold-800/30 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 group-hover:border-gold-500/40 transition-all duration-300">
                  <svc.icon className="w-5 h-5 text-gold-400" />
                </div>
                <h3 className="font-display text-base font-semibold text-white mb-2">{svc.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{svc.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-700 to-gold-600 text-theatre-black font-semibold text-sm uppercase tracking-wider rounded-lg hover:from-gold-600 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-900/30"
            >
              View All 15 Services
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative py-24 bg-transparent">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-medium">Our Edge</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">
              Why{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Theatre Thesis?</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: Award, title: 'Professional Guidance', desc: 'Learn from experienced coaches with real industry knowledge' },
              { icon: Theater, title: 'Theatre-Based Training', desc: 'Rooted in classical theatre techniques and live performance' },
              { icon: Clapperboard, title: 'Practical Sessions', desc: 'Hands-on training with real performance opportunities' },
              { icon: Users, title: 'Small Batch Size', desc: 'Personal attention with limited students per batch' },
              { icon: Sparkles, title: 'Performance Opportunities', desc: 'Regular stage shows and performance showcases' },
              { icon: Eye, title: 'Industry-Oriented', desc: 'Training designed for real-world acting careers' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                custom={i}
                className="group relative bg-theatre-dark/50 border border-gold-900/20 rounded-xl p-6 hover:border-gold-500/30 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-900/0 to-gold-900/0 group-hover:from-gold-900/10 group-hover:to-transparent rounded-xl transition-all duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gold-900/30 border border-gold-800/30 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 group-hover:border-gold-500/30 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="relative py-24 bg-transparent">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-medium">What's Happening</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">
              Upcoming{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Events & Batches</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {upcomingEvents.map((event, i) => (
              <motion.div
                key={event.title}
                variants={fadeInUp}
                custom={i}
                className="group bg-theatre-black/60 border border-gold-900/20 rounded-xl overflow-hidden hover:border-gold-500/30 transition-all duration-500"
              >
                <div className="h-2 bg-gradient-to-r from-gold-600 to-primary-700" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                      <Calendar className="w-3.5 h-3.5 text-gold-500" />
                      {event.date}
                    </div>
                    <span className="px-2.5 py-1 bg-gold-900/30 border border-gold-800/30 rounded-full text-gold-400 text-[10px] uppercase tracking-wider font-medium">{event.tag}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white mb-2 group-hover:text-gold-300 transition-colors">{event.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{event.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="relative py-24 bg-transparent">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-medium">Life at Theatre Thesis</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">
              Studio{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Gallery</span>
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">Capturing moments of growth, performance, and creative collaboration.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: 'https://images.pexels.com/photos/3785810/pexels-photo-3785810.jpeg?auto=compress&cs=tinysrgb&w=600', cat: 'Performances' },
              { src: 'https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg?auto=compress&cs=tinysrgb&w=600', cat: 'Rehearsals' },
              { src: 'https://images.pexels.com/photos/8101622/pexels-photo-8101622.jpeg?auto=compress&cs=tinysrgb&w=600', cat: 'Workshops' },
              { src: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=600', cat: 'Camera Acting' },
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative h-72 rounded-xl overflow-hidden cursor-pointer border border-gold-950/20 hover:border-gold-500/30 transition-all duration-500"
              >
                <img src={img.src} alt={img.cat} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-theatre-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="px-2 py-1 bg-gold-500 text-theatre-black text-[10px] font-bold uppercase tracking-wider rounded">
                    {img.cat}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="group inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-semibold text-sm uppercase tracking-wider transition-colors"
            >
              View Full Gallery
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="relative py-24 bg-transparent">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-medium">Student Reviews</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">
              What Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Students Say</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { quote: 'Great learning environment for beginners. The practical approach really helps you grow.', name: 'Rahul M.', role: 'Beginner Acting Course' },
              { quote: 'Helped me improve confidence and stage presence. The trainers are exceptional.', name: 'Priya S.', role: 'Theatre Workshop' },
              { quote: 'Very practical acting exercises and guidance. I feel ready for auditions now.', name: 'Arjun K.', role: 'Camera Acting Training' },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeInUp}
                custom={i}
                className="bg-theatre-dark/60 border border-gold-900/20 rounded-xl p-8 hover:border-gold-500/30 transition-all duration-500"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-gold-500 fill-gold-500" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-600 to-gold-800 flex items-center justify-center text-white font-display font-bold text-sm">{t.name.charAt(0)}</div>
                  <div>
                    <div className="text-white text-sm font-medium">{t.name}</div>
                    <div className="text-gold-600 text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link to="/testimonials" className="inline-flex items-center gap-2 text-gold-400 font-medium text-sm uppercase tracking-wider hover:text-gold-300 transition-colors group">
              Read More Reviews
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/269140/pexels-photo-269140.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Stage Curtains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-theatre-black/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/40 via-theatre-black/50 to-gold-900/30" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-medium">Start Your Journey</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
              Ready to Step Into the
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Spotlight?</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
              Join Theatre Thesis Acting Studio and transform your passion into performance. Admissions are now open for 2026.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="group relative px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-theatre-black font-bold text-sm uppercase tracking-wider rounded-lg overflow-hidden transition-all duration-300 shadow-xl shadow-gold-900/40 hover:scale-105">
                <span className="relative z-10">Enroll Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-500 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link to="/services" className="px-8 py-4 border border-gold-500/40 text-gold-400 font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-gold-500/10 transition-all duration-300 backdrop-blur-sm">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
