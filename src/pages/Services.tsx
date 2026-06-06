import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Theater,
  Mic,
  Camera,
  ChevronRight,
  Sparkles,
  Clapperboard,
  Brain,
  MonitorPlay,
  UserCheck,
  FileCheck,
  Network,
  Megaphone,
  Clapperboard as Film,
  GraduationCap,
  Video,
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.6, ease: 'easeOut' },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const services = [
  {
    id: 'acting-training',
    icon: Clapperboard,
    number: '01',
    title: 'Acting Training Programs',
    subtitle: 'Foundation to Mastery',
    description: 'Comprehensive acting courses from beginner to advanced levels, built on theatre-based methods and practical techniques.',
    features: ['Beginner to Advanced Acting Courses', 'Theatre-Based Acting Training', 'Method Acting & Practical Techniques', 'Stage & Camera Acting'],
    image: 'https://images.pexels.com/photos/8101622/pexels-photo-8101622.jpeg?auto=compress&cs=tinysrgb&w=600',
    accent: 'from-gold-500/20 to-gold-700/10',
    accentBorder: 'border-gold-600/30',
  },
  {
    id: 'camera-audition',
    icon: Camera,
    number: '02',
    title: 'Camera Acting & Audition Training',
    subtitle: 'Screen-Ready Skills',
    description: 'Master on-camera performance with audition preparation for TV, Film, Ads, and OTT platforms. Includes self-tape audition guidance.',
    features: ['On-camera performance techniques', 'Audition preparation (TV, Film, Ads, OTT)', 'Monologue & scene practice', 'Self-tape audition guidance'],
    image: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=600',
    accent: 'from-amber-500/20 to-amber-700/10',
    accentBorder: 'border-amber-600/30',
  },
  {
    id: 'voice-speech',
    icon: Mic,
    number: '03',
    title: 'Voice & Speech Training',
    subtitle: 'Power & Clarity',
    description: 'Develop vocal power, modulation, and speech clarity essential for commanding any stage or screen performance.',
    features: ['Voice modulation & projection', 'Diction & pronunciation improvement', 'Dialogue delivery techniques', 'Accent & speech clarity training'],
    image: 'https://images.pexels.com/photos/3785810/pexels-photo-3785810.jpeg?auto=compress&cs=tinysrgb&w=600',
    accent: 'from-red-500/20 to-red-700/10',
    accentBorder: 'border-red-600/30',
  },
  {
    id: 'body-expression',
    icon: Sparkles,
    number: '04',
    title: 'Body Movement & Expression',
    subtitle: 'Physical Storytelling',
    description: 'Control your body language, facial expressions, and movement to convey emotion and character authentically.',
    features: ['Body language control', 'Facial expressions & emotional range', 'Movement for stage & screen', 'Physical awareness & flexibility'],
    image: 'https://images.pexels.com/photos/5922842/pexels-photo-5922842.jpeg?auto=compress&cs=tinysrgb&w=600',
    accent: 'from-orange-500/20 to-orange-700/10',
    accentBorder: 'border-orange-600/30',
  },
  {
    id: 'theatre-workshops',
    icon: Theater,
    number: '05',
    title: 'Theatre Workshops & Live Performances',
    subtitle: 'The Stage Awaits',
    description: 'Immersive theatre production training with live performances, improvisation, and collaborative scene work.',
    features: ['Theatre production training', 'Stage rehearsals & live performances', 'Improvisation sessions', 'Script reading & scene work'],
    image: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=600',
    accent: 'from-rose-500/20 to-rose-700/10',
    accentBorder: 'border-rose-600/30',
  },
  {
    id: 'personality-dev',
    icon: Brain,
    number: '06',
    title: 'Personality Development for Actors',
    subtitle: 'Inner Strength',
    description: 'Build the confidence, emotional intelligence, and public speaking skills essential for a successful acting career.',
    features: ['Confidence building', 'Public speaking skills', 'Emotional intelligence', 'Stage fear removal'],
    image: 'https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=600',
    accent: 'from-emerald-500/20 to-emerald-700/10',
    accentBorder: 'border-emerald-600/30',
  },
  {
    id: 'career-guidance',
    icon: UserCheck,
    number: '07',
    title: 'Audition & Career Guidance',
    subtitle: 'Your Industry Path',
    description: 'Navigate the entertainment industry with expert guidance on portfolios, casting preparation, and professional grooming.',
    features: ['Portfolio guidance', 'Industry insights & career roadmap', 'Casting preparation', 'Grooming for acting industry'],
    image: 'https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=600',
    accent: 'from-cyan-500/20 to-cyan-700/10',
    accentBorder: 'border-cyan-600/30',
  },
  {
    id: 'showreel',
    icon: Film,
    number: '08',
    title: 'Portfolio & Showreel Creation',
    subtitle: 'Your Professional Identity',
    description: 'Create a compelling professional portfolio with photoshoots, acting showreels, and profile building for casting platforms.',
    features: ['Professional photoshoot guidance', 'Acting showreel shooting', 'Scene recording & editing', 'Profile building for casting platforms'],
    image: 'https://images.pexels.com/photos/3035072/pexels-photo-3035072.jpeg?auto=compress&cs=tinysrgb&w=600',
    accent: 'from-violet-500/20 to-violet-700/10',
    accentBorder: 'border-violet-600/30',
  },
  {
    id: 'ai-practice',
    icon: MonitorPlay,
    number: '09',
    title: 'AI-Based Acting Practice',
    subtitle: 'Future of Training',
    description: 'Unique AI-powered tools for practicing scripts, monologues, and receiving instant voice and emotion feedback.',
    features: ['AI-generated scripts & monologues', 'Practice with AI dialogue partner', 'Voice & emotion feedback tools', 'Personalized acting exercises'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
    accent: 'from-blue-500/20 to-blue-700/10',
    accentBorder: 'border-blue-600/30',
    badge: 'Unique',
  },
  {
    id: 'mentorship',
    icon: GraduationCap,
    number: '10',
    title: '1-on-1 Mentorship Programs',
    subtitle: 'Personalized Growth',
    description: 'Dedicated personal coaching with customized training plans, performance evaluation, and career mentoring sessions.',
    features: ['Personal acting coaching', 'Customized training plans', 'Performance evaluation & feedback', 'Career mentoring sessions'],
    image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600',
    accent: 'from-yellow-500/20 to-yellow-700/10',
    accentBorder: 'border-yellow-600/30',
  },
  {
    id: 'masterclasses',
    icon: Megaphone,
    number: '11',
    title: 'Workshops & Masterclasses',
    subtitle: 'Intensive Learning',
    description: 'Weekend workshops and guest sessions by industry professionals with specialized training in film and theatre.',
    features: ['Weekend acting workshops', 'Guest sessions by industry professionals', 'Specialized training (film/theatre)', 'Intensive short-term programs'],
    image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600',
    accent: 'from-pink-500/20 to-pink-700/10',
    accentBorder: 'border-pink-600/30',
  },
  {
    id: 'online-classes',
    icon: Video,
    number: '12',
    title: 'Online Acting Classes',
    subtitle: 'Learn from Anywhere',
    description: 'Live online sessions and recorded learning modules enabling remote performance practice and video feedback.',
    features: ['Live online sessions', 'Recorded learning modules', 'Remote performance practice', 'Feedback via video submissions'],
    image: 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=600',
    accent: 'from-teal-500/20 to-teal-700/10',
    accentBorder: 'border-teal-600/30',
  },
  {
    id: 'casting',
    icon: Megaphone,
    number: '13',
    title: 'Casting & Audition Opportunities',
    subtitle: 'Real-World Access',
    description: 'Get access to casting calls, internal auditions, and collaborations with filmmakers and student projects.',
    features: ['Access to casting calls', 'Internal audition opportunities', 'Collaboration with filmmakers', 'Student project participation'],
    image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=600',
    accent: 'from-lime-500/20 to-lime-700/10',
    accentBorder: 'border-lime-600/30',
  },
  {
    id: 'certification',
    icon: FileCheck,
    number: '14',
    title: 'Certification & Evaluation',
    subtitle: 'Verified Credentials',
    description: 'Earn course completion certificates, skill assessment reports, and verified acting credentials recognized in the industry.',
    features: ['Course completion certificates', 'Skill assessment reports', 'Performance grading system', 'Verified acting credentials'],
    image: 'https://images.pexels.com/photos/3785810/pexels-photo-3785810.jpeg?auto=compress&cs=tinysrgb&w=600',
    accent: 'from-indigo-500/20 to-indigo-700/10',
    accentBorder: 'border-indigo-600/30',
  },
  {
    id: 'community',
    icon: Network,
    number: '15',
    title: 'Acting Community & Networking',
    subtitle: 'Grow Together',
    description: 'Join a vibrant student community for peer collaboration, networking with actors and creators, and industry exposure.',
    features: ['Student community access', 'Peer collaboration', 'Networking with actors & creators', 'Industry exposure opportunities'],
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
    accent: 'from-fuchsia-500/20 to-fuchsia-700/10',
    accentBorder: 'border-fuchsia-600/30',
  },
];

export default function Services() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleCardToggle = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <div className="bg-transparent text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Theatre Curtains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-theatre-black/90 via-theatre-blood/70 to-theatre-black/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-theatre-black via-transparent to-theatre-black/50" />
        </div>
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gold-500/[0.06] rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-medium">What We Offer</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-3">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Services</span>
            </h1>
            <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
              15 professional programs covering every aspect of acting — from foundational training to career launch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, i) => {
              const isExpanded = expandedId === service.id;
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  variants={fadeInUp}
                  custom={i}
                  onClick={() => handleCardToggle(service.id)}
                  className={`group relative bg-gradient-to-b ${service.accent} border ${service.accentBorder} rounded-2xl overflow-hidden hover:border-gold-500/30 hover:shadow-xl hover:shadow-gold-500/5 transition-all duration-500 flex flex-col cursor-pointer select-none`}
                >
                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-theatre-dark/95 via-theatre-dark/20 to-transparent" />
                    <div className="absolute top-4 left-4 font-display text-4xl font-bold text-gold-500/20 select-none">
                      {service.number}
                    </div>
                    {service.badge && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-gold-500 text-theatre-black text-[10px] uppercase tracking-wider font-bold rounded-full shadow-lg">
                        {service.badge}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-gold-900/40 border border-gold-800/30 flex items-center justify-center shrink-0">
                          <service.icon className="w-4.5 h-4.5 text-gold-400" />
                        </div>
                        <div>
                          <p className="text-gold-500/60 text-[10px] uppercase tracking-[0.2em] font-medium">{service.subtitle}</p>
                          <h3 className="font-display text-lg font-bold text-white group-hover:text-gold-400 transition-colors duration-300">{service.title}</h3>
                        </div>
                      </div>

                      {/* Collapsible Details */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: isExpanded ? 'auto' : 0,
                          opacity: isExpanded ? 1 : 0
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-400 text-xs leading-relaxed mt-3 mb-4">
                          {service.description}
                        </p>

                        <div className="space-y-2 mb-5">
                          {service.features.map((feature) => (
                            <div key={feature} className="flex items-start gap-2 text-xs text-gray-300">
                              <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-1.5 shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>

                        <Link
                          to={`/contact?course=${encodeURIComponent(service.title)}`}
                          onClick={(e) => e.stopPropagation()}
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-gold-700 to-gold-600 text-theatre-black font-semibold text-xs uppercase tracking-wider rounded-lg hover:from-gold-600 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-900/20 mb-2"
                        >
                          Apply Now
                          <ChevronRight className="w-3 h-3" />
                        </Link>
                      </motion.div>
                    </div>

                    {/* View Details / Collapse Toggle Indicator */}
                    <div className="mt-4 flex items-center justify-between border-t border-gold-900/10 pt-4 text-[10px] font-semibold uppercase tracking-wider text-gold-500/80 group-hover:text-gold-400 transition-colors duration-300">
                      <span>{isExpanded ? 'Collapse Details' : 'View Details'}</span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight className="w-3.5 h-3.5 rotate-90" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-medium">Ready to Begin?</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6">
              Choose Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Path</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Whether you're a beginner or an experienced performer, we have the right program for you. Contact us to find your perfect fit.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-theatre-black font-bold text-sm uppercase tracking-wider rounded-lg overflow-hidden transition-all duration-300 shadow-xl shadow-gold-900/40 hover:scale-105"
              >
                <span className="relative z-10">Enroll Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-500 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                to="/courses"
                className="px-8 py-4 border border-gold-500/40 text-gold-400 font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-gold-500/10 transition-all duration-300"
              >
                View Courses
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
