/// <reference types="vite/client" />

// Declarations for CSS and SCSS modules
declare module '*.css' {
  const cssContent: { [className: string]: string };
  export default cssContent;
}

declare module '*.scss' {
  const scssContent: { [className: string]: string };
  export default scssContent;
}