import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const portfolioItems = [
  {
    title: 'E-Commerce Platform',
    description: 'Modern shopping experience',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    alt: 'Creative office environment with modern design elements',
  },
  {
    title: 'Corporate Website',
    description: 'Professional brand identity',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    alt: 'Modern workspace with design mockups and prototypes',
  },
  {
    title: 'SaaS Dashboard',
    description: 'Data visualization platform',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    alt: 'Digital marketing analytics on multiple screens',
  },
  {
    title: 'Mobile App Design',
    description: 'User-centered interface',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    alt: 'Creative team collaborating on web design project',
  },
];

export default function PortfolioSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section 
      id="portfolio"
      ref={ref}
      className={`py-20 bg-gray-800 text-white fade-in-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-5xl font-black mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          OUR WORK
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              data-testid={`portfolio-item-${index}`}
            >
              <motion.img 
                src={item.image}
                alt={item.alt}
                className="w-full h-64 object-cover rounded-lg transition-transform duration-500"
                whileHover={{ scale: 1.05 }}
              />
              <h3 className="text-xl font-bold mt-4">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
