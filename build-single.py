# Genera NspireLab.html: el sitio completo en UN solo archivo,
# con CSS y JS incrustados, para compartir por WhatsApp/correo.
# Uso: python build-single.py   (ejecutar después de editar productos/config)

import pathlib

base = pathlib.Path(__file__).parent
html = (base / "index.html").read_text(encoding="utf-8")

css = (base / "css" / "styles.css").read_text(encoding="utf-8")
tag = '<link rel="stylesheet" href="css/styles.css" />'
assert tag in html, "No encontré el link del CSS en index.html"
html = html.replace(tag, "<style>\n" + css + "\n</style>")

for name in ("config", "productos", "app"):
    js = (base / "js" / f"{name}.js").read_text(encoding="utf-8")
    tag = f'<script src="js/{name}.js"></script>'
    assert tag in html, f"No encontré el script {name}.js en index.html"
    html = html.replace(tag, "<script>\n" + js + "\n</script>")

salida = base / "NspireLab.html"
salida.write_text(html, encoding="utf-8")
print(f"Listo: {salida} ({salida.stat().st_size // 1024} KB)")
