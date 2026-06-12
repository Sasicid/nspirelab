/* ============================================================
   CATÁLOGO DE PRODUCTOS — AGREGA TUS CÓDIGOS AQUÍ
   Cada producto es un bloque { ... }. Copia uno, pégalo y edítalo.

   Campos:
   - id:               identificador único, sin espacios (ej: "calculo-2")
   - nombre:           nombre comercial del programa
   - categoria:        agrupa los filtros del catálogo (usa pocas, repítelas)
   - estado:           "disponible" | "beta" | "proximamente"
   - precio:           número, en pesos (sin puntos). 0 = "Gratis"
   - precioAntes:      precio tachado para mostrar descuento, o null
   - descripcionCorta: 1-2 líneas para la tarjeta del catálogo
   - descripcionLarga: párrafo completo para la ventana de detalle
   - caracteristicas:  lista de funciones (las 3 primeras salen en la tarjeta)
   - ramos:            en qué ramos/asignaturas sirve (chips en el detalle)
   - video:            ID de YouTube del demo (ej: "UJuCrWxkw9I"), o ""
   - linkPago:         link de pago directo (MercadoPago, etc.). Si está
                       vacío "", el botón Comprar abre WhatsApp con un
                       mensaje listo para enviar.
   - icono:            "estructura" | "matriz" | "integral" | "edo" |
                       "fisica" | "material" | "suelo" | "pack"
   - destacado:        true le pone la cinta "★ MEJOR VALOR"
   ============================================================ */

const PRODUCTOS = [
  {
    id: "calculo-total",
    nombre: "Cálculo Total",
    categoria: "Cálculo",
    estado: "disponible",
    precio: 9990,
    precioAntes: null,
    descripcionCorta: "Límites, derivadas e integrales resueltas paso a paso, con el desarrollo completo como lo pide el profesor.",
    descripcionLarga: "El compañero perfecto para Cálculo I y II. Ingresas la función y el programa muestra el desarrollo completo: regla aplicada en cada paso, simplificaciones intermedias y resultado final. Incluye módulos de optimización, razones de cambio y análisis de funciones (máximos, mínimos, inflexión).",
    caracteristicas: [
      "Derivadas paso a paso (cadena, producto, cociente)",
      "Integrales por sustitución y por partes con desarrollo",
      "Límites con resolución de indeterminaciones",
      "Optimización y razones de cambio guiadas",
      "Análisis completo de funciones para gráficos",
      "Menú simple en español",
    ],
    ramos: ["Cálculo I", "Cálculo II", "Matemáticas para Ingeniería"],
    video: "",
    linkPago: "",
    icono: "integral",
    destacado: false,
  },
  {
    id: "algebra-master",
    nombre: "Álgebra Lineal Master",
    categoria: "Álgebra",
    estado: "disponible",
    precio: 9990,
    precioAntes: null,
    descripcionCorta: "Gauss paso a paso, inversas, determinantes, valores y vectores propios — con cada operación de fila a la vista.",
    descripcionLarga: "Todo el álgebra lineal del semestre en un solo programa. La estrella es el escalonamiento de Gauss-Jordan mostrando cada operación de fila (F2 ← F2 − 2·F1) tal como hay que escribirlas en la prueba. Además: inversa por cofactores y por Gauss, determinantes con desarrollo, independencia lineal, y valores/vectores propios con su polinomio característico.",
    caracteristicas: [
      "Gauss-Jordan mostrando cada operación de fila",
      "Sistemas de ecuaciones con clasificación de soluciones",
      "Inversa y determinante con desarrollo",
      "Valores y vectores propios + polinomio característico",
      "Bases, dimensión e independencia lineal",
      "Producto cruz, proyecciones y Gram-Schmidt",
    ],
    ramos: ["Álgebra Lineal", "Álgebra II"],
    video: "",
    linkPago: "",
    icono: "matriz",
    destacado: false,
  },
  {
    id: "edo-solver",
    nombre: "EDO Solver",
    categoria: "Cálculo",
    estado: "disponible",
    precio: 11990,
    precioAntes: null,
    descripcionCorta: "Ecuaciones diferenciales ordinarias clasificadas y resueltas con el método correcto, paso a paso.",
    descripcionLarga: "Identifica automáticamente el tipo de EDO (variables separables, lineal de primer orden, exacta, Bernoulli, homogénea, segundo orden a coeficientes constantes) y la resuelve mostrando el método completo: factor integrante, ecuación característica, solución homogénea + particular. Incluye problemas de aplicación: mezclas, enfriamiento de Newton y circuitos RL/RC.",
    caracteristicas: [
      "Clasificación automática del tipo de EDO",
      "Primer orden: separables, lineales, exactas, Bernoulli",
      "Segundo orden: coeficientes constantes y Cauchy-Euler",
      "Coeficientes indeterminados y variación de parámetros",
      "Aplicaciones: mezclas, enfriamiento, circuitos",
      "Condiciones iniciales y solución particular",
    ],
    ramos: ["Ecuaciones Diferenciales", "Cálculo III"],
    video: "",
    linkPago: "",
    icono: "edo",
    destacado: false,
  },
  {
    id: "estatica-2d",
    nombre: "Estática 2D Pro",
    categoria: "Estructuras",
    estado: "disponible",
    precio: 14990,
    precioAntes: null,
    descripcionCorta: "Reacciones de apoyo, armaduras y diagramas de esfuerzo interno (N, V, M) directo en la calculadora.",
    descripcionLarga: "Resuelve los clásicos de Estática: equilibrio de partículas y cuerpos rígidos, reacciones en vigas con todo tipo de apoyos y cargas (puntuales, distribuidas uniformes y triangulares, momentos), armaduras por método de nodos y secciones, y diagramas de fuerza axial, corte y momento flector con los valores críticos marcados.",
    caracteristicas: [
      "Reacciones de apoyo con ecuaciones de equilibrio a la vista",
      "Cargas puntuales, distribuidas y momentos aplicados",
      "Armaduras por método de nodos y de secciones",
      "Diagramas N / V / M con valores máximos",
      "Centroides y momentos de inercia de áreas compuestas",
      "Roce estático y poleas",
    ],
    ramos: ["Estática", "Mecánica I", "Análisis Estructural"],
    video: "",
    linkPago: "",
    icono: "estructura",
    destacado: false,
  },
  {
    id: "fisica-mecanica",
    nombre: "Física Mecánica Kit",
    categoria: "Física",
    estado: "beta",
    precio: 8990,
    precioAntes: null,
    descripcionCorta: "Cinemática, dinámica, trabajo-energía y momentum con fórmulas seleccionadas automáticamente.",
    descripcionLarga: "Le das los datos que tienes y el programa identifica qué fórmulas aplican, despeja la incógnita y muestra el reemplazo numérico completo. Cubre cinemática 1D/2D, proyectiles, leyes de Newton con planos inclinados y roce, trabajo y energía, y choques en una dimensión.",
    caracteristicas: [
      "Cinemática 1D y 2D con selección automática de fórmula",
      "Lanzamiento de proyectiles completo",
      "Newton: planos inclinados, roce, poleas",
      "Trabajo, energía y potencia",
      "Momentum y choques elásticos/inelásticos",
    ],
    ramos: ["Física I", "Mecánica"],
    video: "",
    linkPago: "",
    icono: "fisica",
    destacado: false,
  },
  {
    id: "resistencia-materiales",
    nombre: "Resistencia de Materiales",
    categoria: "Estructuras",
    estado: "beta",
    precio: 12990,
    precioAntes: null,
    descripcionCorta: "Esfuerzos axiales, torsión, flexión, círculo de Mohr y deflexión de vigas paso a paso.",
    descripcionLarga: "El ramo que más cuesta, resuelto con calma: esfuerzo y deformación axial (incluyendo barras compuestas y térmica), torsión en ejes, esfuerzos por flexión y corte transversal, transformación de esfuerzos con círculo de Mohr dibujado en pantalla, y deflexión de vigas por integración doble y superposición.",
    caracteristicas: [
      "Esfuerzo-deformación axial y barras compuestas",
      "Torsión en ejes circulares con ángulo de giro",
      "Flexión: esfuerzos normales y de corte",
      "Círculo de Mohr dibujado con esfuerzos principales",
      "Deflexión de vigas por doble integración",
    ],
    ramos: ["Resistencia de Materiales", "Mecánica de Sólidos"],
    video: "",
    linkPago: "",
    icono: "material",
    destacado: false,
  },
  {
    id: "mecanica-suelos",
    nombre: "Mecánica de Suelos",
    categoria: "Estructuras",
    estado: "proximamente",
    precio: 12990,
    precioAntes: null,
    descripcionCorta: "Relaciones de fase, esfuerzos efectivos, consolidación y clasificación USCS. En desarrollo.",
    descripcionLarga: "En desarrollo: relaciones peso-volumen con diagrama de fases, clasificación de suelos USCS y AASHTO, esfuerzos geostáticos y efectivos con napa freática, flujo de agua y consolidación. Avísanos si lo quieres y te escribimos apenas esté listo (los primeros en la lista tienen descuento de lanzamiento).",
    caracteristicas: [
      "Relaciones de fase (e, n, w, S, pesos específicos)",
      "Clasificación USCS y AASHTO guiada",
      "Esfuerzos totales, neutros y efectivos",
      "Consolidación y asentamientos",
    ],
    ramos: ["Mecánica de Suelos", "Geotecnia"],
    video: "",
    linkPago: "",
    icono: "suelo",
    destacado: false,
  },
  {
    id: "pack-civil",
    nombre: "Pack Ingeniería Civil",
    categoria: "Packs",
    estado: "disponible",
    precio: 39990,
    precioAntes: 59940,
    descripcionCorta: "Todos los códigos disponibles del catálogo + actualizaciones y códigos beta incluidos. El kit completo de la carrera.",
    descripcionLarga: "Todos los programas disponibles del catálogo en una sola compra, con un 33% de descuento sobre el precio individual. Incluye también acceso anticipado a los programas en beta y a todos los que se publiquen mientras estés en la carrera. Una sola inversión para todos los ramos.",
    caracteristicas: [
      "Todos los códigos disponibles incluidos",
      "Acceso anticipado a los programas beta",
      "Códigos nuevos incluidos mientras estudias",
      "Actualizaciones de por vida",
      "Soporte prioritario por WhatsApp",
    ],
    ramos: ["Toda la carrera"],
    video: "",
    linkPago: "",
    icono: "pack",
    destacado: true,
  },
];
