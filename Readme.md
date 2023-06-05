# Aplicación con información del clima: WeatherApp-Fastify

- Muestra el clima de la ciudad actual, junto con el pronóstico de los próximos 5 días.
- Permite también seleccionar entre otras 5 ciudades de las cuales mostrar la misma información.

---

### Disponible online desde:

- Github pages:
  - https://jonatandb.github.io/weather-app-with-fastify/
- Firebase:
  - https://weatherapp-jdb.web.app
- Vercel:
  - https://weatherapp-jdb.vercel.app/
- Netlify:
  - https://weatherapp-jdb.netlify.app/

---

<center>

![desktop](/frontend/WeatherApp_Screenshot_v5.gif)

</center>


---

#### Este repo funciona como "concentrador" de los dos repos subyacentes, configurados como 'sub-árboles' de git:

El proyecto "backend" es la rama __main__ del repositorio:
- https://github.com/Jonatandb/weatherapp_api.git

El proyecto "frontend" es la rama __master__ del repositorio:
- https://github.com/Jonatandb/weatherapp_frontend.git

Por lo que para actualizarlos hay que ejecutar desde la raíz del proyecto:

    - Backend: git subtree pull --prefix=backend https://github.com/Jonatandb/weatherapp_api.git main
    - Frontend: git subtree pull --prefix=backend https://github.com/Jonatandb/weatherapp_frontend.git master

---

Los subárboles en Git son una forma de incrustar un repositorio Git completo dentro de otro repositorio Git como una subcarpeta. A diferencia de los submódulos, los subárboles mantienen su propio historial de cambios independiente y permiten una gestión más granular del repositorio embebido.

Aquí hay una explicación más detallada de cómo usar los subárboles en Git:

1. Agregar un subárbol:
   - Para agregar un subárbol, primero debes tener el repositorio que deseas agregar como un subárbol.
   - En el repositorio principal, puedes usar el comando `git subtree add` seguido de la URL del repositorio y la ruta de la subcarpeta en la que se incrustará.
   - Por ejemplo: `git subtree add --prefix=subcarpeta https://github.com/usuario/repositorio.git main`
   - Esto agrega el repositorio remoto como un subárbol en la subcarpeta especificada.

2. Trabajar con el subárbol:
   - Una vez que has agregado el subárbol, puedes trabajar con él como cualquier otro directorio en Git.
   - Puedes realizar operaciones como `git pull`, `git push`, `git commit`, etc., dentro de la subcarpeta del subárbol.
   - Los cambios realizados en la subcarpeta del subárbol se registrarán en el historial de cambios del repositorio principal.

3. Actualizar el subárbol:
   - Si el repositorio embebido en el subárbol se actualiza, puedes obtener esas actualizaciones en el repositorio principal.
   - Para hacerlo, puedes usar el comando `git subtree pull` seguido de la ruta del subárbol y la referencia remota a la que deseas hacer pull.
   - Por ejemplo: `git subtree pull --prefix=subcarpeta https://github.com/usuario/repositorio.git main`
   - Esto actualizará el subárbol en el repositorio principal con las últimas actualizaciones del repositorio remoto.

4. Compartir el repositorio con otros:
   - Si deseas compartir el repositorio principal con otros colaboradores, ellos también podrán trabajar con el subárbol sin necesidad de configuraciones adicionales.
   - Al clonar el repositorio principal, los subárboles se clonarán automáticamente como parte del repositorio.

5. Remover un subárbol:
   - Si ya no necesitas el subárbol en el repositorio principal, puedes eliminarlo utilizando el comando `git subtree remove` seguido de la ruta del subárbol.
   - Por ejemplo: `git subtree remove --prefix=subcarpeta`
   - Esto eliminará el subárbol y su historial de cambios del repositorio principal.

Usar subárboles en Git puede ser útil cuando deseas mantener diferentes repositorios dentro de un repositorio principal y gestionarlos de manera independiente. Sin embargo, debes tener en cuenta que trabajar con subárboles puede requerir un mayor nivel de conocimiento de Git y puede agregar complejidad a tu flujo de trabajo. Asegúrate de comprender las implicaciones y considera si los submódulos u otras alternativas pueden ser más adecuados para tu caso específico.
