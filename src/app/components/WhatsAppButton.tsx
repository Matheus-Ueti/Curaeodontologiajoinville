import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5547984305051"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/50 transition-shadow group"
    >
      <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />

      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </motion.a>
  );
}
