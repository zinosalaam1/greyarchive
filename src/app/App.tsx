import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import WelcomePage from '@/app/components/WelcomePage';
import IntroPage from '@/app/components/IntroPage';
import Room1 from '@/app/components/Room1';
import Room2 from '@/app/components/Room2';
import Room3 from '@/app/components/Room3';
import Room4 from '@/app/components/Room4';
import Room5 from '@/app/components/Room5';
import Room6 from '@/app/components/Room6';
import FinalPage from '@/app/components/FinalPage';

export type Answer = string;

export default function App() {
  const [currentStage, setCurrentStage] = useState<number>(0);
  const [username, setUsername] = useState<string>('');
  const [answers, setAnswers] = useState<Answer[]>([]);

  const addAnswer = (answer: string) => {
    setAnswers([...answers, answer]);
  };

  const nextStage = () => {
    setCurrentStage(currentStage + 1);
  };

  const startGame = (name: string) => {
    setUsername(name);
    setCurrentStage(1);
  };

  return (
    <div className="size-full min-h-screen bg-neutral-950 text-neutral-100 overflow-x-hidden">
      <AnimatePresence mode="wait">
        {currentStage === 0 && (
          <WelcomePage key="welcome" onStart={startGame} />
        )}
        {currentStage === 1 && (
          <IntroPage key="intro" username={username} onContinue={nextStage} />
        )}
        {currentStage === 2 && (
          <Room1 
            key="room1" 
            username={username} 
            onComplete={(answer) => {
              addAnswer(answer);
              nextStage();
            }} 
          />
        )}
        {currentStage === 3 && (
          <Room2 
            key="room2" 
            username={username}
            onComplete={(answer) => {
              addAnswer(answer);
              nextStage();
            }} 
          />
        )}
        {currentStage === 4 && (
          <Room3 
            key="room3" 
            username={username}
            onComplete={(answer) => {
              addAnswer(answer);
              nextStage();
            }} 
          />
        )}
        {currentStage === 5 && (
          <Room4 
            key="room4" 
            username={username}
            onComplete={(answer) => {
              addAnswer(answer);
              nextStage();
            }} 
          />
        )}
        {currentStage === 6 && (
          <Room5 
            key="room5" 
            username={username}
            onComplete={(answer) => {
              addAnswer(answer);
              nextStage();
            }} 
          />
        )}
        {currentStage === 7 && (
          <Room6 
            key="room6" 
            username={username}
            answers={answers}
            onComplete={nextStage} 
          />
        )}
        {currentStage === 8 && (
          <FinalPage key="final" username={username} answers={answers} />
        )}
      </AnimatePresence>
    </div>
  );
}
