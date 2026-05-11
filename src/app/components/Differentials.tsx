import { motion } from "motion/react";
import { Users, Cpu, Building2, Award, Palette, Shield } from "lucide-react";

const differentials = [
  {
    icon: Users,
    title: "Atendimento personalizado",
    description: "Cada paciente recebe atenção individual e tratamento customizado",
  },
  {
    icon: Cpu,
    title: "Tecnologia avançada",
    description: "Equipamentos de última geração para diagnóstico preciso",
  },
  {
    icon: Building2,
    title: "Ambiente moderno",
    description: "Espaço elegante e confortável para sua tranquilidade",
  },
  {
    icon: Award,
    title: "Equipe especializada",
    description: "Profissionais altamente qualificados e em constante atualização",
  },
  {
    icon: Palette,
    title: "Resultados naturais",
    description: "Estética harmoniosa e funcionalidade perfeita",
  },
  {
    icon: Shield,
    title: "Segurança garantida",
    description: "Protocolos rigorosos de biossegurança e esterilização",
  },
];

export function Differentials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute -bottom-32 left-0 w-[600px] h-[600px] bg-[#CFEFFF]/20 blur-3xl rounded-full" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-[#7CC6E6] font-medium mb-4 tracking-wide uppercase text-sm">
            Diferenciais
          </p>
          <h2 className="text-4xl lg:text-5xl font-light text-[#2D3748] mb-6">
            Por que escolher a{" "}
            <span className="font-medium">Curae Odontologia</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((differential, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 items-start group"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-[#CFEFFF] to-[#7CC6E6]/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <differential.icon className="w-7 h-7 text-[#7CC6E6]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#2D3748] mb-2">
                  {differential.title}
                </h3>
                <p className="text-[#718096] leading-relaxed">
                  {differential.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
