const PERFIL = {
  nombre: "Jowell Javier Acosta Castillo",
  nombreCorto: "Jowell Acosta",
  usuario: "jowell2",
  correo: "Jowelljavier@gmail.com",
  telefono: "809-305-1381",
  ubicacion: "Santo Domingo, República Dominicana",
  linkedin: "",
  universidad: "UNPHU — Universidad Nacional Pedro Henríquez Ureña",
  carrera: "Ingeniería en Sistemas Computacionales"
};

const PROYECTOS = [
  {
    id: "cps-monitoreo",
    titulo: "Sistema de monitoreo CPS",
    categoria: "cps",
    destacado: true,
    anio: "2026",
    resumen:
      "Monitoreo con sensores en un Arduino Mega 2560: lectura, alerta por sobrecarga y control del sistema de agua con un botón.",
    descripcion:
      "El Arduino Mega 2560 lee los sensores y muestra el estado en el LCD. Cuando la lectura pasa del límite, el buzzer suena y los LEDs cambian. El joystick activa o desactiva la alerta de sobrecarga, y aparte hay un sistema de agua que se enciende y se apaga contando las pulsaciones de un botón. Todo se probó en simulación antes de armarlo en la mesa.",
    highlights: [
      "El Arduino Mega 2560 lee los sensores y el LCD muestra el estado",
      "Alerta por sobrecarga con buzzer y LEDs",
      "El joystick activa y desactiva la alerta",
      "Sistema de agua con contador de pulsaciones",
      "Módulo de botones para las otras interacciones",
      "Simulación antes del montaje"
    ],
    stack: ["Arduino", "C++", "Sensores", "LCD", "Wokwi", "Tinkercad"],
    metricas: { componentes: "6" }
  },
  {
    id: "dron-tello",
    titulo: "Control de dron DJI Tello",
    categoria: "iot",
    destacado: true,
    anio: "2026",
    resumen:
      "Una MKR WiFi 1010 controla un DJI Tello por WiFi, mandando comandos con UDP.",
    descripcion:
      "El Tello recibe los comandos por WiFi, y el punto del proyecto es justamente esa conexión. La MKR WiFi 1010 entra en la red del dron con WiFiNINA y manda los comandos con WiFiUDP; también se leen datos del estado del dron. Va con los diagramas de conexión y el código.",
    highlights: [
      "La placa se mete al WiFi del dron con WiFiNINA",
      "Comandos enviados con WiFiUDP",
      "Lectura del estado del dron",
      "Diagramas de conexión incluidos"
    ],
    stack: ["Arduino", "MKR WiFi 1010", "WiFiNINA", "WiFiUDP", "UDP", "DJI Tello"],
    metricas: { componentes: "2" }
  },
  {
    id: "robot-basura",
    titulo: "Robot recogedor de basura",
    categoria: "cps",
    destacado: true,
    anio: "2026",
    resumen:
      "Proyecto en equipo. El robot se modeló con una máquina de estados, un diagrama de secuencia UML y una Red de Petri, y se simuló en Wokwi con un ESP32.",
    descripcion:
      "Este fue en equipo. Antes de programar, el comportamiento del robot se dividió en tres modelos: una máquina de estados finitos con los modos en los que puede estar, un diagrama de secuencia con el orden de las interacciones, y una Red de Petri para la concurrencia. Con eso ya montado se simuló en Wokwi sobre un ESP32. Los sensores van a ThingSpeak y se ven en un dashboard con gráficos en tiempo real. Los reportes se generan solos y deciden por umbrales.",
    highlights: [
      "Máquina de estados finitos, diagrama de secuencia UML y Red de Petri",
      "Simulación en Wokwi con un ESP32",
      "Los sensores se mandan a ThingSpeak",
      "Dashboard con gráficos en tiempo real",
      "Reportes automáticos que deciden por umbrales",
      "Proyecto en equipo"
    ],
    stack: ["ESP32", "Wokwi", "ThingSpeak", "UML", "Red de Petri"],
    metricas: { diagramas: "3" }
  },
  {
    id: "telefono-cps",
    titulo: "Teléfono CPS propio",
    categoria: "cps",
    destacado: true,
    anio: "2026",
    resumen:
      "Un teléfono con un mecanismo propio, en vez de disco, DTMF o IP. Tiene voz, huella y un generador de frecuencia.",
    descripcion:
      "La idea era no repetir los mecanismos de siempre. En vez de disco, DTMF o IP, este teléfono usa otro: reconocimiento de voz, autenticación con huella y un generador de frecuencia para la señalización, más los actuadores. Se simuló en Wokwi con un ESP32, sensor HC-SR04, buzzer, LED y pantalla OLED SSD1306. El diseño quedó documentado con sus diagramas.",
    highlights: [
      "Mecanismo propio, sin disco, DTMF ni IP",
      "Reconocimiento de voz y huella dactilar",
      "Generador de frecuencia para la señal",
      "Wokwi: ESP32, HC-SR04, buzzer, LED y OLED SSD1306",
      "Diseño documentado con diagramas"
    ],
    stack: ["ESP32", "Wokwi", "OLED SSD1306", "HC-SR04", "C++"],
    metricas: { componentes: "5" }
  },
  {
    id: "sgc",
    repo: "sgc",
    titulo: "SGC — Sistema Gestor de Calificaciones Académicas",
    categoria: "web",
    destacado: true,
    anio: "2026",
    resumen:
      "Sistema web completo de gestión de calificaciones universitarias: API REST, base de datos relacional y una interfaz SPA con tres roles. Documentado formalmente con UML.",
    descripcion:
      "Un sistema académico donde docentes registran notas, estudiantes consultan su boletín y coordinadores generan reportes estadísticos. El backend expone una API REST genérica que valida cada tabla contra el esquema real de SQLite antes de operar, y el frontend es una SPA en JavaScript puro que renderiza todo dinámicamente. El proyecto se desarrolló en pareja y se documentó formalmente: entradas y salidas del sistema, requisitos funcionales y no funcionales, diagramas de casos de uso, diagramas de secuencia y modelo entidad-relación.",
    highlights: [
      "API REST en Node.js + Express con rutas genéricas validadas contra el esquema",
      "10 tablas SQLite en modo WAL con claves foráneas activas",
      "Bitácora de auditoría: cada cambio de nota queda registrado",
      "3 roles con menús distintos: administrador, docente y estudiante",
      "Boletín, índice GPA ponderado por créditos y ~20 reportes",
      "Documentación formal: requisitos, casos de uso, secuencia y entidad-relación"
    ],
    stack: ["Node.js", "Express", "SQLite", "JavaScript", "HTML5", "CSS3", "UML"],
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
  {
    grupo: "Lenguajes",
    items: ["Java", "Python", "JavaScript", "Node.js", "SQL", "HTML5", "CSS3"]
  },
  {
    grupo: "Desktop y backend",
    items: ["Swing", "Graphics2D", "CardLayout", "JDBC", "Express", "REST API", "SQLite"]
  },
  {
    grupo: "Hardware",
    items: ["Arduino", "ESP32", "Arduino Mega 2560", "MKR WiFi 1010", "DJI Tello"]
  },
  {
    grupo: "Simulación y diseño",
    items: ["Wokwi", "Tinkercad", "Cirkit Designer", "ThingSpeak"]
  },
  {
    grupo: "Herramientas",
    items: ["Visual Studio Code", "Git", "GitHub", "UML", "Redes de Petri"]
  }
];

const FILTROS = [
  { id: "todos", label: "Todos" },
  { id: "cps", label: "Ciberfísicos" },
  { id: "iot", label: "IoT y drones" },
  { id: "web", label: "Web" },
  { id: "desktop", label: "Java Desktop" }
];
