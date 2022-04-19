
# Introducción a Bases de Datos

## 1: Planteamiento del problema 

<img src="imagenes/bedu.jpg" align="right" height="100" width="100" hspace="10">
<div style="text-align: justify;">

### - Definir conjunto de datos a trabajar: 
**Contexto**
>Craigslist es la colección de vehículos usados en venta más grande del mundo, este conjunto de datos que incluye todas las entradas de vehículos usados dentro de los Estados Unidos en Craigslist.
>
**Contenido**
>Estos datos se extraen cada pocos meses, contienen la mayoría de la información relevante que proporciona Craigslist sobre las ventas de automóviles, incluidas columnas como precio, estado, fabricante, latitud/longitud y otras 18 categorías.
https://www.kaggle.com/datasets/austinreese/craigslist-carstrucks-data

### - Dar forma a la base de datos y obtener información relevante.
><img src="imagenes/punto2.jpg" align="center" height="500" width="500" hspace="10">
   
### - Definir la forma de uso de los datos y problemas a resolver. 
>- Forma de uso base de datos no relacional basada en documentos, analisis de informacion, ventas precios, region, etc.

### - Plantear diagrama de base de datos a utilizar (generarlo en MySQL Workbench).
> No aplica
### - Definir cinco preguntas sobre la base de datos.
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
   
