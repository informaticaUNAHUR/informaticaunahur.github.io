---
layout: carrera
title: "Tecnicatura Universitaria en Programación"
permalink: /tecnicatura-programacion/
anterior: true
orden: 2
icono: /assets/img/programacion-icono.png
descripcion_corta: "Plan anterior. Vigente hasta 2026 1° Cuatrimestre."
imagen: "assets/images/planes-programacion.jpg"
pdf: /assets/pdf/planes/2022-Tecnicatura-Universitaria-en-Programacion-unahur.pdf
total_horas: 1408
creditos: 35

cuatrimestres:
  - nombre: "Primer Cuatrimestre"
    horas: 224
    materias:
      - slug: matematicaParaInformatica1
        correlativas: "-"

      - slug: introduccionLogicaProblemasComputacionales
        correlativas: "-"

      - slug: organizacionComputadoras1
        correlativas: "-"

      - slug: nuevosEntornos
        correlativas: "-"

  - nombre: "Segundo Cuatrimestre"
    horas: 256
    materias:
      - slug: tallerLenguajeMarcadoTecnologiasWeb
        correlativas: [introduccionLogicaProblemasComputacionales]

      - slug: programacionEstructurada
        correlativas: [introduccionLogicaProblemasComputacionales]

      - slug: matematicaParaInformatica2
        correlativas: [matematicaParaInformatica1]

      - slug: inglesI
        correlativas: "-"

  - nombre: "Tercer Cuatrimestre"
    horas: 352
    materias:
      - slug: basesDatos
        correlativas: [matematicaParaInformatica2]

      - slug: programacionConObjetos1
        correlativas: [programacionEstructurada]

      - slug: estructurasDatos
        correlativas: [programacionEstructurada]

  - nombre: "Cuarto Cuatrimestre"
    horas: 288
    materias:
      - slug: materiaUNAHUR
        correlativas: "-"

      - slug: programacionConObjetos2
        correlativas: [programacionConObjetos1]

      - slug: electivaTupI
        correlativas: [programacionEstructurada]

      - slug: electivaTupII
        correlativas: [organizacionComputadoras1]

      - slug: inglesII
        correlativas: [inglesI]

  - nombre: "Quinto Cuatrimestre"
    horas: 288
    materias:
      - slug: construccionInterfacesUsuario
        correlativas: [programacionConObjetos2]

      - slug: estrategiasPersistencia
        correlativas: [programacionConObjetos2]

      - slug: elementosIngenieriaSoftware
        correlativas: [programacionConObjetos2]
---
