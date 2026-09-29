# Portafolio

Sitio web personal con los proyectos que he desarrollado, y enlaces al código fuente de
cada uno en GitHub para que puedas revisarlo directamente.

## Ver en vivo

[https://jowell2.github.io/portafolio](https://jowell2.github.io/portafolio)

## Tecnología

HTML, CSS y JavaScript puro. Sin frameworks, sin bundler, sin build step y sin
dependencias: el sitio se abre directamente desde el archivo.

- **HTML5** semántico
- **CSS3** con custom properties, Flexbox, Grid, `backdrop-filter` y animaciones
- **JavaScript ES6** con `IntersectionObserver` para las animaciones al hacer scroll

## Estructura

```
portafolio/
├── index.html      Estructura y secciones
├── css/styles.css  Estilos
└── js/
    ├── data.js     Perfil, proyectos y stack — editar aquí para agregar proyectos
    └── main.js     Render de tarjetas, filtros y animaciones
```

Todo el contenido editable está en `js/data.js`. Para agregar un proyecto, añade un
objeto al arreglo `PROYECTOS` con `repo` apuntando al repositorio en GitHub.

## Desarrollo local

No necesita servidor. Abre `index.html` en el navegador, o sírvelo con:

```bash
npx serve .
```

## Proyectos featured

| Proyecto | Tecnología | Repositorio |
|---|---|---|
| Sistema Gestor de Calificaciones | Node.js, Express, SQLite | [jowell2/sgc](https://github.com/jowell2/sgc) |
| Generador y Buscador de Cartas | Java, Swing | [jowell2/cartas](https://github.com/jowell2/cartas) |
| Buscaminas | Java, Swing, Graphics2D | [jowell2/buscaminas](https://github.com/jowell2/buscaminas) |

## Autor

**Jowell Acosta** — [GitHub](https://github.com/jowell2)
