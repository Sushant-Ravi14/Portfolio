import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { certificates } from "../data/certificates";
import GlowCard from "./GlowCard";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  // Stop background scrolling when modal is open
  if (selectedCert) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-darker/30">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <span className="text-white tracking-widest uppercase text-sm font-semibold mb-2 block">
            Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-bold"><span className="text-gradient">Certifications</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setSelectedCert(cert)}
              className="h-full"
            >
              <GlowCard className="group cursor-pointer hover:-translate-y-2 flex flex-col h-full !p-0">
              {/* Image Preview Area */}
              <div className="relative h-48 overflow-hidden bg-white/5 border-b border-white/10 flex items-center justify-center p-4">
                 <img 
                   src={cert.image} 
                   alt={cert.title} 
                   className="h-full w-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" 
                   onError={(e) => { 
                     e.target.onerror = null; 
                     e.target.src="https://via.placeholder.com/400x300/111/fff?text=Click+to+View" 
                   }} 
                 />
                 <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium px-5 py-2 rounded-full border border-primary/50 bg-primary/20 backdrop-blur-sm shadow-lg">
                      View Certificate
                    </span>
                 </div>
              </div>
              
              {/* Content Area */}
              <div className="p-6 flex-grow flex flex-col gap-3 relative">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   {/* Abstract decoration */}
                   <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-primary"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors leading-tight pr-8">{cert.title}</h3>
                <p className="text-sm font-semibold text-secondary">{cert.issuer}</p>
                <p className="text-gray-400 text-sm line-clamp-3 my-2 flex-grow">{cert.description}</p>
                
                <div className="mt-auto flex justify-between items-center pt-4 border-t border-white/10">
                   <span className="text-xs text-gray-500 font-medium">{cert.date}</span>
                   {/* {cert.credentialId && <span className="text-xs text-primary/70 font-mono bg-primary/10 px-2 py-1 rounded-md">{cert.credentialId}</span>} */}
                </div>
              </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal / Lightbox */}
      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/95 backdrop-blur-xl cursor-zoom-out"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-[95vw] max-h-[95vh] flex items-center justify-center cursor-default"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title} 
                  className="max-h-[90vh] max-w-full object-contain rounded-lg shadow-2xl border border-white/10" 
                  onError={(e) => { 
                    e.target.onerror = null; 
                    e.target.src=`https://via.placeholder.com/800x600/111/4ade80?text=Please+add+${selectedCert.image.split('/').pop()}+to+public/certificates/` 
                  }} 
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none"></div>
    </section>
  );
}
