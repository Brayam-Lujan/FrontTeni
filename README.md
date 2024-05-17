# FrontTeni

## Descripción
Este repositorio contiene el front-end de la aplicación **FrontTeni**, diseñada para mostrar una página web de gestión de clientes. Está construido usando React y Axios para la gestión de estado y las solicitudes a la API.

## Estructura del Proyecto
- **`ClientesTable`**: Componente principal que renderiza una tabla con datos de clientes.
- **`ClientesRow`**: Componente que representa una fila individual en la tabla de clientes.

## Problemas Conocidos
1. **Error de lectura**: `Cannot read properties of undefined (reading 'nombre')`.
   - **Causa**: `cliente` pasa como `undefined` a `ClientesRow`.

2. **Mapeo Incorrecto**: Sintaxis incorrecta en el uso de `.map`.
   - **Solución**: Asegurarse de utilizar correctamente la función de flecha en `.map`.
