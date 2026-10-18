/// <reference types="vite/client" />

// Single-URL vite-imagetools imports, e.g. `photo.jpg?w=1200&format=webp`.
declare module '*format=webp' {
  const src: string
  export default src
}
