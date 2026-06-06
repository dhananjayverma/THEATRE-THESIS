import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mic,
  Camera,
  Quote,
  Target,
  Heart,
  Sparkles,
  ChevronRight,
  Compass,
  GraduationCap,
  Star,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';

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

const timeline = [
  { year: '2020', title: 'The Beginning', desc: 'Theatre Thesis was founded with a vision to create a dedicated acting studio for aspiring performers.' },
  { year: '2021', title: 'First Batch Graduates', desc: 'Our inaugural batch completed training and performed in their first stage showcase.' },
  { year: '2022', title: 'Expanded Curriculum', desc: 'Added camera acting and voice training programs to meet growing industry demands.' },
  { year: '2023', title: 'Community Growth', desc: 'Crossed 300+ students trained with consistent 5-star reviews from alumni.' },
  { year: '2024', title: 'Industry Recognition', desc: 'Students placed in film and theatre productions. Workshop partnerships with casting agencies.' },
  { year: '2025', title: 'New Studio Launch', desc: 'Expanded to a larger studio space with dedicated rehearsal and camera rooms.' },
];

const methodologies = [
  {
    id: 'stanislavski',
    name: "Stanislavski's System",
    tagline: 'Psychological Realism & Truth',
    icon: Heart,
    desc: 'The bedrock of modern realistic acting. We teach actors to analyze subtext, identify character super-objectives, utilize the "Magic If," and execute physical actions to live truthfully under imaginary circumstances.',
    details: [
      'The "Magic If" (Exploring actions under fictional circumstances)',
      'Subtext analysis and character motivation mapping',
      'Sensory recall and emotional connection techniques'
    ]
  },
  {
    id: 'meisner',
    name: 'Meisner Technique',
    tagline: 'Instinct, Listening & Repetition',
    icon: Sparkles,
    desc: 'Acting is reacting. Our Meisner-inspired training focuses on moving the actor from self-consciousness to spontaneous reactivity. Through targeted repetition, actors learn to respond authentically to their partners.',
    details: [
      'Repetition exercises for absolute presence and focus',
      'Spontaneous responsiveness based on genuine impulses',
      'Letting go of internal filters and overthinking'
    ]
  },
  {
    id: 'screen',
    name: 'Screen Acting Nuances',
    tagline: 'Adapting for the Lens',
    icon: Camera,
    desc: 'Translating emotional depth to the screen. We focus on framing, hitting marks, adjusting voice/expression levels for close-ups versus wide shots, and maintaining continuity across multiple takes.',
    details: [
      'Scale of performance adjustment for camera lenses',
      'Understanding framing, continuity, and eye-lines',
      'On-camera audition techniques and self-tape grooming'
    ]
  },
  {
    id: 'voice-body',
    name: 'Voice & Body Instrument',
    tagline: 'Vocal and Physical Expression',
    icon: Mic,
    desc: 'A performer\'s primary tools are their voice and body. We work on voice modulation, diction, projection, body language control, and movement patterns to build an expressive and command-worthy stage presence.',
    details: [
      'Resonance, projection, diction, and breath support',
      'Physical alignment, flexibility, and neutral posture',
      'Releasing body tension and channeling stage fright'
    ]
  }
];

const faculty = [
  {
    name: 'Neeraj Saini',
    role: 'Founder & Artistic Director',
    bio: 'An experienced acting coach, theatre director, and performance trainer with expertise in classical theatre and modern film acting methodologies.',
    specialties: ['Method Acting', 'Script Analysis', 'Theatre Directing'],
    image: 'https://images.pexels.com/photos/3771802/pexels-photo-3771802.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    name: 'Ananya Roy',
    role: 'Head of Voice & Movement',
    bio: 'A seasoned physical theatre practitioner and voice coach specializing in classical voice projection and contemporary movement styles.',
    specialties: ['Voice Projection', 'Diction & Dialect', 'Physical Expression'],
    image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    name: 'Vikram Aditya',
    role: 'Screen Acting & Casting Coach',
    bio: 'A working film director and casting consultant who bridges the gap between classroom exercises and real-world professional sets.',
    specialties: ['On-Camera Technique', 'Audition Prep', 'Showreel Curation'],
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

const spaces = [
  {
    name: 'The Rehearsal Space',
    desc: 'Equipped with professional hardwood flooring, full-length mirrors, and sound-absorbing acoustics. Designed for intense rehearsals, movement training, and voice projection exercises.',
    specs: '1,200 sq. ft. • Full Mirrors • Sound System',
    image: 'https://images.pexels.com/photos/358010/pexels-photo-358010.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'The Black Box Stage',
    desc: 'A modular, intimate performance environment with professional stage lighting rigs, curtain systems, and surround audio, replicating actual theatre conditions for showcases.',
    specs: 'Modular Layout • 16-Channel Dimmer Grid • Surround Sound',
    image: 'https://images.pexels.com/photos/45258/theatre-hall-theatre-stage-stage-performance-45258.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'The Screen Acting Lab',
    desc: 'Equipped with ultra-HD camera setups, three-point studio lighting, and high-definition monitors for instant playback review of student monologues and audition scenes.',
    specs: '4K Camera Setup • Studio Spotlights • Real-time Playback Monitors',
    image: 'https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function About() {
  const [activeTab, setActiveTab] = useState('stanislavski');

  return (
    <div className="bg-transparent text-white selection:bg-gold-500/30 selection:text-white">
      {/* Hero */}
      <section className="relative pt-36 pb-28 overflow-hidden border-b border-gold-950/20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Theatre Stage"
            className="w-full h-full object-cover object-center scale-105 filter brightness-50"
          />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-theatre-black via-theatre-black/40 to-theatre-black/80" />
        </div>

        {/* Spotlights and ambient glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gold-500/[0.04] rounded-full blur-[140px]" />
        <div className="absolute -bottom-20 right-10 w-[400px] h-[400px] bg-primary-700/[0.06] rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold-500/20 bg-gold-950/30 text-gold-400 text-[10px] uppercase tracking-[0.25em] font-semibold mb-6 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Est. 2020
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mt-3">
              The Philosophy Behind{' '}
              <br className="hidden md:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600">
                Theatre Thesis
              </span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl mt-6 max-w-3xl mx-auto leading-relaxed font-light">
              Acting is not merely pretense; it is a systematic study of the human condition. We build screens, stages, and artists.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="relative py-24 bg-theatre-dark/30 border-b border-gold-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-medium">Core Foundations</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">Our Three Pillars</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'The Instrument',
                desc: 'Unlocking the body and voice. We strip away physical habits and vocal tensions to make the performer a clear, resonant channel for expression.'
              },
              {
                icon: Compass,
                title: 'The Method',
                desc: 'Rigorous psychological realism. Drawing from classical frameworks to help actors analyze text, form deep character motivations, and live truthfully.'
              },
              {
                icon: GraduationCap,
                title: 'The Showcase',
                desc: 'Practical exposure. Bridging raw training with real-world performances on stage and screen, culminating in live shows and professional casting showreels.'
              }
            ].map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-theatre-black/40 border border-gold-900/10 rounded-2xl p-8 hover:border-gold-500/20 hover:bg-theatre-black/60 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-gold-900/20 border border-gold-800/20 flex items-center justify-center mb-6 group-hover:bg-gold-500/20 group-hover:border-gold-500/30 transition-all duration-300">
                  <pillar.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story / Rehearsal Focus */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Image Container */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/80 border border-gold-900/10">
                <img
                  src="https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Actors in Rehearsal Studio"
                  className="w-full h-[520px] object-cover filter brightness-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-theatre-black via-transparent to-transparent" />
              </div>
              {/* Decorative Border Corners */}
              <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-gold-500/30 rounded-tl-lg" />
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-gold-500/30 rounded-br-lg" />
            </motion.div>

            {/* Narrative Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-medium">Who We Are</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2 mb-6">
                A Laboratory for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 font-bold">Creative Expression</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6 font-light">
                Theatre Thesis is an acting academy committed to the exploration and synthesis of classical and contemporary acting methods. Founded with the conviction that great acting is a disciplined craft rather than random luck, we provide a safe, experimental space for students to push emotional and physical boundaries.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6 font-light">
                Our curriculum merges the rigorous analytical structure of traditional theatre with the subtle, specialized requirements of screen acting. Under close mentorship, students learn to interpret texts, build believable character profiles, master dialogue flow, and lose their fear of the lens or the live spotlight.
              </p>
              
              <div className="grid grid-cols-2 gap-4 border-t border-gold-950/20 pt-6">
                {[
                  'Disciplined Work ethic',
                  'Methodological Training',
                  'Active Industry Placements',
                  'Supportive Ensemble Culture'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-gray-300 font-light">
                    <CheckCircle2 className="w-4.5 h-4.5 text-gold-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology Section (Interactive Tabs) */}
      <section className="py-24 bg-theatre-dark/20 border-t border-b border-gold-950/20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-950/5 via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-medium">Inside the Classroom</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">Acting Methodologies</h2>
            <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto font-light">
              We do not restrict our students to one narrow school of thought. We pull the best elements from various systems to build versatile actors.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Tabs List */}
            <div className="lg:col-span-4 space-y-3">
              {methodologies.map((method) => {
                const isSelected = activeTab === method.id;
                return (
                  <button
                    key={method.id}
                    onClick={() => setActiveTab(method.id)}
                    className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                      isSelected
                        ? 'bg-gradient-to-r from-gold-950/40 to-gold-900/20 border-gold-500/40 text-white shadow-lg shadow-black/20'
                        : 'bg-theatre-black/40 border-gold-950/10 text-gray-400 hover:text-gray-200 hover:border-gold-950/35'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${
                        isSelected ? 'bg-gold-500/20 border-gold-500/30 text-gold-400' : 'bg-gold-900/10 border-gold-950/20 text-gray-500'
                      }`}>
                        <method.icon className="w-4 h-4" />
                      </div>
                      <div className="font-display font-medium text-sm sm:text-base">
                        {method.name}
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isSelected ? 'translate-x-1 text-gold-400' : 'text-gray-600'}`} />
                  </button>
                );
              })}
            </div>

            {/* Tab Details */}
            <div className="lg:col-span-8">
              {methodologies.map((method) => {
                if (method.id !== activeTab) return null;
                return (
                  <motion.div
                    key={method.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-theatre-black/40 border border-gold-900/10 rounded-2xl p-8 lg:p-10 shadow-xl"
                  >
                    <span className="text-gold-400 text-xs font-semibold uppercase tracking-wider block mb-2">{method.tagline}</span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6 border-b border-gold-950/20 pb-4">
                      {method.name}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base font-light mb-8">
                      {method.desc}
                    </p>
                    <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
                      Key Focus Areas
                    </h4>
                    <ul className="space-y-3.5">
                      {method.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-gray-400 font-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0 mt-2" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-medium">Our Mentors</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">The Faculty</h2>
            <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto font-light">
              Learn from active industry practitioners dedicated to transferring practical skills to the next generation of actors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {faculty.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-theatre-dark/20 border border-gold-900/10 rounded-2xl overflow-hidden hover:border-gold-500/30 transition-all duration-500"
              >
                <div className="h-80 overflow-hidden relative border-b border-gold-950/20">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover filter brightness-95 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-theatre-black/90 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <span className="px-2.5 py-1 bg-gold-950/80 border border-gold-500/20 rounded text-[10px] text-gold-400 font-medium tracking-wider uppercase">
                      {member.role}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  
                  <div className="border-t border-gold-950/20 pt-4">
                    <span className="text-[10px] text-gray-500 uppercase font-semibold tracking-wider block mb-2">Areas of Expertise</span>
                    <div className="flex flex-wrap gap-1.5">
                      {member.specialties.map((spec) => (
                        <span key={spec} className="px-2 py-1 bg-gold-950/20 border border-gold-900/10 rounded text-[10px] text-gold-500 font-light">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Spaces Showcase */}
      <section className="py-24 bg-theatre-dark/10 border-t border-b border-gold-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-medium">The Studio Environment</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">Creative Spaces</h2>
            <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto font-light">
              Explore our custom-built locations tailored specifically for movement, performance shows, and live camera workshops.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {spaces.map((space, i) => (
              <motion.div
                key={space.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative bg-theatre-black/40 border border-gold-900/10 rounded-2xl overflow-hidden hover:border-gold-500/20 transition-all duration-500"
              >
                <div className="h-56 relative overflow-hidden">
                  <img
                    src={space.image}
                    alt={space.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-theatre-black via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                    {space.name}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-4 font-light">
                    {space.desc}
                  </p>
                  <div className="flex items-center gap-1.5 text-[10px] text-gold-500 font-medium tracking-wide uppercase border-t border-gold-950/20 pt-4">
                    <MapPin className="w-3.5 h-3.5" />
                    {space.specs}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-medium">Evolution</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">The Studio Milestones</h2>
          </div>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold-900/20 -translate-x-[0.5px]" />

            <div className="space-y-16 relative">
              {timeline.map((item, i) => {
                const isEven = i % 2 === 0;
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.6 }}
                    className={`relative flex flex-col md:flex-row items-stretch ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Node Dot */}
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gold-500 rounded-full -translate-x-1.5 mt-2 z-20 ring-4 ring-theatre-black" />

                    {/* Content Box */}
                    <div className={`ml-8 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-10 text-left' : 'md:pr-10 md:text-right'}`}>
                      <div className="inline-flex items-center gap-1.5 bg-gold-950/30 border border-gold-500/20 px-3.5 py-1 rounded-full text-gold-400 font-display text-xs font-bold mb-3">
                        {item.year}
                      </div>
                      <h3 className="font-display text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed font-light">{item.desc}</p>
                    </div>

                    {/* Spacer for structural balance */}
                    <div className="hidden md:block md:w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Stats */}
      <section className="relative py-20 bg-transparent border-t border-gold-950/20 border-b">
        <div className="absolute inset-0 bg-hero-overlay opacity-30" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8"
          >
            {[
              { value: 500, suffix: '+', label: 'Students Trained' },
              { value: 5, suffix: '+', label: 'Years of Experience' },
              { value: 50, suffix: '+', label: 'Stage Shows' },
              { value: 15, suffix: '', label: 'Service Programs' }
            ].map((stat, i) => (
              <motion.div key={stat.label} variants={fadeInUp} custom={i} className="text-center">
                <div className="font-display text-4xl sm:text-5xl font-extrabold text-gold-400 mb-3 tracking-tight">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-400 text-xs uppercase tracking-[0.2em] font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founder Quote section */}
      <section className="py-24 bg-transparent relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Quote className="w-12 h-12 text-gold-500/20 mx-auto mb-6" />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-xl sm:text-2xl italic text-gray-300 leading-relaxed mb-8"
          >
            &ldquo;Acting is not about pretending. It is finding the common truth in experiences that appear completely different on the surface. We teach you to seek that truth.&rdquo;
          </motion.p>
          <div className="text-gold-400 text-sm font-semibold tracking-wider uppercase">— NEERAJ SAINI, FOUNDER</div>
        </div>
      </section>
    </div>
  );
}
