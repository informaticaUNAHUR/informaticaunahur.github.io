---
layout: carrera
title: "Tecnicatura Universitaria en Programación de Videojuegos"
permalink: /tecnicatura-desarrollo-videojuegos/
anterior: true
orden: 5
icono: /assets/img/videojuegos-icono.png
descripcion_corta: "Plan anterior. Vigente hasta 2026 1° Cuatrimestre."
imagen: "assets/images/planes-programacion.jpg"
pdf: /assets/pdf/planes/2022-Plan-Tecnicatura-Universitaria-en-Programacion-de-Videojuegos.pdf
total_horas: 1408
creditos: 35
cuatrimestres:
  - nombre: "Primer Cuatrimestre"
    horas: 256
    materias:
      - slug: "matematicaParaInformatica1"
        correlativas: "-"
      - slug: "introduccionLogicaProblemasComputacionales"
        correlativas: "-"
      - slug: "introduccionVideojuegos"
        correlativas: "-"
      - slug: "nuevosEntornos"
        correlativas: "-"

  - nombre: "Segundo Cuatrimestre"
    horas: 288
    materias:
      - slug: "tallerDisenoConceptualJuegos"
        correlativas: [introduccionVideojuegos]
      - slug: "programacionEstructurada"
        correlativas: [introduccionLogicaProblemasComputacionales, matematicaParaInformatica1]
      - slug: "arteDigitalVideojuegos"
        correlativas: "-"
      - slug: "inglesI"
        correlativas: "-"

  - nombre: "Tercer Cuatrimestre"
    horas: 320
    materias:
      - slug: "basesDatos"
        correlativas: [matematicaParaInformatica1]
      - slug: "programacionConObjetos1"
        correlativas: [programacionEstructurada]
      - slug: "introduccionMotoresVideojuegos"
        correlativas: [programacionEstructurada]
      - slug: "materiaUNAHUR"
        correlativas: "-"

  - nombre: "Cuarto Cuatrimestre"
    horas: 288
    materias:
      - slug: "programacionVideojuegos1"
        correlativas: [programacionConObjetos, introduccionMotoresVideojuegos]
      - slug: "electivaITuProgramacionVideojuegos"
        correlativas: [introduccionMotoresVideojuegos]
      - slug: "construccionInterfacesUsuario"
        correlativas: [programacionConObjetos]
      - slug: "inglesII"
        correlativas: [inglesI]

  - nombre: "Quinto Cuatrimestre"
    horas: 256
    materias:
      - slug: "electivaIITuProgramacionVideojuegos"
        correlativas: [programacionVideojuegos1]
      - slug: "elementosIngenieriaSoftware"
        correlativas: [programacionVideojuegos1, basesDatos]
      - slug: "programacionVideojuegos2"
        correlativas: [programacionVideojuegos1]
---
