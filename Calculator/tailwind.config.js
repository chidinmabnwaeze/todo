import tailwindcss from "@tailwindcss/postcss"

// tailwind.config.js
module.exports = {
  theme: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss'),
    tailwindcss()
  ],
}
