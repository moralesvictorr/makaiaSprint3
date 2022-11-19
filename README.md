# Sprint 3 de Makaia - @moralesvictorr

## Para ejecutar el proyecto es necesario desplegar JSON-SERVER de la siguiente forma:
Escribir en bash(Linux) Prompt(Windows):
    json-server --watch db.json
----------------
### Requerimientos
1.Hacer uso  de  CSS  para  realizar  el  diseño  responsive,  de  acuerdo  con  el modelo compartido en el archivo compartidoencasaRoyal.sketch.
2.El navbar debe contener los enlaces para ir a página de favoritose inputspara realizar búsquedasde inmuebles por ubicación y por tipo de vivienda (esta última opción puede ser mediante un select o botones de filtrado).
3.Cargar la data de los inmuebles concards donde se mostrará información relevante decadaproducto(imagen, nombre, ubicación, área, precio, etc).
4.Implementar JSON-SERVERcon toda la información de los inmuebles y consumir la data porpeticionesHTTPcon Fetch, gestionandoestas promesas, ya sea con .then().catch() o async/await. Como mínimo implementar método GET.
5.Si  selecciona  unproducto,  se  debe  mostrar  en  una  página  diferente,el  detalle  del inmueble, con un botónque llevar a favoritosmostrando la siguienteinformación:
a.Imágenes del inmueble
b.Nombre
c.ubicación
d.Área totalen metroscuadrados
e.Númerode habitaciones, bañosf.Tipo de inmueble(casa, finca, local comercial, apartamento, etc.)
g.Si se renta o está a la venta
h.Precioi.Si tiene parqueadero
j.Propietario e información del propietario (nombre, contacto)
k.Descripción.