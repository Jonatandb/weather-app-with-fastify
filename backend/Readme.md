### Características generales y técnicas:

- Desarrollado sobre Node.js usando JavaScript.
- Se utiliza el API del servicio de clima [Open Weather Map](https://openweathermap.org/).
- La ciudad actual se detecta con la IP del usuario, utilizando el servicio de [IP-API](https://ip-api.com/).

---

### Esta API provee en formato JSON el estado del tiempo basado en diferentes endpoints:

- Ruta base:
  - **/v1**
- Endpoints:

  - **/location** (_Devuelve nombre de la ciudad actual según la IP del usuario._)
  - **/current/city** (_Devuelve clima según "city", o de la ciudad actual si no se especificó una._)
  - **/forecast/city** (_Devuelve pronóstico a 5 días según "city", o de la ciudad actual si no se especificó una._)

    - **Nota**: _El parámetro "city" es opcional. Si no está presente se usa la cuidad correspondiente a la IP del usuario._

---

### Requerimientos:

- [NodeJs v.16](https://nodejs.org/es/)
- API KEY de [Open Weather Map](https://openweathermap.org/) (_Requiere crear cuenta gratuita_)

---

### Miscelaneos:

- Utilizar el archivo **_.env.example_** como modelo para crear un archivo llamado **_.env_** que tenga el siguiente contenido:
  - `PORT` (_Especifica el puerto en que se desea que se ejecute la API._)
  - `IP_API_SERVICE_BASE_URL` _(Especifica la url de la API que provee información sobre la ubicación según la IP proporcionada, viene pre-configurada.)_
  - `WEATHER_SERVICE_API_KEY` _(Especifica la API KEY de Open Weather Map. Requiere registro gratuito.)_

---

### Ejecución:

> - npm install
> - npm start
> - Navegar a http://localhost:3001/v1/location (_**3001** es el puerto sugerido, se debe configurar en el archivo .env -> **PORT**_)

---

### Tests/Coverage:

> - _npm test_
> - _npm run test:coverage_ (_Luego abrir el archivo: **backend\coverage\lcov-report\index.html**_)
> - ~~**NOTA** Debido a que tuve problemas para ejecutar los tests, ya que estoy usando módulos de ES con [_Dynamic imports_](https://javascript.info/modules-dynamic-imports) en un proyecto CommonJS, tuve que crear dos nuevos scripts para correr los tests, los cuales utilizan características experimentales de Node JS. (_[Fuente](https://stackoverflow.com/a/61653104/10752198)_). Los nuevos scripts son los siguientes:~~
>   - ~~_npm run test:experimental_~~
>   - ~~_npm run test:coverage:experimental_~~
>     - _(Solucionado instalando versiones anteriores de node-fetch y public-ip totalmente compatibles con CommonJS)_

---

### Pendientes/Bugs:

- Crear ruta: _/v1/forecast/city_
- Agregar Swagger (openapi)
- ~~Coverage no detecta que código está testeado y cual no.~~
- ~~Eliminar rutas creadas para hacer test de pruebas y verificar funcionamiento de Jest (eliminar también el archivo de test de esas rutas y los requests dentro del archivo requests.http).~~

---

### Sitios investigados:

-
- https://github.com/fastify/fastify/pull/2607#discussion_r501120298 - The optional chain operator /:opt?
- https://ajv.js.org/json-schema.html
- https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/#validation
- https://github.com/fastify/fastify/blob/main/docs/Reference/Request.md
- https://stackoverflow.com/questions/60372790/node-v13-jest-es6-native-support-for-modules-without-babel-or-esm
- https://stackoverflow.com/questions/31629389/how-to-use-eslint-with-jest
- https://jackfiallos.com/entendiendo-code-covereage-usando-jest
- https://jestjs.io/es-ES/search?q=coverage
- https://github.com/micromatch/micromatch
- https://jestjs.io/docs/configuration#collectcoveragefrom-array
- https://joshtronic.com/2017/10/24/configuring-jest-to-show-code-coverage-for-all-of-your-files/
- https://www.fastify.io/docs/latest/Guides/Testing/#benefits-of-using-fastifyinject
- https://github.com/fastify/fastify/blob/main/test/listen.test.js
- https://www.fastify.io/docs/latest/Reference/Server/#server
- https://jestjs.io/es-ES/docs/getting-started
- https://github.com/zentered/demo-async-fastify-with-jest ♥
- https://zentered.co/articles/setup-async-fastify-with-jest-test/ ♥♥
- https://javascript.plainenglish.io/how-to-build-a-reliable-authentication-api-with-fastify-c5a24bf8cd41 mongodb jwt bcrypt
- https://stackoverflow.com/questions/tagged/fastify+jestjs?tab=Newest
- https://stackoverflow.com/questions/71545883/how-to-setup-and-teardown-a-web-server-with-jest
- https://fettblog.eu/void-in-javascript-and-typescript/
- https://daily-dev-tips.com/posts/common-jest-matchers/
- https://dev.to/wolfejw86/setup-a-fastify-app-with-jest-tests-the-right-way-43ih
- https://dev.to/itsrennyman/how-i-structure-my-fastify-application-1j93#fifth-unit-testing
- https://node-tap.org/docs/getting-started/
- https://www.fastify.io/docs/latest/Guides/Testing/#testing-with-a-running-server
- https://ajv.js.org/json-schema.html#type
- https://stackoverflow.com/questions/38933973/how-to-provide-example-value-to-a-response-body-of-content-type-text-html-in-sw
- https://github.com/testdouble/teenytest
- https://stackoverflow.com/questions/40795836/how-do-you-use-the-files-and-directories-properties-in-package-json
- https://stackoverflow.com/questions/38009315/redirecting-from-aws-api-gateway-using-response-302
- https://stackoverflow.com/questions/60332687/how-to-define-two-different-responses-for-same-response-code-with-302-redirect
- https://github.com/fastify/fastify-swagger
- https://lenguajejs.com/automatizadores/introduccion/commonjs-vs-es-modules/
- https://www.youtube.com/watch?v=JD6VNRdGl98&ab_channel=LeonardoKuffo REST y RESTful APIs | Te lo explico en 5 minutos!
- https://www.youtube.com/watch?v=99YMeCBk3jw&ab_channel=LazyLoading Arquitectura monolítica vs microservicios
- https://www.youtube.com/watch?v=QDXMoDbOd5s&ab_channel=MakeitReal Microservicios vs Monolito
- https://www.youtube.com/watch?v=EKseAAm4pvY Creando aplicaciones web con Node.js y Fastify
- https://www.youtube.com/watch?v=YfN9hElekuM&ab_channel=LeiferMendez CORS
- https://eslint.org/docs/user-guide/getting-started
- https://github.com/prettier/eslint-config-prettier
- https://lenguajejs.com/javascript/caracteristicas/eslint/
- https://github.com/Cristiandi/demo-fastify/blob/master/src/environment.js --------- Interesante manejo de diferentes .env (local, development, etc)
- https://platzi.com/tutoriales/1339-fundamentos-javascript/2181-como-usar-eslint-y-prettier-para-mejorar-tu-codigo-javascript/
- https://daily-dev-tips.com/posts/lets-talk-about-software-testing/
- https://daily-dev-tips.com/posts/adding-jest-test-to-a-project/?utm_source=Daily+Dev+Tips&utm_medium=email&utm_campaign=mailinglist
- https://www.conventionalcommits.org/es/v1.0.0/#especificaci%c3%b3n
- https://github.com/petervanderdoes/gitflow-avh#git-flow-usage
- https://docs.github.com/es/get-started/quickstart/github-flow
- https://tech-wiki.online/es/node-setimmediate.html
- https://www.cual-es-mi-ip.net/
- https://www.npmjs.com/package/ip-address
- https://stackoverflow.com/questions/3162457/how-to-check-with-javascript-if-connection-is-local-host
- https://stackoverflow.com/questions/20553554/node-js-return-hostname
- https://stackoverflow.com/questions/21987311/check-is-nodejs-connection-come-from-localhost
- https://www.npmjs.com/package/is-localhost-url
- https://blog.devgenius.io/server-side-development-with-fastify-async-and-await-and-route-prefixes-d5704eb5206
- https://jaywolfe.dev/rapidly-build-a-nodejs-rest-api-with-fastify-postgresql-and-swagger-documentation/
- https://github.com/fastify/example -------------- Collection of Fastify projects
- https://github.com/fastify/fastify
- https://stackoverflow.com/questions/70478820/unable-to-deploy-nodejs-fastify-app-in-azure-app-service-linux
- https://dev.to/ruanmartinelli/how-to-use-schemas-on-fastify-for-fun-and-profit-25e9
- https://dev.to/dsalinasgardon/the-6-best-javascript-frameworks-to-use-in-2022-4k5k
- https://dev.to/eomm/why-should-i-prefer-fastify-to-expressjs-44c4
- https://www.fastify.io/docs/latest/Reference/Routes/#route-prefixing
- https://github.com/useaurora/api/blob/main/app.js --------------------- Buena división entre app.js y server.js \*\*
- https://github.com/fastify/fastify-autoload
- https://dev.to/itsrennyman/how-i-structure-my-fastify-application-1j93
- https://dev.to/thomasbnt/perspective-api-20al
- https://dev.to/thomasbnt/create-a-fastify-server-23lg
- https://dev.to/hypeddev/es-modules-in-fastify-349f
- https://github.com/fastify/fastify-express
- https://json-schema.org/learn/getting-started-step-by-step
- https://dev.to/cristiandi/demo-api-using-fastify-48jo
- https://dev.to/whitep4nth3r/how-i-massively-improved-my-website-performance-by-using-the-right-tool-for-the-job-23cl
- https://www.freecodecamp.org/espanol/news/que-es-jamstack/
- https://dev.to/dailydevtips1/building-a-fastify-nodejs-server-296g
- https://www.fastify.io/docs/latest/Guides/Plugins-Guide/
- https://github.com/gquittet/graceful-server
- https://github.com/fastify/fastify-sensible
- https://github.com/fastify/fastify-nextjs
- https://github.com/fastify/fastify-helmet
- https://github.com/fastify/fastify-env
- https://github.com/fastify/fastify-swagger
- https://www.fastify.io/ecosystem/
- https://www.fastify.io/docs/latest/Guides/Testing/
- https://www.fastify.io/docs/v3.0.x/Routes/
- https://www.fastify.io/docs/latest/Guides/Getting-Started/
- https://www.fastify.io/
- https://xp123.com/articles/3a-arrange-act-assert/
- https://martinfowler.com/bliki/GivenWhenThen.html
- https://dev.to/stealthmusic/everything-thats-not-tested-will-break-1adg
- https://dev.to/codingpizza/what-is-a-unit-test-1e1m
- https://github.com/Huachao/vscode-restclient
- https://stackoverflow.com/questions/69063074/rest-client-vscode-extention-is-not-sending-json-data
- https://dev.to/tusharpandey13/getting-on-with-es6-nodejs-eslint-without-babel-4ip7
- https://www.npmjs.com/package/morgan
- https://ichi.pro/es/funciones-emocionantes-de-javascript-es2021-32885188220171
- https://babeljs.io/docs/en/babel-cli
- https://www.freecodecamp.org/news/setup-babel-in-nodejs/
- https://www.freecodecamp.org/espanol/news/que-es-babel/
- https://hacks.mozilla.org/2015/08/es6-in-depth-modules/
- https://blog.logrocket.com/how-to-use-ecmascript-modules-with-node-js/
- https://stackoverflow.com/questions/69041454/error-require-of-es-modules-is-not-supported-when-importing-node-fetch
- https://es.stackoverflow.com/questions/484949/problema-con-fetch-en-node
- https://stackoverflow.com/questions/6784753/passing-route-control-with-optional-parameter-after-root-in-express
- https://stackoverflow.com/questions/60205891/import-json-extension-in-es6-node-js-throws-an-error
- https://kinsta.com/es/base-de-conocimiento/http-304/
- https://es.stackoverflow.com/questions/199109/obtener-la-ip-del-cliente-en-node-js
- https://expressjs.com/en/4x/api.html#trust.proxy.options.table
- https://www.mickpatterson.com.au/blog/api-versioning-with-nodejs-and-express/
- https://stackoverflow.com/questions/51513715/node-js-rest-api-versioning-the-right-way/51514184#51514184
- https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow
