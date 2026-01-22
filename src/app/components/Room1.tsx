import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Square } from 'lucide-react';

interface Room1Props {
  username: string;
  onComplete: (answer: string) => void;
}

export default function Room1({ username, onComplete }: Room1Props) {
  const [input, setInput] = useState('');
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [hasTyped, setHasTyped] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed((prev) => prev + 0.1);
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    // Check if answer is correct (should be "..." and submitted after 5 seconds)
    const isCorrect = input === '...' && timeElapsed >= 5;
    
    setTimeout(() => {
      onComplete(input || '...');
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!hasTyped) {
      setHasTyped(true);
    }
    setInput(e.target.value);
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
          className="mb-6 flex items-center justify-between text-neutral-500 text-sm"
        >
          <span className="tracking-wider">USER: {username}</span>
          <span className="font-mono">{timeElapsed.toFixed(1)}s</span>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-neutral-900 border border-red-900/30 p-6 md:p-12 rounded-sm relative overflow-hidden"
        >
          <motion.div
            animate={{
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute inset-0 bg-red-500"
          />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 mb-8"
            >
              <Square className="w-5 h-5 md:w-6 md:h-6 text-red-400 fill-red-400" />
              <h2 className="text-xl md:text-2xl text-neutral-200 tracking-wider">
                ROOM 1 — THE ENTRY LOG
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-6"
            >
              <p className="text-neutral-400 text-xs md:text-sm mb-4 tracking-wide">
                Theme: Overcommitment Trap
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-neutral-950 border border-neutral-800 p-6 md:p-8 mb-8"
            >
              <motion.p
                animate={{ 
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="text-2xl md:text-4xl text-center text-neutral-300 tracking-widest"
              >
                ENTER YOUR FIRST ANSWER NOW
              </motion.p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder=""
                  disabled={isSubmitting}
                  className="w-full bg-neutral-950 border border-neutral-700 text-neutral-100 px-4 py-3 md:py-4 rounded-sm focus:outline-none focus:border-red-400/50 transition-all text-base md:text-lg font-mono disabled:opacity-50"
                  autoFocus
                />
                {hasTyped && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs text-red-400/70 mt-2"
                  >
                    First answer becomes wrong...
                  </motion.p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-neutral-800 hover:bg-neutral-700 disabled:bg-neutral-900 text-neutral-100 py-3 md:py-4 rounded-sm transition-all tracking-widest text-sm md:text-base border border-neutral-700"
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
              </motion.button>
            </form>

            {timeElapsed >= 5 && !isSubmitting && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center"
              >
                <p className="text-xs text-neutral-600 italic">
                  Delay is safe...
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
