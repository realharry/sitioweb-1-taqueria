import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Clock, MapPin, Phone } from "lucide-react"

export default function Home() {
  const featuredItems = [
    {
      name: "Tacos al Pastor",
      description: "Carne de cerdo marinada con achiote y especias, piña, cebolla y cilantro",
      price: "$15",
      image: "🌮"
    },
    {
      name: "Quesadillas de Flor de Calabaza",
      description: "Tortillas hechas a mano rellenas de flor de calabaza y queso Oaxaca",
      price: "$18",
      image: "🧀"
    },
    {
      name: "Torta Ahogada",
      description: "Pan birote ahogado en salsa de tomate picante con carnitas de cerdo",
      price: "$22",
      image: "🥖"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-800 dark:to-orange-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bienvenidos a <span className="text-yellow-300">El Corazón</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Auténtica comida mexicana desde 1985. Sabores tradicionales que conquistan corazones 
              en el corazón de la Ciudad de México.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                <Link href="/menu">Ver Nuestro Menú</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-600">
                <Link href="/contacto">Hacer Reservación</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Tradición Familiar Desde 1985
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                En El Corazón, cada platillo cuenta una historia. Fundada por la familia Hernández en 1985, 
                nuestra taquería ha sido un punto de encuentro para los amantes de la auténtica comida mexicana 
                en la zona de Del Valle.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Utilizamos recetas tradicionales transmitidas de generación en generación, 
                ingredientes frescos de los mejores proveedores locales, y mucho amor en cada preparación.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-600 dark:text-gray-300">4.9/5 - Más de 2,000 reseñas</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-9xl mb-4">🌮</div>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Más de 50,000 tacos servidos cada año
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nuestras Especialidades
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Platillos únicos preparados con técnicas tradicionales y los mejores ingredientes de la región.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">{item.image}</div>
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
                    {item.price}
                  </div>
                  <Button className="w-full">Ordenar Ahora</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/menu">Ver Menú Completo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Visítanos</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Ubicación</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Av. Insurgentes Sur 1234<br />
                      Col. Del Valle, CDMX 03100<br />
                      México
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Horarios</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Lunes - Domingo: 8:00 AM - 11:00 PM<br />
                      Servicio de entrega hasta las 10:30 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Teléfono</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      +52 55 1234 5678<br />
                      Para reservaciones y pedidos
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-8 text-center">
              <div className="text-8xl mb-4">📍</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                En el Corazón de Del Valle
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Fácil acceso desde metro Insurgentes Sur. Estacionamiento disponible.
                A solo 5 minutos caminando de Parque Hundido.
              </p>
              <Button asChild>
                <Link href="/contacto">Cómo Llegar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
