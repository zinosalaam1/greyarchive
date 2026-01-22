import { useState } from 'react';
import { motion } from 'motion/react';
import { Square } from 'lucide-react';

interface Room6Props {
  username: string;
  answers: string[];
  onComplete: () => void;
}

export default function Room6({ username, answers, onComplete }: Room6Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContinue = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      onComplete();
    }, 1000);
  };

  const roomLabels = [
    'Room 1: The Entry Log',
    'Room 2: The Crooked List',
    'Room 3: The Damaged Memory',
    'Room 4: The Double Negation',
    'Room 5: The Order of Events'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="size-full min-h-screen flex items-center justify-center p-4 md:p-8"
    >
      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-6 flex items-center justify-between text-neutral-500 text-sm"
        >
          <span className="tracking-wider">USER: {username}</span>
          <span>ROOM 6 / 6</span>
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
                ROOM 6 — THE FINAL FILTER
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <p className="text-neutral-400 text-xs md:text-sm mb-6 tracking-wide">
                Theme: Discarding success
              </p>

              <div className="bg-neutral-950 border border-neutral-800 p-6 md:p-8 mb-6">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-neutral-300 mb-6 text-sm md:text-base"
                >
                  The system shows your answers:
                </motion.p>

                <div className="space-y-4">
                  {answers.map((answer, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.2 }}
                      className="flex items-center gap-4 bg-neutral-900 border border-neutral-700 p-3 md:p-4 rounded-sm"
                    >
                      <span className="text-neutral-600 text-xs md:text-sm font-mono w-32 md:w-40 flex-shrink-0">
                        {roomLabels[index]}
                      </span>
                      <span className="text-neutral-300 font-mono text-sm md:text-base flex-1 truncate">
                        {answer || '(empty)'}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="bg-neutral-900 border border-red-900/50 p-4 md:p-6 mb-6"
              >
                <motion.p
                  className="text-red-400 text-base md:text-lg mb-4"
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  "Only the answers that gave you less than you asked for may pass."
                </motion.p>

                <div className="space-y-3 text-xs md:text-sm text-neutral-500">
                  <p>Which answers provided less information than requested?</p>
                  <div className="space-y-2 pl-4 border-l-2 border-neutral-700">
                    <p>• Room 1 → {answers[0] || '(empty)'} gives nothing ✔️</p>
                    <p>• Room 2 → {answers[1] || '(empty)'} gives a count, not objects ✔️</p>
                    <p>• Room 3 → {answers[2] || '(empty)'} adds meaning ❌</p>
                    <p>• Room 4 → {answers[3] || '(empty)'} explains failure ❌</p>
                    <p>• Room 5 → {answers[4] || '(empty)'} is symbolic but exact ❌</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5 }}
                className="text-center space-y-4"
              >
                <p className="text-neutral-400 text-sm md:text-base">
                  "Translate absence into value."
                </p>
                <div className="flex items-center justify-center gap-6 text-neutral-500 text-xs md:text-sm font-mono">
                  <span>{answers[0] || '...'} = 0</span>
                  <span>|</span>
                  <span>{answers[1] || '?'} = {answers[1] || '?'}</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 4 }}
              onClick={handleContinue}
              disabled={isSubmitting}
              className="w-full bg-neutral-800 hover:bg-neutral-700 disabled:bg-neutral-900 text-neutral-100 py-3 md:py-4 rounded-sm transition-all tracking-widest text-sm md:text-base border border-neutral-700"
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? 'PROCESSING...' : 'REVEAL FINAL CODE'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
