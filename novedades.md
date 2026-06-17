---
layout: default
title: Novedades
permalink: /novedades/
---

<div style="padding-top: 120px; padding-bottom: 60px; max-width: 1200px; margin: 0 auto; padding-left: 20px; padding-right: 20px;">

  <div style="text-align: center; margin-bottom: 48px;">
    <h1 style="font-size: 2.4rem; font-weight: 800; color: #1a1a2e;">Novedades UNAHUR</h1>
    <div class="line-dec" style="margin: 16px auto 0;"></div>
  </div>

  {% assign novedades = site.novedades | sort: "date" | reverse %}

  {% if novedades.size > 0 %}
  <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;">
    {% for novedad in novedades %}
    <div style="border-radius:8px; border:1px solid #e0e0e0; overflow:hidden; background:#fff; display:flex; flex-direction:column;">
      {% if novedad.imagen %}
      <a href="{{ novedad.url | relative_url }}">
        <img src="{{ novedad.imagen | relative_url }}" alt="{{ novedad.title }}" style="width:100%; height:160px; object-fit:cover; display:block;">
      </a>
      {% endif %}
      <div style="padding:16px; flex:1; display:flex; flex-direction:column;">
        {% if novedad.categoria %}
        <span style="font-size:0.72rem; background:#4db6ad; color:#fff; padding:3px 10px; border-radius:20px; text-transform:uppercase; align-self:flex-start;">{{ novedad.categoria }}</span>
        {% endif %}
        <p style="font-size:0.78rem; color:#999; margin-top:8px; margin-bottom:6px;">{{ novedad.date | date: "%d/%m/%Y" }}</p>
        <h5 style="font-size:0.95rem; margin-bottom:8px; flex:1;">
          <a href="{{ novedad.url | relative_url }}" style="color:#333; text-decoration:none;">{{ novedad.title }}</a>
        </h5>
        <p style="font-size:0.82rem; color:#666; margin-bottom:12px;">{{ novedad.descripcion | default: novedad.excerpt | strip_html | truncate: 100 }}</p>
        <a href="{{ novedad.url | relative_url }}" style="font-size:0.82rem; color:#4db6ad; font-weight:600; margin-top:auto;">Leer más →</a>
      </div>
    </div>
    {% endfor %}
  </div>
  {% else %}
  <div style="text-align:center; padding: 60px 0; color: #999;">
    <p>No hay novedades publicadas aún.</p>
  </div>
  {% endif %}

</div>
