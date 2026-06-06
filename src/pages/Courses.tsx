import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Star,
  Theater,
  Camera,
  Mic,
  Clock,
  BookOpen,
  ChevronRight,
  Clapperboard,
} from 'lucide-react';
import FaqAccordion from '../components/FaqAccordion';

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
  visible: { transition: { staggerChildren: 0.15 } },
};

const courses = [
  {
    icon: Star,
    title: 'Beginner Acting Course',
    duration: '3 Months',
    level: 'Beginner',
    description:
      'Start your acting journey with foundational skills. Perfect for those with no prior experience who want to explore the world of performance.',
    topics: ['Basics of Acting', 'Expressions & Emotions', 'Dialogue Delivery', 'Stage Confidence'],
    highlights: ['No experience required', 'Supportive group environment', 'End-of-course showcase'],
    gradient: 'from-gold-900/30 to-gold-950/10',
    border: 'border-gold-800/30',
    image: 'https://images.pexels.com/photos/7149182/pexels-photo-7149182.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Theater,
    title: 'Theatre Acting Workshop',
    duration: '6 Months',
    level: 'Intermediate',
    description:
      'Deep-dive into the world of theatre with intensive scene work, improvisation, and live performance preparation.',
    topics: ['Character Building', 'Improvisation', 'Scene Work', 'Stage Performance'],
    highlights: ['Live stage performance', 'Classical & modern techniques', 'Industry guest sessions'],
    gradient: 'from-primary-800/30 to-primary-950/10',
    border: 'border-primary-700/30',
    image: 'https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Camera,
    title: 'Camera Acting Training',
    duration: '3 Months',
    level: 'Intermediate',
    description:
      'Master the art of screen acting. Learn audition techniques, camera presence, and the nuances of on-screen performance.',
    topics: ['Audition Techniques', 'Screen Presence', 'Camera Facing', 'Monologue Practice'],
    highlights: ['Mock auditions', 'Showreel preparation', 'Camera & lighting basics'],
    gradient: 'from-gold-900/30 to-theatre-dark/50',
    border: 'border-gold-800/30',
    image: 'https://images.pexels.com/photos/3062547/pexels-photo-3062547.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Mic,
    title: 'Voice & Body Training',
    duration: '3 Months',
    level: 'All Levels',
    description:
      'Develop vocal power and physical expressiveness. Essential training for any actor wanting to command the stage and screen.',
    topics: ['Voice Modulation', 'Speech Clarity', 'Physical Discipline', 'Movement Training'],
    highlights: ['Breathing techniques', 'Body language mastery', 'Accent & dialect work'],
    gradient: 'from-primary-900/30 to-theatre-dark/50',
    border: 'border-primary-700/30',
    image: 'https://images.pexels.com/photos/3785810/pexels-photo-3785810.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const faqItems = [
  {
    question: 'Do I need any prior acting experience to join?',
    answer: 'No prior experience is required for our Beginner Acting Course. We welcome complete beginners and design our foundational course to build skills from the ground up. For intermediate courses like Theatre Workshop and Camera Acting, some basic experience or completion of the beginner course is recommended.',
  },
  {
    question: 'What is the class size for each course?',
    answer: 'We maintain small batch sizes of 10-15 students per batch to ensure personal attention and quality training. This allows our instructors to give individual feedback and guidance to every student.',
  },
  {
    question: 'Are there any performance opportunities during the course?',
    answer: 'Yes! Every course culminates in a live stage showcase or camera performance where students demonstrate their skills. Additionally, we organize regular workshop performances, scene presentations, and open mic nights throughout the training period.',
  },
  {
    question: 'Can I join weekend batches if I work during the week?',
    answer: 'Absolutely. We offer dedicated weekend batches for working professionals and students. Weekend workshops run on Saturday and Sunday with flexible timing options. Contact us for the current weekend schedule.',
  },
  {
    question: 'Is there a certificate provided after course completion?',
    answer: 'Yes, all students who successfully complete their course and the final showcase receive a Theatre Thesis certificate of completion. This certificate is recognized in the industry and can be included in your acting portfolio.',
  },
  {
    question: 'What should I wear and bring to the classes?',
    answer: 'Wear comfortable clothing that allows free movement — track pants, t-shirts, and flat-soled shoes are ideal. Bring a notebook, pen, and a water bottle. All training materials and scripts are provided by the studio.',
  },
  {
    question: 'How do I enroll or get more information about fees?',
    answer: 'You can fill out the contact form on our website, call us directly, or send a WhatsApp message. Our team will get back to you with detailed fee structures, batch timings, and enrollment procedures within 24 hours.',
  },
];

export default function Courses() {
  return (
    <div className="bg-transparent text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2816903/pexels-photo-2816903.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Stage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-theatre-black/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-theatre-black via-transparent to-theatre-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-medium">
              Our Programs
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-3">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                Courses
              </span>
            </h1>
            <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
              Professional short-term courses designed for aspiring actors and
              performers at every level.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {courses.map((course, i) => (
              <motion.div
                key={course.title}
                variants={fadeInUp}
                custom={i}
                className={`group relative bg-gradient-to-r ${course.gradient} border ${course.border} rounded-2xl overflow-hidden hover:border-gold-500/30 transition-all duration-500`}
              >
                <div className="grid lg:grid-cols-5 gap-0">
                  <div className="lg:col-span-2 relative h-64 lg:h-auto">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-theatre-dark/80 hidden lg:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-theatre-dark/80 to-transparent lg:hidden" />
                  </div>

                  <div className="lg:col-span-3 p-8 lg:p-10">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gold-900/40 border border-gold-800/30 flex items-center justify-center">
                        <course.icon className="w-5 h-5 text-gold-400" />
                      </div>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-gold-900/30 border border-gold-800/30 rounded-full text-gold-400 text-xs uppercase tracking-wider">
                          {course.level}
                        </span>
                        <span className="px-3 py-1 bg-theatre-black/40 border border-gold-900/20 rounded-full text-gray-400 text-xs flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {course.duration}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-white mb-3">
                      {course.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {course.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-gold-400 text-xs uppercase tracking-wider font-medium mb-3">What You&rsquo;ll Learn</h4>
                        <ul className="space-y-2">
                          {course.topics.map((topic) => (
                            <li key={topic} className="text-gray-300 text-sm flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-gold-400 text-xs uppercase tracking-wider font-medium mb-3">Course Highlights</h4>
                        <ul className="space-y-2">
                          {course.highlights.map((h) => (
                            <li key={h} className="text-gray-300 text-sm flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gold-700 to-gold-600 text-theatre-black font-semibold text-sm uppercase tracking-wider rounded hover:from-gold-600 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-900/20"
                    >
                      Enroll Now
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Duration Options */}
      <section className="py-20 bg-transparent border-t border-b border-gold-900/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-medium">
              Flexible Options
            </span>
            <h2 className="font-display text-3xl font-bold mt-3">
              Course{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                Durations
              </span>
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
              { icon: Clock, title: '3 Month Course', desc: 'Intensive short-term programs for quick skill development', features: ['Fast-paced learning', 'Weekday batches', 'Certificate on completion'] },
              { icon: BookOpen, title: '6 Month Course', desc: 'Comprehensive training with in-depth practice and performance', features: ['Detailed curriculum', 'Performance showcases', 'Industry exposure'] },
              { icon: Clapperboard, title: 'Weekend Workshop', desc: 'Flexible weekend sessions for working professionals', features: ['Saturday & Sunday', 'Practical exercises', 'Open to all levels'] },
            ].map((dur, i) => (
              <motion.div
                key={dur.title}
                variants={fadeInUp}
                custom={i}
                className="bg-theatre-black/60 border border-gold-900/20 rounded-xl p-8 text-center hover:border-gold-500/30 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-full bg-gold-900/30 border border-gold-800/30 flex items-center justify-center mx-auto mb-5">
                  <dur.icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-3">{dur.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{dur.desc}</p>
                <ul className="space-y-2">
                  {dur.features.map((f) => (
                    <li key={f} className="text-gray-300 text-sm flex items-center justify-center gap-2">
                      <span className="w-1 h-1 bg-gold-500 rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-medium">
              Got Questions?
            </span>
            <h2 className="font-display text-3xl font-bold mt-3">
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                Questions
              </span>
            </h2>
          </motion.div>

          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Ready to Begin Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                Acting Journey?
              </span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Choose a course that fits your goals and schedule. Contact us to
              learn more about enrollment and batch timings.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-theatre-black font-bold text-sm uppercase tracking-wider rounded hover:from-gold-500 hover:to-gold-400 transition-all duration-300 shadow-xl shadow-gold-900/40"
            >
              Enroll Now
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
