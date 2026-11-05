---
layout: default
title: Novedades
permalink: /novedades/
---
{%- capture icon_default -%}<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h6"/></svg>{%- endcapture -%}
{%- capture icon_cap -%}<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5"/></svg>{%- endcapture -%}
{%- capture icon_book -%}<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/></svg>{%- endcapture -%}
{%- capture icon_swap -%}<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3l4 4-4 4"/><path d="M3 7h18"/><path d="M7 21l-4-4 4-4"/><path d="M21 17H3"/></svg>{%- endcapture -%}
{%- capture icon_cal -%}<svg class="me-1" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>{%- endcapture -%}
<style>
  .novedades-page {
    --nv-accent: #4db6ad;
    --nv-accent-dark: #3a9d95;
    --nv-ink: #1a1a2e;
    --nv-text: #2d3436;
  }
  .novedades-page .nv-badge {
    background: linear-gradient(135deg, var(--nv-accent) 0%, var(--nv-accent-dark) 100%);
    font-size: .75rem;
    letter-spacing: .5px;
  }
  .novedades-page .nv-excerpt {
    font-family: "Poppins", sans-serif;
    font-size: 0.75rem;
    line-height: 1.9;
    color: var(--nv-text);
  }
  .novedades-page .nv-link {
    font-size: .9rem;
    color: var(--nv-accent-dark);
    font-weight: 600;
  }
</style>
{%- assign novedades = site.novedades | sort: "date" | reverse -%}
<div class="novedades-page mx-auto px-3" style="max-width:1200px; padding-top:120px; padding-bottom:60px;">
<div class="d-flex align-items-center justify-content-between p-4 p-md-5 mb-5" style="background:rgba(77,182,173,0.12); border-radius:16px;">
<div class="flex-grow-1">
<span class="small fw-bold text-uppercase" style="color:#4db6ad; letter-spacing:1.5px;">Actualidad</span>
<h1 class="fw-bolder mt-2 mb-0" style="color:#1a1a2e;">Novedades UNAHUR</h1>
<div class="line-dec my-3"></div>
<p class="text-secondary mb-0">Enterate de las últimas noticias, eventos, inscripciones y todo lo que pasa en la comunidad de informática.</p>
</div>
<svg class="d-none d-md-block flex-shrink-0 ms-4" width="200" height="140" viewBox="0 0 200 140" fill="none" aria-hidden="true"><circle cx="100" cy="70" r="62" fill="#4db6ad" opacity=".18"/><path d="M62 56l60-28v84L62 84z" fill="#4db6ad"/><rect x="38" y="52" width="30" height="36" rx="6" fill="#3a9f96"/><path d="M72 88l8 28a5 5 0 0 0 5 4h8a4 4 0 0 0 4-5l-6-26z" fill="#3a9f96"/><path d="M140 46l16-8M142 70h20M140 94l16 8" stroke="#4db6ad" stroke-width="5" stroke-linecap="round"/></svg>
</div>
{%- if novedades.size > 0 -%}
{%- assign destacada = novedades.first -%}
<div class="card p-3 mb-4 bg-white" style="border-radius:16px;">
<div class="row g-4 align-items-center">
<div class="col-lg-7">
{%- if destacada.imagen -%}
<a href="{{ destacada.url | relative_url }}"><img src="{{ destacada.imagen | relative_url }}" alt="{{ destacada.title }}" class="w-100 d-block rounded-3" style="height:320px; object-fit:cover;"></a>
{%- else -%}
<a href="{{ destacada.url | relative_url }}" class="d-flex align-items-center justify-content-center rounded-3" style="height:320px; background:rgba(77,182,173,0.12);"><span class="d-flex align-items-center justify-content-center rounded-circle text-white" style="width:80px; height:80px; background:#4db6ad;">{{ icon_default }}</span></a>
{%- endif -%}
</div>
<div class="col-lg-5 pe-lg-4">
<div class="d-flex align-items-center flex-wrap gap-3">
{%- if destacada.categoria -%}
<span class="badge rounded-pill px-3 py-2 text-uppercase fw-semibold text-white nv-badge">{{ destacada.categoria }}</span>
{%- endif -%}
<span class="small text-muted d-inline-flex align-items-center">{{ icon_cal }}{{ destacada.date | date: "%d/%m/%Y" }}</span>
</div>
<h2 class="h3 fw-bolder mt-3 mb-3"><a href="{{ destacada.url | relative_url }}" class="text-decoration-none" style="color:#1a1a2e;">{{ destacada.title }}</a></h2>
<p class="nv-excerpt">{{ destacada.descripcion | default: destacada.excerpt | strip_html | strip | truncate: 220 }}</p>
<a href="{{ destacada.url | relative_url }}" class="nv-link text-decoration-none d-block text-end mt-3">Leer más →</a>
</div>
</div>
</div>
<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
{%- for novedad in novedades offset:1 -%}
{%- assign cat = novedad.categoria | downcase -%}
<div class="col">
<div class="card h-100 p-2 bg-white shadow-sm" style="border-radius:16px;">
{%- if novedad.imagen -%}
<a href="{{ novedad.url | relative_url }}"><img src="{{ novedad.imagen | relative_url }}" alt="{{ novedad.title }}" class="w-100 d-block rounded-3" style="height:150px; object-fit:cover;"></a>
{%- else -%}
<a href="{{ novedad.url | relative_url }}" class="d-flex align-items-center justify-content-center rounded-3" style="height:150px; background:rgba(77,182,173,0.12);"><span class="d-flex align-items-center justify-content-center rounded-circle text-white" style="width:56px; height:56px; background:#4db6ad;">
{%- if cat contains "inscrip" -%}{{ icon_cap }}{%- elsif cat contains "plan" -%}{{ icon_book }}{%- elsif cat contains "carrera" -%}{{ icon_swap }}{%- else -%}{{ icon_default }}{%- endif -%}
</span></a>
{%- endif -%}
<div class="card-body d-flex flex-column px-2 pb-2">
{%- if novedad.categoria -%}
<span class="badge rounded-pill px-3 py-2 text-uppercase fw-semibold text-white nv-badge align-self-start">{{ novedad.categoria }}</span>
{%- endif -%}
<span class="small text-muted d-inline-flex align-items-center mt-2">{{ icon_cal }}{{ novedad.date | date: "%d/%m/%Y" }}</span>
<h5 class="fs-6 fw-bold mt-2 mb-2"><a href="{{ novedad.url | relative_url }}" class="text-decoration-none" style="color:#1a1a2e;">{{ novedad.title }}</a></h5>
<p class="nv-excerpt flex-grow-1">{{ novedad.descripcion | default: novedad.excerpt | strip_html | strip | truncate: 100 }}</p>
<a href="{{ novedad.url | relative_url }}" class="nv-link text-decoration-none mt-auto pt-2 align-self-end">Leer más →</a>
</div>
</div>
</div>
{%- endfor -%}
</div>
{%- else -%}
<div class="text-center text-muted py-5"><p>No hay novedades publicadas aún.</p></div>
{%- endif -%}
</div>
