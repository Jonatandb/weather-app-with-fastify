### Características generales y técnicas:

- Desarrollado sobre Node.js usando JavaScript.
- Se utiliza el API del servicio de clima [Open Weather Map](https://openweathermap.org/).
- La ciudad actual se detecta con la IP del usuario utilizando el servicio de [IP-API](https://ip-api.com/).

### Esta API provee en formato JSON el estado del tiempo basado en diferentes endpoints:

- Ruta base:
  - /v1
- Endpoints:
  - /location (_Devuelve nombre de la ciudad actual_)
  - /current/city (_Devuelve clima según "city", o de la ciudad actual_)
  - /forecast/city (_Devuelve pronóstico a 5 días según "city", o de la ciudad actual_)

**Nota**: _El parámetro "city" es opcional. Si no está presente se usa la cuidad correspondiente a la IP del usuario._

### Requerimientos:

- [NodeJs v.16](https://nodejs.org/es/)
- API KEY de [Open Weather Map](https://openweathermap.org/) (_Requiere crear cuenta gratuita_)

### Miscelaneos:

- Utilizar el archivo _.env.example_ como modelo para crear un archivo llamado _.env_ que tenga el siguiente contenido:
  - PORT=3001 (_Especifica el puerto en que se desea que se ejecute la API_)

### Ejecución:

> - npm install
> - npm start
> - Navegar a http://localhost:3001/v1
