
# Módulo 1: Introducción a Bases de Datos

## 1: Planteamiento del problema 

<img src="../img/bedu.jpg" align="right" height="100" width="100" hspace="10">
<div style="text-align: justify;">

### - Definir conjunto de datos a trabajar: 
**Contexto**
>Craigslist es la colección de vehículos usados en venta, este conjunto de datos que incluye todas las entradas de vehículos usados dentro de los Estados Unidos en Craigslist.

**Contenido**
>Contienen la mayoría de la información relevante que proporciona Craigslist sobre las ventas de automóviles, incluidas columnas como precio, estado, fabricante, latitud/longitud y otras 18 categorías.
https://www.kaggle.com/datasets/austinreese/craigslist-carstrucks-data
>CSV - https://we.tl/t-fNZjMcxVoB
   
### - Dar forma a la base de datos y obtener información relevante.
><img src="../img/M1/punto2.jpg"  height="700" width="700">
   
### - Definir la forma de uso de los datos y problemas a resolver. 
>- Forma de uso base de datos no relacional basada en documentos, analisis de informacion, ventas precios, region, etc.

### - Plantear diagrama de base de datos a utilizar (generarlo en MySQL Workbench).
> No aplica
### - Definir cinco preguntas sobre la base de datos. (Fundamentos de SQL)
>- Todos los automóviles de un fabricante en especifico `FILTER: {fabricante: /chevrolet/i}` 
>- Obtener los 100 autos mas costosos `[{
    $sort: {
        precio: -1
    }
}, {
    $limit: 100
}]` 
>- Obtener los 100 autos mas economicos   `[{
    $sort: {
        precio: 1
    }
}, {
    $limit: 100
}]` 
>- Obtener los 100 autos mas costosos por marca `[{
    $sort: {
        precio: -1
    }
}, {
    $match: {
        fabricante: RegExp('chevrolet', i)
    }
}, {
    $limit: 100
}]` 
>-  Obtener los 100 autos mas economicos por marca `[{
    $sort: {
        precio: -1
    }
}, {
    $match: {
        fabricante: RegExp('chevrolet', i)
    }
}, {
    $limit: 100
}]` 
---
   
 ## 2: Planteamiento del problema (Agrupaciones y subconsultas)
 ### - Añadir al menos otras cinco preguntas sobre la base de datos definida que apliquen los conceptos vistos durante la sesión (incluir el uso de: reconocimiento de patrones, funciones de agrupamiento, agrupamientos y subconsultas). 
  >- Obtener los diferentes precios de un modelo en especifico `FILTER {modelo:"c-hr xle sport utility 4d"} PROJECT {precio:1,modelo:1}` 
  >- Obtener el maximo y minimo de precios de los diferentes modelos  `[{
    $group: {
        _id: '$modelo',
        maxdist: {
            $max: '$precio'
        },
        mindist: {
            $min: '$precio'
        }
    }
}]` 
 >- Precio total de inventario por fabricante `[{
    $group: {
        _id: '$fabricante',
        precioTotal: {
            $sum: '$precio'
        }
    }
}]` 
 >- Obtener todas las regiones en donde se cuenta con sucursal `[{
    $unwind: {
        path: '$region',
        includeArrayIndex: 'string',
        preserveNullAndEmptyArrays: false
    }
}, {
    $group: {
        _id: null,
        regiones: {
            $addToSet: '$region'
        }
    }
}]` 
 >- Kilometraje promedio por modelo `[{
    $group: {
        _id: '$modelo',
        media: {
            $avg: '$odometro'
        }
    }
}]` 
   
   
 ## 3: Planteamiento del problema (Joins y vistas)
 ### -Añadir al menos otras cinco preguntas a realizar a la base de datos.
 >- Buscar modelos iguales o superiores del anio 2000, ordenando del mas reciente `FILTER {anio:{$gte:2000}} SORT {anio:-1}` 
 >- Buscar modelos combustible igual a gas y transmision automatica `FILTER {combustible:"gas",transmision:"automatic"} SORT {odometro:-1}`
 >- Buscar modelos entre el anio 200 y 2010, ordenando del mas reciente `FILTER {$and: [{anio: {$gte: 2000}},{anio: {$lte: 2010}}]} SORT {anio:-1}` 
 >- Ver solo los datos de (region, modelo, precio, fabricante, combustible y odometro) de los años 2000 y 2010, ordenados por el menor a mayor precio 
    `[{$project: 
{region:1,modelo:1,precio:1,fabricante:1,combustible:1,odometro:1,anio:1}
}, {$match:  {$and: [{anio: {$gte: 2000}},{anio: {$lte: 2010}}]}}, {$sort: {
  precio:1
}}]`
   
 >- Mostrar el id, modelo, precio y año, y ordenar del menor precio al año mas reciente `[{$project: 
{id:1,modelo:1,precio:1,anio:1}
}, {$sort: {
  precio:1,
  anio:-1
}}]`
 ## 4: Instalación de la base de datos (Configuración de bases de datos locales)
 ### -Instalar el sistema gestor de bases de datos en un equipo (o en la nube en caso de MongoDB).
   ><img src="../img/M1/serverlocal.jpg" align="center" height="300" width="400" hspace="10">
 ### -Crear las tablas o colecciones necesarias para el proyecto.
   ><img src="../img/M1/vistas.jpg" align="center" height="300" width="300" hspace="10">
 ### -Ejecutar las consultas realizadas a lo largo de todos los postworks del módulo en el caso de MySQL. En caso de MongoDB, realizar en las siguientes sesiones.
 ### -Guardar las consultas más relevantes como vistas. 
   ><img src="../img/M1/vistas.jpg" align="center" height="300" width="300" hspace="10">
   
## 8: Revisión final 
### -Revisar todos los retos del módulo, terminar todos los retos faltantes.
### -Usar el círculo de estudio para plantear dudas. 
### -Llenar la plantilla para identificar el problema a resolver, analizar cómo resolver.
   
   
- [Regresar](../Readme.md)
