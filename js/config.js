/* ============================================================
   CONFIGURACIÓN DEL SITIO — EDITA ESTE ARCHIVO PRIMERO
   Aquí va todo lo personal: nombre de la tienda, WhatsApp, etc.
   ============================================================ */

const CONFIG = {
  // Nombre de la marca/tienda (aparece en el header, footer, etc.)
  marca: "NspireLab",

  // Tu número de WhatsApp en formato internacional SIN el "+"
  // Ejemplo Chile: 569XXXXXXXX  →  "56912345678"
  whatsapp: "56912345678",

  // Tu usuario de Instagram (sin @). Déjalo vacío "" para ocultar la tarjeta.
  instagram: "nspirelab",

  // Tu correo de contacto
  email: "hola@nspirelab.cl",

  // Texto del badge del hero (la "pastilla" sobre el título)
  heroBadge: "Catálogo en crecimiento — nuevos códigos cada semestre",

  // ID de un video de YouTube para mostrar en el hero EN VEZ de la
  // calculadora dibujada. Ejemplo: "UJuCrWxkw9I". Vacío = calculadora.
  videoDestacado: "",

  // Moneda mostrada junto al precio
  moneda: "CLP",
};

/* Preguntas frecuentes — agrega, edita o elimina libremente */
const FAQ = [
  {
    q: "¿Cómo pago y cómo recibo el programa?",
    a: "Puedes pagar por transferencia bancaria o MercadoPago. Apenas se confirma el pago te enviamos el archivo .tns por WhatsApp o correo, junto con la guía de instalación. Normalmente demora menos de una hora.",
  },
  {
    q: "¿Funciona en mi calculadora?",
    a: "Los programas están hechos y probados en la TI-Nspire CX CAS y funcionan también en la CX II CAS. Si tienes un modelo sin CAS (CX o CX II normal), escríbenos antes de comprar: algunos programas funcionan igual y otros necesitan el motor CAS.",
  },
  {
    q: "¿Necesito saber programar para usarlos?",
    a: "Para nada. Los programas tienen menús simples: eliges el tipo de problema, ingresas los datos y te muestra el desarrollo paso a paso. Si sabes usar tu calculadora, sabes usar estos programas.",
  },
  {
    q: "¿Qué pasa si se me borra el archivo o cambio de calculadora?",
    a: "Te lo reenviamos gratis, las veces que sea necesario. Guarda nuestro contacto y listo.",
  },
  {
    q: "¿Los programas se actualizan?",
    a: "Sí. Cuando un programa mejora (más tipos de ejercicios, correcciones, interfaz), todos los que lo compraron reciben la nueva versión gratis.",
  },
  {
    q: "¿Puedo pedir un programa que no está en el catálogo?",
    a: "¡Sí! Esa es nuestra especialidad. Cuéntanos el ramo y mándanos fotos de guías o pruebas tipo, y cotizamos un programa a medida. Los pedidos a medida suelen estar listos en 1 a 2 semanas.",
  },
];
