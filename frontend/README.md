### Características generales y técnicas

- Esta App permite muestra información sobre el clima para la ciudad acutal así como también el pronósitoco para los próximos cinco días. También permite obtener la misma información de hasta 5 ciudades más.
- Desarrollado con React mediante la herramienta _Create-React-App_.
- Se utiliza el API de la carpeta backend para obtener y mostrar datos del clima de [Open Weather Map](https://openweathermap.org/).

---

### Requerimientos

- [NodeJs v.16](https://nodejs.org/es/)

---

### Ejecución

- 1° Iniciar la ejecución del servidor de backend con el siguiente comando:

> - cd backend
> - npm start
>   - Tomar nota del puerto configurado en el archivo **_.env_** (PORT) en el que se inicia el backend, ya que este debe ser utilizado por la aplicación web.

- 2° Iniciar luego esta aplicación web:

> - cd frontend
> - Agregar al archivo **_package.json_** la siguiente línea: `"proxy":"http://localhost:PORT",` - Reemplazar _PORT_ por el número de _PORT_ que está utilizando el backend.
> - npm start
>   - Generalmente la web se ejecuta en el puerto 3000 _(A menos que esté siendo utilizado por otra aplicación, en ese caso se utilizará un puerto al azar que será mostrado en la consola)_. Por lo que si no se abre automáticamente el navegador con la página, se debe abrir manualmente la dirección http://localhost:3000. (_Dónde 3000 es el puerto que puede variar en caso de estar ocupado y debe ser reemplazado por el número correcto_)

---

### Miscelaneos

---

### Tests/Coverage

---

### Pendientes/Bugs

- UI
- Reemplazar logos _.png_ y _favicon.ico_ por nuevos y originales.

---

### Sitios investigados

- https://openweathermap.org/weather-conditions
- https://github.com/fastify/fastify-cors
- https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/
