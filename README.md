# Portafolio

Sitio web personal con los proyectos que he hecho en la carrera de Ingeniería en
Sistemas Computacionales (UNPHU): programas de escritorio en Java, sistemas web,
sistemas ciberfísicos, IoT y hardware.

## Ver en vivo

[https://jowell2.github.io/portafolio](https://jowell2.github.io/portafolio)

## Contacto

- **Jowell Javier Acosta Castillo**
- Correo: Jowelljavier@gmail.com
- Teléfono: 809-305-1381
- Santo Domingo, República Dominicana
- [GitHub](https://github.com/jowell2)

## Tecnología

HTML, CSS y JavaScript puro. Sin frameworks, sin bundler, sin build step y sin
dependencias: el sitio se abre directamente desde el archivo.

- **HTML5** semántico
- **CSS3** con custom properties, Flexbox, Grid y una paleta cálida en tonos papel
- **JavaScript ES6** sin librerías: render de las tarjetas, filtros y el menú móvil
- Tipografías: Fraunces (títulos), Public Sans (texto) y JetBrains Mono (años y etiquetas)

## Estructura

```
portafolio/
├── index.html      Estructura y secciones
├── css/styles.css  Estilos
└── js/
    ├── data.js     Perfil, proyectos y stack — editar aquí para agregar proyectos
    └── main.js     Render de tarjetas, filtros y animaciones
```

Todo el contenido editable está en `js/data.js`:

- `PERFIL` — nombre, usuario de GitHub, correo, teléfono, ubicación y universidad
- `PROYECTOS` — agregar un objeto por proyecto
- `STACK` — grupos de tecnologías
- `FILTROS` — botones de filtrado; cada `id` debe coincidir con la `categoria` de
  algún proyecto, y esa categoría necesita su color en `css/styles.css`
  (`.chip-cat--<categoria>`)

## Desarrollo local

No necesita servidor. Abre `index.html` en el navegador, o sírvelo con:

```bash
npx serve .
```

## Proyectos

| Proyecto | Área | Tecnologías | Código |
|---|---|---|---|
| Sistema de monitoreo CPS | Ciberfísico | Arduino Mega 2560, sensores, LCD, Wokwi | — |
| Control de dron DJI Tello | IoT / Drones | MKR WiFi 1010, WiFiNINA, WiFiUDP | — |
| Robot recogedor de basura | Ciberfísico | ESP32, Wokwi, ThingSpeak, UML, Red de Petri | — |
| Teléfono CPS propio | Ciberfísico | ESP32, OLED SSD1306, HC-SR04, Wokwi | — |
| SGC — Sistema Gestor de Calificaciones | Web | Node.js, Express, SQLite, UML | [sgc](https://github.com/jowell2/sgc) |
| Generador y Buscador de Cartas | Java Desktop | Java, Swing, NIO | [cartas](https://github.com/jowell2/cartas) |
| Buscaminas | Java Desktop | Java, Swing, Graphics2D, CardLayout | [buscaminas](https://github.com/jowell2/buscaminas) |
| Agenda de Citas | Java Desktop | Java, Swing, JDBC, SQLite | [agenda](https://github.com/jowell2/agenda) |
| Formulario de Estudiante | Java Desktop | Java, Swing | [formulario](https://github.com/jowell2/formulario) |
| Sitio de formularios HTML | Web | HTML5 | [html](https://github.com/jowell2/html) |

> La columna **Código** sale del campo `repo` de cada proyecto en `js/data.js`. Cuando
> un proyecto tenga su repositorio en GitHub, pon ahí el nombre (`repo: "nombre-del-repo"`)
> y el botón "Ver código en GitHub" aparece solo en esa tarjeta.

## Autor

**Jowell Javier Acosta Castillo** — [GitHub](https://github.com/jowell2)
