# Style Guide

This document outlines the visual styling guidelines for the Modible website, based on its existing Eleventy and Tailwind CSS implementation.

## Color Palette

The color palette combines Tailwind's default grays with custom color definitions.

### Primary Colors

*   **`ws-blue-500`**: `#006AFE`
    *   Usage: Likely primary interactive elements, brand highlighting. (Defined in [`tailwind.config.js`](tailwind.config.js:10))
*   **`ws-blue-700`**: `#004098`
    *   Usage: Darker shade for primary elements, possibly text or backgrounds. (Defined in [`tailwind.config.js`](tailwind.config.js:12))

### Secondary/Accent Colors

*   **`balls-600` (Lime Green)**: `#ABD94A`
    *   Usage: Accent color, observed in navigation link hovers. (Defined in [`tailwind.config.js`](tailwind.config.js:20))
*   **Teal Accent**: `#19f6e8`
    *   Usage: Custom accent for specific UI elements like the animated SVG shape stroke in [`src/_assets/stylesheets/app.css`](src/_assets/stylesheets/app.css:29).

### Neutral Colors (Examples from Tailwind's default palette)

*   **`text-gray-700`**: (Tailwind default)
    *   Usage: Standard text, links. (Applied in [`src/_assets/stylesheets/app.css`](src/_assets/stylesheets/app.css:12) and various components like [`src/_layouts/partials/navbar.njk`](src/_layouts/partials/navbar.njk:2))
*   **`text-gray-500`**: (Tailwind default)
    *   Usage: Secondary text, footer text. (Observed in [`src/_layouts/partials/footer.njk`](src/_layouts/partials/footer.njk:8))
*   **`bg-gray-100`**: (Tailwind default)
    *   Usage: Backgrounds, e.g., navbar container. (Observed in [`src/_layouts/partials/navbar.njk`](src/_layouts/partials/navbar.njk:1))
*   **`bg-white`**: (Tailwind default)
    *   Usage: Main content backgrounds, component backgrounds (e.g., navbar inner).

### Dark Mode Colors (Examples)

*   **`dark-mode:bg-gray-900`**: (Tailwind utility)
    *   Usage: Main background in dark mode.
*   **`dark-mode:text-gray-200`**: (Tailwind utility)
    *   Usage: Text color in dark mode.

### Full Custom Palettes from [`tailwind.config.js`](tailwind.config.js:1)

*   **`ws-blue`**:
    *   `100`: `#E6F0FF`
    *   `200`: `#BFDAFF`
    *   `300`: `#99C3FF`
    *   `400`: `#4D97FE`
    *   `500`: `#006AFE`
    *   `600`: `#005FE5`
    *   `700`: `#004098`
    *   `800`: `#003072`
    *   `900`: `#00204C`
*   **`balls`**:
    *   `300`: `#A6A6A6`
    *   `400`: `#E9ECF2`
    *   `500`: `#A8BF84`
    *   `600`: `#ABD94A`
    *   `700`: `#8C6C61`

## Typography

The site utilizes "Roboto Slab", "Neuton", and "Roboto Condensed" font families.

### Roboto Slab
*   Files available: `RobotoSlab-Black.ttf`, `RobotoSlab-Bold.ttf`, `RobotoSlab-ExtraBold.ttf`, `RobotoSlab-ExtraLight.ttf`, `RobotoSlab-Light.ttf`, `RobotoSlab-Medium.ttf`, `RobotoSlab-Regular.ttf`, `RobotoSlab-SemiBold.ttf`, `RobotoSlab-Thin.ttf` (from [`src/static/fonts/`](src/static/fonts/))
*   Usage: Likely used for headings and prominent text. Specific application needs to be confirmed by reviewing more templates.
    *   Example (Brand Name in Navbar/Footer): `font-semibold tracking-widest uppercase text-lg` (e.g., "Modible" in [`src/_layouts/partials/navbar.njk`](src/_layouts/partials/navbar.njk:7) and [`src/_layouts/partials/footer.njk`](src/_layouts/partials/footer.njk:5)). While the class doesn't specify "Roboto Slab", it's a common pairing for such styles.

### Neuton
*   Files available: `Neuton-Bold.ttf`, `Neuton-ExtraBold.ttf`, `Neuton-ExtraLight.ttf`, `Neuton-Italic.ttf`, `Neuton-Light.ttf`, `Neuton-Regular.ttf` (from [`src/static/fonts/`](src/static/fonts/))
*   Usage: Likely used for body text or secondary text elements. Specific application needs to be confirmed.

### Roboto Condensed
*   Usage:
    *   `.text` class (from [`src/_assets/stylesheets/app.css`](src/_assets/stylesheets/app.css:32)):
        *   Font: "Roboto Condensed"
        *   Size: `22px`
        *   Letter Spacing: `8px`
        *   Line Height: `32px`
        *   Color: `#fff` (as per the CSS rule)

### General Text Styles
*   **Navigation Links**: `text-sm font-semibold` (from [`src/_layouts/partials/navbar.njk`](src/_layouts/partials/navbar.njk:28))
*   **Body Links (`a`)**: `text-gray-700 no-underline` (from [`src/_assets/stylesheets/app.css`](src/_assets/stylesheets/app.css:12))
*   **Footer Copyright Text**: `text-sm` (from [`src/_layouts/partials/footer.njk`](src/_layouts/partials/footer.njk:8))

## Spacing

The project uses Tailwind CSS, which inherently provides a consistent spacing scale (e.g., `px-4`, `py-2`, `mt-2`, `max-w-screen-xl`). Spacing is applied contextually using Tailwind utility classes. Common patterns include padding within sections and margins between elements.

## Key UI Components

### Navigation Bar ([`src/_layouts/partials/navbar.njk`](src/_layouts/partials/navbar.njk:1))
*   **Background**: Outer container `bg-gray-100` (`dark-mode:bg-gray-900`). Inner bar `bg-white bg-opacity-75` (`dark-mode:bg-gray-800`).
*   **Text**: Default `text-gray-700` (`dark-mode:text-gray-200`).
*   **Brand Logo ("Modible")**: `text-lg font-semibold tracking-widest uppercase`.
*   **Navigation Links**:
    *   Typography: `text-sm font-semibold`.
    *   Spacing: `px-4 py-2 mt-2 md:mt-0 md:ml-4`.
    *   Hover State: `hover:text-gray-900 hover:bg-balls-600`.

### Footer ([`src/_layouts/partials/footer.njk`](src/_layouts/partials/footer.njk:1))
*   **Background**: Implicitly transparent or inherits from parent; uses text and border colors for definition.
*   **Text**: Default `text-gray-700`. Copyright text `text-sm text-gray-500`. Social media icons `text-gray-500`.
*   **Brand Logo ("Modible")**: `text-lg font-semibold tracking-widest uppercase`.
*   **Structure**: Uses flexbox for layout, with a border (`sm:border-l-2 sm:border-gray-200`) separating the brand/copyright from social links on larger screens.

### Animated SVG Element (from [`src/_assets/stylesheets/app.css`](src/_assets/stylesheets/app.css:1))
*   **Wrapper (`.svg-wrapper`)**: Fixed width and height, centered.
*   **Shape (`.shape`)**:
    *   Fill: `transparent`.
    *   Stroke: `#19f6e8`.
    *   Stroke Width: `8px` (animates to `2px`).
    *   Animation: `stroke-dasharray` and `stroke-dashoffset` animate on hover (`@keyframes draw`).
*   **Text (`.text`)**:
    *   Font: "Roboto Condensed", `22px`.
    *   Color: `#fff`.
    *   Positioned over the SVG.