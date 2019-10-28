## MARKETPLACE STRUCTURE FULLSTACK

![Marketplace structure with Angular](marketplace.png)

### DESCRIPCIÓN
El siguiente proyecto que he creado es la maqueta de un **marketplace FULLSTACK**, donde el frontend ha sido estructurado con Angular y el backend con Nodejs.

En la **rama Frontend** podréis encontrar toda la estructura en Angular, en la **rama Backend** podréis conocer toda la estructura en Nodejs y en la **rama Master** está el ejecutable.

La particularidad de este sistema es que cuenta con privacidad de acceso a través del registro de usuarios con Bcrypt en un archivo JSON, para su posterior acceso, donde podrán realizar las siguientes acciones:
- ***Llamada GET*** - Acceder al catálogo completo de productos
- ***Llamada GET*** - Acceder a detalles de cada producto
- ***Llamada POST*** - Crear nuevas cards de productos
- ***Llamada DELETE*** - Eliminar productos

### TECNOLOGÍAS UTILIZADAS
Tecnologías utilizadas para Frontend:
1. HTML5
2. SCSS
3. Bootstrap
4. JavaScript (TypeScript)
5. Angular 2

Tecnologías utilizadas para Backend:
1. Nodejs
2. Express
3. Bcrypt (Security Access)
4. JSONwebtoken (Session Access)
5. MongoDB

La aplicación funciona bajo los servidores de **heroku**

### ENDPOINTS ACCESS
Para conocer la estructura de la API y sus ENDPOINTS, [descarga el siguiente PDF.](api-documentation.pdf)
Para activar el backend utilizar el siguiente comando:
> node app.js 3000
