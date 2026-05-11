import { motion } from "motion/react";
import {
  Stethoscope,
  Sparkles,
  Activity,
  Heart,
  Smile,
  Zap,
} from "lucide-react";

const specialties = [
  {
    icon: Stethoscope,
    title: "Implantes dentários",
    description: "Reposição de dentes com técnica avançada e resultados duradouros",
  },
  {
    icon: Sparkles,
    title: "Próteses",
    description: "Restauração estética e funcional com materiais de alta qualidade",
  },
  {
    icon: Activity,
    title: "Reabilitação oral",
    description: "Recuperação completa do sorriso e função mastigatória",
  },
  {
    icon: Heart,
    title: "Endodontia",
    description: "Tratamento de canal com precisão e conforto",
  },
  {
    icon: Smile,
    title: "Harmonização facial",
    description: "Procedimentos estéticos para realçar sua beleza natural",
  },
  {
    icon: Zap,
    title: "Dentística restauradora",
    description: "Restaurações estéticas e funcionais de alta performance",
  },
];

export function Specialties() {
  return (
    <section id="especialidades" className="py-24 bg-gradient-to-b from-[#CFEFFF]/10 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-[#7CC6E6] font-medium mb-4 tracking-wide uppercase text-sm">
            Nossas especialidades
          </p>
          <h2 className="text-4xl lg:text-5xl font-light text-[#2D3748] mb-6">
            Soluções completas para o seu{" "}
            <span className="font-medium">sorriso perfeito</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 hover:shadow-2xl hover:shadow-[#7CC6E6]/15 transition-all duration-300 border border-[#7CC6E6]/10 h-full hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-[#CFEFFF] to-[#7CC6E6]/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <specialty.icon className="w-8 h-8 text-[#7CC6E6]" />
                </div>
                <h3 className="text-xl font-medium text-[#2D3748] mb-3">
                  {specialty.title}
                </h3>
                <p className="text-[#718096] leading-relaxed">
                  {specialty.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
