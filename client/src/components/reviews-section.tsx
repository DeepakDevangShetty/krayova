import { motion } from 'framer-motion';
import { Star, StarHalf } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const reviews = [
  {
    rating: 5,
    text: "Their web design transformed our online presence. Truly creative and highly effective!",
    author: "Gautham, Bangalore",
  },
  {
    rating: 4,
    text: "I've never worked with a more innovative team. Our website engagement has skyrocketed!",
    author: "Rayaan, Delhi",
  },
  {
    rating: 4.5,
    text: "Exceptional design work that perfectly captures our brand. Highly recommend!",
    author: "Abhin, Mangalore",
  },
];

function StarRating({ rating, animated = false }: { rating: number; animated?: boolean }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="star-rating flex text-2xl">
      {[...Array(fullStars)].map((_, i) => (
        <motion.div
          key={i}
          initial={animated ? { scale: 0 } : {}}
          animate={animated ? { scale: 1 } : {}}
          transition={{ delay: i * 0.1, duration: 0.3 }}
        >
          <Star className="fill-current" />
        </motion.div>
      ))}
      {hasHalfStar && (
        <motion.div
          initial={animated ? { scale: 0 } : {}}
          animate={animated ? { scale: 1 } : {}}
          transition={{ delay: fullStars * 0.1, duration: 0.3 }}
        >
          <StarHalf className="fill-current" />
        </motion.div>
      )}
      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
        <motion.div
          key={i + fullStars + (hasHalfStar ? 1 : 0)}
          initial={animated ? { scale: 0 } : {}}
          animate={animated ? { scale: 1 } : {}}
          transition={{ delay: (fullStars + (hasHalfStar ? 1 : 0) + i) * 0.1, duration: 0.3 }}
        >
          <Star className="text-gray-300" />
        </motion.div>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section 
      ref={ref}
      className={`py-20 bg-white fade-in-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-5xl font-black text-gray-800 mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          REVIEWS
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              data-testid={`review-card-${index}`}
            >
              <div className="mb-4">
                <StarRating rating={review.rating} animated={isVisible} />
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <div className="font-semibold text-gray-800">
                {review.author}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
