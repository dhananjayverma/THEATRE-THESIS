import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Clock,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { supabase } from '../lib/supabase';

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

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    course: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert({
        name: form.name,
        phone: form.phone,
        course: form.course,
        message: form.message || null,
      });

    if (dbError) {
      setError('Something went wrong. Please try again.');
      setLoading(false);
      return;
    }

    setSubmitted(true);
    setLoading(false);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', phone: '', course: '', message: '' });
    }, 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-transparent text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/225228/pexels-photo-225228.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-theatre-black/90 via-theatre-blood/70 to-theatre-black/85" />
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
              Get in Touch
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-3">
              Contact{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                Us
              </span>
            </h1>
            <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
              Ready to start your acting journey? Reach out to us for enrollment,
              inquiries, or any questions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info Cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              {[
                { icon: Phone, title: 'Phone', lines: ['+91 XXXXX XXXXX'], subtitle: 'Call us directly' },
                { icon: MessageCircle, title: 'WhatsApp', lines: ['+91 XXXXX XXXXX'], subtitle: 'Quick messaging' },
                { icon: Mail, title: 'Email', lines: ['info@theatrethesis.com'], subtitle: 'Send us an email' },
                { icon: MapPin, title: 'Address', lines: ['Theatre Thesis Acting Studio', 'India'], subtitle: 'Visit our studio' },
                { icon: Clock, title: 'Working Hours', lines: ['Mon - Sat: 10:00 AM - 7:00 PM', 'Sunday: By Appointment'], subtitle: 'Studio schedule' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  custom={i}
                  className="group bg-theatre-dark/50 border border-gold-900/20 rounded-xl p-6 hover:border-gold-500/30 transition-all duration-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-gold-900/30 border border-gold-800/30 flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 group-hover:border-gold-500/30 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <h3 className="font-display text-white font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">{item.subtitle}</p>
                      {item.lines.map((line) => (
                        <p key={line} className="text-gray-300 text-sm">{line}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="bg-theatre-dark/50 border border-gold-900/20 rounded-2xl p-8 sm:p-10">
                <h2 className="font-display text-2xl font-bold text-white mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-400 text-sm mb-8">
                  Fill out the form below and we&rsquo;ll get back to you shortly.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <CheckCircle className="w-16 h-16 text-gold-400 mx-auto mb-4" />
                    <h3 className="font-display text-xl font-semibold text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-400 text-sm">
                      We&rsquo;ll get back to you soon. Thank you for your interest!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {error && (
                      <div className="flex items-center gap-2 p-3 bg-red-900/20 border border-red-800/30 rounded-lg text-red-400 text-sm">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {error}
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 bg-theatre-black/60 border border-gold-900/30 rounded-lg text-white placeholder:text-gray-600 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/30 transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 bg-theatre-black/60 border border-gold-900/30 rounded-lg text-white placeholder:text-gray-600 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/30 transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Course Interested In</label>
                      <select
                        name="course"
                        value={form.course}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-theatre-black/60 border border-gold-900/30 rounded-lg text-white focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/30 transition-all duration-300 appearance-none"
                      >
                        <option value="" disabled>Select a course</option>
                        <option value="beginner">Beginner Acting Course</option>
                        <option value="theatre">Theatre Acting Workshop</option>
                        <option value="camera">Camera Acting Training</option>
                        <option value="voice">Voice & Body Training</option>
                        <option value="weekend">Weekend Workshop</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your goals or any questions..."
                        className="w-full px-4 py-3 bg-theatre-black/60 border border-gold-900/30 rounded-lg text-white placeholder:text-gray-600 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/30 transition-all duration-300 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-theatre-black font-bold text-sm uppercase tracking-wider rounded-lg hover:from-gold-500 hover:to-gold-400 transition-all duration-300 shadow-lg shadow-gold-900/30 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-theatre-black/30 border-t-theatre-black rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Submit
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-medium">
              Find Us
            </span>
            <h2 className="font-display text-3xl font-bold mt-3">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                Location
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-gold-900/20 shadow-2xl shadow-black/40 h-96"
          >
            <div className="w-full h-full bg-theatre-dark/80 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gold-500/40 mx-auto mb-3" />
                <p className="text-gray-400 text-sm">
                  Theatre Thesis Acting Studio, India
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Google Maps integration available on setup
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
