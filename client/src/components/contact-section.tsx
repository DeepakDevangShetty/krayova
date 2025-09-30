import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Facebook, Twitter, Instagram } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export default function ContactSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section 
      ref={ref}
      className={`py-20 bg-gray-50 fade-in-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-5xl font-black text-gray-800 mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          VISIT US
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Contact us for inquiries about our web design and digital services. We are here to assist 
              you with your digital solutions.
            </p>
            
            <div className="space-y-4 mb-8">
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="text-blue-500 text-xl" />
                <span className="text-gray-700">BANGALORE, INDIA</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Phone className="text-blue-500 text-xl" />
                <span className="text-gray-700">krayovaofficial@gmail.com</span>
                <span className="text-gray-700">+91 7892059766</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Clock className="text-blue-500 text-xl" />
                <span className="text-gray-700">Monday—Friday [9am-6pm]</span>
              </motion.div>
            </div>
            
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: '#', testId: 'social-facebook' },
                { icon: Twitter, href: '#', testId: 'social-twitter' },
                { icon: Instagram, href: '#', testId: 'social-instagram' },
              ].map(({ icon: Icon, href, testId }, index) => (
                <motion.a
                  key={testId}
                  href={href}
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-600 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  data-testid={testId}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089974503!2d77.46612545728497!3d12.954280156632894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1643815516147!5m2!1sen!2sin"
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="KRAYOVA Location in Bangalore"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
