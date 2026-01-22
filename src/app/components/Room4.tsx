import { useState } from 'react';
import { motion } from 'motion/react';
import { Square } from 'lucide-react';

interface Room4Props {
  username: string;
  onComplete: (answer: string) => void;
}

export default function Room4({ username, onComplete }: Room4Props) {
  const [input, setInput] = useState('');
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
          <span>ROOM 4 / 6</span>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-neutral-900 border border-yellow-900/30 p-6 md:p-12 rounded-sm relative overflow-hidden"
        >
          <motion.div
            animate={{
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute inset-0 bg-yellow-500"
          />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 mb-8"
            >
              <Square className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-yellow-400" />
              <h2 className="text-xl md:text-2xl text-neutral-200 tracking-wider">
                ROOM 4 — THE DOUBLE NEGATION
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <p className="text-neutral-400 text-xs md:text-sm mb-6 tracking-wide">
                Theme: Linguistic collapse
              </p>

              <div className="bg-neutral-950 border border-neutral-800 p-6 md:p-8 mb-6 space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-base md:text-lg text-neutral-300 leading-relaxed"
                >
                  "Do not enter a number that is not incorrect."
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="border-l-2 border-neutral-700 pl-4 space-y-2 text-xs md:text-sm text-neutral-500"
                >
                  <p>"Not incorrect" = correct</p>
                  <p>"Do not enter a correct number"</p>
                  <p>So you must enter an incorrect number.</p>
                </motion.div>

                {!showSecondLine && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    onClick={() => setShowSecondLine(true)}
                    className="text-xs text-neutral-600 hover:text-neutral-500 transition-colors underline"
                  >
                    But wait...
                  </motion.button>
                )}

                {showSecondLine && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-neutral-900 border border-yellow-900/50 p-4 md:p-6"
                  >
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-yellow-400 text-sm md:text-base mb-3"
                    >
                      "Incorrect numbers are rejected."
                    </motion.p>
                    <p className="text-neutral-600 text-xs italic">
                      So numbers fail. You must enter something that is not a number.
                    </p>
                  </motion.div>
                )}
              </div>
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
                  placeholder="Not a number..."
                  disabled={isSubmitting}
                  className="w-full bg-neutral-950 border border-neutral-700 text-neutral-100 px-4 py-3 md:py-4 rounded-sm focus:outline-none focus:border-yellow-400/50 transition-all text-base md:text-lg font-mono disabled:opacity-50"
                  autoFocus
                />
                <p className="text-xs text-neutral-600 mt-2 italic">
                  What do you call a state where numbers cannot exist?
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
