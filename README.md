# Mexilink website

Sitio bilingue construido con Eleventy. Requiere Node.js 22.

## Desarrollo

```powershell
npm ci
npm run serve
```

`npm run build` genera el sitio en `_site`.

## GitHub Pages

Con GitHub Free, el repositorio debe ser publico para usar Pages. Mantenerlo
privado requiere un plan de GitHub compatible.

El workflow `.github/workflows/pages.yml` publica exclusivamente `_site` al
recibir un push en `master`. Tambien se puede ejecutar desde Actions.
Antes del primer despliegue, seleccionar **GitHub Actions** en
**Settings > Pages > Build and deployment > Source**. El token del workflow
no puede habilitar Pages por primera vez.

URL prevista: https://jcastrod4all.github.io/mxl-website/

El workflow configura `ELEVENTY_PATH_PREFIX` y `SITE_URL` con la ruta y URL
asignadas por Pages. Esto mantiene los enlaces, estilos, fuentes, metadatos
y sitemap dentro del sitio preliminar, sin cambiar el dominio de produccion
en los datos originales.

Para generar la misma version localmente en PowerShell:

```powershell
$env:ELEVENTY_PATH_PREFIX = "/mxl-website/"
$env:SITE_URL = "https://jcastrod4all.github.io/mxl-website"
npm run build
```

Las herramientas locales de diseno, sus revisiones y las imagenes de referencia
estan excluidas de Git mediante `.gitignore`. No son necesarias para construir
ni publicar el sitio. Los datos de contacto no verificados y los tratamientos
graficos provisionales siguen pendientes de validacion antes del lanzamiento
definitivo.
