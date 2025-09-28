import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold text-red-500">🌮 El Corazón</span>
            </div>
            <p className="text-gray-300 mb-4">
              Desde 1985, sirviendo la más auténtica comida mexicana en el corazón de la Ciudad de México. 
              Nuestros tacos son preparados con recetas tradicionales y los mejores ingredientes frescos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-500">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-red-500" />
                <div>
                  <p className="text-gray-300">Av. Insurgentes Sur 1234</p>
                  <p className="text-gray-300">Col. Del Valle, CDMX 03100</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-red-500" />
                <p className="text-gray-300">+52 55 1234 5678</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-red-500" />
                <p className="text-gray-300">info@elcorazon.mx</p>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-500">Horarios</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-red-500" />
                <div>
                  <p className="text-gray-300">Lunes - Domingo</p>
                  <p className="text-gray-300">8:00 AM - 11:00 PM</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                Servicio de entrega disponible hasta las 10:30 PM
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-wrap justify-center md:justify-start space-x-6 mb-4">
            <Link href="/" className="text-gray-300 hover:text-red-500 transition-colors">
              Inicio
            </Link>
            <Link href="/menu" className="text-gray-300 hover:text-red-500 transition-colors">
              Menú
            </Link>
            <Link href="/especialidades" className="text-gray-300 hover:text-red-500 transition-colors">
              Especialidades
            </Link>
            <Link href="/nosotros" className="text-gray-300 hover:text-red-500 transition-colors">
              Nosotros
            </Link>
            <Link href="/contacto" className="text-gray-300 hover:text-red-500 transition-colors">
              Contacto
            </Link>
          </div>
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © 2024 Taquería El Corazón. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer