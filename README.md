# TodoList

Este proyecto es una aplicación web desarrollada con **React** y **TypeScript**. Su propósito es permitir a los usuarios llevar un registro eficiente de sus tareas. La aplicación no solo facilita la adición y eliminación de tareas, sino que también incluye una funcionalidad de historial para visualizar las tareas que han sido eliminadas.

## Características

### Agregar Tareas

Los usuarios pueden añadir nuevas tareas a la lista de pendientes utilizando un campo de entrada. Al ingresar el texto de la tarea y hacer clic en "Agregar", la tarea se suma a la lista principal. 

### Eliminar Tareas

Cada tarea en la lista principal tiene una opción para eliminarla. Al eliminar una tarea, esta no solo se quita de la vista principal, sino que también se mueve a un historial de tareas eliminadas para su revisión futura.

### Historial de Tareas

El historial permite a los usuarios revisar todas las tareas que han sido eliminadas. Los usuarios también pueden eliminar el historial completo si lo desean.

### Contador de Tareas

La aplicación muestra un contador en el historial que refleja el número de tareas completadas e incompletas. Esto proporciona una visión rápida del progreso general de las tareas.

## Tecnologías Utilizadas

- **React**: Biblioteca para construir interfaces de usuario interactivas.
- **TypeScript**: Superconjunto de JavaScript que añade tipos estáticos, mejorando la robustez y mantenibilidad del código.
- **CSS**: Para el diseño y estilización de la aplicación, proporcionando una experiencia de usuario atractiva.
- **LocalStorage**: Para almacenar los datos de las tareas y el historial en el navegador, asegurando que la información persista entre sesiones.
- **React Toastify** (opcional): Para mostrar notificaciones de manera atractiva (si decides usar notificaciones en tu proyecto).
