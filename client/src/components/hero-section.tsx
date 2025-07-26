import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const particles = Array.from({ length: 9 }, (_, i) => i);

  return (
    <section 
      id="home" 
      className="min-h-screen relative gradient-bg flex items-center justify-center text-white overflow-hidden"
    >
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((i) => (
          <motion.div
            key={i}
            className="particle"
            style={{ left: `${10 + i * 10}%` }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 1,
            }}
          />
        ))}
      </div>
      
      {/* Hero Content */}
      <motion.div 
        className="text-center z-10 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Background workspace image overlay */}
        <div className="mb-8 relative">
          <img 
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
            alt="Modern digital agency workspace" 
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl opacity-20 absolute inset-0 object-cover"
          />
        </div>
        
        <motion.h1 
          className="text-6xl md:text-8xl font-black mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          CREATIVE DIGITAL<br />
          <span className="text-blue-400">SOLUTIONS</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          From design to development, we provide comprehensive digital<br />
          services tailored to your needs.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button 
            className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            data-testid="button-get-started"
          >
            Get Started
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
