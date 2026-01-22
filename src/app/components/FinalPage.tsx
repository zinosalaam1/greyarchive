import { motion } from 'motion/react';
import { Unlock, RotateCcw } from 'lucide-react';

interface FinalPageProps {
  username: string;
  answers: string[];
}

export default function FinalPage({ username, answers }: FinalPageProps) {
  // Calculate final code
  const firstAnswer = answers[0] || '...';
  const secondAnswer = answers[1] || '?';
  
  const firstDigit = firstAnswer === '...' ? '0' : '?';
  const secondDigit = secondAnswer === '4' ? '4' : secondAnswer;
  const finalCode = `${firstDigit}${secondDigit}`;

  const isPerfect = finalCode === '04';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="size-full min-h-screen flex items-center justify-center p-4 md:p-8"
    >
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
          className="text-center"
        >
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
              }}
              className="inline-block mb-6"
            >
              <Unlock className="w-16 h-16 md:w-24 md:h-24 text-neutral-400" strokeWidth={1} />
            </motion.div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl mb-4 text-neutral-200 tracking-wider">
              {isPerfect ? 'ARCHIVE UNLOCKED' : 'ARCHIVE ACCESSED'}
            </h1>
            <p className="text-neutral-500 text-sm md:text-base">
              {username}, your journey through the Grey Archive is complete.
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
            className={`bg-neutral-900 border ${isPerfect ? 'border-green-900/50' : 'border-neutral-800'} p-8 md:p-16 rounded-sm mb-8 relative overflow-hidden`}
          >
            {isPerfect && (
              <motion.div
                animate={{
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute inset-0 bg-green-500"
              />
            )}

            <div className="relative z-10">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-neutral-500 text-xs md:text-sm mb-4 tracking-widest"
              >
                FINAL CODE
              </motion.p>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  delay: 1,
                  type: 'spring',
                  stiffness: 200,
                  damping: 15
                }}
                className="text-7xl md:text-9xl font-mono mb-6"
              >
                <motion.span
                  animate={{
                    color: isPerfect ? ['#a3a3a3', '#22c55e', '#a3a3a3'] : ['#a3a3a3'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  {finalCode}
                </motion.span>
              </motion.div>

              {isPerfect ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="space-y-4"
                >
                  <p className="text-green-400 text-lg md:text-xl">
                    Perfect Minimalism Achieved
                  </p>
                  <p className="text-neutral-500 text-xs md:text-sm italic">
                    You understood that less is more. You resisted the urge to explain.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="space-y-4"
                >
                  <p className="text-neutral-400 text-lg md:text-xl">
                    Archive Accessed
                  </p>
                  <p className="text-neutral-600 text-xs md:text-sm italic">
                    The archive reveals itself differently to each visitor.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
          >
            <div className="bg-neutral-900 border border-neutral-800 p-4 md:p-6 rounded-sm">
              <p className="text-neutral-600 text-xs mb-2 tracking-wider">COMPLETION TIME</p>
              <p className="text-neutral-300 text-xl md:text-2xl font-mono">
                {new Date().toLocaleTimeString()}
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-4 md:p-6 rounded-sm">
              <p className="text-neutral-600 text-xs mb-2 tracking-wider">ROOMS CLEARED</p>
              <p className="text-neutral-300 text-xl md:text-2xl font-mono">6 / 6</p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-4 md:p-6 rounded-sm">
              <p className="text-neutral-600 text-xs mb-2 tracking-wider">SUCCESS RATE</p>
              <p className="text-neutral-300 text-xl md:text-2xl font-mono">
                {isPerfect ? '~10%' : '~40%'}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="bg-neutral-900 border border-neutral-800 p-6 md:p-8 rounded-sm mb-8"
          >
            <h3 className="text-neutral-300 text-base md:text-lg mb-4 tracking-wide">YOUR ANSWERS</h3>
            <div className="grid grid-cols-1 gap-2 text-xs md:text-sm">
              {answers.map((answer, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between bg-neutral-950 border border-neutral-800 p-3 rounded-sm"
                >
                  <span className="text-neutral-600 font-mono">Room {index + 1}</span>
                  <span className="text-neutral-400 font-mono">{answer || '(no answer)'}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            onClick={() => window.location.reload()}
            className="w-full max-w-md mx-auto bg-neutral-800 hover:bg-neutral-700 text-neutral-100 py-3 md:py-4 rounded-sm transition-all tracking-widest text-sm md:text-base border border-neutral-700 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <RotateCcw className="w-4 h-4" />
            RETURN TO START
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-neutral-600 text-xs mt-8 italic"
          >
            "Not everything here is meant to be solved."
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}
