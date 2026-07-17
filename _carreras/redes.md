---
layout: carrera
title: "Tecnicatura Universitaria en Redes y Operaciones Informáticas"
permalink: /tecnicatura-redes-operaciones/
anterior: true
orden: 4
icono: /assets/img/redes-icono.png
descripcion_corta: "Plan anterior. Vigente hasta 2026 1° Cuatrimestre."
imagen: "assets/images/planes-redes-operaciones.jpg"
pdf: /assets/pdf/planes/2022-Tecnicatura-Universitaria-en-Redes-y-Operaciones-Informaticas-unahur.pdf
total_horas: 1408
creditos: 35

cuatrimestres:
  - nombre: "Primer Cuatrimestre"
    horas: 224
    materias:
      - slug: "matematicaParaInformatica1"
        correlativas: "-"

      - slug: "introduccionLogicaProblemasComputacionales"
        correlativas: "-"

      - slug: "organizacionComputadoras1"
        correlativas: "-"

      - slug: "nuevosEntornos"
        correlativas: "-"

  - nombre: "Segundo Cuatrimestre"
    horas: 256
    materias:
      - slug: "tallerInterpretesComandos"
        correlativas: [introduccionLogicaProblemasComputacionales]

      - slug: "organizacionComputadoras2"
        correlativas: [organizacionComputadoras1]

      - slug: "sistemasComunicacion"
        correlativas: [organizacionComputadoras1]

      - slug: "inglesI"
        correlativas: "-"

  - nombre: "Tercer Cuatrimestre"
    horas: 384
    materias:
      - slug: "basesDatos"
        correlativas: [matematicaParaInformatica1]

      - slug: "redesComputadoras"
        correlativas: [organizacionComputadoras2, sistemasComunicacion]

      - slug: "sistemasOperativos"
        correlativas: [tallerInterpretesComandos, organizacionComputadoras2]

      - slug: "operacionesI"
        correlativas: [tallerInterpretesComandos]

  - nombre: "Cuarto Cuatrimestre"
    horas: 288
    materias:
      - slug: "materiaUNAHUR"
        correlativas: "-"

      - slug: "redesAvanzadas"
        correlativas: [redesComputadoras]

      - slug: "electivaTurI"
        correlativas: [organizacionComputadoras2, sistemasComunicacion]

      - slug: "electivaTurII"
        correlativas: [matematicaParaInformatica1, tallerInterpretesComandos]

      - slug: "inglesII"
        correlativas: [inglesI]

  - nombre: "Quinto Cuatrimestre"
    horas: 256
    materias:
      - slug: "seguridadInformacion"
        correlativas: [redesAvanzadas, operacionesI]

      - slug: "laboratorioSistemasOperativosRedes"
        correlativas: [redesComputadoras, sistemasOperativos]

      - slug: "operacionesII"
        correlativas: [operacionesI, sistemasOperativos]
---
