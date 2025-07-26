import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="text-white text-lg" />
              </div>
              <span className="text-2xl font-bold">KRAYOVA</span>
            </div>
            <p className="text-gray-400">BANGALORE</p>
            <p className="text-gray-400">+91 123456789</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">HOURS</h3>
            <p className="text-gray-400">Monday—Friday 9am-6pm</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">SOCIAL</h3>
            <div className="space-y-2">
              <a 
                href="#" 
                className="block text-gray-400 hover:text-white transition-colors"
                data-testid="footer-facebook"
              >
                Facebook
              </a>
              <a 
                href="#" 
                className="block text-gray-400 hover:text-white transition-colors"
                data-testid="footer-instagram"
              >
                Instagram
              </a>
              <a 
                href="#" 
                className="block text-gray-400 hover:text-white transition-colors"
                data-testid="footer-tiktok"
              >
                TikTok
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
