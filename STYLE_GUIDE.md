# Guía de Estilos y Convenciones - The Walkers

## 🎨 Sistema de Diseño

### Paleta de Colores

**Colores Primarios:**
- Walker Dark / Negro Carbón: `#121212` (Fondo principal)
- Walker Card / Gris Asfalto: `#1E1E1E` (Superficies)
- Walker Orange / Naranja Fuego: `#FF4A1C` (Acento principal, CTAs)
- Walker Cyan / Azul Eléctrico: `#00E5FF` (Acento secundario, detalles)

**Colores Neutrales:**
- Blanco Puro: `#FFFFFF`
- Gris Ceniza: `#E0E0E0`
- Dark: `#0D0D11` (Hover de fondo)

**Alias CSS (en global.css):**
```
--color-primary → #121212
--color-surface → #1E1E1E
--color-accent → #FF4A1C
--color-neon-cyan → #00E5FF
```

### Tipografía

**Familias tipográficas:**
- Display/Titulares: `Bebas Neue` (headings, uppercase)
- Body/Cuerpo: `Montserrat` (párrafos, navegación)

**Escala tipográfica:**
```
h1: 5rem   (80px) - Hero title
h2: 2.8rem (45px) - Section titles
h3: 1.3rem (21px) - Card titles
p:  0.9rem (14px) - Body text
```

### Espaciado
```
--spacing-xs:  0.5rem  (8px)
--spacing-sm:  1rem    (16px)
--spacing-md:  1.5rem  (24px)
--spacing-lg:  2rem    (32px)
--spacing-xl:  3rem    (48px)
--spacing-2xl: 4rem    (64px)
```

### Bordes y Radios
```
--radius-sm:  0.375rem
--radius-md:  0.5rem
--radius-lg:  0.75rem
--radius-xl:  1rem
```

### Transiciones
```
--transition-fast:   150ms ease-in-out
--transition-normal: 300ms ease-in-out
```

## 📝 Convenciones de Código

### Astro Components

**Estructura básica:**
```astro
---
// 1. Imports
// 2. Interfaces/Props
// 3. Variables y lógica
---

<template>
  <!-- HTML (comentarios HTML, NO {/* JSX */}) -->
</template>

<style>
  /* CSS scoped con variables CSS */
</style>
```

**Importante:** Usar siempre comentarios HTML `<!-- -->` en las plantillas. NO usar `{/* JSX */}`.

**Nombrado de componentes:**
- PascalCase: `Header.astro`, `Hero.astro`, `OrderForm.astro`
- Descriptivos: `FloatingCTA.astro`, `Merchandising.astro`

### CSS
- Usar variables CSS para colores y espaciado
- Evitar píxeles, usar `rem`
- Mobile-first approach con breakpoints en 768px y 480px
- Clases con naming semántico (`.pilar-card`, `.menu-card`, `.review-card`)

## 🎯 Principios de Diseño

### Jerarquía Visual
```
Hero (impacto visual fullscreen con video)
  ↓
Esencia (4 pilares de la marca)
  ↓
Carta/Menú (filtro dinámico, grid de platos)
  ↓
Merchandising (tienda de productos)
  ↓
Reviews (testimonios con validación social)
  ↓
OrderForm (pedidos, reservas, degustación)
  ↓
Footer (información práctica)
```

### Estética Cyber-Street Food
- Fondo oscuro (#121212) con acentos neón (#FF4A1C, #00E5FF)
- Efectos de glow en hover (box-shadow con colores de acento)
- Tipografía bold en headlines (Bebas Neue, uppercase)
- Tarjetas con bordes sutiles y elevación en hover

## 🔧 Componentes

### Card
```astro
<Card
  title="ROLLS FUSIÓN"
  description="Sushi reimaginado con ingredientes de autor"
  image="https://..."
  icon="🥟"
/>
```

### Botones
```html
<button class="btn btn-primary">¡PIDE YA!</button>
<button class="btn btn-secondary">Acción secundaria</button>
<button class="btn btn-outline">VER CARTA</button>
```

## 📱 Responsive Design

### Breakpoints
```css
@media (max-width: 1024px) { /* Tablets landscape */ }
@media (max-width: 768px) {  /* Tablets portrait */ }
@media (max-width: 480px) {  /* Móviles */ }
```

### Reglas de Adaptación
1. Tipografía: reducir tamaño progresivamente
2. Grids: 4→2→1 columnas según viewport
3. Botones: full-width en móvil
4. Navegación: wrap en móvil

## 🖼️ Imágenes
- **Lazy loading** en todas las imágenes (`loading="lazy"`)
- Alt text descriptivo para accesibilidad
- Optimizar PNGs antes de subir (peso ideal < 500KB)

## Componentes del Proyecto

| Componente | Archivo | Descripción |
|---|---|---|
| Header | `src/components/Header.astro` | Navegación sticky con blur |
| Hero | `src/components/Hero.astro` | Fullscreen con video, overlay y CTA |
| Esencia | `src/components/Esencia.astro` | 4 pilares con iconos SVG |
| Card | `src/components/Card.astro` | Card reutilizable con imagen, icono, texto |
| Menu | `src/components/Menu.astro` | Carta con filtro dinámico JS |
| Merchandising | `src/components/Merchandising.astro` | Tienda con filtro por categorías |
| Reviews | `src/components/Reviews.astro` | Testimonios con estrellas |
| OrderForm | `src/components/OrderForm.astro` | 3 formularios: pedido, grupo, degustación |
| Footer | `src/components/Footer.astro` | 4 columnas con info, enlaces, horarios |
| FloatingCTA | `src/components/FloatingCTA.astro` | Botón fijo flotante con pulse |
| MainLayout | `src/layouts/MainLayout.astro` | Layout base HTML |

## Referencias
- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
