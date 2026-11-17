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
  </div>

  <!-- Planilla de horarios -->
  {% if h.sheets_embed_url or h.sheets_direct_url %}
  <div class="hr-seccion-planilla mx-auto mb-5">
    <div class="d-flex align-items-center gap-4 mb-4">
      <h2 class="fw-bold mb-0 flex-shrink-0">Planilla de horarios</h2>
      <div class="hr-linea flex-grow-1 d-none d-md-block"></div>
      {% if h.sheets_direct_url %}
      <a href="{{ h.sheets_direct_url }}" target="_blank" rel="noopener noreferrer"
         class="hr-btn-sheets btn rounded-3 d-none d-md-inline-flex align-items-center gap-2 px-4 py-2 fw-bold flex-shrink-0">
        <i class="fa fa-external-link" aria-hidden="true"></i>
        Abrir en Google Sheets
      </a>
      {% endif %}
    </div>

    {% if h.sheets_embed_url %}
    <div class="hr-planilla card rounded-3 overflow-hidden">
      <iframe
        src="{{ h.sheets_embed_url }}"
        title="Planilla de horarios de cursada"
        class="hr-iframe d-block w-100 border-0"
        loading="lazy"
        allowfullscreen>
      </iframe>
    </div>
    {% endif %}

    {% if h.sheets_direct_url %}
    <!-- En mobile el botón va debajo, a todo el ancho -->
    <a href="{{ h.sheets_direct_url }}" target="_blank" rel="noopener noreferrer"
       class="hr-btn-sheets btn rounded-3 d-flex d-md-none justify-content-center align-items-center gap-2 py-2 fw-bold mt-3">
      <i class="fa fa-external-link" aria-hidden="true"></i>
      Abrir en Google Sheets
    </a>
    <p class="hr-nota small text-center mt-3 mb-0 d-none d-md-block">
      ¿No se ve bien? <a href="{{ h.sheets_direct_url }}" target="_blank" rel="noopener noreferrer">Abrila en pantalla completa</a>.
    </p>
    {% endif %}
  </div>
  {% endif %}

  <!-- Calendario académico -->
  <aside class="hr-aviso mx-auto d-flex align-items-start gap-3 rounded-3 p-4" aria-labelledby="hr-aviso-titulo">
    <span class="hr-aviso-icono rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
      <i class="fa fa-info" aria-hidden="true"></i>
    </span>
    <div>
      <h2 id="hr-aviso-titulo" class="hr-aviso-titulo fw-bold mb-1">Calendario académico</h2>
      <p class="mb-0">
        Para el calendario completo, consultá el
        <a href="https://unahur.edu.ar/calendario-academico/" target="_blank" rel="noopener noreferrer">Calendario Académico oficial de UNAHUR</a>.
      </p>
    </div>
  </aside>

  </div>
</div>
