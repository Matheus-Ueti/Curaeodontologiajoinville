import { motion } from "motion/react";

const images = [
  {
    src: "/images/consultorio.jpg",
    alt: "Consultório odontológico",
  },
  {
    src: "/images/recepcao.png",
    alt: "Recepção da clínica",
  },
];

export function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-[#7CC6E6] font-medium mb-4 tracking-wide uppercase text-sm">
            Nossa clínica
          </p>
          <h2 className="text-4xl lg:text-5xl font-light text-[#2D3748] mb-6">
            Ambiente <span className="font-medium">moderno e acolhedor</span>
          </h2>
          <p className="text-lg text-[#718096] leading-relaxed">
            Conheça nosso espaço projetado para oferecer conforto e tranquilidade
            durante seu tratamento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {images.map((image, index) => (
            <div key={index} className="group">
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
