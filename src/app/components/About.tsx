import { motion } from "motion/react";
import { Heart, Sparkles, Home, Award } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Atendimento humanizado",
    description: "Cuidado personalizado e acolhedor",
  },
  {
    icon: Sparkles,
    title: "Tecnologia moderna",
    description: "Equipamentos de última geração",
  },
  {
    icon: Home,
    title: "Ambiente sofisticado",
    description: "Espaço elegante e confortável",
  },
  {
    icon: Award,
    title: "Resultados naturais",
    description: "Estética e funcionalidade perfeitas",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#CFEFFF]/20 blur-3xl rounded-full" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-[#7CC6E6] font-medium mb-4 tracking-wide uppercase text-sm">
            Sobre a clínica
          </p>
          <h2 className="text-4xl lg:text-5xl font-light text-[#2D3748] mb-6">
            Excelência em{" "}
            <span className="font-medium">odontologia moderna</span>
          </h2>
          <p className="text-lg text-[#718096] leading-relaxed">
            Na Curae Odontologia, unimos tecnologia, estética e cuidado
            humanizado para proporcionar tratamentos odontológicos completos com
            excelência.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white border border-[#7CC6E6]/10 rounded-2xl p-8 hover:shadow-xl hover:shadow-[#7CC6E6]/10 transition-all duration-300 h-full hover:-translate-y-1">
                <div className="w-14 h-14 bg-[#CFEFFF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-[#7CC6E6]" />
                </div>
                <h3 className="text-xl font-medium text-[#2D3748] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#718096] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
