import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Square } from 'lucide-react';

interface Room2Props {
  username: string;
  onComplete: (answer: string) => void;
}

export default function Room2({ username, onComplete }: Room2Props) {
  const [input, setInput] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const items = ['IRON', 'WOOD', 'GLASS', 'SOUND', 'STONE'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      onComplete(input);
    }, 1000);
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
          <span>ROOM 2 / 6</span>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-neutral-900 border border-blue-900/30 p-6 md:p-12 rounded-sm relative overflow-hidden"
        >
          <motion.div
            animate={{
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute inset-0 bg-blue-500"
          />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 mb-8"
            >
              <Square className="w-5 h-5 md:w-6 md:h-6 text-blue-400 fill-blue-400" />
              <h2 className="text-xl md:text-2xl text-neutral-200 tracking-wider">
                ROOM 2 — THE CROOKED LIST
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <p className="text-neutral-400 text-xs md:text-sm mb-6 tracking-wide">
                Theme: Selective Attention
              </p>

              <div className="bg-neutral-950 border border-neutral-800 p-6 md:p-8 mb-6">
                <div className="space-y-3 text-center">
                  {items.map((item, index) => (
                    <motion.p
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="text-xl md:text-2xl text-neutral-300 tracking-widest font-mono"
                    >
                      {item}
                    </motion.p>
                  ))}
                </div>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-neutral-400 text-sm md:text-base mb-4"
              >
                "Remove what does not belong."
              </motion.p>

              <AnimatePresence>
                {!showHint && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 2 }}
                    onClick={() => setShowHint(true)}
                    className="text-xs text-neutral-600 hover:text-neutral-500 transition-colors underline"
                  >
                    Wait longer...
                  </motion.button>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {showHint && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-neutral-500 text-sm italic mt-4 border-l-2 border-neutral-700 pl-4"
                  >
                    "Belonging depends on weight."
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs text-neutral-500 mb-2 tracking-wider">
                  YOUR ANSWER
                </label>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter what remains..."
                  disabled={isSubmitting}
                  className="w-full bg-neutral-950 border border-neutral-700 text-neutral-100 px-4 py-3 md:py-4 rounded-sm focus:outline-none focus:border-blue-400/50 transition-all text-base md:text-lg font-mono disabled:opacity-50"
                  autoFocus
                />
                <p className="text-xs text-neutral-600 mt-2 italic">
                  Not which item, but what remains after removal...
                </p>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || !input.trim()}
                className="w-full bg-neutral-800 hover:bg-neutral-700 disabled:bg-neutral-900 disabled:text-neutral-700 text-neutral-100 py-3 md:py-4 rounded-sm transition-all tracking-widest text-sm md:text-base border border-neutral-700 disabled:border-neutral-800"
                whileHover={!isSubmitting && input.trim() ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting && input.trim() ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
