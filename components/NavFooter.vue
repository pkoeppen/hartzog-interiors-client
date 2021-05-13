<template>
  <footer class="flex flex-col items-center pt-32 pb-16">
    <div class="mb-10"><img src="/logo-glyph-only.png" class="w-28" /></div>
    <div
      class="text-gray-600 text-sm font-display uppercase tracking-header-sm mb-3"
    >
      Find us on social media
    </div>
    <div class="flex items-center space-x-4 mb-24">
      <a
        href="https://facebook.com/hartzoginteriors"
        target="_blank"
        class="flex-shrink-0 w-6 h-6 bg-white border border-black hover:bg-black hover:text-white text-black transform rotate-45 rounded flex items-center justify-center transition-all"
      >
        <i class="fab fa-facebook-f transform -rotate-45" />
      </a>
      <a
        href="https://instagram.com/hartzoginteriors"
        target="_blank"
        class="flex-shrink-0 w-6 h-6 bg-white border border-black hover:bg-black hover:text-white text-black transform rotate-45 rounded flex items-center justify-center transition-all"
      >
        <i class="fab fa-instagram transform -rotate-45" />
      </a>
    </div>
    <div
      class="uppercase font-display text-gray-500 text-xs tracking-header-md mb-3"
    >
      &copy; Hartzog Interiors {{ new Date().getUTCFullYear() }}
    </div>
    <div class="text-gray-500 text-xs">
      Made with <i class="fas fa-heart" /> in Indiana.
    </div>
  </footer>
</template>
