# The Walkers | Street Food Fusión de Autor

Web oficial de **The Walkers**, un concepto de street food fusión con técnica de autor. Rolls fusión, tacos asiáticos, burgers gourmet y bowls.

## Características

- **Diseño Responsive** - Funciona en móviles, tablets y escritorio
- **Performance Optimizado** - Astro genera HTML estático ultra rápido
- **Componentes Reutilizables** - Card, Header, Footer, Hero, Reviews, Menu, OrderForm, Merchandising
- **Estilos Modernos** - CSS con variables de diseño y Tailwind CSS
- **SEO Friendly** - Meta tags descriptivos y estructura semántica
- **Accesibilidad** - Contraste suficiente, navegación por teclado, prefers-reduced-motion

## Secciones

1. **Header** - Navegación sticky con efecto blur y enlaces a secciones
2. **Hero** - Video de fondo fullscreen con overlay y CTA
3. **Esencia** - 4 pilares de la marca con iconos SVG
4. **Carta/Menú** - Filtro dinámico por categorías (platos estrella, degustación, grupos, para llevar)
5. **Merchandising** - Tienda de productos de la marca con filtro por categorías
6. **Reviews** - Testimonios reales con estrellas y avatares
7. **OrderForm** - Formulario de pedido con 3 modalidades: pedir ahora, reservar grupo, degustación
8. **Footer** - Información de contacto, horarios, enlaces y redes sociales
9. **FloatingCTA** - Botón flotante "¡PIDE YA!" con animación

## Estructura del Proyecto

```
PF_JUAN-MANUEL-PORTILLO-IFCD0038/
├── src/
│   ├── components/
│   │   ├── Header.astro       # Navegación principal
│   │   ├── Hero.astro         # Hero con video de fondo
│   │   ├── Card.astro         # Card reutilizable
│   │   ├── Esencia.astro      # Pilares de la marca
│   │   ├── Services.astro     # Servicios (legacy)
│   │   ├── Menu.astro         # Carta con filtro dinámico
│   │   ├── Merchandising.astro# Tienda de productos
│   │   ├── Reviews.astro      # Testimonios
│   │   ├── OrderForm.astro    # Formulario de pedido
│   │   ├── Footer.astro       # Pie de página
│   │   └── FloatingCTA.astro  # Botón flotante CTA
│   ├── layouts/
│   │   └── MainLayout.astro   # Layout base con Header/Footer
│   ├── pages/
│   │   └── index.astro        # Página principal (one-page)
│   └── styles/
│       └── global.css         # Variables CSS y estilos globales
├── public/                    # Assets estáticos (favicon, imágenes)
├── astro.config.mjs           # Configuración de Astro + Tailwind
├── package.json               # Dependencias y scripts
├── tailwind.config.js         # Configuración de Tailwind
└── README.md                  # Este archivo
```

## Primeros Pasos

```bash
npm install
npm run dev        # Servidor de desarrollo
npm run build      # Compilar para producción
npm run preview    # Preview de la versión compilada
```

## Personalización

### Paleta de Colores

| Variable CSS | Color | Uso |
|---|---|---|
| `--walkerDark` / `--color-negro-carbon` | `#121212` | Fondo principal |
| `--walkerCard` / `--color-gris-asfalto` | `#1E1E1E` | Superficies/tarjetas |
| `--walkerOrange` / `--color-naranja-fuego` | `#FF4A1C` | Acento principal |
| `--walkerCyan` / `--color-azul-electrico` | `#00E5FF` | Acento secundario |

### Tipografía

- **Titulares**: Bebas Neue (uppercase, display)
- **Cuerpo**: Montserrat (300-800 weight)

## Tecnologías

- [Astro](https://astro.build) v5
- [Tailwind CSS](https://tailwindcss.com) v3
- Google Fonts (Bebas Neue + Montserrat)
- SVGO (optimización SVG)
