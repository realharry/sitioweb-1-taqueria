import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Users, Award, Heart } from "lucide-react"

export default function NosotrosPage() {
  const teamMembers = [
    {
      name: "María Hernández",
      role: "Fundadora y Chef Principal",
      description: "Con más de 40 años de experiencia, María fundó El Corazón en 1985 con el sueño de compartir los sabores auténticos de su natal Puebla.",
      emoji: "👩‍🍳"
    },
    {
      name: "Carlos Hernández",
      role: "Co-fundador y Gerente",
      description: "Hijo de María, Carlos se encarga de la administración y ha modernizado el restaurante manteniendo sus tradiciones familiares.",
      emoji: "👨‍💼"
    },
    {
      name: "Rosa Hernández",
      role: "Chef de Especialidades",
      description: "Nieta de María, Rosa se especializa en platillos tradicionales como mole, chiles en nogada y pozole.",
      emoji: "👩‍🍳"
    },
    {
      name: "Juan Morales",
      role: "Maestro Taquero",
      description: "Con 25 años en El Corazón, Juan es reconocido por preparar los mejores tacos al pastor de la zona.",
      emoji: "🌮"
    }
  ]

  const achievements = [
    {
      year: "1985",
      title: "Fundación de El Corazón",
      description: "María Hernández abre las puertas de su pequeña taquería en Del Valle.",
      icon: "🏪"
    },
    {
      year: "1995",
      title: "Reconocimiento Local",
      description: "Primer premio en el Festival Gastronómico de la Ciudad de México por nuestros tacos al pastor.",
      icon: "🏆"
    },
    {
      year: "2005",
      title: "Expansión del Menú",
      description: "Incorporamos especialidades regionales como pozole, mole y chiles en nogada.",
      icon: "📋"
    },
    {
      year: "2015",
      title: "30 Años de Tradición",
      description: "Celebramos tres décadas sirviendo a la comunidad con una gran fiesta.",
      icon: "🎉"
    },
    {
      year: "2020",
      title: "Servicio a Domicilio",
      description: "Adaptamos nuestros servicios durante la pandemia, manteniendo la calidad en casa.",
      icon: "🚚"
    },
    {
      year: "2024",
      title: "Casi 40 Años de Sabor",
      description: "Continuamos siendo el punto de encuentro favorito para los amantes de la comida mexicana.",
      icon: "❤️"
    }
  ]

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Nuestra Historia
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Desde 1985, El Corazón ha sido más que un restaurante: es el hogar donde las familias 
            se reúnen, donde los sabores tradicionales cobran vida, y donde cada platillo 
            cuenta la historia de México.
          </p>
        </div>

        {/* Main Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              La Historia de una Familia
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Todo comenzó en 1985 cuando <strong>María Hernández</strong>, originaria de Puebla, 
                llegó a la Ciudad de México con un corazón lleno de sueños y las recetas 
                tradicionales que su abuela le había enseñado desde niña.
              </p>
              <p>
                Con apenas suficiente dinero para rentar un pequeño local en la colonia Del Valle, 
                María abrió las puertas de &quot;El Corazón&quot; - un nombre que eligió porque &quot;la comida 
                debe salir del corazón para llegar al corazón de quien la prueba.&quot;
              </p>
              <p>
                Los primeros años no fueron fáciles. María trabajaba desde las 5 de la mañana 
                preparando masa para tortillas, marinando carnes y moliendo especias. Su esposo 
                Carlos la ayudaba después de su trabajo, y poco a poco, los vecinos comenzaron 
                a descubrir los sabores únicos que se cocinaban en esta pequeña taquería.
              </p>
              <p>
                Hoy, casi cuatro décadas después, El Corazón se ha convertido en una institución 
                en Del Valle. Tres generaciones de la familia Hernández han trabajado juntas 
                para mantener vivas las tradiciones culinarias, adaptándose a los tiempos modernos 
                sin perder nunca la esencia que nos ha caracterizado.
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg p-8">
              <div className="text-8xl mb-6">🏠</div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Un Hogar para Todos
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Más de 50,000 familias han compartido momentos especiales en nuestras mesas. 
                Bodas, cumpleaños, primeras citas, reuniones de trabajo - todos los momentos 
                importantes de la vida tienen mejor sabor con nuestra comida.
              </p>
              <div className="mt-6 flex justify-center items-center space-x-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-600 dark:text-gray-300">4.9/5 - 2,847 reseñas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Nuestro Equipo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-6xl mb-4">{member.emoji}</div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-red-600 dark:text-red-400 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Nuestra Trayectoria
          </h2>
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-red-100 dark:bg-red-900/20 rounded-full p-4 text-center">
                    <div className="text-3xl">{achievement.icon}</div>
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {achievement.title}
                      </h3>
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Tradición Familiar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Cada receta es un legado familiar transmitido con amor a través de las generaciones. 
                  Cocinamos como si fuera para nuestra propia familia.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Calidad Sin Compromiso</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Seleccionamos cuidadosamente cada ingrediente. Nuestras tortillas se hacen a mano 
                  diariamente y nuestras salsas siguen las recetas originales.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Compromiso Comunitario</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Somos parte de la comunidad del Valle. Apoyamos eventos locales, empleamos 
                  talento de la zona y contribuimos al crecimiento de nuestro barrio.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-center">
          <CardContent className="py-12">
            <h2 className="text-3xl font-bold mb-4">¡Ven a Conocer Nuestra Historia!</h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Te invitamos a ser parte de nuestra familia. Cada visita es una oportunidad de 
              crear nuevos recuerdos mientras disfrutas de los sabores que han enamorado a 
              México por casi cuatro décadas.
            </p>
            <div className="text-6xl mb-4">🌮❤️</div>
            <p className="text-lg opacity-90">
              &quot;En El Corazón, no solo servimos comida, servimos tradición, amor y comunidad.&quot;
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}