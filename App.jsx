import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Tooth, Laser, Implant, Instagram, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#1A1A1A] relative">
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
      >
        <MessageCircle size={28} />
      </a>

      {/* Hero Section */}
      <section className="bg-[#0D1B2A] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Dr. Gustavo Hayashida</h1>
        <p className="text-lg md:text-xl mb-6">
          Especialista em Periodontia e Cirurgia Oral
        </p>
        <Button className="bg-white text-[#0D1B2A] font-semibold text-lg px-6 py-3 rounded-full shadow-md hover:bg-gray-200">
          Agende sua consulta
        </Button>
      </section>

      {/* Sobre / Clínicas */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Onde Atendo</h2>
        <p className="text-center text-lg mb-10">
          Atuo em clínicas de referência, oferecendo tratamentos periodontais e cirúrgicos com foco na saúde, estética e funcionalidade do sorriso.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Clínica Paulista</h3>
              <p className="text-sm text-gray-600 mb-2">Rua Itapeva, 518 - cj 1004</p>
              <div className="flex gap-2 items-center text-sm text-gray-700">
                <MapPin size={16} /> 01332-000 - São Paulo - SP
              </div>
              <iframe
                className="w-full h-48 mt-4 rounded"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.779152842447!2d-46.653433!3d-23.576672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c688f6a79f%3A0xe503e88cf31fa6d6!2sR.%20Itapeva%2C%20518%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001332-000!5e0!3m2!1spt-BR!2sbr!4v1719852800000"
                loading="lazy"
                allowFullScreen=""
              ></iframe>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Clínica Osasco I</h3>
              <p className="text-sm text-gray-600 mb-2">Av. Hildebrando de Lima, 364 - Km 18</p>
              <div className="flex gap-2 items-center text-sm text-gray-700">
                <MapPin size={16} /> 06190-160 - Osasco - SP
              </div>
              <iframe
                className="w-full h-48 mt-4 rounded"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.218650781887!2d-46.781742!3d-23.522321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cefe8f95f74e11%3A0xe2272134879ee979!2sAv.%20Hildebrando%20de%20Lima%2C%20364%20-%20Km%2018%2C%20Osasco%20-%20SP%2C%2006190-160!5e0!3m2!1spt-BR!2sbr!4v1719853000000"
                loading="lazy"
                allowFullScreen=""
              ></iframe>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Clínica Osasco II</h3>
              <p className="text-sm text-gray-600 mb-2">R. Dep. Emílio Carlos, 472 - Vila Campesina</p>
              <div className="flex gap-2 items-center text-sm text-gray-700">
                <MapPin size={16} /> 06028-000 - Osasco - SP
              </div>
              <iframe
                className="w-full h-48 mt-4 rounded"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1299288671795!2d-46.771503!3d-23.525518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cefe86679b5f13%3A0x3bb440d27ebd622e!2sR.%20Dep.%20Em%C3%ADlio%20Carlos%2C%20472%20-%20Vila%20Campesina%2C%20Osasco%20-%20SP%2C%2006028-000!5e0!3m2!1spt-BR!2sbr!4v1719853200000"
                loading="lazy"
                allowFullScreen=""
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contato */}
      <section className="bg-[#1D2D44] text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Entre em contato</h2>
          <p className="mb-6 text-lg">
            Agende sua consulta ou tire dúvidas. Estamos prontos para te atender.
          </p>
          <div className="flex flex-col gap-4 items-center">
            <div className="flex items-center gap-2">
              <Phone size={20} /> <span>(11) 99999-9999</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} /> <span>contato@gustavohayashida.com.br</span>
            </div>
            <a
              href="https://www.instagram.com/gustavohayashida"
              target="_blank"
              className="flex items-center gap-2 text-white hover:text-gray-300"
              rel="noopener noreferrer"
            >
              <Instagram size={20} /> @gustavohayashida
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}