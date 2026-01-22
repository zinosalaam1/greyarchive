import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface IntroPageProps {
  username: string;
  onContinue: () => void;
}

export default function IntroPage({ username, onContinue }: IntroPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="size-full min-h-screen flex items-center justify-center p-4 md:p-8"
    >
      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-neutral-900 border border-neutral-800 p-6 md:p-12 rounded-sm"
        >
          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl mb-8 text-neutral-300"
          >
            Welcome, <span className="text-neutral-100">{username}</span>
          </motion.h2>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-6 text-neutral-400 text-sm md:text-base"
          >
            <div className="space-y-4">
              <h3 className="text-neutral-200 text-lg md:text-xl tracking-wide">WHY MOST FAIL</h3>
              
              <p>This escape room:</p>
              
              <ul className="space-y-2 pl-6 text-xs md:text-sm">
                <motion.li 
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="list-disc"
                >
                  Punishes engagement
                </motion.li>
                <motion.li 
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="list-disc"
                >
                  Rewards restraint
                </motion.li>
                <motion.li 
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.0 }}
                  className="list-disc"
                >
                  Makes obvious answers traps
                </motion.li>
                <motion.li 
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.1 }}
                  className="list-disc"
                >
                  Requires rejecting information
                </motion.li>
                <motion.li 
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="list-disc"
                >
                  Treats clarity as danger
                </motion.li>
                <motion.li 
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.3 }}
                  className="list-disc"
                >
                  Uses meta-interpretation
                </motion.li>
                <motion.li 
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  className="list-disc"
                >
                  Attacks memory and language
                </motion.li>
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="border-t border-neutral-800 pt-6 mt-6"
            >
              <p className="text-neutral-300 mb-3">Players fail because they:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs md:text-sm">
                <p>• Try to be helpful</p>
                <p>• Try to be logical</p>
                <p>• Try to give full answers</p>
                <p>• Try to explain</p>
                <p>• Try to be right</p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="text-center italic text-neutral-500 text-base md:text-lg pt-6"
            >
              This room only rewards minimalism.
            </motion.p>
          </motion.div>

          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2 }}
            onClick={onContinue}
            className="w-full bg-neutral-800 hover:bg-neutral-700 text-neutral-100 py-3 md:py-4 rounded-sm transition-all tracking-widest text-sm md:text-base border border-neutral-700 mt-8 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            BEGIN
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
