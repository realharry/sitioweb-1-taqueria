import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, ChefHat } from "lucide-react"
import Link from "next/link"

export default function EspecialidadesPage() {
  const specialties = [
    {
      name: "Mole Poblano Tradicional",
      description: "Nuestro mole es preparado con más de 20 ingredientes, incluyendo diferentes chiles, especias, chocolate y frutos secos. La receta secreta de la abuela María, que ha sido perfeccionada durante casi 40 años. Servido con pechuga de pollo tierna y acompañado de arroz rojo y tortillas hechas a mano.",
      price: "$40",
      prepTime: "45 min",
      difficulty: "Maestro",
      image: "🍛",
      ingredients: ["Chiles mulato, ancho y chipotle", "Chocolate de mesa", "Almendras y nueces", "Especias secretas"],
      popular: true,
      seasonal: false
    },
    {
      name: "Cochinita Pibil Yucateca",
      description: "Carne de cerdo marinada por 24 horas en achiote y jugo de naranja agria, envuelta en hoja de plátano y cocida lentamente en horno de tierra. Servida con cebolla morada encurtida, habaneros y tortillas de maíz. Una receta auténtica del sureste mexicano.",
      price: "$35",
      prepTime: "24 hrs marinado + 4 hrs cocción",
      difficulty: "Experto",
      image: "🐷",
      ingredients: ["Achiote", "Naranja agria", "Hoja de plátano", "Chile habanero"],
      popular: true,
      seasonal: false
    },
    {
      name: "Chiles en Nogada",
      description: "El platillo patrio por excelencia. Chile poblano relleno de picadillo dulce (carne molida con frutas), cubierto con nogada (salsa de nuez de Castilla) y granada roja. Solo disponible de agosto a octubre cuando las nueces están en temporada.",
      price: "$45",
      prepTime: "60 min",
      difficulty: "Maestro",
      image: "🌶️",
      ingredients: ["Chile poblano", "Nuez de Castilla", "Granada roja", "Carne molida con frutas"],
      popular: false,
      seasonal: true,
      season: "Agosto - Octubre"
    },
    {
      name: "Pozole Rojo Tradicional",
      description: "Sopa ceremonial prehispánica con maíz cacahuazintle, carne de cerdo y una salsa roja de chiles guajillo y ancho. Servido los sábados y domingos con todos los acompañamientos tradicionales: lechuga, rábanos, orégano, chile piquín y tostadas.",
      price: "$35",
      prepTime: "3 hrs",
      difficulty: "Experto",
      image: "🥣",
      ingredients: ["Maíz cacahuazintle", "Carne de cerdo", "Chile guajillo", "Chile ancho"],
      popular: true,
      seasonal: false,
      availability: "Solo sábados y domingos"
    },
    {
      name: "Barbacoa de Borrego Estilo Hidalgo",
      description: "Borrego cocinado por 8 horas en horno de tierra, marinado con sal de grano, ajo y hierbas aromáticas. La carne queda tierna y jugosa, perfecta para tacos acompañados de salsa verde, cebolla blanca y cilantro. Solo disponible los domingos.",
      price: "$38",
      prepTime: "8 hrs",
      difficulty: "Maestro",
      image: "🐑",
      ingredients: ["Borrego", "Sal de grano", "Ajo", "Hierbas aromáticas"],
      popular: true,
      seasonal: false,
      availability: "Solo domingos"
    },
    {
      name: "Tamales de Dulce y Salados",
      description: "Tamales hechos con masa de maíz batida hasta punto de nieve, cocidos en hoja de maíz. Ofrecemos variedades dulces (con pasas y piña) y salados (con pollo en salsa verde, cerdo en salsa roja, y rajas con queso). Preparados especialmente para temporadas festivas.",
      price: "$12 c/u",
      prepTime: "2 hrs",
      difficulty: "Experto",
      image: "🫔",
      ingredients: ["Masa de maíz", "Manteca de cerdo", "Hojas de maíz", "Rellenos variados"],
      popular: false,
      seasonal: true,
      season: "Diciembre - Febrero"
    }
  ]

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'popular':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300'
      case 'seasonal':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300'
      case 'maestro':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300'
      case 'experto':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300'
    }
  }

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Nuestras Especialidades
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
            Platillos únicos que requieren técnicas especiales, ingredientes selectos y mucho tiempo de preparación. 
            Estas son las recetas que han hecho famoso a El Corazón y que representan lo mejor de la cocina mexicana tradicional.
          </p>
          
          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="flex items-center gap-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor('popular')}`}>
                Popular ⭐
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-300">Favorito de los clientes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor('seasonal')}`}>
                Temporada 🍂
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-300">Disponibilidad limitada</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor('maestro')}`}>
                Nivel Maestro 👨‍🍳
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-300">Técnica avanzada</span>
            </div>
          </div>
        </div>

        {/* Specialties Grid */}
        <div className="space-y-12">
          {specialties.map((specialty, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Image Section */}
                <div className="bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="text-8xl mb-4">{specialty.image}</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center text-gray-600 dark:text-gray-300">
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="text-sm">{specialty.prepTime}</span>
                      </div>
                      <div className="flex items-center justify-center text-gray-600 dark:text-gray-300">
                        <ChefHat className="h-4 w-4 mr-2" />
                        <span className="text-sm">{specialty.difficulty}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:col-span-2">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-grow">
                        <CardTitle className="text-2xl mb-2">{specialty.name}</CardTitle>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {specialty.popular && (
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor('popular')}`}>
                              Popular ⭐
                            </span>
                          )}
                          {specialty.seasonal && (
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor('seasonal')}`}>
                              Temporada 🍂
                            </span>
                          )}
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor(specialty.difficulty.toLowerCase())}`}>
                            {specialty.difficulty}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-red-600 dark:text-red-400">
                          {specialty.price}
                        </div>
                        {specialty.season && (
                          <div className="text-sm text-orange-600 dark:text-orange-400 font-medium">
                            {specialty.season}
                          </div>
                        )}
                        {specialty.availability && (
                          <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                            {specialty.availability}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed mb-4">
                      {specialty.description}
                    </CardDescription>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Ingredientes principales:
                      </h4>
                      <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        {specialty.ingredients.map((ingredient, i) => (
                          <li key={i}>{ingredient}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="flex-1">
                        Ordenar Ahora
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Más Información
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Chef's Note */}
        <Card className="mt-16 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10 border-yellow-200 dark:border-yellow-800">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="text-4xl">👩‍🍳</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Nota de la Chef María Hernández
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  &quot;Cada una de estas especialidades requiere tiempo, paciencia y mucho amor. Son recetas que he 
                  perfeccionado durante décadas, usando técnicas tradicionales que aprendí de mi abuela en Puebla. 
                  Algunos platillos necesitan preparación previa, así que recomendamos llamar con anticipación para 
                  garantizar disponibilidad. ¡Vale la pena la espera!&quot;
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 italic">
                  - María Hernández, Chef Fundadora
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reservation CTA */}
        <div className="text-center mt-12">
          <Card className="bg-red-600 text-white">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold mb-4">¿Listo para una experiencia gastronómica única?</h3>
              <p className="text-lg mb-6 opacity-90">
                Muchas de nuestras especialidades requieren preparación especial. 
                Te recomendamos hacer tu reservación con anticipación.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="secondary" size="lg">
                  <Link href="/contacto">Hacer Reservación</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-600">
                  <Link href="/menu">Ver Menú Completo</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}