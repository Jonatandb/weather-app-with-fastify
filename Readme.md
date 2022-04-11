### Características generales y técnicas

- Esta App permite muestra información sobre el clima para la ciudad acutal así como también el pronósitoco para los próximos cinco días. También permite obtener la misma información de hasta 5 ciudades más.
- Desarrollado con React mediante la herramienta _Create-React-App_.
- Se utiliza el API de la carpeta backend para obtener y mostrar datos del clima de [Open Weather Map](https://openweathermap.org/).

---

<center>

![desktop](WeatherApp_Screenshot.gif)

</center>

---

### Requerimientos

- [NodeJs v.16](https://nodejs.org/es/)

---

### Ejecución

> - cd frontend
> - Crear y actualizar archivo _.env_, estableciendo el valor de REACT_APP_API_URL (en el caso de que la API no este funcionando en la misma máquina que el frontend) con la URL de la API.
> - npm start

---

### Miscelaneos

---

### Tests/Coverage

> - npm test
> - npm run test:coverage (_Luego abrir el archivo: **frontend\coverage\lcov-report\index.html**_)

---

### Pendientes/Bugs:

- [https://github.com/Jonatandb/weather-app-with-fastify/issues](https://github.com/Jonatandb/weather-app-with-fastify/issues)

---

### Sitios investigados

- https://daily-dev-tips.com/posts/react-snapshot-testing-with-jest/
- https://github.com/facebook/create-react-app/issues/9935 Proposal: Revert override of jest default resetMocks
- https://github.com/jefflau/jest-fetch-mock/issues/194#issuecomment-810049252 Getting TypeError: isMocking is not a function or its return value is not iterable
- https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
- https://stackoverflow.com/questions/42398660/how-to-display-emoji-in-react-app
- https://www.mclibre.org/consultar/htmlcss/html/html-unicode-dibujos.html
- https://www.leighhalliday.com/mock-fetch-jest
- https://semver.org/lang/es/
- https://jestjs.io/docs/configuration
- https://stackoverflow.com/questions/52508144/jest-test-succeed-with-error-printed-to-console
- https://stackoverflow.com/questions/52459910/how-to-test-with-jest-that-reactdom-render-has-been-called-when-it-has-been-wrap
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header
- https://github.com/kentcdodds/react-testing-library-examples
- https://stackoverflow.com/questions/63427988/react-testing-library-match-number-of-buttons
- https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-screen-queries.md
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles
- https://testing-library.com/docs/queries/about/#priority
- https://stackoverflow.com/questions/26934719/do-i-need-role-button-on-a-button
- https://github.com/NoriSte/ui-testing-best-practices
- https://dev.to/noriste/from-unreadable-react-component-tests-to-simple-stupid-ones-3ge6
- https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-node-access.md
- https://stackoverflow.com/questions/54234515/get-by-html-element-with-react-testing-library
- https://noriste.github.io/reactjsday-2019-testing-course/book/intro-to-react-testing/jest-dom.html
- https://www.freecodecamp.org/news/html-role-attribute
- https://create-react-app.dev/docs/setting-up-your-editor/#extending-or-replacing-the-default-eslint-config
- https://create-react-app.dev/docs/setting-up-your-editor/#formatting-code-automatically - husky/lint-staged/prettier
- https://github.com/testing-library/eslint-plugin-jest-dom
- https://github.com/testing-library/eslint-plugin-testing-library
- https://kentcdodds.com/blog/common-mistakes-with-react-testing-library
- https://github.com/testing-library/jest-dom#custom-matchers
- https://mui.com/components/skeleton/
- https://stackoverflow.com/questions/63696265/how-to-get-a-code-coverage-report-with-react-create-app
- https://realfavicongenerator.net/
- https://www.ionos.com/tools/favicon-generator
- https://openweathermap.org/api/one-call-api
- https://openweathermap.org/faq#:~:text=OpenWeather%20uses%20Unix%20time%20and,forecast%20and%20historical%20weather%20data.
- https://stackoverflow.com/questions/62376115/how-to-obtain-open-weather-api-date-time-from-city-being-fetched
- https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-screen-queries.md
- https://www.youtube.com/watch?v=KYjjtRgg_H0&ab_channel=midudev TESTING en REACT 🧪 ¡Aprende DESDE CERO! Con react-testing-library y Jest (FullStack Bootcamp JS)
- https://emojiterra.com/es/sol/ Emojis
- https://www.w3schools.com/charsets/ref_emoji.asp
- https://openweathermap.org/weather-conditions
- https://github.com/fastify/fastify-cors
- https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/
