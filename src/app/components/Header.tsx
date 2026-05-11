import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-[#7CC6E6]/10"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#7CC6E6] to-[#CFEFFF] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-2xl font-light text-[#2D3748]">
              Curae <span className="font-medium">Odontologia</span>
            </span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#sobre"
              className="text-[#2D3748] hover:text-[#7CC6E6] transition-colors"
            >
              Sobre
            </a>
            <a
              href="#especialidades"
              className="text-[#2D3748] hover:text-[#7CC6E6] transition-colors"
            >
              Especialidades
            </a>
            <a
              href="#equipe"
              className="text-[#2D3748] hover:text-[#7CC6E6] transition-colors"
            >
              Equipe
            </a>
            <a
              href="#contato"
              className="text-[#2D3748] hover:text-[#7CC6E6] transition-colors"
            >
              Contato
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#2D3748]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4"
          >
            <a
              href="#sobre"
              className="block text-[#2D3748] hover:text-[#7CC6E6] transition-colors"
            >
              Sobre
            </a>
            <a
              href="#especialidades"
              className="block text-[#2D3748] hover:text-[#7CC6E6] transition-colors"
            >
              Especialidades
            </a>
            <a
              href="#equipe"
              className="block text-[#2D3748] hover:text-[#7CC6E6] transition-colors"
            >
              Equipe
            </a>
            <a
              href="#contato"
              className="block text-[#2D3748] hover:text-[#7CC6E6] transition-colors"
            >
              Contato
            </a>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
