const PDFDocument = require('pdfkit');
const fs = require('fs');

const DARK  = '#1a1a2e';
const TEAL  = '#4db6ad';
const GRAY  = '#444444';
const LGRAY = '#777777';
const ML = 56, MR = 56;

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 56, bottom: 56, left: ML, right: MR },
  info: { Title: 'Manual de uso del CMS - Informática UNAHUR', Author: 'Informática UNAHUR' }
});

doc.pipe(fs.createWriteStream('manual-cms.pdf'));
const PW = doc.page.width - ML - MR; // 482

// ── helpers ──────────────────────────────────────────────────────────────────

function checkSpace(needed) {
  if (doc.y + needed > doc.page.height - 70) doc.addPage();
}

function sectionBanner(num, text) {
  checkSpace(36);
  doc.moveDown(0.6);
  const y = doc.y;
  doc.rect(ML, y, PW, 30).fill(TEAL);
  doc.fillColor('#fff').font('Helvetica-Bold').fontSize(13)
     .text(`${num}.  ${text}`, ML + 12, y + 8, { width: PW - 20, lineBreak: false });
  doc.moveDown(1.2);
  doc.fillColor(DARK).font('Helvetica').fontSize(10);
}

function subHead(text) {
  checkSpace(28);
  doc.moveDown(0.7);
  doc.fillColor(TEAL).font('Helvetica-Bold').fontSize(11).text(text, ML, doc.y, { width: PW });
  const ly = doc.y + 1;
  doc.moveTo(ML, ly).lineTo(ML + PW, ly).strokeColor(TEAL).lineWidth(0.7).stroke();
  doc.moveDown(0.5);
  doc.fillColor(DARK).font('Helvetica').fontSize(10);
}

function para(text) {
  checkSpace(20);
  doc.fillColor(GRAY).font('Helvetica').fontSize(10)
     .text(text, ML, doc.y, { width: PW, align: 'justify', lineGap: 2 });
  doc.moveDown(0.4);
}

function bullets(items) {
  items.forEach(item => {
    checkSpace(16);
    const y = doc.y;
    doc.fillColor(TEAL).font('Helvetica-Bold').fontSize(10).text('•', ML + 8, y, { width: 14, lineBreak: false });
    doc.fillColor(GRAY).font('Helvetica').fontSize(10).text(item, ML + 24, y, { width: PW - 24, lineGap: 2 });
    doc.y = doc.y + 2;
  });
  doc.moveDown(0.3);
}

function numbered(items) {
  items.forEach((item, i) => {
    checkSpace(16);
    const y = doc.y;
    doc.fillColor(TEAL).font('Helvetica-Bold').fontSize(10).text(`${i+1}.`, ML + 8, y, { width: 18, lineBreak: false });
    doc.fillColor(GRAY).font('Helvetica').fontSize(10).text(item, ML + 28, y, { width: PW - 28, lineGap: 2 });
    doc.y = doc.y + 2;
  });
  doc.moveDown(0.3);
}

function fieldRow(label, desc) {
  checkSpace(14);
  const y = doc.y;
  doc.fillColor(DARK).font('Helvetica-Bold').fontSize(9.5).text(label + ':', ML + 8, y, { width: 150, lineBreak: false });
  doc.fillColor(GRAY).font('Helvetica').fontSize(9.5).text(desc, ML + 164, y, { width: PW - 164, lineGap: 2 });
  doc.y = doc.y + 3;
}

function warning(text) {
  checkSpace(36);
  doc.moveDown(0.3);
  const startY = doc.y;
  doc.rect(ML, startY, 3, 28).fill('#e0a800');
  doc.rect(ML + 3, startY, PW - 3, 28).fill('#fffbea');
  doc.fillColor('#7a5800').font('Helvetica-Bold').fontSize(9)
     .text('⚠  ' + text, ML + 14, startY + 7, { width: PW - 20, lineBreak: false });
  doc.moveDown(1.1);
}

function infoBox(text) {
  checkSpace(32);
  const startY = doc.y;
  doc.rect(ML, startY, PW, 24).fill('#e8f5f4');
  doc.fillColor(TEAL).font('Helvetica-Bold').fontSize(10)
     .text(text, ML + 12, startY + 7, { width: PW - 20, lineBreak: false });
  doc.moveDown(1.0);
}

function bold(text) {
  checkSpace(14);
  doc.fillColor(DARK).font('Helvetica-Bold').fontSize(10).text(text, ML, doc.y, { width: PW });
  doc.moveDown(0.3);
}

// ── PORTADA ───────────────────────────────────────────────────────────────────
doc.rect(0, 0, doc.page.width, doc.page.height).fill(DARK);
doc.rect(0, doc.page.height - 6, doc.page.width, 6).fill(TEAL);
doc.rect(0, 175, doc.page.width, 3).fill(TEAL);
doc.circle(70, 580, 100).fillOpacity(0.06).fill('#fff');
doc.circle(doc.page.width - 50, 490, 130).fillOpacity(0.05).fill(TEAL);
doc.fillOpacity(1);

doc.fillColor(TEAL).font('Helvetica-Bold').fontSize(11)
   .text('INFORMÁTICA UNAHUR', 0, 135, { align: 'center', width: doc.page.width });
doc.fillColor('#ffffff').font('Helvetica-Bold').fontSize(36)
   .text('Manual de uso del CMS', 0, 200, { align: 'center', width: doc.page.width });
doc.fillColor(TEAL).font('Helvetica').fontSize(14)
   .text('Guía para editar el contenido del sitio web', 0, 265, { align: 'center', width: doc.page.width });
doc.fillColor('rgba(255,255,255,0.45)').font('Helvetica').fontSize(9)
   .text('pfahlerfranco.github.io/UnahurInformatica', 0, 308, { align: 'center', width: doc.page.width });
doc.fillColor('rgba(255,255,255,0.25)').font('Helvetica').fontSize(8)
   .text('2026', 0, doc.page.height - 28, { align: 'center', width: doc.page.width });

// ── TABLA DE CONTENIDOS ───────────────────────────────────────────────────────
doc.addPage();
doc.fillColor(DARK).font('Helvetica-Bold').fontSize(22).text('Tabla de contenidos', ML, 60);
doc.moveTo(ML, doc.y + 4).lineTo(ML + PW, doc.y + 4).strokeColor(TEAL).lineWidth(1.5).stroke();
doc.moveDown(1.4);

const toc = [
  [false, '1.', '¿Qué es el CMS?'],
  [false, '2.', 'Cómo acceder'],
  [false, '3.', 'Estructura del panel'],
  [false, '4.', 'Colecciones disponibles'],
  [true,  '4.1', 'Navegación'],
  [true,  '4.2', 'Banners'],
  [true,  '4.3', 'Sección Transición'],
  [true,  '4.4', 'Sección Propuestas Formativas'],
  [true,  '4.5', 'Sección Carreras'],
  [true,  '4.6', 'Sección Documentación y Recursos'],
  [true,  '4.7', 'Sección Créditos'],
  [true,  '4.8', 'Sección Contactos'],
  [true,  '4.9', 'Página Materias'],
  [true,  '4.10', 'Página Novedades'],
  [true,  '4.11', 'Página Horarios'],
  [false, '5.', 'Cómo subir imágenes'],
  [false, '6.', 'Publicar cambios'],
];

toc.forEach(([sub, num, label]) => {
  const x = sub ? ML + 20 : ML;
  const y = doc.y;
  doc.fillColor(sub ? LGRAY : DARK)
     .font(sub ? 'Helvetica' : 'Helvetica-Bold')
     .fontSize(sub ? 9.5 : 11)
     .text(num, x, y, { width: 36, lineBreak: false });
  doc.text(label, x + 36, y, { width: PW - 36 - (sub ? 20 : 0) });
  doc.moveDown(0.1);
});

// ── SECCIÓN 1 ─────────────────────────────────────────────────────────────────
doc.addPage();
sectionBanner(1, '¿Qué es el CMS?');
para('El CMS (Content Management System, o Sistema de Gestión de Contenidos) es una herramienta web que te permite editar el contenido del sitio de Informática UNAHUR sin necesidad de saber programar ni tocar código.');
para('El sitio usa Decap CMS (antes conocido como Netlify CMS), que funciona directamente desde el navegador y guarda los cambios en GitHub. Cada vez que guardás, el sitio se actualiza automáticamente en pocos minutos.');
doc.moveDown(0.3);
bold('¿Qué podés hacer desde el CMS?');
bullets([
  'Editar textos, títulos y descripciones de las secciones del home',
  'Crear y gestionar Banners, Novedades, Materias y Carreras',
  'Actualizar fechas de horarios y links de planillas',
  'Modificar información de contacto, autoridades y trámites',
  'Subir imágenes y archivos PDF',
]);

// ── SECCIÓN 2 ─────────────────────────────────────────────────────────────────
sectionBanner(2, 'Cómo acceder');
para('Para entrar al CMS necesitás una cuenta de GitHub con acceso al repositorio del proyecto.');
doc.moveDown(0.2);
bold('Pasos para iniciar sesión:');
numbered([
  'Abrí el navegador y entrá a la URL del panel de administración',
  'Hacé clic en el botón "Login with GitHub"',
  'Si no estás logueado en GitHub, ingresá tu usuario y contraseña',
  'Autorizá la aplicación si te lo solicita',
  'Listo — vas a ver el panel del CMS con el menú de colecciones a la izquierda',
]);
doc.moveDown(0.3);
infoBox('https://pfahlerfranco.github.io/UnahurInformatica/admin/');
warning('Si no tenés acceso al repositorio GitHub, contactá al administrador del sitio para que te dé los permisos necesarios.');

// ── SECCIÓN 3 ─────────────────────────────────────────────────────────────────
sectionBanner(3, 'Estructura del panel');
para('Una vez dentro del CMS, el panel tiene dos zonas principales:');
bullets([
  'Menú izquierdo: lista de todas las colecciones editables del sitio',
  'Área central: formulario de edición del item seleccionado',
]);
doc.moveDown(0.3);
bold('Colecciones disponibles en el menú:');
bullets([
  'Navegación',
  'Banners',
  'Sección Transición',
  'Sección Propuestas Formativas',
  'Sección Carreras',
  'Sección Documentación y Recursos',
  'Sección Créditos',
  'Sección Contactos',
  'Página Materias',
  'Página Novedades',
  'Página Horarios',
]);

// ── SECCIÓN 4 ─────────────────────────────────────────────────────────────────
sectionBanner(4, 'Colecciones disponibles');
para('A continuación se describe cada colección: qué parte del sitio edita y qué campos tiene disponibles.');

subHead('4.1  Navegación');
para('Edita los links del menú superior del sitio web.');
fieldRow('Texto', 'La palabra que se muestra en el menú (ej: "Materias")');
fieldRow('URL', 'La dirección a donde lleva el link (ej: /materias/)');
fieldRow('Abrir en nueva pestaña', 'Activalo si el link va a un sitio externo');
fieldRow('Botón destacado', 'Muestra el item como botón con color de acento');
fieldRow('Activo', 'Si está en falso, el item no se muestra en el menú');
doc.moveDown(0.3);
warning('Modificar mal esta sección puede dejar el menú roto. No elimines items sin estar seguro/a.');

subHead('4.2  Banners');
para('Gestiona el carrusel de banners de la página de inicio. Podés crear nuevos banners con el botón "Nuevo Banner".');
fieldRow('Subtítulo', 'Texto pequeño encima del título principal');
fieldRow('Título', 'El texto grande del banner');
fieldRow('Descripción', 'Párrafo de apoyo debajo del título');
fieldRow('Texto del botón', 'Etiqueta del botón de acción (ej: "Ver carreras")');
fieldRow('URL del botón', 'A dónde lleva el botón');
fieldRow('Imagen', 'Imagen de fondo del banner');
fieldRow('Orden', 'Número que define el orden del carrusel (1 = primero)');
fieldRow('Activo', 'Solo se muestran los banners con esta opción activada');

subHead('4.3  Sección Transición');
para('Edita el bloque "Nuevos planes de estudio" que aparece en el home.');
fieldRow('Subtítulo', 'Etiqueta pequeña encima del título');
fieldRow('Título', 'Título principal del bloque');
fieldRow('Descripción', 'Párrafo explicativo');
fieldRow('Imagen', 'Imagen decorativa del bloque');
fieldRow('Estadísticas', 'Lista de datos numéricos (valor, detalle, porcentaje de barra)');
fieldRow('Botón (opcional)', 'Texto y URL del botón del bloque');

subHead('4.4  Sección Propuestas Formativas');
para('Edita las pestañas de carreras del home (el selector con íconos y descripción).');
fieldRow('Nombre', 'Nombre de la carrera como aparece en la pestaña');
fieldRow('¿Es nueva?', 'Si está activado, muestra el badge rojo "NUEVA"');
fieldRow('Ícono', 'Imagen del ícono de la pestaña (circular, fondo naranja)');
fieldRow('Descripción corta', 'Texto breve bajo el nombre en la pestaña');
fieldRow('Habilidades', 'Lista de competencias que aparecen con tilde verde');
fieldRow('Descripción larga', 'Párrafo extendido del panel de detalle');
fieldRow('Imagen', 'Imagen del panel derecho de la pestaña activa');

subHead('4.5  Sección Carreras');
para('Crea y edita las páginas individuales de cada carrera con su plan de estudios completo. Cada carrera tiene su propia URL.');
fieldRow('Título', 'Nombre completo de la carrera');
fieldRow('Permalink', 'URL de la página (ej: /licenciatura-informatica/)');
fieldRow('Estado', 'Vigente desde 2026 / Plan anterior / Próximamente');
fieldRow('PDF del plan', 'Archivo PDF del plan de estudios oficial');
fieldRow('Imagen de correlatividades', 'PNG con el mapa de correlatividades');
fieldRow('Cuatrimestres', 'Lista de cuatrimestres, cada uno con sus materias');
doc.moveDown(0.2);
para('Cada materia dentro de un cuatrimestre tiene: Nombre, Slug (identificador), Área, Horas semanales, Horas totales y Correlativas.');

subHead('4.6  Sección Documentación y Recursos');
para('Edita el bloque de documentación del home, con un post destacado grande y hasta 2 items laterales.');
fieldRow('Post destacado', 'Categoría, fecha, título, descripción, imagen, URL y autor');
fieldRow('Items laterales', 'Hasta 2 items con categoría, fecha, título, descripción, imagen y URL');

subHead('4.7  Sección Créditos');
para('Edita el bloque de créditos del home.');
fieldRow('Subtítulo / Título', 'Encabezado del bloque');
fieldRow('Botones', 'Lista de botones con texto, URL y si son externos');
fieldRow('Planilla', 'Link a la planilla de créditos');
fieldRow('Párrafos explicación', 'Textos de la sección explicativa');

subHead('4.8  Sección Contactos');
para('Edita toda la sección de contacto del home. Tiene varias subsecciones:');
doc.moveDown(0.1);
doc.fillColor(DARK).font('Helvetica-Bold').fontSize(9.5).text('¿Cómo comunicarse?', ML + 8, doc.y);
doc.moveDown(0.15);
para('Lista de medios de contacto. Cada item tiene: Nombre, Valor visible (ej: el email), URL, Ícono y si el link abre en pestaña nueva.');
doc.fillColor(DARK).font('Helvetica-Bold').fontSize(9.5).text('Discord', ML + 8, doc.y);
doc.moveDown(0.15);
para('Edita el bloque de Discord: Título, Subtítulo, URL de invitación e Ícono.');
doc.fillColor(DARK).font('Helvetica-Bold').fontSize(9.5).text('Autoridades', ML + 8, doc.y);
doc.moveDown(0.15);
para('Lista de cargos y nombres de las autoridades del instituto.');
doc.fillColor(DARK).font('Helvetica-Bold').fontSize(9.5).text('Trámites y consultas frecuentes', ML + 8, doc.y);
doc.moveDown(0.15);
para('Lista de trámites con Nombre, Descripción y URL (link al formulario o sistema correspondiente).');

subHead('4.9  Página Materias');
para('Crea y edita las materias del sitio. Se muestran en /materias/ con filtros por plan y carrera. Podés crear nuevas con "Nueva Materia".');
fieldRow('Título', 'Nombre de la materia');
fieldRow('Carrera/s', 'A qué carrera/s pertenece la materia');
fieldRow('Plan', 'Vigente 2026 o Plan anterior');
fieldRow('Carga horaria', 'Ej: "4 horas semanales"');
fieldRow('Créditos', 'Cantidad de créditos de la materia');
fieldRow('Correlativas', 'Materias que deben estar aprobadas antes');
fieldRow('PDF del programa', 'Archivo PDF con el programa completo');
fieldRow('Preguntas frecuentes', 'Lista de preguntas y respuestas sobre la materia');

subHead('4.10  Página Novedades');
para('Crea y edita las novedades del sitio. Las 3 más recientes aparecen también en el carrusel del home. Podés crear nuevas con "Nueva Novedad".');
fieldRow('Título', 'Título de la novedad');
fieldRow('Fecha', 'Fecha de publicación');
fieldRow('Categoría', 'Planes de estudio / Inscripciones / Eventos / Calendario / General');
fieldRow('Imagen', 'Imagen de portada de la novedad');
fieldRow('Descripción breve', 'Resumen corto que aparece en la tarjeta del listado');
fieldRow('Contenido', 'Cuerpo completo de la novedad (editor de texto con formato)');

subHead('4.11  Página Horarios');
para('Edita las fechas del calendario académico y los links de la planilla de horarios.');
fieldRow('Título', 'Título que aparece en la página');
fieldRow('1° Cuatrimestre', 'Inicio de clases, Inscripción, Parciales, Finales, Fin de clases');
fieldRow('2° Cuatrimestre', 'Las mismas fechas para el segundo cuatrimestre');
fieldRow('Link embed Sheets', 'URL del iframe (copiá desde Google Sheets: Archivo > Publicar en la web)');
fieldRow('Link directo Sheets', 'URL normal de la planilla para abrir en pestaña nueva');

// ── SECCIÓN 5 ─────────────────────────────────────────────────────────────────
sectionBanner(5, 'Cómo subir imágenes');
para('El CMS tiene un gestor de medios incorporado para subir y reutilizar imágenes en cualquier campo del sitio.');
doc.moveDown(0.2);
bold('Para subir una imagen nueva:');
numbered([
  'Hacé clic en el campo de imagen dentro del formulario',
  'Se abre el gestor de medios con las imágenes ya subidas',
  'Para subir una nueva: arrastrala al área o usá el botón "Upload"',
  'Una vez subida, hacé clic en ella para seleccionarla',
  'La imagen queda guardada en la carpeta assets/uploads del repositorio',
]);
doc.moveDown(0.3);
bold('Recomendaciones:');
bullets([
  'Formatos recomendados: JPG o PNG',
  'Peso máximo sugerido: menos de 1 MB por imagen',
  'Para íconos pequeños: PNG con fondo transparente',
  'Para fotos de carrera o novedad: JPG, proporción 16:9 o 4:3',
  'Nombrar los archivos sin espacios ni caracteres especiales',
]);

// ── SECCIÓN 6 ─────────────────────────────────────────────────────────────────
sectionBanner(6, 'Publicar cambios');
para('Cuando terminás de editar, guardá los cambios desde el botón "Publish" (o "Guardar y publicar") en la parte superior del formulario.');
doc.moveDown(0.2);
bold('¿Qué pasa cuando guardás?');
numbered([
  'El CMS envía los cambios al repositorio de GitHub automáticamente',
  'GitHub Pages detecta el nuevo commit y empieza el proceso de build',
  'En 1 a 3 minutos, el sitio público se actualiza con los cambios',
  'Podés verificar los cambios entrando al sitio y refrescando (Ctrl + F5)',
]);
doc.moveDown(0.4);
warning('Si el cambio no aparece después de 5 minutos, verificá en github.com/Pfahlerfranco/UnahurInformatica que el commit haya llegado correctamente.');
doc.moveDown(0.3);
bold('Tipos de guardado disponibles:');
bullets([
  'Publish: publica los cambios inmediatamente en el sitio',
  'Save as Draft (si está habilitado): guarda sin publicar todavía',
]);

// ── PIE DE PÁGINA ─────────────────────────────────────────────────────────────
const range = doc.bufferedPageRange();
for (let i = 0; i < range.count; i++) {
  doc.switchToPage(range.start + i);
  if (i === 0) continue; // skip portada
  doc.moveTo(ML, doc.page.height - 38).lineTo(ML + PW, doc.page.height - 38)
     .strokeColor('#dddddd').lineWidth(0.5).stroke();
  doc.fillColor('#aaaaaa').font('Helvetica').fontSize(8)
     .text('Manual de uso del CMS · Informática UNAHUR', ML, doc.page.height - 26, { width: PW - 30, lineBreak: false });
  doc.fillColor('#aaaaaa').font('Helvetica').fontSize(8)
     .text(`Pág. ${i}`, ML + PW - 28, doc.page.height - 26, { width: 28, lineBreak: false });
}

doc.end();
console.log('PDF generado correctamente.');
