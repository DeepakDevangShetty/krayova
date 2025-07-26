import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import ContentModal from '@/components/content-modal';

export default function CreativeSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section 
      ref={ref}
      className={`py-20 bg-gray-50 fade-in-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Abstract geometric shapes with colorful light effects" 
              className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-6 leading-tight">
              CREATIVE WEB<br />
              <span className="text-orange-500">DESIGN</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team crafts engaging and intuitive websites tailored<br />
              to your brand's needs. We combine innovative design with<br />
              seamless functionality to help you stand out online.
            </p>
            <Button 
              className="bg-gray-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
              onClick={() => setIsModalOpen(true)}
              data-testid="button-our-services"
            >
              OUR SERVICES
            </Button>
          </motion.div>
        </div>
      </div>
      
      <ContentModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type="our-services"
      />
    </section>
  );
}
