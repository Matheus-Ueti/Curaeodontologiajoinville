import { motion } from "motion/react";
import { MapPin, Clock, Phone } from "lucide-react";

export function Location() {
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
            Localização
          </p>
          <h2 className="text-4xl lg:text-5xl font-light text-[#2D3748] mb-6">
            Como <span className="font-medium">chegar</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-xl border border-[#7CC6E6]/10 h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.0123456789!2d-48.8463!3d-26.3045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb0e7e4d8e8e7%3A0x1234567890abcdef!2sR.%20Pres.%20Campos%20Salles%2C%20679%20-%20Gl%C3%B3ria%2C%20Joinville%20-%20SC%2C%2089217-100!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl p-8 border border-[#7CC6E6]/10 shadow-lg">
              <h3 className="text-2xl font-medium text-[#2D3748] mb-6">
                Endereço Completo
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#CFEFFF] rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#7CC6E6]" />
                  </div>
                  <div>
                    <p className="text-[#2D3748] leading-relaxed">
                      R. Pres. Campos Salles, 679<br />
                      Glória, Joinville - SC<br />
                      CEP: 89217-100
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#CFEFFF] rounded-2xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#7CC6E6]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#718096] mb-1">Telefone</p>
                    <a
                      href="tel:+5547984305051"
                      className="text-[#2D3748] hover:text-[#7CC6E6] transition-colors"
                    >
                      (47) 98430-5051
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#CFEFFF] rounded-2xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#7CC6E6]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#718096] mb-1">Horário de atendimento</p>
                    <p className="text-[#2D3748]">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=R.+Pres.+Campos+Salles,+679+-+Glória,+Joinville+-+SC,+89217-100"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block w-full px-6 py-3 bg-[#7CC6E6] text-white rounded-2xl hover:bg-[#6AB5D5] transition-colors text-center"
              >
                Abrir no Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
