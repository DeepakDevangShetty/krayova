import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import ContentModal from '@/components/content-modal';

const services = [
  {
    title: 'WEB DESIGN',
    description: 'Creative and interactive website design services.',
    buttonText: 'LEARN MORE',
    buttonType: 'learn-more' as const,
    image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    alt: 'Dynamic web design interface with flowing data streams',
  },
  {
    title: 'SEO OPTIMIZATION',
    description: "Improve your website's search engine ranking.",
    buttonText: 'BOOST VISIBILITY',
    buttonType: 'boost-visibility' as const,
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    alt: 'SEO analytics dashboard with colorful data visualization',
  },
  {
    title: 'DIGITAL MARKETING',
    description: 'Strategies to enhance your online presence.',
    buttonText: 'GROW AUDIENCE',
    buttonType: 'grow-audience' as const,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    alt: 'Digital marketing concept with wireframes and user journey',
  },
];

export default function ServicesSection() {
  const [modalOpen, setModalOpen] = useState<string | null>(null);
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section 
      ref={ref}
      className={`py-20 bg-gray-100 fade-in-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-5xl font-black text-gray-800 mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          SERVICES
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              data-testid={`service-card-${index}`}
            >
              <img 
                src={service.image}
                alt={service.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Button 
                  className="bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-all duration-300"
                  onClick={() => setModalOpen(service.buttonType)}
                  data-testid={`button-${service.buttonText.toLowerCase().replace(' ', '-')}`}
                >
                  {service.buttonText}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {modalOpen && (
        <ContentModal 
          isOpen={true}
          onClose={() => setModalOpen(null)}
          type={modalOpen as any}
        />
      )}
    </section>
  );
}
