---
descripcion_corta: (En proyecto, continuidad con Ingeniería en Computación)
total_horas: 3000
layout: carrera
title: Tecnicatura Universitaria en Inteligencia Artificial
permalink: /tecnicatura-inteligencia-artificial/
icono: /assets/img/Inteligencia-artificial-icono.png
imagen: assets/images/licenciatura.jpg
vigente: true
orden: 4
pdf: /assets/uploads/pdfs/planes-carreras-informatica-para-web-ia.pdf
correlatividades_imagen: /assets/uploads/images/tec-ia-2026.png
tabla_datos:
  col_grado: Técnico/a Universitario/a en Inteligencia Artificial
  filas:
    - label: Duración
      grado: 2,5 años
    - label: Créditos ACA
      grado: "12"
    - label: Horas de interaccion pedagogica
      grado: "1376"
    - label: Materias
      grado: "20"
    - label: Creditos totales
      grado: "120"
cuatrimestres:
  - nombre: Primer Cuatrimestre
    horas: ""
    materias:
      - slug: matematicaParaInformatica1
        correlativas: "-"
      - slug: introduccionLogicaProblemasComputacionales
        correlativas: "-"
      - slug: introduccionInteligenciaArtificial
        correlativas: "-"
      - slug: culturaAlfabetizacionDigital
        correlativas: "-"
      - slug: algebraLineal
        correlativas:
          - matematicaParaInformatica1
  - nombre: Segundo Cuatrimestre
    horas: ""
    materias:
      - slug: calculo
        correlativas:
          - matematicaParaInformatica1
      - slug: tallerProgramacionI
        correlativas:
          - calculo
      - slug: tecnologiaSociedad
        correlativas:
          - algebraLineal
  - nombre: Tercer Cuatrimestre
    horas: ""
    materias:
      - slug: basesDatos
        correlativas:
          - introduccionLogicaProblemasComputacionales
      - slug: probabilidadEstadistica
        correlativas:
          - algebraLineal
          - calculo
      - slug: tallerProgramacionII
        correlativas:
          - tallerProgramacionI
      - slug: fundamentosCienciasDatos
        correlativas:
          - introduccionInteligenciaArtificial
          - algebraLineal
          - calculo
  - nombre: Cuarto Cuatrimestre
    horas: ""
    materias:
      - slug: fundamentosRedesNeuronales
        correlativas:
          - fundamentosCienciasDatos
      - slug: aprendizajeAutomatico
        correlativas:
          - tallerProgramacionII
          - fundamentosCienciasDatos
      - slug: tallerProgramacionIII
        correlativas:
          - tallerProgramacionIII
      - slug: ingles
        correlativas: "-"
  - nombre: Quinto Cuatrimestre
    horas: ""
    materias:
      - slug: materiaUNAHUR
        correlativas: "-"
      - slug: aprendizajeAutomaticoAvanzado
        correlativas:
          - aprendizajeAutomatico
          - fundamentosCienciasDatos
      - slug: procesamientoImagenesVisionComputadora
        correlativas:
          - aprendizajeAutomatico
          - tallerProgramacionIII
      - slug: proyectoIntegrador
        correlativas:
          - aprendizajeAutomatico
          - tallerProgramacionIII
---
