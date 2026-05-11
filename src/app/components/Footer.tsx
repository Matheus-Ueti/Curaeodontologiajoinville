import { MapPin, Phone, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#2D3748] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-light mb-4">
              Curae <span className="font-medium">Odontologia</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Unindo tecnologia, estética e cuidado humanizado para
              proporcionar tratamentos odontológicos completos com excelência.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4 text-[#7CC6E6]">Contato</h4>
            <div className="space-y-3">
              <a
                href="https://maps.google.com/?q=R.+Pres.+Campos+Salles,+679+-+Glória,+Joinville+-+SC,+89217-100"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <MapPin className="w-5 h-5 text-[#7CC6E6] flex-shrink-0 mt-1" />
                <span className="group-hover:translate-x-1 transition-transform">
                  R. Pres. Campos Salles, 679<br />
                  Glória, Joinville - SC<br />
                  89217-100
                </span>
              </a>
              <a
                href="tel:+5547984305051"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <Phone className="w-5 h-5 text-[#7CC6E6]" />
                <span className="group-hover:translate-x-1 transition-transform">
                  (47) 98430-5051
                </span>
              </a>
              <a
                href="https://wa.me/5547984305051"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <MessageCircle className="w-5 h-5 text-[#7CC6E6]" />
                <span className="group-hover:translate-x-1 transition-transform">
                  WhatsApp
                </span>
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-medium mb-4 text-[#7CC6E6]">Redes sociais</h4>
            <a
              href="https://www.instagram.com/curae.odontologia?igsh=MTQ5bWw3bng1YzJidg=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
            >
              <Instagram className="w-5 h-5 text-[#7CC6E6]" />
              <span className="group-hover:translate-x-1 transition-transform">
                @curae.odontologia
              </span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2026 Curae Odontologia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
