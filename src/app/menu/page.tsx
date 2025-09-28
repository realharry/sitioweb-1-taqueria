import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface MenuItem {
  name: string
  description: string
  price: string
  spicy?: boolean
  vegetarian?: boolean
  popular?: boolean
}

interface MenuSection {
  title: string
  items: MenuItem[]
}

export default function MenuPage() {
  const menuSections: MenuSection[] = [
    {
      title: "Tacos",
      items: [
        {
          name: "Tacos al Pastor",
          description: "Carne de cerdo adobada con achiote, piña, cebolla morada y cilantro. Servidos en tortilla de maíz.",
          price: "$15",
          popular: true,
          spicy: true
        },
        {
          name: "Tacos de Carnitas",
          description: "Carne de cerdo confitada lentamente, cebolla blanca y cilantro fresco.",
          price: "$14",
          popular: true
        },
        {
          name: "Tacos de Barbacoa",
          description: "Carne de borrego cocida tradicionalmente, cebolla, cilantro y salsa verde.",
          price: "$16",
          spicy: true
        },
        {
          name: "Tacos de Pollo",
          description: "Pechuga de pollo marinada con especias mexicanas, cebolla y cilantro.",
          price: "$13"
        },
        {
          name: "Tacos de Pescado",
          description: "Filete de pescado empanizado, repollo, pico de gallo y salsa de chipotle.",
          price: "$18",
          spicy: true
        },
        {
          name: "Tacos de Hongos",
          description: "Hongos seta y portobello salteados con epazote, cebolla y queso panela.",
          price: "$12",
          vegetarian: true
        }
      ]
    },
    {
      title: "Quesadillas",
      items: [
        {
          name: "Quesadilla de Flor de Calabaza",
          description: "Tortilla hecha a mano rellena de flor de calabaza y queso Oaxaca derretido.",
          price: "$18",
          popular: true,
          vegetarian: true
        },
        {
          name: "Quesadilla de Huitlacoche",
          description: "El caviar mexicano - hongo del maíz con epazote y queso Oaxaca.",
          price: "$20",
          vegetarian: true
        },
        {
          name: "Quesadilla de Chorizo",
          description: "Chorizo artesanal con queso Oaxaca en tortilla de maíz azul.",
          price: "$16",
          spicy: true
        },
        {
          name: "Quesadilla de Quelites",
          description: "Verdolagas y quelites con queso panela y un toque de chile serrano.",
          price: "$15",
          vegetarian: true,
          spicy: true
        }
      ]
    },
    {
      title: "Tortas y Cemitas",
      items: [
        {
          name: "Torta Ahogada",
          description: "Pan birote con carnitas, ahogado en salsa de tomate picante y chile de árbol.",
          price: "$22",
          popular: true,
          spicy: true
        },
        {
          name: "Cemita Poblana",
          description: "Pan de cemita con milanesa, aguacate, chipotle, papalo y pickles.",
          price: "$25",
          spicy: true
        },
        {
          name: "Torta de Cochinita Pibil",
          description: "Carne de cerdo en achiote, cebolla morada encurtida y habanero.",
          price: "$24",
          spicy: true
        },
        {
          name: "Torta Cubana",
          description: "La reina de las tortas: milanesa, chorizo, jamón, queso, aguacate y frijoles.",
          price: "$28",
          popular: true
        }
      ]
    },
    {
      title: "Especialidades",
      items: [
        {
          name: "Sopa de Tortilla",
          description: "Caldo de tomate con tiras de tortilla, queso fresco, crema y aguacate.",
          price: "$20",
          vegetarian: true
        },
        {
          name: "Pozole Rojo",
          description: "Sopa tradicional con maíz cacahuazintle, carne de cerdo y chiles rojos. (Sábados y domingos)",
          price: "$35",
          spicy: true
        },
        {
          name: "Mole Poblano",
          description: "Pollo bañado en mole poblano tradicional con más de 20 ingredientes.",
          price: "$40",
          popular: true
        },
        {
          name: "Chiles en Nogada",
          description: "Chile poblano relleno de picadillo, bañado en nogada y granada. (Septiembre)",
          price: "$45",
          vegetarian: true
        }
      ]
    },
    {
      title: "Antojitos",
      items: [
        {
          name: "Elote Preparado",
          description: "Elote hervido con mayonesa, queso cotija, chile piquín y limón.",
          price: "$8",
          vegetarian: true,
          spicy: true
        },
        {
          name: "Esquites",
          description: "Granos de elote con mayonesa, queso, chile piquín y limón en vaso.",
          price: "$10",
          vegetarian: true,
          spicy: true
        },
        {
          name: "Nachos El Corazón",
          description: "Totopos con frijoles, queso derretido, jalapeños, crema y guacamole.",
          price: "$18",
          vegetarian: true,
          spicy: true
        },
        {
          name: "Guacamole con Totopos",
          description: "Guacamole fresco preparado al momento con totopos artesanales.",
          price: "$15",
          vegetarian: true
        }
      ]
    },
    {
      title: "Bebidas",
      items: [
        {
          name: "Agua de Horchata",
          description: "Bebida tradicional de arroz con canela y leche condensada.",
          price: "$6",
          vegetarian: true
        },
        {
          name: "Agua de Jamaica",
          description: "Refrescante agua de flor de jamaica con un toque de limón.",
          price: "$5",
          vegetarian: true
        },
        {
          name: "Agua de Tamarindo",
          description: "Dulce y ácida agua de tamarindo natural.",
          price: "$6",
          vegetarian: true
        },
        {
          name: "Michelada",
          description: "Cerveza con jugo de tomate, limón, sal, chile y salsa inglesa.",
          price: "$12",
          spicy: true
        },
        {
          name: "Café de Olla",
          description: "Café tradicional hervido con canela y piloncillo.",
          price: "$4",
          vegetarian: true
        },
        {
          name: "Chocolate Caliente",
          description: "Chocolate mexicano tradicional batido con molinillo.",
          price: "$8",
          vegetarian: true
        }
      ]
    }
  ]

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'popular':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300'
      case 'spicy':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300'
      case 'vegetarian':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'
      default:
        return ''
    }
  }

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Nuestro Menú
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Auténticos sabores mexicanos preparados con recetas tradicionales y ingredientes frescos. 
            Todos los precios incluyen tortillas hechas a mano y salsas de la casa.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="flex items-center gap-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor('popular')}`}>
              Popular
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-300">Favorito de nuestros clientes</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor('spicy')}`}>
              Picante 🌶️
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-300">Contiene chile</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor('vegetarian')}`}>
              Vegetariano 🌱
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-300">Sin carne</span>
          </div>
        </div>

        {/* Menu Sections */}
        <div className="space-y-12">
          {menuSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                {section.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl">{item.name}</CardTitle>
                        <span className="text-2xl font-bold text-red-600 dark:text-red-400">
                          {item.price}
                        </span>
                      </div>
                      <CardDescription className="text-sm leading-relaxed">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {item.popular && (
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor('popular')}`}>
                            Popular
                          </span>
                        )}
                        {item.spicy && (
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor('spicy')}`}>
                            Picante 🌶️
                          </span>
                        )}
                        {item.vegetarian && (
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor('vegetarian')}`}>
                            Vegetariano 🌱
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
            Nota Importante
          </h3>
          <p className="text-yellow-700 dark:text-yellow-300">
            Todos nuestros platillos se preparan al momento con ingredientes frescos. 
            Los precios pueden variar según la temporada. Para pedidos grandes (más de 10 personas), 
            favor de llamar con 2 horas de anticipación.
          </p>
        </div>
      </div>
    </div>
  )
}