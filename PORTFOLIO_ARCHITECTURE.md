# Arquitectura y Diseño del Portfolio — Ramon Ariel Moreno

## Inventario de Componentes y Posiciones

Lista ordenada de todos los componentes de la interfaz de usuario presentes en `index.html`, analizados de principio a fin:

1. **Streetwear / E-Commerce Drop Ticker Bar**
   - **Nombre / Identificador:** Ticker de Estado Activo
   - **Etiqueta HTML / Elemento:** `<div>`
   - **Posición en la estructura:** Raíz del documento, contenedor superior fijo/estático antes del header (`<body>` superior).

2. **Header / Brand Nav**
   - **Nombre / Identificador:** Cabecera de Navegación y Marca
   - **Etiqueta HTML / Elemento:** `<header>`
   - **Posición en la estructura:** Parte superior del flujo principal, debajo del Ticker Bar.

3. **Botón Context.md [AI]**
   - **Nombre / Identificador:** Enlace de Contexto de IA
   - **Etiqueta HTML / Elemento:** `<a>`
   - **Posición en la estructura:** Contenedor de enlaces superior derecho dentro del `<header>`.

4. **Botón Consulta Rápida**
   - **Nombre / Identificador:** Botón de WhatsApp / Consulta Directa
   - **Etiqueta HTML / Elemento:** `<a>` (con clase `.brutalist-button`)
   - **Posición en la estructura:** Contenedor de enlaces superior derecho dentro del `<header>`.

5. **Hero Section / Collage Layout**
   - **Nombre / Identificador:** Sección Hero Principal
   - **Etiqueta HTML / Elemento:** `<section>`
   - **Posición en la estructura:** Primer bloque dentro de `<main class="max-w-7xl mx-auto space-y-12">`.

6. **Main Hero Card (Visión de Producto)**
   - **Nombre / Identificador:** Tarjeta Principal de Visión y Propuesta
   - **Etiqueta HTML / Elemento:** `<div>` (columna izquierda, `lg:col-span-8`)
   - **Posición en la estructura:** Dentro de la sección Hero. Contiene título, manifiesto corto y botones de acción.

7. **Botón Ver CV / Curriculum**
   - **Nombre / Identificador:** Botón de Apertura de Modal CV
   - **Etiqueta HTML / Elemento:** `<a>` (con ID `open-cv-btn`)
   - **Posición en la estructura:** Cuadrícula de botones inferior dentro de la Tarjeta Hero Principal.

8. **Botón Repo GitHub**
   - **Nombre / Identificador:** Enlace al Repositorio de GitHub
   - **Etiqueta HTML / Elemento:** `<a>`
   - **Posición en la estructura:** Cuadrícula de botones inferior dentro de la Tarjeta Hero Principal.

9. **Brutalist Profile Photo Placeholder**
   - **Nombre / Identificador:** Tarjeta de Perfil / Coordenadas
   - **Etiqueta HTML / Elemento:** `<div>` (columna derecha, `lg:col-span-4`)
   - **Posición en la estructura:** Dentro de la sección Hero (lado derecho). Contiene metadatos de ubicación y referencia de foto.

10. **Manifesto / About Section**
    - **Nombre / Identificador:** Sección de Filosofía y Manifiesto
    - **Etiqueta HTML / Elemento:** `<section>`
    - **Posición en la estructura:** Debajo de la sección Hero, dentro de `<main>`.

11. **Marquee Tickers (Ticker Infinito Doble)**
    - **Nombre / Identificador:** Cintas Deslizantes de Marca / Tech Stack
    - **Etiqueta HTML / Elemento:** `<div>` (con clase `w-screen`)
    - **Posición en la estructura:** Entre la sección de Manifiesto y la sección de Proyectos, abarcando el ancho completo de la pantalla.

12. **Projects Section (Grid de E-Commerce Streetwear)**
    - **Nombre / Identificador:** Sección de Proyectos Destacados
    - **Etiqueta HTML / Elemento:** `<section>`
    - **Posición en la estructura:** Debajo de los Marquee Tickers, dentro de `<main>`.

13. **Tarjeta de Proyecto 1 (RESETEAR - SKU: RM-01)**
    - **Nombre / Identificador:** Tarjeta de Proyecto Resetear
    - **Etiqueta HTML / Elemento:** `<div>`
    - **Posición en la estructura:** Primera columna dentro del grid de proyectos (`grid-cols-1 md:grid-cols-3`).

14. **Tarjeta de Proyecto 2 (Skatepark Villa Luro - SKU: RM-02)**
    - **Nombre / Identificador:** Tarjeta de Proyecto Skatepark Villa Luro
    - **Etiqueta HTML / Elemento:** `<div>`
    - **Posición en la estructura:** Segunda columna dentro del grid de proyectos, con iframe incorporado.

15. **Tarjeta de Proyecto 3 (MOVIMIENTO LIBERACION NACIONAL - SKU: RM-03)**
    - **Nombre / Identificador:** Tarjeta de Proyecto Movimiento Liberación Nacional
    - **Etiqueta HTML / Elemento:** `<div>`
    - **Posición en la estructura:** Tercera columna dentro del grid de proyectos.

16. **Contact / E-Commerce Checkout Section**
    - **Nombre / Identificador:** Sección de Cierre / Contacto Profesional
    - **Etiqueta HTML / Elemento:** `<section>`
    - **Posición en la estructura:** Última sección dentro de `<main>`.

17. **Botón LinkedIn**
    - **Nombre / Identificador:** Enlace de Perfil de LinkedIn
    - **Etiqueta HTML / Elemento:** `<a>`
    - **Posición en la estructura:** Contenedor de acciones dentro de la sección de Contacto / Checkout.

18. **Botón Enviar Email**
    - **Nombre / Identificador:** Botón de Correo Directo
    - **Etiqueta HTML / Elemento:** `<a>` (con clase `.brutalist-button`)
    - **Posición en la estructura:** Contenedor de acciones dentro de la sección de Contacto / Checkout.

19. **Footer / Pie de Página**
    - **Nombre / Identificador:** Pie de Página Institucional
    - **Etiqueta HTML / Elemento:** `<footer>`
    - **Posición en la estructura:** Fuera de `<main>`, al final del flujo del documento (`max-w-7xl mx-auto`).

20. **Toasty! Widget**
    - **Nombre / Identificador:** Widget Easter Egg Flotante (Toasty!)
    - **Etiqueta HTML / Elemento:** `<div>` (con ID `toasty-widget`)
    - **Posición en la estructura:** Posicionamiento fijo (`fixed bottom-0 right-0 z-50`), superpuesto en la esquina inferior derecha de la ventana.

21. **CV Modal**
    - **Nombre / Identificador:** Ventana Modal de Currículum
    - **Etiqueta HTML / Elemento:** `<div>` (con ID `cv-modal`)
    - **Posición en la estructura:** Capa superpuesta fija (`fixed inset-0 z-50 hidden`) al nivel raíz de la página (`<body>`), oculta por defecto.

22. **Botón Descargar CV**
    - **Nombre / Identificador:** Botón de Descarga del Archivo CV
    - **Etiqueta HTML / Elemento:** `<a>`
    - **Posición en la estructura:** Cabecera superior dentro del Modal de Currículum (`cv-modal`).

23. **Botón Cerrar Modal CV**
    - **Nombre / Identificador:** Botón de Cierre del Modal (`[ X ]`)
    - **Etiqueta HTML / Elemento:** `<button>` (con ID `close-cv-modal`)
    - **Posición en la estructura:** Cabecera superior dentro del Modal de Currículum (`cv-modal`).
