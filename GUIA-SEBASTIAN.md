# Guía para Sebastián — Tu tienda de códigos TI-Nspire 🚀

Esta carpeta contiene tu sitio web completo para vender códigos de la TI-Nspire CX CAS.
Es un sitio **estático**: no necesita servidor, base de datos ni mantenciones. Se publica
gratis y se edita cambiando 2 archivos de texto.

---

## 1. Cómo está organizado

```
tienda-nspire/
├── index.html          ← estructura de la página (casi no la tocarás)
├── css/styles.css      ← diseño (colores, tipografías)
├── js/config.js        ← ★ TUS DATOS: marca, WhatsApp, Instagram, correo, FAQ
├── js/productos.js     ← ★ TU CATÁLOGO: aquí agregas/editas cada código
└── js/app.js           ← lógica (no necesitas tocarla)
```

**El 95% del tiempo solo editarás `config.js` y `productos.js`.**

## 2. Primeros pasos (10 minutos)

1. Abre `js/config.js` y cambia:
   - `marca`: el nombre que quieras para tu tienda (hoy dice "NspireLab" de ejemplo).
   - `whatsapp`: tu número real, formato `569XXXXXXXX` (sin el +).
   - `instagram` y `email`: los tuyos, o deja `instagram: ""` para ocultarlo.
2. Abre `js/productos.js` y reemplaza los productos de ejemplo por **tus códigos reales**:
   nombres, precios, descripciones y funciones. Los de ejemplo están pensados para
   ingeniería civil, así que probablemente varios te sirvan casi tal cual.
3. Abre `index.html` con doble clic para ver el resultado en tu navegador.

> Los productos con `estado: "proximamente"` muestran un botón "Avísame" en vez de
> "Comprar" — úsalo para medir interés antes de programar algo.

## 3. Cómo cobrar 💰

El sitio ya funciona desde el día uno **sin configurar nada de pagos**: cada botón
"Comprar" abre WhatsApp con un mensaje listo ("Quiero comprar X de $Y"), y tú cierras la
venta por transferencia. Es como ya se vende todo entre estudiantes en Chile.

Cuando quieras automatizar:

| Opción | Cómo | Comisión aprox. | Ideal para |
|---|---|---|---|
| **MercadoPago — link de pago** | App MP → "Cobrar" → "Link de pago" → creas un link por producto y lo pegas en `linkPago` | ~3.5% | Chile, tarjetas y dinero en cuenta |
| **Transferencia + WhatsApp** | Ya está configurado por defecto | 0% | Partir hoy mismo |
| **Gumroad / Lemon Squeezy** | Subes el .tns y el comprador lo descarga solo, pago internacional | ~10% / ~5%+50¢ | Vender fuera de Chile, entrega automática 24/7 |
| **Flow.cl** | Links de pago con Webpay | ~3% | Quien prefiera Webpay |

En `productos.js`, el campo `linkPago: ""` de cada producto acepta cualquier link:
si lo llenas, el botón "Comprar" va directo ahí; si lo dejas vacío, va a tu WhatsApp.

## 4. Cómo publicar el sitio gratis 🌐

**Opción más fácil — Netlify Drop (2 minutos, sin cuenta de programador):**
1. Entra a https://app.netlify.com/drop
2. Arrastra la carpeta `tienda-nspire` completa a la página.
3. Listo: te da una URL tipo `tunombre.netlify.app`. Puedes cambiar el subdominio gratis.

**Alternativas igual de gratis:** GitHub Pages, Vercel, Cloudflare Pages.

**Dominio propio (opcional, ~10 USD/año):** algo como `nspirelab.cl` en NIC Chile o
Namecheap se ve mucho más profesional y se conecta a Netlify en 5 minutos.

Para actualizar el sitio (nuevo código, cambio de precio): editas el archivo y vuelves a
arrastrar la carpeta a Netlify. Nada más.

## 5. Los videos demo son TU mejor vendedor 🎥

Lo que hace que la página de referencia (StaticaLT) se vea tan sólida es el **video del
programa funcionando**. Para grabar los tuyos:

1. Descarga **TI-Nspire CX Student Software** (versión de prueba sirve) o usa tu
   calculadora física grabada con el celular y un trípode improvisado.
2. Graba la pantalla con **OBS Studio** (gratis): resuelve un ejercicio típico de
   certamen de principio a fin, sin cortes. 60-90 segundos es perfecto.
3. Súbelo a YouTube (puede ser "no listado") y copia el ID del video
   (lo que va después de `watch?v=`, ej: `UJuCrWxkw9I`).
4. Pégalo en `productos.js` en el campo `video` del producto → aparece en su detalle.
5. El mejor video ponlo también en `config.js` → `videoDestacado` → aparece gigante
   en la portada.

**Tip:** el mismo video sirve para TikTok/Instagram Reels recortado en vertical.

## 6. Cómo proteger tus códigos 🔒

- **Licencia por ID de calculadora** (lo que hace StaticaLT): cada TI-Nspire tiene un
  ID único (Ajustes → Estado → Información → ID de producto). Tu programa en Lua puede
  leer una clave que tú generas a partir de ese ID y negarse a correr en otra
  calculadora. Pide el ID al comprador antes de entregar.
- **Mínimo viable:** pon tu marca y contacto dentro del programa ("© NspireLab —
  cómpralo original en …"). Si circula pirateado, al menos te hace publicidad.
- Acepta que algo de copia va a existir: tu ventaja real es **soporte, actualizaciones
  y códigos a medida**, cosas que una copia no incluye.

## 7. Dónde promocionar 📣

- **Grupos de WhatsApp/Telegram de la carrera y de cada ramo** — tu canal #1.
- **Instagram/TikTok**: clips de 30s resolviendo un ejercicio de certamen real.
  "Así se resuelve Gauss-Jordan en 20 segundos" es contenido que se comparte solo.
- **Centro de alumnos / semana mechona**: descuento de lanzamiento para la generación.
- **El boca a boca post-certamen** es brutal: ofrece descuento por referido
  (ej: "trae un amigo y ambos pagan -20%").
- **Reddit** (r/nspire, r/EngineeringStudents) si traduces la página al inglés más
  adelante — Gumroad te permite venta internacional automática.

## 8. Ideas para crecer 📈

- **Pack por ramo del semestre**: "Pack 3er semestre" con los códigos de esos ramos.
- **Precio early-bird**: usa `precioAntes` para mostrar el descuento tachado.
- **Lista de espera**: los productos "próximamente" ya capturan interesados por WhatsApp.
- **Testimonios reales**: cuando tengas compradores contentos, pide un pantallazo de
  su mensaje y agrégalos a la página (los falsos se notan y destruyen confianza).
- **Convenio con fotocopiadoras/preuniversitarios** cerca de la facultad.

## 9. Una nota honesta ⚖️

Vende los programas como lo que son: **herramientas de cálculo y verificación**, igual
que la calculadora misma o que StaticaLT. Cada universidad y profesor tiene reglas
distintas sobre qué se permite en evaluaciones (y el modo examen Press-to-Test bloquea
documentos). Es responsabilidad de cada comprador usar los programas según las reglas
de su curso — y conviene decirlo así en la página si algún día te lo preguntan.

---

¿Dudas con cualquier paso? El sitio está hecho para que no necesites saber programar
para mantenerlo. Y si quieres cambiar colores, textos o secciones completas, se puede
hacer en minutos.
