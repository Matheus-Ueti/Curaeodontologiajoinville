import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-[#CFEFFF]/20 to-white">
      {/* Organic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#CFEFFF] to-[#7CC6E6]/30 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#CFEFFF]/50 to-[#7CC6E6]/20 blur-3xl"
        />
      </div>

      <div className="relative container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl lg:text-7xl font-light text-[#2D3748] leading-tight mb-6">
                Odontologia moderna para{" "}
                <span className="font-medium text-[#7CC6E6]">
                  transformar seu sorriso
                </span>
              </h1>
              <p className="text-xl text-[#718096] font-light leading-relaxed">
                Especialistas em reabilitação oral, implantes dentários e
                estética facial em Joinville.
              </p>
            </motion.div>

          </motion.div>

          {/* Right image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/consultorio.jpg"
                alt="Consultório Curae Odontologia"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#7CC6E6]/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
