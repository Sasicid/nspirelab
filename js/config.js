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
  heroBadge: "Programas avanzados — licencia por número de serie",

  // ID de un video de YouTube para mostrar en el hero EN VEZ de la
  // calculadora dibujada. Ejemplo: "UJuCrWxkw9I". Vacío = calculadora.
  videoDestacado: "",

  // Moneda mostrada junto al precio
  moneda: "CLP",

  // Cada programa se entrega activado SOLO para el número de serie de la
  // calculadora del comprador. Si es true, los mensajes de compra piden el
  // serie y se muestra el aviso en el sitio.
  licenciaPorSerie: true,

  // Descuento por grupo (varias personas que compran el MISMO programa).
  // Pon activo: false para ocultarlo.
  descuentoGrupal: {
    activo: true,
    minPersonas: 3,
    texto: "¿Van varios del mismo ramo? Desde 3 personas que compran el mismo programa, hay precio especial para cada una.",
  },
};

/* Preguntas frecuentes — agrega, edita o elimina libremente */
const FAQ = [
  {
    q: "¿Qué diferencia hay entre el plan Verificador y el Completo?",
    a: "El Verificador resuelve el problema y te muestra el resultado final y los gráficos, ideal para comprobar lo que ya hiciste a mano o en un software. El Completo te muestra TODO el procedimiento paso a paso, con las fórmulas aplicadas y notas teóricas — sirve para aprender y resolver de cero, como si tuvieras la pauta del profesor adentro de la calculadora.",
  },
  {
    q: "¿Cómo funciona la licencia por número de serie?",
    a: "Cada programa se activa exclusivamente para la calculadora del comprador. Al comprar nos das el número de serie de tu TI-Nspire CX CAS (lo encuentras en Ajustes → Estado), y el programa solo funcionará en ese equipo. Es la garantía de que tu copia es única y de que estás comprando original.",
  },
  {
    q: "¿Cómo pago y cómo recibo el programa?",
    a: "Puedes pagar por transferencia o MercadoPago. Apenas se confirma el pago y con tu número de serie, te enviamos el archivo .tns ya activado por WhatsApp o correo, junto con la guía de instalación. Normalmente el mismo día.",
  },
  {
    q: "¿Funciona en mi calculadora?",
    a: "Los programas están hechos y probados en la TI-Nspire CX CAS y la CX II CAS. Si tienes un modelo sin CAS, escríbenos antes de comprar: la mayoría de estos programas usan el motor CAS para el cálculo simbólico.",
  },
  {
    q: "¿Hay descuento si compramos varios?",
    a: "Sí. Si son 3 o más personas comprando el mismo programa (típico entre compañeros de un ramo), hay precio especial para cada una. Escríbenos por WhatsApp con cuántos son y qué programa quieren.",
  },
  {
    q: "¿Puedo partir con el Verificador y subir al Completo después?",
    a: "Claro. Si compraste el Verificador y luego quieres el Completo del mismo programa, pagas solo la diferencia. Escríbenos y lo gestionamos.",
  },
  {
    q: "¿Puedo pedir un programa que no está en el catálogo?",
    a: "Sí, es parte de lo que hacemos. Cuéntanos el ramo y mándanos fotos de guías o pruebas tipo, y cotizamos un programa a medida con sus dos planes.",
  },
];
