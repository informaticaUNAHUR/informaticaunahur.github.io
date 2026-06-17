---
layout: default
title: Horarios
permalink: /horarios/
---

{% assign h = site.data.horarios %}

<style>
.horarios-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
@media (max-width: 640px) {
  .horarios-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<div style="padding-top: 120px; padding-bottom: 60px; max-width: 1100px; margin: 0 auto; padding-left: 20px; padding-right: 20px;">

  <!-- Título -->
  <div style="text-align: center; margin-bottom: 48px;">
    <h1 style="font-size: 2.4rem; font-weight: 800; color: #1a1a2e;">{{ h.titulo }}</h1>
    <div class="line-dec" style="margin: 16px auto 0;"></div>
  </div>

  <!-- Fechas importantes -->
  <div style="margin-bottom: 48px;">
    <h2 style="font-size:1.4rem; color:#4db6ad; border-bottom:2px solid #4db6ad; padding-bottom:8px; margin-bottom:24px;">Fechas importantes 2026</h2>
    <div class="horarios-grid">

      <div style="background:#f8f9fa; border-radius:8px; padding:24px;">
        <h3 style="font-size:1rem; color:#4db6ad; margin-bottom:16px;">📅 {{ h.cuatrimestre_1.nombre }}</h3>
        <table style="width:100%; font-size:0.9rem; border-collapse:collapse;">
          <tr style="border-bottom:1px solid #e0e0e0;"><td style="padding:8px 0; color:#666;">Inicio de clases</td><td style="padding:8px 0; font-weight:600;">{{ h.cuatrimestre_1.inicio_clases }}</td></tr>
          <tr style="border-bottom:1px solid #e0e0e0;"><td style="padding:8px 0; color:#666;">Inscripción a materias</td><td style="padding:8px 0; font-weight:600;">{{ h.cuatrimestre_1.inscripcion }}</td></tr>
          <tr style="border-bottom:1px solid #e0e0e0;"><td style="padding:8px 0; color:#666;">Exámenes finales</td><td style="padding:8px 0; font-weight:600;">{{ h.cuatrimestre_1.finales }}</td></tr>
          <tr><td style="padding:8px 0; color:#666;">Fin de clases</td><td style="padding:8px 0; font-weight:600;">{{ h.cuatrimestre_1.fin_clases }}</td></tr>
        </table>
      </div>

      <div style="background:#f8f9fa; border-radius:8px; padding:24px;">
        <h3 style="font-size:1rem; color:#4db6ad; margin-bottom:16px;">📅 {{ h.cuatrimestre_2.nombre }}</h3>
        <table style="width:100%; font-size:0.9rem; border-collapse:collapse;">
          <tr style="border-bottom:1px solid #e0e0e0;"><td style="padding:8px 0; color:#666;">Inicio de clases</td><td style="padding:8px 0; font-weight:600;">{{ h.cuatrimestre_2.inicio_clases }}</td></tr>
          <tr style="border-bottom:1px solid #e0e0e0;"><td style="padding:8px 0; color:#666;">Inscripción a materias</td><td style="padding:8px 0; font-weight:600;">{{ h.cuatrimestre_2.inscripcion }}</td></tr>
          <tr style="border-bottom:1px solid #e0e0e0;"><td style="padding:8px 0; color:#666;">Exámenes finales</td><td style="padding:8px 0; font-weight:600;">{{ h.cuatrimestre_2.finales }}</td></tr>
          <tr><td style="padding:8px 0; color:#666;">Fin de clases</td><td style="padding:8px 0; font-weight:600;">{{ h.cuatrimestre_2.fin_clases }}</td></tr>
        </table>
      </div>

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
