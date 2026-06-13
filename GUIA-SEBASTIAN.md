# Guía para Sebastián — Tu tienda de códigos TI-Nspire 🚀

Sitio web completo para vender tus programas de la TI-Nspire CX CAS. Es **estático**
(no necesita servidor ni base de datos), ya está **publicado en internet** y se edita
cambiando 2 archivos de texto.

**🌐 Tu sitio en vivo:** https://sasicid.github.io/nspirelab/

---

## 1. Cómo está organizado

```
tienda-nspire/
├── index.html          ← estructura (casi no la tocarás)
├── css/styles.css      ← diseño (colores, tipografías)
├── js/config.js        ← ★ TUS DATOS: marca, WhatsApp, descuento grupal, FAQ
├── js/productos.js     ← ★ TU CATÁLOGO: cada programa con sus dos planes
├── js/app.js           ← lógica (no la toques)
├── build-single.py     ← genera NspireLab.html (todo en 1 archivo, para compartir)
└── GUIA-SEBASTIAN.md   ← esta guía
```

**El 95% del tiempo solo editarás `config.js` y `productos.js`.**

## 2. El modelo: dos planes por programa

Cada programa se vende en **dos niveles** (es justo lo que pediste):

- **Verificador** (~$15.000–20.000): resuelve y muestra el **resultado final** + gráficos.
  Para comprobar lo que el alumno ya hizo a mano o en un software. Barato = mucha gente lo compra.
- **Completo** (~$80.000–100.000): muestra **todo el procedimiento paso a paso** con
  fórmulas y **notas teóricas**. Para aprender y resolver de cero. Premium.

En `productos.js`, cada programa tiene un campo `niveles` con esos dos planes. Editas
nombre, precio y la lista de lo que incluye cada uno. El sitio arma solo las tarjetas y
la ventana de detalle con los dos precios y sus botones de compra.

> Los programas de ejemplo son temas avanzados de civil (análisis matricial, hormigón,
> dinámica, geotecnia, hidráulica, métodos numéricos). Reemplázalos por los tuyos.

## 3. Cómo agregar o editar un programa

Abre `js/productos.js`, copia un bloque `{ ... }` completo, pégalo y cambia los campos.
Lo importante:
- `estado`: `"disponible"`, `"beta"` o `"proximamente"` (este último muestra botón "Avísame"
  en vez de comprar — sirve para medir interés **antes** de programarlo).
- `niveles`: los dos planes con su `precio` y `caracteristicas`.
- `video`: ID de YouTube del demo (lo de después de `watch?v=`).

## 4. Licencia por número de serie 🔒

Tu idea de que cada código funcione **solo en una calculadora** ya está reflejada en el
sitio: el botón "Comprar" abre WhatsApp con un mensaje que **pide el número de serie**, y
hay un aviso explicándolo en cada programa. Falta la parte técnica (el programa en sí).
Cómo se hace:

- **El patrón:** tu programa, al abrirse, lee/compara el identificador de la calculadora
  contra una "llave" que tú generaste para ese equipo. Si no coincide, no funciona.
- **Dónde está el ID:** en la calculadora, `Ajustes → Estado → Información` muestra un
  Product ID. En Lua existe `platform.hw()` (modelo) pero leer el **serial único** desde
  Lua es limitado; por eso el patrón más robusto es: el comprador te da su serial, tú
  generas una **clave de activación** derivada de ese serial (con una fórmula tuya), y el
  programa pide esa clave la primera vez y la valida.
- **Qué investigar:** la comunidad de TI-Nspire Lua tiene todo documentado —
  **TI-Planet.org** (foros y tutoriales), **inspired-lua.org** (referencia del API Lua) y
  **Omnimaga**. Busca "TI-Nspire Lua serial / hardware id / licensing".

⚠️ **La verdad honesta sobre la protección:** un archivo `.tns` con Lua se puede
inspeccionar, y alguien con conocimientos podría saltarse la validación. La licencia por
serial **disuade al 95%** (el compañero promedio no va a hackear nada), pero no es
infalible. No inviertas semanas en una protección "perfecta": tu defensa real es el
**valor continuo** (soporte, actualizaciones, nuevos códigos) que una copia pirata no tiene.

## 5. Descuento grupal 👥

Configurado en `config.js` → `descuentoGrupal`. Aparece una banda en el sitio y se
menciona en cada programa. Por ahora **no hay pack que entregue todos los códigos** (tal
como pediste): el descuento es solo cuando **varias personas compran el mismo programa**
(típico entre compañeros de un ramo). Ajustas el mínimo de personas y el texto ahí mismo.

## 6. Cómo cobrar 💰

El sitio funciona desde ya **sin configurar pagos**: cada botón abre WhatsApp con el
mensaje listo (programa + plan + precio + pide serial), y cierras por transferencia.

Cuando quieras automatizar, pega un link de pago en el campo `linkPago` de cada nivel:

| Opción | Comisión aprox. | Ideal para |
|---|---|---|
| **Transferencia + WhatsApp** (ya activo) | 0% | Partir hoy |
| **MercadoPago — link de pago** | ~3.5% | Chile, tarjetas |
| **Flow.cl** (Webpay) | ~3% | Quien prefiera Webpay |
| **Gumroad / Lemon Squeezy** | ~5–10% | Venta internacional automática 24/7 |

## 7. Actualizar el sitio publicado

El sitio vive en GitHub (repo `Sasicid/nspirelab`). Para actualizarlo después de editar:
desde la carpeta `tienda-nspire`, `git add -A`, `git commit -m "..."` y `git push`. En
~1 minuto GitHub Pages publica los cambios. (Si prefieres, pídele a Ignacio que lo haga.)

## 8. Los videos demo son TU mejor vendedor 🎥

Sobre todo para el plan Completo de $90k: nadie paga eso sin ver que funciona. Para grabar:
1. **TI-Nspire CX Student Software** (graba la pantalla del emulador) o tu calculadora
   física filmada con el celular en un trípode.
2. **OBS Studio** (gratis) para grabar pantalla. Resuelve un ejercicio típico de certamen
   de principio a fin, 60–90 seg, sin cortes.
3. Súbelo a YouTube (puede ser "no listado"), copia el ID y pégalo en el campo `video` del
   programa. El mejor demo ponlo en `config.js → videoDestacado` (sale gigante en la portada).
4. El mismo video, recortado en vertical, sirve para TikTok / Reels.

---

## 9. DIRECCIÓN — qué hacer, qué cuidar, qué aprender 🧭

**a) Tu modelo de dos niveles es inteligente.** El Verificador barato es el gancho: baja
la barrera, genera confianza y volumen. El Completo es donde está el margen. Un upsell
natural ya está contemplado: quien compró el Verificador puede subir al Completo pagando
la diferencia.

**b) Ojo con el precio del Completo.** $80–100k es harto para un estudiante. Se justifica
si de verdad vale por todo un ramo difícil — el argumento es *"cuesta menos que reprobar
y repetir el ramo"*. Pero para cobrarlo necesitas **prueba**: un demo en video sólido,
y ojalá **testimonios reales** (pantallazos de compradores contentos; los falsos se notan
y matan la confianza). Considera una **garantía** ("si no te sirve, te devuelvo") — con
licencia por serial el riesgo de fraude es bajo y la garantía vende muchísimo.

**c) Empieza por UNO, no por seis.** Tienes 6 de ejemplo, pero tu tiempo es limitado
(estás estudiando). Haz **un solo programa estrella**, el del ramo que mejor manejas y
que más gente sufre, déjalo impecable con su demo, y véndelo. Un código excelente vende
más que seis a medias. Los demás los agregas cuando haya demanda probada (para eso está
el estado "próximamente" con botón "Avísame": mide interés sin programar nada).

**d) Valida antes de invertir 100 horas.** Antes de programar el Completo de un ramo,
publícalo como "próximamente" y mira cuántos pinchan "Avísame". Si nadie lo pide, no lo
hagas todavía. Deja que el mercado te diga qué construir.

**e) Qué aprender, en orden:**
1. **Lua para TI-Nspire** (no TI-Basic) — es donde puedes hacer interfaces gráficas,
   menús y dibujar diagramas. Recursos: inspired-lua.org y TI-Planet.
2. **La validación por serial** (sección 4) — es tu modelo de negocio, vale la pena.
3. **Grabar y editar un demo decente** — te rinde más que cualquier otra hora invertida.
4. Nociones mínimas de **cómo cobrar online** (MercadoPago) cuando el volumen lo pida.

**f) Cuida el lado legal/ético.** Vende los programas como lo que son: **herramientas de
cálculo y verificación**, igual que la calculadora misma. Cada profesor/universidad tiene
reglas distintas sobre qué se permite en pruebas (y el modo examen *Press-to-Test* bloquea
documentos). Que el uso correcto según las reglas de cada curso quede como responsabilidad
del comprador — conviene tenerlo claro y, si te lo preguntan, decirlo así.

**g) Dónde promocionar:** grupos de WhatsApp/Telegram de la carrera y de cada ramo (tu
canal #1), TikTok/Reels con clips resolviendo ejercicios de certamen, centro de alumnos,
y boca a boca post-prueba con **descuento por referido**. El descuento grupal que ya tiene
el sitio empuja justo eso: que se junten varios del mismo ramo.

---

## 10. Cobrar online en Chile — opciones, comisiones y lo legal 💳

**Pasarelas (para automatizar el pago de estudiantes chilenos):**

| Opción | Comisión aprox. | Medios | Notas |
|---|---|---|---|
| **Transferencia + WhatsApp** (ya activo) | 0% | Transferencia | Manual, pero cero costo. Ideal para partir. |
| **Flow.cl** | ~0,99% + IVA en transferencia | Webpay (tarjetas) + transferencia | Comisión más baja, Webpay que todos usan en Chile. |
| **MercadoPago** | desde ~2,89% + IVA | Tarjetas, saldo MP | Depósito instantáneo, súper conocido entre jóvenes, link sin programar. |
| **Khipu** | ~1% | Solo transferencia bancaria | Barato pero sin tarjeta. |

**Recomendación:** parte con **Flow** (comisión baja + Webpay) o **MercadoPago** (lo más
simple). Creas un *link de pago* por cada plan y lo pegas en el campo `linkPago` de ese
nivel en `productos.js`; el botón "Comprar" irá directo al pago. **Ojo con tu modelo:**
como entregas con licencia por serial, necesitas el número de serie *antes* de entregar.
Por eso para el plan Completo ($90k) conviene seguir cerrando por WhatsApp (pides serial,
mandas link). El Verificador barato sí lo puedes automatizar más.

**Lo legal (Chile):** vender de forma recurrente exige **iniciar actividades en el SII**
(gratis, online, solo tu RUT y clave; tienes 2 meses desde que partes). Puedes ir como
persona natural enmarcándolo como *servicio de desarrollo de software*, emites **boleta**
(si pagan con tarjeta, el comprobante puede servir de boleta), y declaras con el
**Formulario 29** mensual + la renta anual en abril. Las pasarelas de pago **ya exigen**
inicio de actividades, y desde 2026 hay una Ley de Cumplimiento Tributario que aprieta la
informalidad. *No soy contador:* parte informal con transferencias si quieres probar, pero
apenas vendas en serio formaliza — el SII tiene un Portal Emprendedor gratis, y un contador
para algo simple es barato.

## 11. IA para administrar tu WhatsApp 🤖

**Sí se puede usar Claude.** No hay app oficial "Claude para WhatsApp", pero se conecta:
WhatsApp Business **Cloud API** (oficial de Meta) + la **API de Anthropic (Claude)** unidas
por un conector no-code (**Make**, **Albato**, **Wassenger**, **Pipedream**) o una
plataforma de atención (**Wati**, **Respond.io**).

⚠️ **No automatices tu WhatsApp personal con apps no oficiales** — Meta puede banear el
número. Usa siempre la **API oficial** (Cloud API o un proveedor).

**Lo óptimo según tu etapa:**
- **Ahora (pocas ventas, producto caro):** NO pongas bot todavía. Para algo de $90k, el
  trato personal es lo que cierra la venta. Usa **WhatsApp Business** (gratis): mensaje de
  bienvenida automático, **respuestas rápidas** guardadas (precios, compatibilidad, cómo
  pagar, cómo instalar) y el catálogo. Cubre el 80% sin bot.
- **Cuando crezca el volumen de consultas repetidas:** conecta **Claude** vía Cloud API.
  Claude responde las FAQ (precios, si sirve para su calculadora, cómo se paga), filtra
  quién está listo para comprar y te pasa a ti los pedidos a medida y las ventas grandes.
- **Costo:** la Cloud API de Meta es gratis hasta cierto volumen; la API de Claude se paga
  por uso (con un modelo rápido tipo Haiku, son centavos por conversación).

Claude es muy buena opción (conversación natural en español, sigue bien el tono e
instrucciones). La decisión "Claude vs otro" pesa menos que la arquitectura: API oficial +
un buen prompt con tu catálogo, precios y reglas. *Esto te lo puede armar Ignacio con su
Claude cuando lo quieras.*

---

¿Dudas con cualquier paso? El sitio está hecho para que no necesites saber programar para
mantenerlo. Lo que sí es tuyo y nadie reemplaza: los códigos. Enfócate ahí.
