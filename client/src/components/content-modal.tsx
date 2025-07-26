import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Monitor, Search, TrendingUp, Eye, Users, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'get-started' | 'our-services' | 'learn-more' | 'boost-visibility' | 'grow-audience';
}

const modalContent = {
  'get-started': {
    title: 'Get Started with KRAYOVA',
    icon: <Lightbulb className="w-8 h-8 text-blue-500" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg text-gray-700">
          Ready to transform your digital presence? Let's begin your journey with KRAYOVA's comprehensive digital solutions.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl">
            <h4 className="font-bold text-xl mb-3 text-blue-700">Free Consultation</h4>
            <p className="text-gray-600">
              Schedule a 30-minute consultation to discuss your project needs and get personalized recommendations.
            </p>
          </div>
          <div className="bg-orange-50 p-6 rounded-xl">
            <h4 className="font-bold text-xl mb-3 text-orange-700">Project Planning</h4>
            <p className="text-gray-600">
              We'll create a detailed roadmap tailored to your business goals and timeline requirements.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <Button className="bg-blue-500 hover:bg-blue-600">Contact Us</Button>
          <Button variant="outline">View Portfolio</Button>
        </div>
      </div>
    )
  },
  'our-services': {
    title: 'Our Creative Services',
    icon: <Monitor className="w-8 h-8 text-orange-500" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg text-gray-700">
          We offer comprehensive digital solutions designed to elevate your brand and drive results.
        </p>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-bold text-lg text-gray-800">Web Design & Development</h4>
            <p className="text-gray-600">Custom websites that combine stunning visuals with seamless functionality.</p>
          </div>
          <div className="border-l-4 border-orange-500 pl-4">
            <h4 className="font-bold text-lg text-gray-800">UI/UX Design</h4>
            <p className="text-gray-600">User-centered design that creates intuitive and engaging experiences.</p>
          </div>
          <div className="border-l-4 border-teal-500 pl-4">
            <h4 className="font-bold text-lg text-gray-800">E-commerce Solutions</h4>
            <p className="text-gray-600">Complete online store development with payment integration and inventory management.</p>
          </div>
        </div>
      </div>
    )
  },
  'learn-more': {
    title: 'Web Design Excellence',
    icon: <Monitor className="w-8 h-8 text-blue-500" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg text-gray-700">
          Our web design process combines creativity with technical expertise to deliver exceptional results.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-600 font-bold">1</span>
            </div>
            <h4 className="font-semibold mb-2">Discovery</h4>
            <p className="text-sm text-gray-600">Understanding your brand and goals</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-orange-600 font-bold">2</span>
            </div>
            <h4 className="font-semibold mb-2">Design</h4>
            <p className="text-sm text-gray-600">Creating visually stunning layouts</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-teal-600 font-bold">3</span>
            </div>
            <h4 className="font-semibold mb-2">Development</h4>
            <p className="text-sm text-gray-600">Bringing designs to life with code</p>
          </div>
        </div>
      </div>
    )
  },
  'boost-visibility': {
    title: 'SEO Optimization Services',
    icon: <Search className="w-8 h-8 text-red-500" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg text-gray-700">
          Improve your website's search engine ranking and drive more organic traffic to your business.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-gray-800">Technical SEO</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                Site speed optimization
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                Mobile responsiveness
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                Schema markup implementation
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-gray-800">Content Strategy</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                Keyword research & analysis
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                Content optimization
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                Local SEO strategies
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  'grow-audience': {
    title: 'Digital Marketing Solutions',
    icon: <TrendingUp className="w-8 h-8 text-green-500" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg text-gray-700">
          Comprehensive digital marketing strategies to enhance your online presence and grow your audience.
        </p>
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <Eye className="w-6 h-6 text-blue-600" />
              <h4 className="font-bold text-lg text-blue-800">Social Media Marketing</h4>
            </div>
            <p className="text-blue-700">Engage your audience across all major social platforms with compelling content and strategic campaigns.</p>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-6 h-6 text-green-600" />
              <h4 className="font-bold text-lg text-green-800">Audience Growth</h4>
            </div>
            <p className="text-green-700">Build a loyal community around your brand with targeted content and engagement strategies.</p>
          </div>
        </div>
      </div>
    )
  }
};

export default function ContentModal({ isOpen, onClose, type }: ContentModalProps) {
  const content = modalContent[type];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {content.icon}
                  <h2 className="text-2xl font-bold text-gray-800">{content.title}</h2>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="rounded-full"
                  data-testid="modal-close"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <div className="p-6">
              {content.content}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}