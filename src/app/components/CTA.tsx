import { motion } from "motion/react";
import { ArrowRight, Calendar } from "lucide-react";

export function CTA() {
  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#CFEFFF]/60 via-[#7CC6E6]/30 to-[#CFEFFF]/60" />
      <div className="absolute inset-0 backdrop-blur-sm" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-8 inline-block">
            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto shadow-lg">
              <Calendar className="w-10 h-10 text-[#7CC6E6]" />
            </div>
          </div>

          <h2 className="text-4xl lg:text-6xl font-light text-[#2D3748] mb-6">
            Seu novo sorriso{" "}
            <span className="font-medium">começa aqui</span>
          </h2>

          <p className="text-xl text-[#2D3748]/80 mb-10 max-w-2xl mx-auto">
            Agende sua avaliação e descubra como podemos transformar seu sorriso
            com segurança e excelência.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-10 py-5 bg-[#2D3748] text-white rounded-2xl hover:bg-[#1a202c] transition-all duration-300 inline-flex items-center gap-3 shadow-2xl shadow-[#2D3748]/20"
          >
            <span className="text-lg">Agendar consulta</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
