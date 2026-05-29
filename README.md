# TechnoGaming - AP2 JavaScript Avanzado

Proyecto e-commerce desarrollado con Angular, Bootstrap, TypeScript y JSON Server.

## Requisitos cubiertos

- Angular con arquitectura basada en componentes.
- Navbar reutilizable y footer reutilizable.
- Paginas: Home, Productos, Ofertas, Tienda, Contacto, Mi Cuenta, Login, Dashboard y 404.
- Angular Routing con ruta comodin para 404.
- Dashboard protegido con guard y LocalStorage.
- Login simulado con `[(ngModel)]`, validaciones basicas y cierre de sesion.
- Data binding: interpolacion, property binding, event binding y two-way binding.
- Directivas: `*ngFor`, `*ngIf`, `[ngClass]`, `[ngStyle]`.
- Pipes: `currency`, `date`, `uppercase` y `lowercase`.
- Bootstrap: grid responsive, cards, navbar, formularios, botones y tablas/secciones visuales.
- JSON Server con `db.json`.
- Servicio Angular para consumir REST desde `http://localhost:3000/productos`.

## Instalacion

```bash
npm install
```

## Levantar JSON Server

```bash
npm run json-server
```

## Levantar Angular

En otra terminal:

```bash
npm start
```

Abrir `http://localhost:4200`.

## Login de prueba

Se puede ingresar con cualquier correo valido y una clave de minimo 6 caracteres. El usuario se guarda en LocalStorage.

Ejemplo:

- Correo: `admin@technogaming.pe`
- Clave: `123456`

## Despliegue

Para generar la version de produccion:

```bash
npm run build
```

Luego se puede publicar la carpeta `dist/technogaming-ap2-angular/browser` en Netlify, Vercel, Firebase Hosting o GitHub Pages.

> Pendiente obligatorio para la entrega final academica: reemplazar esta seccion con el enlace real del proyecto desplegado y el enlace real del repositorio GitHub una vez subido por el equipo.

## Repositorio GitHub

Agregar aqui el enlace final del repositorio del equipo.

## Proyecto desplegado

Agregar aqui el enlace final del proyecto online.
