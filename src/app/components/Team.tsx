import { motion } from "motion/react";
import { Check } from "lucide-react";

const team = [
  {
    name: "Dr. Sergio Pinto Fernandes Junior",
    cro: "CRO SC 20779",
    title: "QUEM SOU",
    description: [
      "Sou cirurgião-dentista formado pela UNIVILLE, especialista em Implantodontia e Prótese Dentária. Dedico minha carreira à reabilitação oral complexa, devolvendo função mastigatória, autoestima e qualidade de vida aos meus pacientes.",
      "Minha abordagem combina técnica avançada, tecnologia de ponta e cuidado humanizado. Participo constantemente de congressos nacionais e internacionais para estar sempre atualizado com as mais recentes inovações da área.",
    ],
    expertise: [
      "Implantes dentários avançados",
      "Próteses sobre implante",
      "Reabilitação oral completa",
      "Planejamento digital 3D",
      "Prótese fixa e removível",
      "Cirurgias guiadas por computador",
    ],
    image: "/src/imports/Gemini_Generated_Image_s1hkl3s1hkl3s1hk.png",
  },
  {
    name: "Dra. Manuela Nunes Barbosa",
    cro: "CRO SC 12894",
    title: "QUEM SOU",
    description: [
      "Sou cirurgiã-dentista graduada pela UFSC, especialista em Endodontia e com formação avançada em Harmonização Orofacial e Dentística Estética. Minha paixão é unir saúde e beleza, criando sorrisos harmoniosos e naturais.",
      "Acredito que cada paciente é único e merece um atendimento personalizado que respeite sua individualidade. Meu compromisso é oferecer excelência técnica com delicadeza e cuidado, sempre atualizada com as tendências em estética facial.",
    ],
    expertise: [
      "Endodontia (tratamento de canal)",
      "Harmonização orofacial",
      "Preenchimento com ácido hialurônico",
      "Toxina botulínica",
      "Dentística estética",
      "Clareamento dental",
    ],
    image:
      "https://images.unsplash.com/photo-1603654983938-a3ac86145bd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBhdGllbnQlMjBiZWF1dGlmdWwlMjBzbWlsZSUyMGRlbnRhbHxlbnwxfHx8fDE3Nzg1MjQ5NDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Team() {
  return (
    <section id="equipe" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute -top-32 right-0 w-[600px] h-[600px] bg-[#CFEFFF]/20 blur-3xl rounded-full" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-[#7CC6E6] font-medium mb-4 tracking-wide uppercase text-sm">
            Nossa equipe
          </p>
          <h2 className="text-4xl lg:text-5xl font-light text-[#2D3748] mb-6">
            Especialistas dedicados ao seu{" "}
            <span className="font-medium">bem-estar</span>
          </h2>
        </motion.div>

        <div className="space-y-20 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden border border-[#7CC6E6]/10 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative overflow-hidden h-[500px] md:h-auto">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-12">
                    <p className="text-[#7CC6E6] font-medium mb-3 uppercase text-xs tracking-wider">
                      {member.title}
                    </p>
                    <h3 className="text-3xl font-medium text-[#2D3748] mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#7CC6E6] font-medium mb-8 text-sm">
                      {member.cro}
                    </p>

                    {/* Description paragraphs */}
                    <div className="space-y-4 mb-8">
                      {member.description.map((paragraph, idx) => (
                        <p
                          key={idx}
                          className="text-[#718096] leading-relaxed text-sm"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Expertise list */}
                    <div>
                      <p className="text-sm font-medium text-[#2D3748] mb-4">
                        Experiência em áreas trabalhadas:
                      </p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {member.expertise.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2"
                          >
                            <div className="w-5 h-5 rounded-full bg-[#CFEFFF] flex items-center justify-center flex-shrink-0">
                              <Check className="w-3 h-3 text-[#7CC6E6]" />
                            </div>
                            <span className="text-sm text-[#2D3748]">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
