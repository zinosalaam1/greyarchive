import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock } from 'lucide-react';

interface WelcomePageProps {
  onStart: (username: string) => void;
}

export default function WelcomePage({ onStart }: WelcomePageProps) {
  const [username, setUsername] = useState('');
  const [showWarning, setShowWarning] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim().length > 0) {
      onStart(username.trim());
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="size-full min-h-screen flex items-center justify-center p-4 md:p-8"
    >
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="inline-block mb-6"
          >
            <Lock className="w-16 h-16 md:w-24 md:h-24 text-neutral-400" strokeWidth={1} />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-5xl lg:text-6xl mb-4 tracking-wider font-light"
          >
            ⛓️ TOUR ARCADE PRESENTS
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl mb-6 tracking-widest"
          >
            THE GREY ARCHIVE
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="space-y-3 text-neutral-400 text-sm md:text-base"
          >
            <p>Estimated pass rate: ~10%</p>
            <p className="text-xs md:text-sm">Style: Minimalist, meta, memory-hostile</p>
            <p className="italic text-neutral-500">Rule: Using all the information guarantees failure.</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="bg-neutral-900 border border-neutral-800 p-6 md:p-8 rounded-sm"
        >
          <motion.p 
            className="text-center text-neutral-300 mb-8 text-lg md:text-xl italic"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            "Not everything here is meant to be solved."
          </motion.p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm text-neutral-400 mb-2 tracking-wider">
                IDENTIFY YOURSELF
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  if (showWarning) setShowWarning(false);
                }}
                onFocus={() => setShowWarning(true)}
                placeholder="Enter username..."
                className="w-full bg-neutral-950 border border-neutral-700 text-neutral-100 px-4 py-3 md:py-4 rounded-sm focus:outline-none focus:border-neutral-500 transition-all text-base md:text-lg placeholder:text-neutral-700"
                maxLength={20}
              />
              <AnimatePresence>
                {showWarning && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-xs text-neutral-600 mt-2 italic"
                  >
                    Your name will be remembered. Or forgotten.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              type="submit"
              disabled={username.trim().length === 0}
              className="w-full bg-neutral-800 hover:bg-neutral-700 disabled:bg-neutral-900 disabled:text-neutral-700 text-neutral-100 py-3 md:py-4 rounded-sm transition-all tracking-widest text-sm md:text-base border border-neutral-700 disabled:border-neutral-800"
              whileHover={username.trim().length > 0 ? { scale: 1.02 } : {}}
              whileTap={username.trim().length > 0 ? { scale: 0.98 } : {}}
            >
              ENTER THE ARCHIVE
            </motion.button>
          </form>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-center text-neutral-600 text-xs mt-6"
          >
            There are 6 rooms. Each room gives you more information than you should use.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}