### Requisitos Funcionales

1. Animaciones y transiciones dinámicas.
2. Sección de videos con reproducción en pantalla completa.
3. Panel de administración para cambiar títulos, links y gestionar videos.
4. Enrutado para una navegación fluida.
5. Formulario para enviar mensajes al correo electronico. 

### Otros Requisitos

1. Pagina en español e ingles
2. Vista previa al enviar link del portafolio 

### Requisitos No Funcionales

1. Accesibilidad para usuarios con discapacidades.

### Wireframes o Mockups

- [Enlace a los wireframes]()

### Plan de Desarrollo

1. **Fase 1**: Diseño y planificación 
2. **Fase 2**: Desarrollo del frontend 
3. **Fase 3**: Integración y pruebas 
4. **Fase 4**: Despliegue y revisión final 

### Tecnologías a Utilizar

- **Frontend**: Vite, Tailwind CSS, Axios, React Router
- **Backend**: Express.js, Mongoose, JWT, bcrypt, cors, dotenv
- **Base de Datos**: MongoDB
- **Hosting**: Vercel o Netlify para el frontend, Heroku para el backend

### Mongo Schemas

VideoSchema: title, url, description, createdAt
UserSchema: username, password, createdAt
MessageSchema: name, email, message, createdAt