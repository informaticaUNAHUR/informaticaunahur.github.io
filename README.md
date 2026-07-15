# Informática UNAHUR — Sitio Institucional

[![Ruby](https://img.shields.io/badge/Ruby-3.1.4-CC342D?style=flat&logo=ruby)](https://www.ruby-lang.org/)
[![Jekyll](https://img.shields.io/badge/Jekyll-3.10.0-CC0000?style=flat&logo=jekyll)](https://jekyllrb.com/)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat&logo=githubpages)](https://pages.github.com/)
[![Decap CMS](https://img.shields.io/badge/Decap_CMS-4F46E5?style=flat)](https://decapcms.org/)
[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=netlify)](https://www.netlify.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat)](https://opensource.org/licenses/MIT)

## Descripción

Sitio web institucional del Área de Informática de la Universidad Nacional de Hurlingham (UNAHUR).
Publica información sobre las carreras del área, sus planes de estudio, horarios, materias, novedades y recursos para estudiantes y docentes.

El sitio está pensado como un portal centralizado donde la comunidad universitaria puede consultar la oferta académica, acceder a los programas de las materias, descargar documentación y mantenerse al día con las novedades del instituto.

- 🌐 **URL:** [https://informaticaunahur.github.io](https://informaticaunahur.github.io)
- 📧 **Contacto:** [informatica@unahur.edu.ar](mailto:informatica@unahur.edu.ar)

## Tecnologías

| Tecnología         | Propósito                                       | Versión |
| ------------------ | ----------------------------------------------- | ------- |
| **Ruby**           | Lenguaje base del ecosistema Jekyll             | 3.1.4   |
| **Jekyll**         | Generador de sitios estáticos                   | 3.10.0  |
| **Decap CMS**      | Sistema de gestión de contenidos headless       | 1.x     |
| **Bootstrap**      | Framework CSS para diseño responsivo            | 5.1.0   |
| **jQuery**         | Biblioteca JavaScript para manipulación del DOM | 3.3.1   |
| **Owl Carousel**   | Carrusel de contenido interactivo               | 2.3.4   |
| **AOS**            | Animaciones en scroll (Animate On Scroll)       | 2.1.1   |
| **GitHub Pages**   | Hosting del sitio estático                      | —       |
| **GitHub Actions** | Integración continua y despliegue automático    | —       |
| **Netlify**        | Servidor OAuth para autenticación de Decap CMS  | —       |
| **kramdown**       | Procesador Markdown (predeterminado de Jekyll)  | 2.5.2   |
| **webrick**        | Servidor HTTP local para desarrollo             | 1.9.2   |

## Arquitectura

```
informaticaunahur.github.io/
├── _config.yml                  # Configuración global del sitio (URL, colecciones, plugins)
├── Gemfile                      # Dependencias Ruby (Jekyll, plugins, servidor local)
├── Gemfile.lock                 # Versiones exactas de las dependencias
├── .ruby-version                # Versión de Ruby requerida (3.1.4)
│
├── .github/
│   └── workflows/
│       └── pages.yml            # Pipeline CI/CD: build + deploy a GitHub Pages
│
├── _data/                       # Archivos de datos estructurados (YAML)
│   ├── about.yml                # Información institucional
│   ├── blog.yml                 # Configuración del blog
│   ├── contactos.yml            # Contactos del área
│   ├── credits.yml              # Créditos y reconocimientos
│   ├── horarios.yml             # Horarios de cursada
│   ├── nav.yml                  # Links de navegación principal
│   └── services.yml             # Servicios ofrecidos
│
├── _layouts/                    # Plantillas HTML (Liquid)
│   ├── default.html             # Layout base con estructura completa
│   ├── basic.html               # Layout mínimo
│   ├── page.html                # Página genérica
│   ├── post.html                # Entrada de blog / materia
│   ├── carrera.html             # Página de carrera
│   ├── novedad.html             # Página de novedad
│   ├── main.html                # Página principal
│   ├── presentation.html        # Presentación / landing
│   └── search.html              # Página de búsqueda
│
├── _includes/                   # Fragmentos reutilizables (Liquid)
│   ├── head.html                # Metadatos y estilos globales
│   ├── head-inner.html          # Metadatos para páginas internas
│   ├── header.html              # Encabezado principal
│   ├── headernav.html           # Barra de navegación
│   ├── headmain.html            # Encabezado de portada
│   ├── footer.html              # Pie de página genérico
│   ├── footermain.html          # Pie de página de portada
│   ├── menu.html                # Menú de navegación
│   ├── menu_old.html            # Menú legacy
│   ├── breadcrumbs.html         # Migas de pan
│   ├── posts.html               # Listado de entradas
│   └── minutes-to-read.html     # Indicador de tiempo de lectura
│
├── _sass/                       # Estilos SASS (parciales compilados por Jekyll)
│   ├── _base.scss               # Estilos base
│   ├── _layout.scss             # Estructura y layout
│   ├── _header.scss             # Encabezados
│   ├── _footer.scss             # Pie de página
│   ├── _menu.scss               # Menú de navegación
│   ├── _post.scss               # Entradas individuales
│   ├── _icons.scss              # Iconos
│   ├── _breadcrumbs.scss        # Migas de pan
│   └── _syntax-highlighting.scss  # Resaltado de sintaxis
│
├── _banners/                    # Colección: banners promocionales (no pública)
│   ├── banner-secundario.md
│   ├── cambios-de-carrera.md
│   └── inscripción-a-materias-2°-cuatrimestre-2026.md
│
├── _carreras/                   # Colección: páginas de carreras (10)
│   ├── programacion.md
│   ├── informatica.md
│   ├── ia.md
│   ├── ciberseguridad.md
│   ├── redes.md
│   ├── videojuegos.md
│   ├── licenciatura-informatica-anterior.md
│   ├── licenciatura-videojuegos.md
│   ├── tecnicatura-informatica.md
│   └── ingenieria-computacion.md
│
├── _materias/                   # Colección: catálogo canónico de materias (slug, nombre, área)
│   └── *.md
│
├── _novedades/                  # Colección: novedades del instituto (7)
│   └── *.md
│
├── _posts/                      # Colección: materias con programas (148+)
│   └── *.md
│
├── admin/                       # Configuración de Decap CMS
│   ├── config.yml               # Definición de colecciones editables y backend OAuth
│   └── index.html               # Punto de entrada del CMS
│
├── assets/                      # Recursos estáticos
│   ├── css/                     # Estilos compilados
│   ├── js/                      # Scripts (custom.js, owl-carousel, isotope, etc.)
│   ├── img/                     # Imágenes del sitio
│   ├── images/                  # Imágenes decorativas
│   ├── uploads/                 # Archivos subidos vía CMS
│   └── pdf/                     # Programas, planes de estudio y documentación
│
├── vendor/                      # Dependencias frontend (Bootstrap, jQuery)
│   ├── bootstrap/
│   └── jquery/
│
├── index.html                   # Página principal
├── about.html                   # Página "Acerca de"
├── 404.html                     # Página de error 404
└── search.html                  # Página de búsqueda
```

## Cómo correrlo en local

### Prerrequisitos

- **Ruby** 3.1.4 (ver `.ruby-version`)
- **Bundler** (`gem install bundler`)
- **Node.js** 18+ (para el proxy local de Decap CMS)
- **Git**

### Pasos — Sitio estático

```bash
# 1. Clonar el repositorio
git clone https://github.com/informaticaUNAHUR/informaticaunahur.github.io.git
cd informaticaunahur.github.io

# 2. Configurar Bundler para usar vendor/bundle (aisla las gemas del proyecto)
bundle config set --local path 'vendor/bundle'

# 3. Instalar dependencias Ruby
bundle install

# 4. Iniciar el servidor de desarrollo
bundle exec jekyll serve --livereload --watch

# 5. Abrir en el navegador
#    http://localhost:4000
```

El flag `--livereload` recarga la página automáticamente al detectar cambios.
El flag `--watch` regenera el sitio cuando se modifica un archivo.

> **Nota:** Si es la primera vez que ejecutás Jekyll, necesitás instalar la gema `bundler` con `gem install bundler` y luego ejecutar `bundle config set --local path 'vendor/bundle'` y `bundle install` desde la raíz del proyecto.

### Pasos — Decap CMS (edición de contenidos en local)

El modo local permite editar contenidos en tu entorno de desarrollo sin necesidad de autenticación contra GitHub.

```bash
# En una segunda terminal, desde la raíz del proyecto:

# 1. Habilitar el modo local en la configuración de Decap CMS
#    Agregá (o verificá que exista) la siguiente línea en admin/config.yml:
#    local_backend: true

# 2. Iniciar el proxy local de Decap CMS
npx decap-server
```

Luego abrí tu navegador en **http://localhost:4000/admin/** y deberías ver el panel de administración funcionando en modo local.

> **Nota:** El proyecto ya incluye `local_backend: true` en `admin/config.yml`, por lo que el paso 1 solo es necesario si estás iniciando desde cero o si la línea no está presente.

> **Nota:** `npx` descarga y ejecuta `decap-server` automáticamente sin necesidad de instalarlo. Si preferís instalarlo de forma global ejecutá `npm install -g decap-server`.

## Flujo de publicación

```
CMS (/admin/)
     │
     ▼ (editar contenido y guardar)
Decap CMS
     │
     ▼ (commit automático a la rama master)
GitHub — rama master
     │
     ▼ (push detectado)
GitHub Actions — .github/workflows/pages.yml
     │
     ├── 1. Checkout del repositorio
     ├── 2. Setup Ruby 3.1.4
     ├── 3. bundle install (cacheado)
     ├── 4. bundle exec jekyll build
     └── 5. Upload artifact (_site/)
     │
     ▼
GitHub Pages — despliegue automático
     │
     ▼
https://informaticaunahur.github.io  ← sitio en vivo
```

El proceso completo suele tomar entre 1 y 3 minutos desde que se guarda un cambio hasta que se refleja en el sitio en vivo.

## Administración de contenidos (Decap CMS)

El sitio utiliza **Decap CMS** (anteriormente Netlify CMS) como sistema de gestión de contenidos headless.

- **URL de administración:** `/admin/` (ej: https://informaticaunahur.github.io/admin/)
- **Autenticación:** GitHub OAuth, a través de un servidor personalizado en Vercel: `https://decap-oauth-unahur.vercel.app`
- **Backend:** repositorio `informaticaUNAHUR/informaticaunahur.github.io` — rama `master`

El acceso requiere tener permisos de escritura en el repositorio de GitHub.
Desde el CMS se pueden editar las siguientes secciones:

- **Navegación** (`_data/nav.yml`)
- **Información institucional** (`_data/about.yml`)
- **Contactos** (`_data/contactos.yml`)
- **Servicios** (`_data/services.yml`)
- **Horarios** (`_data/horarios.yml`)
- **Créditos** (`_data/credits.yml`)
- **Novedades** (colección `_novedades/`)
- **Carreras** (colección `_carreras/`)
- **Materias** (colección `_posts/`)

## Estructura de datos

El manejo de contenido en el sitio sigue tres modelos:

### Catálogo canónico de materias (colección `_materias/`)

Cada archivo Markdown dentro de `_materias/` representa una materia.
El front matter define `slug` (único), `title` (nombre), `area_general` y otros metadatos.
Se accede desde las plantillas Liquid mediante `site.materias`.
Las carreras referencian a las materias por su `slug` y solo definen propiedades contextuales (horas por plan, correlativas, área específica).
Esto elimina la duplicación de datos: cambiar el nombre de una materia en el catálogo lo actualiza automáticamente en todas las carreras que la referencian.

### Colecciones (archivos Markdown con front matter)

Ubicadas en carpetas con prefijo `_` (`_carreras/`, `_materias/`, `_novedades/`, `_posts/`).
Cada archivo es un documento Markdown cuyo front matter define metadatos (título, descripción, layout, etc.) y el cuerpo contiene el contenido en sí.
Se acceden desde las plantillas Liquid mediante `site.carreras`, `site.novedades`, etc.
Las carreras (`_carreras/`) referencian materias por slug y el template resuelve el nombre desde el catálogo canónico.

### Archivos de datos (YAML en `_data/`)

Archivos `.yml` dentro de `_data/` que almacenan información estructurada (navegación, contactos, horarios).
Se acceden desde las plantillas Liquid mediante `site.data.archivo`.

Este enfoque permite que personas sin conocimientos técnicos editen contenidos a través del CMS sin necesidad de tocar código HTML ni la configuración del sitio.

## Contribuir

Las contribuciones son bienvenidas.

1. Crea una rama para tu cambio (`git checkout -b mi-mejora`).
2. Realizá los cambios y commiteá (`git commit -m "Descripción del cambio"`).
3. Enviá un pull request.

Si tu cambio modifica la estructura del proyecto, el árbol de archivos de este README debe mantenerse actualizado.

## Licencia

- El código del tema y la configuración del sitio se distribuyen bajo licencia [MIT](https://opensource.org/licenses/MIT).
- El contenido institucional (textos, programas, planes de estudio) es propiedad de la Universidad Nacional de Hurlingham.
