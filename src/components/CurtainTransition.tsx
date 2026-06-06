import { motion } from 'framer-motion';

export default function CurtainTransition() {
  return (
    <div className="fixed inset-0 z-[100] pointer-events-none flex">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{ duration: 1, ease: [0.77, 0, 0.175, 1], delay: 0.3 }}
        className="w-1/2 h-full bg-theatre-maroon"
      />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '100%' }}
        transition={{ duration: 1, ease: [0.77, 0, 0.175, 1], delay: 0.3 }}
        className="w-1/2 h-full bg-theatre-wine"
      />
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 1.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="font-display text-gold-400 text-2xl sm:text-3xl font-bold tracking-widest"
        >
          THEATRE THESIS
        </motion.div>
      </motion.div>
    </div>
  );
}
