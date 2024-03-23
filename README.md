# Bienvenido a la Aplicación del Ecommerce

Este proyecto es el resultado final del curso de React en el cual me estoy formando. Está diseñado como una aplicación de comercio electrónico utilizando tecnologías modernas para ofrecer una experiencia fluida y agradable tanto para los usuarios como para los desarrolladores.

## Descripción General

La Aplicación de Ecommerce es una simulación de una plataforma de comercio electrónico que permite a los usuarios explorar una variedad de productos, agregarlos al carrito de compras y manipular el contenido del carrito según sus necesidades. Además, ofrece la posibilidad de completar un formulario de compra para finalizar el proceso, lo que resulta en la creación de una orden en la base de datos de Firestore con los detalles proporcionados por el usuario.

Sin embargo, actualmente la aplicación no incluye funcionalidades de gestión de cuentas de usuario ni métodos de pago integrados. Estas características podrían ser consideradas para futuras mejoras y ampliaciones del proyecto.

## Tecnologías Utilizadas

- **React**: Utilizado como el framework principal para la construcción de la interfaz de usuario, proporcionando una estructura modular y eficiente.
- **Vite**: Empleado como el entorno de desarrollo para construir y servir la aplicación de manera rápida y eficiente.
- **Firebase**: Utilizado para la gestión de la base de datos y el almacenamiento de información sobre productos y órdenes de compra. Aunque actualmente no se ha implementado la autenticación de usuarios, Firebase proporciona una infraestructura confiable para la gestión de datos en tiempo real y el almacenamiento seguro de información crítica.
- **React Router Dom**: Implementado para la navegación entre distintas vistas de la aplicación, asegurando una experiencia de usuario fluida.
- **Material-UI**: Empleado para la creación de componentes de interfaz de usuario con un diseño atractivo y responsive, facilitando el desarrollo y manteniendo la coherencia visual.
- **SweetAlert2**: Implementado para la presentación de mensajes y notificaciones de forma amigable y atractiva.

### Dependencias

A continuación se detallan las dependencias utilizadas en el proyecto, junto con sus respectivas versiones:

#### Dependencias Principales

- React: ^18.2.0
- React-DOM: ^18.2.0
- React-Router-Dom: ^6.22.1
- Firebase: ^10.8.1
- Material-UI/Core: ^5.15.7
- Material-UI/Icons: ^5.15.7
- Fontsource/Roboto: ^5.0.8
- SweetAlert2: ^11.10.6

#### Dependencias de Desarrollo

- Vite: ^5.0.8
- @Types/React: ^18.2.43
- @Types/React-DOM: ^18.2.17
- @Vitejs/Plugin-React: ^4.2.1
- ESLint: ^8.55.0
- ESLint-Plugin-React: ^7.33.2
- ESLint-Plugin-React-Hooks: ^4.6.0
- ESLint-Plugin-React-Refresh: ^0.4.5

## Implementación y Despliegue

El código fuente de la Aplicación del Ecommerce estará disponible en GitHub para que la comunidad pueda explorarlo, contribuir con mejoras y aprender de su estructura y diseño. Además, la aplicación será desplegada en Vercel para que los usuarios puedan acceder a ella de forma rápida y sencilla.

- **Repositorio en GitHub**: El repositorio de GitHub será el lugar principal donde se gestionará el desarrollo y la colaboración en el proyecto. Si deseas explorar el código, visita el [repositorio](https://github.com/LautaroRoskospf/lautaroRoskospf-entregaFinal-react)!

- **Despliegue en Vercel**: La aplicación estará disponible en Vercel, lo que garantizará un acceso rápido y confiable para los usuarios finales. Vercel ofrece una infraestructura de alojamiento escalable y segura, lo que garantiza una experiencia óptima para todos los usuarios. Puedes acceder a la [aplicación desplegada en Vercel](https://lautaro-roskospf-entrega-final-react.vercel.app/).

## Variables de Entorno

La aplicación hace uso de variables de entorno para la configuración de ciertos aspectos, como las credenciales de Firebase u otras configuraciones sensibles. Estas variables se deben configurar en un archivo `.env` en la raíz del proyecto.

Si deseas obtener acceso a las variables de entorno necesarias para ejecutar la aplicación localmente o para su despliegue, por favor ponte en contacto conmigo para que pueda proporcionártelas de manera segura. Asegúrate de no compartir estas variables de entorno públicamente para mantener la seguridad de tu aplicación y tus datos.

Para configurar las variables de entorno, crea un archivo `.env` en la raíz del proyecto y coloca las variables necesarias siguiendo el formato `NOMBRE_VARIABLE=valor`.

###### Ejemplo de contenido del archivo .env:

FIREBASE_API_KEY=tu_api_key
FIREBASE_AUTH_DOMAIN=tu_dominio_de_autenticación
FIREBASE_DATABASE_URL=url_de_tu_base_de_datos
...

Recuerda no incluir el archivo `.env` en tu repositorio público ni compartirlo con personas no autorizadas para garantizar la seguridad de tus datos sensibles.
