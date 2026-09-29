const PERFIL = {
  nombre: "Jowell Acosta",
  titulo: "Desarrollador de software",
  usuario: "jowell2",
  correo: "TU_CORREO@GMAIL.COM",
  linkedin: "",
  universidad: "UNACH — Universidad Autónoma del Estado de Chiapas",
  matricula: "24-1268",
  resumen:
    "Construyo aplicaciones de escritorio en Java, APIs y sistemas web en Node.js con SQLite."
};

const PROYECTOS = [
  {
    id: "sgc",
    repo: "sgc",
    titulo: "Sistema Gestor de Calificaciones",
    categoria: "web",
    destacado: true,
    anio: "2026",
    resumen:
      "Sistema web completo de gestión de calificaciones universitarias: API REST, base de datos relacional y una interfaz SPA con tres roles.",
    descripcion:
      "El proyecto más completo que he hecho. Un sistema académico donde docentes registran notas, estudiantes consultan su boletín y coordinadores generan reportes estadísticos. El backend expone una API REST genérica que valida cada tabla contra el esquema real de SQLite antes de operar, y el frontend es una SPA en JavaScript puro que renderiza todo dinámicamente.",
    highlights: [
      "API REST en Node.js + Express con rutas genéricas validadas contra el esquema",
      "10 tablas SQLite en modo WAL con claves foráneas activas",
      "Bitácora de auditoría: cada cambio de nota queda registrado",
      "3 roles con menús distintos: administrador, docente y estudiante",
      "Boletín, índice GPA ponderado por créditos y ~20 reportes"
    ],
    stack: ["Node.js", "Express", "SQLite", "JavaScript", "HTML5", "CSS3"],
    metricas: { loc: "2,571", tablas: "10" }
  },
  {
    id: "cartas",
    repo: "cartas",
    titulo: "Generador y Buscador de Cartas",
    categoria: "desktop",
    destacado: true,
    anio: "2026",
    resumen:
      "Aplicación de escritorio para redactar, formatear, guardar, buscar y editar cartas formales.",
    descripcion:
      "Redactar una carta formal es repetitivo: el membrete, la fecha alineada a la derecha, la sangría y el ancho de línea son siempre iguales, solo cambia el contenido. Este programa automatiza esa parte. El usuario llena los campos y el programa compone el documento con el formato correcto, lo guarda en disco y permite recuperarlo y editarlo después.",
    highlights: [
      "802 líneas de Java Swing sin ninguna librería externa",
      "Composición automática con ajuste de línea y sangría de párrafo",
      "Hasta 8 párrafos dinámicos en el cuerpo de la carta",
      "Guardado en .txt con marcadores que permiten releer y editar el archivo",
      "Parser propio que reconstruye el documento para poder editarlo",
      "Validación que acumula todos los errores y los muestra juntos"
    ],
    stack: ["Java", "Swing", "NIO", "JOptionPane"],
    metricas: { loc: "802" }
  },
  {
    id: "buscaminas",
    repo: "buscaminas",
    titulo: "Buscaminas",
    categoria: "desktop",
    destacado: true,
    anio: "2026",
    resumen:
      "Clon completo de Minesweeper con arte propio dibujado en Graphics2D, cronómetro y tres dificultades.",
    descripcion:
      "El clásico Buscaminas, pero sin usar ni un solo componente visual por defecto. Cada botón del tablero dibuja su propio rectángulo redondeado sobrescribiendo paintComponent, con antialiasing, cambios de color al presionar y al pasar el cursor por encima. Incluye revelado en cascada de celdas vacías, primer clic siempre seguro y cronómetro con formato de minutos y segundos.",
    highlights: [
      "622 líneas, arte 100% propio con paintComponent y Graphics2D",
      "Revelado recursivo en cascada y celda inicial garantizada sin mina",
      "Look-and-Feel cross-platform forzado para verse igual en cualquier sistema",
      "Navegación entre lobby y tablero con CardLayout",
      "Cronómetro con javax.swing.Timer que arranca en el primer clic",
      "Atajos de teclado: F2 para reiniciar, ESC para volver al menú"
    ],
    stack: ["Java", "Swing", "Graphics2D", "CardLayout"],
    metricas: { loc: "622" }
  },
  {
    id: "agenda",
    repo: "agenda",
    titulo: "Agenda de Citas",
    categoria: "desktop",
    anio: "2025",
    resumen:
      "Agenda de citas con base de datos SQLite real, prepared statements y búsqueda por texto libre.",
    descripcion:
      "Una agenda sencilla que resuelve un problema concreto: anotar citas en un cuaderno y luego no encontrarlas. Cada cita se guarda con nombre, fecha y motivo en una base SQLite. Menos código, más concurrencia y, sobre todo, el principio de que cancelar a la mitad nunca debe dejar registros a medias.",
    highlights: [
      "Base SQLite real con JDBC y la clase interna Cita como modelo de dominio",
      "PreparedStatement en todas las escrituras, immune a inyección SQL",
      "Try-with-resources en el manejo de conexiones y statements",
      "Validación en loop: rechaza fechas inválidas y vuelve a preguntar",
      "Cancelar un formulario a la mitad no deja registros incompletos",
      "Sintaxis moderna: switch expressions con flechas (Java 14+)"
    ],
    stack: ["Java", "Swing", "JDBC", "SQLite"],
    metricas: { loc: "218" }
  },
  {
    id: "calculadora",
    repo: "calculadora",
    titulo: "Calculadora",
    categoria: "desktop",
    anio: "2025",
    resumen:
      "Calculadora de cuatro operaciones con menú interactivo y protección contra división entre cero.",
    descripcion:
      "Un ejercicio de estructuras de control: menú en bucle, switch, funciones auxiliares y validación de entrada. Lo interesante no es la calculadora en sí, sino el manejo cuidadoso de los casos borde: entrada no numérica, división entre cero y —el que más se olvida— que el usuario cierre el diálogo con la X en lugar de escribir algo.",
    highlights: [
      "Funciones auxiliares separadas por responsabilidad con prefijo fnc_",
      "Protección contra división entre cero que repregunta en bucle",
      "Manejo explícito del caso en que el usuario cierra la ventana",
      "Resultados formateados a dos decimales con String.format",
      "Sin dependencias: compila con el JDK pelado"
    ],
    stack: ["Java", "Swing"],
    metricas: { loc: "96" }
  },
  {
    id: "formulario",
    repo: "formulario",
    titulo: "Formulario de Estudiante",
    categoria: "desktop",
    anio: "2025",
    resumen:
      "Formulario con validación de campos vacíos y una segunda ventana con el resumen de los datos.",
    descripcion:
      "Mi primer formulario en Swing. Parece simple, pero es donde se aprende lo básico de una interfaz de escritorio: armar el layout, leer los campos, validar antes de procesar y abrir una ventana de resultado al completar la acción.",
    highlights: [
      "Layout con FlowLayout y ventanas centradas en pantalla",
      "Lambdas en el ActionListener del botón",
      "Validación que detiene el flujo si falta algún campo",
      "Ventana de resumen generada con los datos capturados"
    ],
    stack: ["Java", "Swing"],
    metricas: { loc: "58" }
  },
  {
    id: "html",
    repo: "html",
    titulo: "Sitio de formularios HTML",
    categoria: "web",
    anio: "2025",
    resumen:
      "Sitio estático de tres páginas encadenadas que practica los distintos tipos de input de HTML5.",
    descripcion:
      "Un ejercicio de HTML puro: un formulario con los seis tipos de input, y dos páginas de contenido enlazadas entre sí para practicar hipervínculos. No tiene CSS, JavaScript ni backend — el objetivo era practicar la estructura del documento y los formularios, no construir una aplicación real.",
    highlights: [
      "Práctica de los seis tipos de input de HTML5 en un solo formulario",
      "Navegación cíclica entre tres páginas con hipervínculos",
      "Sitio 100% estático, se abre con doble clic sin servidor",
      "Sin dependencias ni build step"
    ],
    stack: ["HTML5"],
    metricas: { paginas: "3" }
  }
];

const STACK = [
  { grupo: "Lenguajes", items: ["Java", "JavaScript", "HTML5", "CSS3", "SQL"] },
  { grupo: "Backend", items: ["Node.js", "Express", "REST API", "SQLite", "JDBC"] },
  { grupo: "Frontend", items: ["JavaScript ES6", "CSS Grid", "Flexbox", "Vanilla JS"] },
  { grupo: "Herramientas", items: ["Swing", "Graphics2D", "CardLayout", "Git"] }
];

const FILTROS = [
  { id: "todos", label: "Todos" },
  { id: "web", label: "Web" },
  { id: "desktop", label: "Java Desktop" }
];
