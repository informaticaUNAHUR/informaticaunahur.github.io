---
layout: default
title: Horarios
permalink: /horarios/
---

{% assign h = site.data.horarios %}

<div class="horarios-pagina py-5 px-3 px-md-5">
  <div class="container-fluid">

  <!-- Hero -->
  <div class="section-heading mb-5">
    <p class="hr-eyebrow text-uppercase mb-2">{{ page.title }}</p>
    <h1 class="fw-bold mb-0">{{ h.titulo }}</h1>
    <div class="line-dec mt-4"></div>
  </div>

  <!-- Fechas importantes -->
  {% assign cuatrimestres = "cuatrimestre_1,cuatrimestre_2" | split: "," %}
  {% assign campos = "inicio_clases,inscripcion,parciales,finales,fin_clases" | split: "," %}
  {% assign etiquetas = "Inicio de clases,Inscripción a materias,Exámenes parciales,Exámenes finales,Fin de clases" | split: "," %}
  <div class="mb-5">
    <div class="d-flex align-items-center gap-4 mb-4">
      <h2 class="fw-bold mb-0 flex-shrink-0">Fechas importantes</h2>
      <div class="hr-linea flex-grow-1"></div>
    </div>
    <div class="row g-4">
      {% for clave in cuatrimestres %}
      {% assign c = h[clave] %}
      {% if c %}
      <div class="col-md-6">
        <div class="hr-card-fechas card h-100 rounded-3">
          <div class="card-body p-4">
            <h3 class="hr-cuatri d-flex align-items-center gap-2 fw-bold mb-3">
              <i class="fa fa-calendar" aria-hidden="true"></i>
              {{ c.nombre | strip }}
            </h3>
            <dl class="mb-0">
              {% for campo in campos %}
              {% assign valor = c[campo] | strip %}
              {% if valor != "" and valor != "-" %}
              <div class="hr-fila d-flex justify-content-between gap-3 py-2">
                <dt class="fw-normal">{{ etiquetas[forloop.index0] }}</dt>
                <dd class="fw-bold text-end mb-0">{{ valor }}</dd>
              </div>
              {% endif %}
              {% endfor %}
            </dl>
          </div>
        </div>
      </div>
      {% endif %}
      {% endfor %}
    </div>
    <p style="font-size:0.85rem; color:#999; margin-top:16px;">
      Para el calendario completo, consultá el
      <a href="https://unahur.edu.ar/calendario-academico/" target="_blank" rel="noopener noreferrer" style="color:#4db6ad;">Calendario Académico oficial de UNAHUR</a>.
    </p>

  </div>

  <!-- Planilla de horarios -->
  <div>
    <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; border-bottom:2px solid #4db6ad; padding-bottom:8px; margin-bottom:24px;">
      <h2 style="font-size:1.4rem; color:#4db6ad; margin:0;">Planilla de horarios</h2>
      <a href="{{ h.sheets_direct_url }}" target="_blank" rel="noopener noreferrer"
         style="display:inline-flex; align-items:center; gap:6px; padding:7px 16px; background:#4db6ad; color:#fff; border-radius:6px; text-decoration:none; font-size:0.85rem; font-weight:600;">
        ↗ Abrir en Google Sheets
      </a>
    </div>
    <div style="border-radius:10px; overflow:hidden; border:1px solid #e0e0e0; box-shadow:0 2px 12px rgba(0,0,0,0.06);">
      <iframe
        src="{{ h.sheets_embed_url }}"
        width="100%"
        height="720"
        frameborder="0"
        style="border:none; display:block;"
        allowfullscreen>
      </iframe>
    </div>
    <p style="font-size:0.8rem; color:#aaa; margin-top:10px; text-align:center;">
      ¿No se ve bien? <a href="{{ h.sheets_direct_url }}" target="_blank" rel="noopener noreferrer" style="color:#4db6ad;">Abrila en pantalla completa</a>.
    </p>
  </div>

  </div>
</div>
