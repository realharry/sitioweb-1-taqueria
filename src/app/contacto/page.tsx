import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone, Mail, Navigation } from "lucide-react"

export default function ContactoPage() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Contacto
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Estamos aquí para servirte. Visítanos, llámanos o escríbenos para hacer tu reservación 
            o para cualquier pregunta sobre nuestros deliciosos platillos mexicanos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-red-600 dark:text-red-400">
                  <MapPin className="h-6 w-6 mr-3" />
                  Ubicación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">
                  <strong>Av. Insurgentes Sur 1234</strong><br />
                  Col. Del Valle, CDMX 03100<br />
                  México
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Estamos ubicados en el corazón de la colonia Del Valle, a solo 5 minutos 
                  caminando del metro Insurgentes Sur y muy cerca del Parque Hundido.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-red-600 dark:text-red-400">
                  <Clock className="h-6 w-6 mr-3" />
                  Horarios de Servicio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Lunes - Domingo:</span>
                    <span>8:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Servicio a domicilio:</span>
                    <span>Hasta 10:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Desayunos:</span>
                    <span>8:00 AM - 12:00 PM</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
                  * Durante días festivos, los horarios pueden variar
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-red-600 dark:text-red-400">
                  <Phone className="h-6 w-6 mr-3" />
                  Teléfonos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-lg">+52 55 1234 5678</p>
                    <p className="text-gray-600 dark:text-gray-300">Reservaciones y pedidos</p>
                  </div>
                  <div>
                    <p className="font-medium text-lg">+52 55 1234 5679</p>
                    <p className="text-gray-600 dark:text-gray-300">Servicio a domicilio</p>
                  </div>
                  <div>
                    <p className="font-medium text-lg">+52 55 1234 5680</p>
                    <p className="text-gray-600 dark:text-gray-300">Eventos y grupos grandes</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-red-600 dark:text-red-400">
                  <Mail className="h-6 w-6 mr-3" />
                  Correo Electrónico
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>info@elcorazon.mx</strong> - Información general</p>
                  <p><strong>reservas@elcorazon.mx</strong> - Reservaciones</p>
                  <p><strong>eventos@elcorazon.mx</strong> - Eventos especiales</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map and Directions */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-red-600 dark:text-red-400">
                  <Navigation className="h-6 w-6 mr-3" />
                  Cómo Llegar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-8 text-center mb-6">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Mapa interactivo próximamente
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">🚇 En Metro:</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Estación Insurgentes Sur (Línea 12). Salida por Av. Insurgentes Sur, 
                      caminar 5 minutos hacia el sur.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">🚌 En Autobús:</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Múltiples rutas pasan por Av. Insurgentes Sur. 
                      Parada: &quot;Del Valle Centro&quot;.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">🚗 En Automóvil:</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Estacionamiento disponible en la calle y estacionamientos públicos cercanos. 
                      Valet parking disponible los fines de semana.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Reservaciones</CardTitle>
                <CardDescription>
                  Garantiza tu mesa llamándonos o enviándonos un mensaje
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    Recomendamos hacer reservaciones, especialmente:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    <li>Viernes y sábados por la noche</li>
                    <li>Grupos de más de 6 personas</li>
                    <li>Celebraciones especiales</li>
                    <li>Fines de semana durante el desayuno</li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <Button className="flex-1">
                      <Phone className="h-4 w-4 mr-2" />
                      Llamar Ahora
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Mail className="h-4 w-4 mr-2" />
                      Enviar Email
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Special Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="font-semibold mb-2">Eventos Privados</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Organizamos cumpleaños, reuniones familiares y eventos corporativos. 
                Menús especiales disponibles.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="font-semibold mb-2">Servicio a Domicilio</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Entregamos en toda la zona de Del Valle, Nápoles y colonias cercanas. 
                Pedido mínimo: $200 pesos.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="font-semibold mb-2">Métodos de Pago</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Aceptamos efectivo, tarjetas de débito y crédito, transferencias 
                y pagos móviles.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Contact */}
        <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
          <CardContent className="pt-6 text-center">
            <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
              Contacto de Emergencia
            </h3>
            <p className="text-red-700 dark:text-red-300">
              Para emergencias fuera del horario de servicio, contacta a nuestro gerente: 
              <strong> +52 55 9999 8888</strong>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}