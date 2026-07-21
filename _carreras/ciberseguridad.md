---
descripcion_corta: Licenciatura en Ciberseguridad con título intermedio
  Técnico/a Universitario en Redes y Operaciones Informáticas.
total_horas: 6000
layout: carrera
title: Licenciatura en Ciberseguridad
permalink: /licenciatura-ciberseguridad/
icono: /assets/img/redes-icono.png
imagen: /assets/uploads/images/plan-ciber-2026.png
vigente: true
orden: 2
titulo_intermedio: Técnico/a Universitario en Redes y Operaciones Informáticas
pdf: /assets/uploads/pdfs/lic-en-ciberseguridad-2026.pdf
correlatividades_imagen: /assets/uploads/images/lic-ciber-2026.png
tabla_datos:
  col_grado: Licenciado/a en Ciberseguridad
  col_intermedio: Técnico/a Universitario en Redes y Operaciones Informáticas
  filas:
    - label: Duración
      grado: 4,5 años
      intermedio: 2,5 años
    - label: Horas de interaccion pedagogica
      grado: "2240"
      intermedio: "1120"
    - label: Materias
      grado: "31"
      intermedio: "16"
    - label: Créditos ACA
      grado: "30"
      intermedio: "12"
    - label: Creditos totales
      grado: "240"
      intermedio: "120"
cuatrimestres:
  - nombre: Primer Año
    horas: ""
    materias:
      - slug: matematicaParaInformatica1
        correlativas: "-"
      - slug: introduccionLogicaProblemasComputacionales
        correlativas: "-"
      - slug: introduccionSistemasComunicacionSeguridad
        correlativas: "-"
      - slug: culturaAlfabetizacionDigital
        correlativas: "-"
      - slug: tallerInterpretesComandos
        correlativas:
          - introduccionSistemasComunicacionSeguridad
      - slug: organizacionComputadoras1
        correlativas: "-"
      - slug: basesDatos
        correlativas:
          - introduccionLogicaProblemasComputacionales
      - slug: tallerProgramacionI
        correlativas:
          - introduccionSistemasComunicacionSeguridad
        nombre: Taller de programacion
  - nombre: Segundo Año
    horas: ""
    materias:
      - slug: redesComputadoras
        correlativas:
          - organizacionComputadoras1
      - slug: organizacionComputadoras2
        correlativas:
          - organizacionComputadoras1
      - slug: sistemasOperativos
        correlativas:
          - organizacionComputadoras1
      - slug: operaciones
        correlativas:
          - introduccionLogicaProblemasComputacionales
          - tallerInterpretesComandos
      - slug: materiaUNAHUR
        correlativas: "-"
      - slug: redesAvanzadas
        correlativas:
          - redesComputadoras
      - slug: seguridadInformacion
        correlativas:
          - redesComputadoras
          - sistemasOperativos
      - slug: desarrolloSeguridadOperaciones
        correlativas:
          - tallerProgramacionI
          - operaciones
  - nombre: Tercer Año
    horas: ""
    materias:
      - slug: lenguajesInformaticos3
        correlativas:
          - tallerProgramacionI
          - sistemasOperativos
        nombre: Lenguajes Informaticos
      - slug: laboratorioSistemasOperativosRedes
        correlativas:
          - redesComputadoras
          - sistemasOperativos
      - slug: matematicaParaInformatica2
        correlativas:
          - matematicaParaInformatica1
      - slug: gestionIntegralSeguridad
        correlativas:
          - seguridadInformacion
      - slug: tecnologiaSociedad
        correlativas: "-"
      - slug: desarrolloSeguro
        correlativas:
          - basesDatos
          - desarrolloSeguridadOperaciones
      - slug: cibercrimenAnalisisForense
        correlativas:
          - redesAvanzadas
          - seguridadInformacion
      - slug: criptografia
        correlativas:
          - matematicaParaInformatica2
  - nombre: Cuarto Año
    horas: ""
    materias:
      - slug: ciberseguridadNube
        correlativas:
          - tecnologiaSociedad
      - slug: ciberseguridadOfensiva
        correlativas:
          - lenguajesInformaticos1
          - desarrolloSeguro
      - slug: administracionRespuestaIncidentes
        correlativas:
          - gestionIntegralSeguridad
      - slug: practicaProfesionalSupervisada
        correlativas:
          - laboratorioSistemasOperativosRedes
          - desarrolloSeguro
      - slug: ciberdefensaCiberinteligencia
        correlativas:
          - cibercrimenAnalisisForense
      - slug: ciberseguridadDefensiva
        correlativas:
          - ciberseguridadOfensiva
          - administracionRespuestaIncidentes
      - slug: proyectoFinal
        correlativas:
          - ciberseguridadOfensiva
          - ciberseguridadNube
          - practicaProfesionalSupervisada
---
