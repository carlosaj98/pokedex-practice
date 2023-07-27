He subido al repo de examples en el día de hoy. Week8/day3/notes.md. un markdown con notas de todo lo que hemos visto hasta ahora de react.

También tenéis una carpeta con el boilerplate de la practica. Es simplemente un proyecto inicializado con vite (falta instalar dependencias npm install)

En src está el main.jsx y un App.jsx que renderiza un Hola mundo. También he incluido una carpeta de assets con el logo de la página para la práctica. Podéis investigar cómo importarlo en un componente y renderizar una imagen html.

En week8/day3/pokedex-practice/docs tenéis dos png:

- wireframe de la UI a crear la UI. Intentad dejarla igual en la medida de lo posible, tamaños, colores, espacios fuentes.
- design system: Ficha con valores de fuentes,colores, etc de la UI donde sacar valores para el css

Los datos están en un data.json en week8/day3/pokedex-practice/data.json:

Es un array de objetos con todos los pokemos. Si hay algún dato que os falta de los que aparece en el prototipo no lo pongáis, pero tratad en ese caso de compensar el diseño para que quede bonito.

Se puede importar un json directamente y obtenerlo como un array de objetos nativo de javascript en react. Os he dejado la importación hecha con un console.log en el componenete App.jsx week8/day3/pokedex-practice/src/App.jsx

Moved la importación y los datos (Sin separarlos manualmente) debéis partir de ese array de objetos monolitico, únicamente si lo consideráis os lo podéis llevar a donde consideréis deben residir para vía props drillings hacer llegar la data a los componentes que lo necesiten, atendiendo siempre al principio de única fuente de verdad

Sois libres para elegir los componentes y elementos html que debéis crear, aplicar buen criterio, los componentes deben ser piezas reutilizables.

El input de búsqueda debe renderizarse tal cual aparece en el wireframe pero no debe funcionar. La práctica consiste en construir una única página sin navegación de usuarios ni eventos. Simplemente prácticad:

- creacción de componentes,
- composición de componentes,
- paso de data por props
- renderizado de listas o arrays de componentes
- css modules

Usad CSS Modules para evitar conflictos y encapsular debidamente los estilos de los componentes.

saludos.
