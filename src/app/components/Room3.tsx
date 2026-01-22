import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Square } from 'lucide-react';

interface Room3Props {
  username: string;
  onComplete: (answer: string) => void;
}

export default function Room3({ username, onComplete }: Room3Props) {
  const [input, setInput] = useState('');
  const [showWords, setShowWords] = useState(true);
  const [showInstruction, setShowInstruction] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Flash the words for 3 seconds
    const timer = setTimeout(() => {
      setShowWords(false);
      setTimeout(() => {
        setShowInstruction(true);
      }, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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
          <span>ROOM 3 / 6</span>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-neutral-900 border border-green-900/30 p-6 md:p-12 rounded-sm relative overflow-hidden"
        >
          <motion.div
            animate={{
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute inset-0 bg-green-500"
          />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 mb-8"
            >
              <Square className="w-5 h-5 md:w-6 md:h-6 text-green-400 fill-green-400" />
              <h2 className="text-xl md:text-2xl text-neutral-200 tracking-wider">
                ROOM 3 — THE DAMAGED MEMORY
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <p className="text-neutral-400 text-xs md:text-sm mb-6 tracking-wide">
                Theme: Retroactive editing
              </p>

              <div className="bg-neutral-950 border border-neutral-800 p-8 md:p-12 mb-6 min-h-[200px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {showWords && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex gap-6 md:gap-12"
                    >
                      <motion.p
                        animate={{
                          opacity: [1, 0.5, 1],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                        }}
                        className="text-2xl md:text-4xl text-neutral-300 tracking-widest font-mono"
                      >
                        LEFT
                      </motion.p>
                      <motion.p
                        animate={{
                          opacity: [1, 0.5, 1],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: 0.3,
                        }}
                        className="text-2xl md:text-4xl text-neutral-300 tracking-widest font-mono"
                      >
                        RIGHT
                      </motion.p>
                      <motion.p
                        animate={{
                          opacity: [1, 0.5, 1],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: 0.6,
                        }}
                        className="text-2xl md:text-4xl text-neutral-300 tracking-widest font-mono"
                      >
                        CENTER
                      </motion.p>
                    </motion.div>
                  )}
                  
                  {!showWords && !showInstruction && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 0.5 }}
                      className="text-neutral-600 text-lg"
                    >
                      ...
                    </motion.div>
                  )}

                  {showInstruction && (
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-neutral-400 text-base md:text-lg"
                    >
                      "Enter what you lost."
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {showInstruction && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-neutral-500 text-xs md:text-sm italic"
                >
                  Not what you saw. What you lost.
                </motion.p>
              )}
            </motion.div>

            {showInstruction && (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label className="block text-xs text-neutral-500 mb-2 tracking-wider">
                    YOUR ANSWER
                  </label>
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="What did you lose?"
                    disabled={isSubmitting}
                    className="w-full bg-neutral-950 border border-neutral-700 text-neutral-100 px-4 py-3 md:py-4 rounded-sm focus:outline-none focus:border-green-400/50 transition-all text-base md:text-lg font-mono disabled:opacity-50"
                    autoFocus
                  />
                  <p className="text-xs text-neutral-600 mt-2 italic">
                    When direction disappears, what is lost?
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
              </motion.form>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
