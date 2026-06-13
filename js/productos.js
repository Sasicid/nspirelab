/* ============================================================
   CATÁLOGO DE PROGRAMAS — AGREGA TUS CÓDIGOS AQUÍ
   Cada programa tiene DOS NIVELES (planes):
     - "verificador": solo comprueba y visualiza el resultado.  (más barato)
     - "completo":    procedimiento paso a paso + notas teóricas. (premium)

   Copia un bloque { ... }, pégalo y edítalo. Campos:
   - id:               identificador único, sin espacios (ej: "matricial")
   - nombre:           nombre comercial del programa
   - categoria:        agrupa los filtros del catálogo (usa pocas, repítelas)
   - estado:           "disponible" | "beta" | "proximamente"
   - descripcionCorta: 1-2 líneas para la tarjeta
   - descripcionLarga: párrafo para la ventana de detalle
   - ramos:            en qué ramos/asignaturas sirve (chips en el detalle)
   - video:            ID de YouTube del demo (ej: "UJuCrWxkw9I"), o ""
   - icono:            "matricial" | "hormigon" | "dinamica" | "geotecnia" |
                       "hidraulica" | "numerico" | "estructura" | "material"
   - destacado:        true le pone la cinta "★ DESTACADO"
   - niveles:          los dos planes. Cada uno con:
        tipo:           "verificador" o "completo"
        nombre:         etiqueta del plan
        tagline:        frase corta de qué hace ese plan
        precio:         número en pesos (sin puntos)
        precioAntes:    precio tachado (oferta) o null
        caracteristicas: lista de lo que incluye ese plan
        linkPago:       link de pago directo, o "" para ir a WhatsApp
   ============================================================ */

const PRODUCTOS = [
  {
    id: "matricial",
    nombre: "Análisis Matricial de Estructuras",
    categoria: "Estructuras",
    estado: "disponible",
    descripcionCorta: "Método de rigidez para armaduras y pórticos 2D: ensambla la matriz global, resuelve desplazamientos y obtiene esfuerzos en cada barra.",
    descripcionLarga: "El motor que está detrás de todo software estructural, ahora en tu calculadora. Defines nodos, barras, apoyos y cargas; el programa arma la matriz de rigidez de cada elemento, ensambla la matriz global, aplica condiciones de borde y resuelve el sistema para entregar desplazamientos nodales, reacciones y esfuerzos internos (N, V, M) de cada barra. Ideal para Análisis Estructural y como verificación de tareas hechas en SAP2000 o ETABS.",
    ramos: ["Análisis Estructural", "Análisis Matricial", "Estructuras II"],
    video: "",
    icono: "matricial",
    destacado: true,
    niveles: [
      {
        tipo: "verificador",
        nombre: "Verificador",
        tagline: "Comprueba resultados y visualiza la estructura",
        precio: 18000,
        precioAntes: null,
        caracteristicas: [
          "Ingresas la estructura y entrega desplazamientos y reacciones finales",
          "Dibuja la estructura deformada a escala",
          "Esfuerzos N/V/M finales por barra",
          "Perfecto para chequear lo que resolviste a mano o en software",
        ],
        linkPago: "",
      },
      {
        tipo: "completo",
        nombre: "Completo",
        tagline: "Todo el procedimiento paso a paso + teoría",
        precio: 90000,
        precioAntes: null,
        caracteristicas: [
          "Matriz de rigidez de cada elemento mostrada y explicada",
          "Ensamblaje de la matriz global paso a paso",
          "Aplicación de condiciones de borde detallada",
          "Resolución del sistema con desarrollo completo",
          "Notas teóricas: convenciones, grados de libertad, hipótesis",
          "Diagramas N/V/M acotados con valores críticos",
        ],
        linkPago: "",
      },
    ],
  },
  {
    id: "hormigon-armado",
    nombre: "Hormigón Armado",
    categoria: "Estructuras",
    estado: "disponible",
    descripcionCorta: "Diseño y verificación de vigas y columnas a flexión, corte y flexo-compresión según código.",
    descripcionLarga: "Diseño de elementos de hormigón armado para el ramo más temido: vigas a flexión simple y doble armadura, verificación a corte y diseño de estribos, columnas a flexo-compresión con diagrama de interacción, y control de cuantías mínimas y máximas. Trabaja con los parámetros de la norma (f'c, fy, factores de reducción) que puedes ajustar.",
    ramos: ["Hormigón Armado", "Diseño Estructural"],
    video: "",
    icono: "hormigon",
    destacado: false,
    niveles: [
      {
        tipo: "verificador",
        nombre: "Verificador",
        tagline: "Comprueba tu diseño y arma el diagrama",
        precio: 20000,
        precioAntes: null,
        caracteristicas: [
          "Ingresas geometría y armadura y entrega si cumple o no",
          "Momento y corte resistente final",
          "Diagrama de interacción de la columna dibujado",
          "Para validar diseños hechos a mano",
        ],
        linkPago: "",
      },
      {
        tipo: "completo",
        nombre: "Completo",
        tagline: "Diseño guiado paso a paso + notas de norma",
        precio: 95000,
        precioAntes: null,
        caracteristicas: [
          "Cálculo del bloque de compresiones paso a paso",
          "Diseño de armadura a flexión con verificación de cuantías",
          "Diseño de estribos a corte con separaciones",
          "Construcción del diagrama de interacción punto a punto",
          "Notas teóricas y referencia a artículos de la norma",
          "Casos de doble armadura y secciones T",
        ],
        linkPago: "",
      },
    ],
  },
  {
    id: "dinamica",
    nombre: "Dinámica de Estructuras",
    categoria: "Estructuras",
    estado: "beta",
    descripcionCorta: "Sistemas de uno y varios grados de libertad: frecuencias naturales, modos de vibrar y respuesta sísmica.",
    descripcionLarga: "Para cursos de Dinámica e Ingeniería Sísmica. Resuelve sistemas de 1 GDL (vibración libre y forzada, amortiguamiento) y de múltiples GDL: matrices de masa y rigidez, problema de valores propios para frecuencias y modos, y análisis modal espectral con un espectro de diseño. Una herramienta que normalmente exige un PC, en la calculadora.",
    ramos: ["Dinámica de Estructuras", "Ingeniería Sísmica"],
    video: "",
    icono: "dinamica",
    destacado: false,
    niveles: [
      {
        tipo: "verificador",
        nombre: "Verificador",
        tagline: "Frecuencias, modos y respuesta — resultado directo",
        precio: 20000,
        precioAntes: null,
        caracteristicas: [
          "Entrega frecuencias y períodos naturales",
          "Dibuja las formas modales",
          "Respuesta máxima por análisis modal espectral",
          "Para verificar resultados de cursos o software",
        ],
        linkPago: "",
      },
      {
        tipo: "completo",
        nombre: "Completo",
        tagline: "Desarrollo completo + teoría de dinámica",
        precio: 100000,
        precioAntes: null,
        caracteristicas: [
          "Armado de matrices de masa y rigidez explicado",
          "Problema de valores propios paso a paso",
          "Normalización de modos y matriz modal",
          "Combinación modal (SRSS / CQC) detallada",
          "Notas teóricas: amortiguamiento, participación modal",
          "Casos de 1 GDL: libre, forzada y resonancia",
        ],
        linkPago: "",
      },
    ],
  },
  {
    id: "geotecnia",
    nombre: "Geotecnia Aplicada",
    categoria: "Geotecnia",
    estado: "disponible",
    descripcionCorta: "Empujes de tierra, capacidad de soporte de fundaciones, asentamientos y consolidación.",
    descripcionLarga: "Los cálculos clásicos de Mecánica de Suelos II y Fundaciones: empujes activo y pasivo (Rankine y Coulomb) sobre muros, capacidad de soporte por Terzaghi y Meyerhof, asentamientos elásticos e inmediatos, y consolidación primaria con tiempo. Con manejo de napa freática y estratos.",
    ramos: ["Mecánica de Suelos", "Fundaciones", "Geotecnia"],
    video: "",
    icono: "geotecnia",
    destacado: false,
    niveles: [
      {
        tipo: "verificador",
        nombre: "Verificador",
        tagline: "Resultados de empuje, capacidad y asentamiento",
        precio: 18000,
        precioAntes: null,
        caracteristicas: [
          "Empuje total y punto de aplicación",
          "Capacidad de soporte admisible",
          "Asentamiento total y tiempo de consolidación",
          "Diagrama de presiones dibujado",
        ],
        linkPago: "",
      },
      {
        tipo: "completo",
        nombre: "Completo",
        tagline: "Procedimiento completo + fundamentos teóricos",
        precio: 85000,
        precioAntes: null,
        caracteristicas: [
          "Coeficientes de empuje calculados paso a paso",
          "Capacidad por Terzaghi y Meyerhof con factores",
          "Asentamiento por estratos detallado",
          "Curva de consolidación y grado de avance",
          "Notas teóricas: tensiones efectivas, napa, hipótesis",
        ],
        linkPago: "",
      },
    ],
  },
  {
    id: "hidraulica",
    nombre: "Hidráulica de Tuberías y Canales",
    categoria: "Hidráulica",
    estado: "proximamente",
    descripcionCorta: "Redes de tuberías por Hardy-Cross, pérdidas de carga y flujo en canales abiertos. En desarrollo.",
    descripcionLarga: "En desarrollo: pérdidas de carga por fricción (Darcy-Weisbach y Hazen-Williams), balance de redes de tuberías por el método de Hardy-Cross, y flujo en canales abiertos (energía específica, resalto hidráulico, flujo gradualmente variado). Avísanos si lo quieres y te escribimos apenas esté listo, con precio de lanzamiento para los primeros.",
    ramos: ["Hidráulica", "Mecánica de Fluidos II"],
    video: "",
    icono: "hidraulica",
    destacado: false,
    niveles: [
      {
        tipo: "verificador",
        nombre: "Verificador",
        tagline: "Caudales, pérdidas y tirantes finales",
        precio: 18000,
        precioAntes: null,
        caracteristicas: [
          "Pérdida de carga total de la conducción",
          "Caudales balanceados de la red",
          "Tirante crítico y normal en canales",
          "Para chequear tus cálculos",
        ],
        linkPago: "",
      },
      {
        tipo: "completo",
        nombre: "Completo",
        tagline: "Iteraciones y desarrollo completo + teoría",
        precio: 90000,
        precioAntes: null,
        caracteristicas: [
          "Iteraciones de Hardy-Cross mostradas una a una",
          "Cálculo del factor de fricción paso a paso",
          "Energía específica y resalto hidráulico desarrollados",
          "Notas teóricas: regímenes de flujo, número de Froude",
        ],
        linkPago: "",
      },
    ],
  },
  {
    id: "metodos-numericos",
    nombre: "Métodos Numéricos",
    categoria: "Numérico",
    estado: "beta",
    descripcionCorta: "Sistemas no lineales, interpolación, integración numérica y EDO por Runge-Kutta.",
    descripcionLarga: "El cajón de herramientas para Cálculo Numérico: raíces de ecuaciones (bisección, Newton-Raphson, punto fijo), sistemas lineales (Gauss, LU, Gauss-Seidel), interpolación y ajuste, integración numérica (trapecio, Simpson) y resolución de EDO por Euler y Runge-Kutta. Cada método mostrando su tabla de iteraciones.",
    ramos: ["Cálculo Numérico", "Métodos Numéricos"],
    video: "",
    icono: "numerico",
    destacado: false,
    niveles: [
      {
        tipo: "verificador",
        nombre: "Verificador",
        tagline: "Resultado y convergencia, directo",
        precio: 15000,
        precioAntes: null,
        caracteristicas: [
          "Entrega la raíz / solución / integral final",
          "Indica iteraciones y error alcanzado",
          "Grafica la función y la solución",
          "Para validar tus métodos rápido",
        ],
        linkPago: "",
      },
      {
        tipo: "completo",
        nombre: "Completo",
        tagline: "Tabla de iteraciones completa + teoría",
        precio: 80000,
        precioAntes: null,
        caracteristicas: [
          "Tabla de iteraciones de cada método",
          "Fórmula de recurrencia aplicada paso a paso",
          "Análisis de error y criterio de convergencia",
          "Notas teóricas de cada método y cuándo usarlo",
          "Comparación entre métodos para el mismo problema",
        ],
        linkPago: "",
      },
    ],
  },
];
