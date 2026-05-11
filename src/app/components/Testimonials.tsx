import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Santos",
    text: "Experiência incrível! A equipe é extremamente atenciosa e o resultado do meu tratamento superou todas as expectativas. Recomendo muito!",
    rating: 5,
    treatment: "Implantes dentários",
  },
  {
    name: "Carlos Oliveira",
    text: "Profissionais altamente qualificados e ambiente impecável. Finalmente encontrei uma clínica onde me sinto confortável e confiante.",
    rating: 5,
    treatment: "Reabilitação oral",
  },
  {
    name: "Ana Paula Costa",
    text: "A harmonização facial ficou perfeita! Resultado natural e elegante, exatamente como eu queria. Muito obrigada à equipe!",
    rating: 5,
    treatment: "Harmonização facial",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#CFEFFF]/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-[#7CC6E6] font-medium mb-4 tracking-wide uppercase text-sm">
            Depoimentos
          </p>
          <h2 className="text-4xl lg:text-5xl font-light text-[#2D3748] mb-6">
            O que nossos pacientes{" "}
            <span className="font-medium">dizem sobre nós</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-3xl p-8 border border-[#7CC6E6]/10 hover:shadow-xl hover:shadow-[#7CC6E6]/10 transition-all duration-300 h-full hover:-translate-y-1">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-[#FFD700] text-[#FFD700]"
                      />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#CFEFFF]" />
                </div>
                <p className="text-[#718096] leading-relaxed mb-6">
                  {testimonial.text}
                </p>
                <div className="border-t border-[#7CC6E6]/10 pt-6">
                  <p className="font-medium text-[#2D3748] mb-1">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[#7CC6E6]">
                    {testimonial.treatment}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
