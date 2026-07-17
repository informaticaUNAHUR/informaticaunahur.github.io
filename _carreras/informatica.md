---
descripcion_corta: Licenciatura con título intermedio Técnico/a Universitario en Programación.
total_horas: 7175
layout: carrera
title: Licenciatura en Informática
permalink: /licenciatura-informatica/
icono: /assets/img/Informatica-licenciatura-icono.png
imagen: /assets/uploads/images/2026.webp
vigente: true
orden: 1
titulo_intermedio: Técnico/a Universitario en Programación
pdf: /assets/uploads/pdfs/lic-informatica-2026.pdf
correlatividades_imagen: /assets/uploads/images/lic-info-2025.png
tabla_datos:
  col_grado: Licenciado/a en Informática
  col_intermedio: Técnico/a Universitario en Programación
  filas:
    - label: Duración
      grado: 4,5 años
      intermedio: 2,5 años
    - label: Horas de interaccion pedagogica
      intermedio: "1184"
      grado: "3200"
    - label: Materias
      grado: "45"
      intermedio: "23"
    - label: Créditos ACA
      grado: "30"
      intermedio: "12"
    - label: Creditos
      grado: "287"
      intermedio: "120"
cuatrimestres:
  - nombre: Primer Año
    horas: ""
    materias:
      - slug: introduccionLogicaProblemasComputacionales
        correlativas: "-"
      - slug: matematicaParaInformatica1
        correlativas: "-"
      - slug: organizacionComputadoras1
        correlativas: "-"
      - slug: culturaAlfabetizacionDigital
        correlativas: "-"
      - slug: tecnologiaSociedad
        correlativas: "-"
      - slug: ingles
        correlativas: "-"
      - slug: programacionEstructurada
        correlativas:
          - introduccionLogicaProblemasComputacionales
      - slug: matematicaParaInformatica2
        correlativas:
          - matematicaParaInformatica1
      - slug: lenguajesInformaticos1
        correlativas:
          - introduccionLogicaProblemasComputacionales
      - slug: organizacionComputadoras2
        correlativas:
          - organizacionComputadoras1
  - nombre: Segundo Año
    horas: ""
    materias:
      - slug: programacionConObjetos1
        correlativas:
          - programacionEstructurada
      - slug: estructurasDatos
        correlativas:
          - programacionEstructurada
      - slug: basesDatos
        correlativas:
          - programacionEstructurada
      - slug: matematicaParaInformatica3
        correlativas:
          - matematicaParaInformatica2
      - slug: redesComputadoras
        correlativas:
          - organizacionComputadoras1
      - slug: programacionConObjetos2
        correlativas:
          - programacionConObjetos1
      - slug: materiaUNAHUR
        correlativas: "-"
        nombre: Asignatura UNAHUR
      - slug: sistemasOrganizaciones
        correlativas:
          - programacionEstructurada
      - slug: algoritmos
        correlativas:
          - estructurasDatos
      - slug: sistemasOperativos
        correlativas:
          - organizacionComputadoras1
  - nombre: Tercer Año
    horas: ""
    materias:
      - slug: construccionInterfacesUsuario
        correlativas:
          - basesDatos
          - programacionConObjetos2
      - slug: estrategiasPersistencia
        correlativas:
          - basesDatos
          - programacionConObjetos2
      - slug: ingenieriaSoftware1
        correlativas:
          - sistemasOrganizaciones
      - slug: algebraLineal
        correlativas:
          - lenguajesInformaticos1
      - slug: ejercicioProfesionalTecnologia
        correlativas:
          - tecnologiaSociedad
      - slug: desarrolloAplicaciones
        correlativas:
          - construccionInterfacesUsuario
          - estrategiasPersistencia
          - ingenieriaSoftware1
      - slug: laboratorioSistemasOperativosRedes
        correlativas:
          - organizacionComputadoras2
          - redesComputadoras
          - sistemasOperativos
      - slug: lenguajesInformaticos2
        correlativas:
          - matematicaParaInformatica2
          - programacionConObjetos2
          - algoritmos
      - slug: arquitecturaSoftware1
        correlativas:
          - construccionInterfacesUsuario
          - estrategiasPersistencia
          - ingenieriaSoftware1
      - slug: matematicaParaInformatica4
        correlativas:
          - matematicaParaInformatica3
          - algebraLineal
  - nombre: Cuarto Año
    horas: ""
    materias:
      - slug: ingenieriaSoftware2
        correlativas:
          - ingenieriaSoftware1
      - slug: probabilidadEstadistica
        correlativas:
          - matematicaParaInformatica4
      - slug: lenguajesInformaticos3
        correlativas:
          - programacionEstructurada
          - sistemasOperativos
      - slug: seguridadInformacion
        correlativas:
          - laboratorioSistemasOperativosRedes
      - slug: computabilidadComplejidad
        correlativas:
          - algoritmos
          - algebraLineal
      - slug: fundamentosRedesNeuronales
        correlativas:
          - probabilidadEstadistica
      - slug: lenguajesInformaticos4
        correlativas:
          - algoritmos
          - lenguajesInformaticos2
      - slug: formalizacionLenguajesGeneracionCodigo
        correlativas:
          - computabilidadComplejidad
      - slug: arquitecturaSoftware2
        correlativas:
          - arquitecturaSoftware1
      - slug: practicaProfesionalSupervisada
        correlativas:
          - desarrolloAplicaciones
  - nombre: Quinto Año
    horas: ""
    materias:
      - slug: gestionProyectosDesarrolloSoftware
        correlativas:
          - ingenieriaSoftware2
      - slug: aprendizajeAutomatico
        correlativas:
          - computabilidadComplejidad
      - slug: sistemasDistribuidosTiempoReal
        correlativas:
          - laboratorioSistemasOperativosRedes
      - slug: arquitecturaComputadoras
        correlativas:
          - laboratorioSistemasOperativosRedes
      - slug: proyectoFinalLicenciatura
        correlativas:
          - lenguajesInformaticos4
          - practicaProfesionalSupervisada
---
