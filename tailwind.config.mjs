/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // "Field chart" palette: a light, sage-mist ground instead of a dark
        // cockpit. Evergreen is the signature accent (trust, continuity,
        // the eldercare anchor vertical) rather than an alert-adjacent amber.
        // Deliberately NOT the warm-cream/terracotta combo either; the base
        // is cool and green-grey, not beige.
        mist: {
          50: '#F3F6EF',
          100: '#E9EFE2',
          300: '#D2DCC6',
          500: '#AAB79C',
        },
        ink: {
          900: '#1B2A24',
          700: '#2C3E36',
          500: '#56685E',
        },
        evergreen: {
          400: '#3D9C79',
          500: '#278563',
          600: '#1F6F52',
        },
        // Domain accent family, one hue per HelTru product line.
        copper: { 400: '#D68B5E', 500: '#C16B3E', 600: '#A8532E' },   // Workforce
        plum: { 400: '#A97A94', 500: '#8A5A73', 600: '#6B3F58' },     // Guardian
        steel: { 400: '#6EA0B7', 500: '#497F98', 600: '#35637A' },    // Performance
        rose: { 400: '#D494A4', 500: '#C17186', 600: '#A9556B' },     // Kids
        slate2: { 400: '#8494A2', 500: '#5E6E7D', 600: '#465361' },   // Assets
        fault: { 400: '#D06B54', 500: '#B84B34', 600: '#9C3B27' },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Work Sans"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      backgroundImage: {
        // A soft concentric-ripple watermark (the product's own signal
        // metaphor) instead of a hard engineering grid.
        ripple:
          'radial-gradient(circle at center, transparent 0, transparent 58px, rgba(31,111,82,0.07) 59px, rgba(31,111,82,0.07) 60px, transparent 61px, transparent 108px, rgba(31,111,82,0.05) 109px, rgba(31,111,82,0.05) 110px, transparent 111px)',
      },
    },
  },
  plugins: [],
};
