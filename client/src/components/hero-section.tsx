import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ContentModal from '@/components/content-modal';

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const particles = Array.from({ length: 15 }, (_, i) => i);

  return (
    <section 
      id="home" 
      className="min-h-screen relative gradient-bg flex items-center justify-center text-white overflow-hidden"
    >
      {/* Enhanced Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((i) => (
          <motion.div
            key={i}
            className="particle"
            style={{ 
              left: `${5 + (i * 6)}%`,
              top: `${10 + (i * 5)}%`
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 8 + (i * 0.5),
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className={`absolute w-20 h-20 ${i % 2 === 0 ? 'bg-blue-500/20' : 'bg-purple-500/20'} ${i % 3 === 0 ? 'rounded-full' : 'rounded-lg'} backdrop-blur-sm`}
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 2,
            }}
          />
        ))}
      </div>
      
      {/* Hero Content */}
      <motion.div 
        className="text-center z-10 px-4 relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Glowing backdrop */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl blur-3xl"></div>
        
        <motion.h1 
          className="text-6xl md:text-8xl font-black mb-6 leading-tight tracking-tight text-glow relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            CREATIVE DIGITAL
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            SOLUTIONS
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90 relative z-10"
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
          className="relative z-10"
        >
          <Button 
            className="glassmorphism text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-white/30"
            onClick={() => setIsModalOpen(true)}
            data-testid="button-get-started"
          >
            <span className="flex items-center gap-2">
              Get Started
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </Button>
        </motion.div>
      </motion.div>
      
      <ContentModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type="get-started"
      />
    </section>
  );
}
