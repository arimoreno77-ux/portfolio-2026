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

---

## Sistema Visual y Estilos Base

Análisis extraído de `index.html` y las hojas de estilo del proyecto (`src/index.css` / `<style>`):

### 1. Tipografías y Stack de Fuentes
- **Familia tipográfica principal:** `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif` (Stack de fuentes de sistema nativas de alta legibilidad y rendimiento).
- **Pesos y Estilos:** Uso extensivo de pesos pesados y negritas (`font-black`, `font-bold`, `font-weight: 900`) para reforzar el estilo Brutalista y de E-Commerce / Streetwear.
- **Fuentes monoespaciadas:** Clases `font-mono` aplicadas a etiquetas, SKUs, metadatos, tickers y coordenadas geográficas.

### 2. Paleta de Colores
- **Color de Papel / Fondo Principal (`paper`):** `#F4F1EA` (Tono crema/papel cálido característico del diseño editorial brutalista).
- **Color Negro Brutalista (`brutalist-black`):** `#000000` (Utilizado para fondos oscuros, tipografías principales, contornos y bordes sólidos de alto contraste).
- **Color Rojo Graffiti (`graffiti-red`):** `#E61C1C` (Color de acento primario para llamadas a la acción, badges destacados, tickers de marca y alertas visuales).
- **Blanco (`#FFFFFF`):** `#FFFFFF` (Texto en botones y contenedores de acento oscuro/rojo).

### 3. Estilos Globales / Reutilizables y Clases Personalizadas
- **`.brutalist-box`:**
  - *Definición:* Bordes sólidos de 3px a 4px de ancho en color negro (`#000000`), acompañados de sombras duras y desalineadas (`box-shadow: 6px 6px 0px #000000` o `8px 8px 0px #000000`).
  - *Comportamiento:* Transiciones rápidas en hover para elevación o desplazamiento físico simulado.
- **`.brutalist-button`:**
  - *Definición:* Botón interactivo característico con borde negro de 3px, fondo rojo graffiti (`#E61C1C`), texto blanco en negrita extrema (`font-weight: 900`), y sombra dura (`4px 4px 0px #000000`).
  - *Comportamiento:* Efecto de desplazamiento y ajuste de sombra en `:hover` y `:active` para sensación táctil real.
- **Efectos de Animación (Keyframes):**
  - `slideFromTop`: Entrada deslizante desde la parte superior (`opacity: 0` a `1`, `translateY(-20px)` a `0`).
  - `slideFromLeft` / `slideFromRight` / `slideFromBottom`: Entradas direccionales escaladas.
  - `slideFromBottomRightDiagonal`: Animación diagonal específica para la tarjeta de foto de perfil.
  - `marqueeLeft`: Animación lineal infinita horizontal (`animation: marqueeLeft 22s linear infinite`) para los tickers de marca a pantalla completa.
- **Efectos Decorativos:**
  - `.torn-edge`: Simulación de bordes rasgados mediante gradientes lineales repetidos.
