import { motion } from 'framer-motion';

const images = [
  { id: 1, url: 'https://images.unsplash.com/photo-1579165466548-022f36970e52?auto=format&fit=crop&q=80&w=800', title: 'Precision Milling' },
  { id: 2, url: 'https://images.unsplash.com/photo-1582722872447-979683159068?auto=format&fit=crop&q=80&w=800', title: 'Surgical Accuracy' },
  { id: 3, url: 'https://images.unsplash.com/photo-1519494026892-801irda3a221?auto=format&fit=crop&q=80&w=800', title: 'Dental Implant Design' },
  { id: 4, url: 'https://images.unsplash.com/photo-1629909881132-0741b0111029?auto=format&fit=crop&q=80&w=800', title: 'Custom Guides' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-accent">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-secondary"
        >
          Our Surgical Guides
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img) => (
            <motion.div
              key={img.id}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-xl shadow-2xl"
            >
              <img src={img.url} alt={img.title} className="w-full h-64 object-cover" />
              <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/80 to-transparent w-full">
                <p className="text-white font-semibold">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
