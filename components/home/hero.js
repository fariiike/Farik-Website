export default function Hero() {
  return `
<section id="hero" 
  class="relative w-full flex flex-col md:flex-row 
         items-center md:items-center justify-center md:justify-between 
         text-center md:text-left text-white px-6 md:px-20 
         pt-16 md:pt-8 pb-8 md:pb-0 
         min-h-[80vh] md:min-h-[68vh] 
         overflow-hidden">

  <!-- زر القائمة للهاتف -->
  <button 
    id="menu-btn"
    class="absolute top-5 left-5 md:hidden bg-gradient-to-r from-blue-600 to-cyan-400
           text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50"
    aria-label="Toggle menu">
    ☰
  </button>

  <!-- صورة الملف الشخصي -->
  <div class="flex-shrink-0 mb-8 md:mb-0 md:mr-12">
    <img 
      src="./assets/projects/1.png" 
      alt="Farik Profile"
      class="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover 
             shadow-[0_0_40px_rgba(0,200,255,0.5)] border-4 border-cyan-400 
             transition-transform duration-500 hover:scale-105"
    />
  </div>

  <!-- النصوص -->
  <div class="max-w-xl space-y-5">
    <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
      Hi, I'm <span class="text-cyan-400">Fariiik</span>
    </h1>
    <p class="text-gray-300 text-lg md:text-xl leading-relaxed">
      Full-Stack Web Developer & Content Creator crafting modern, high-performance digital experiences.
    </p>

    <!-- أيقونات التواصل -->
    <div class="flex space-x-6 justify-center md:justify-start mt-4">
      <a href="https://github.com/fariiike" target="_blank" class="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300">
        <i class="fab fa-github text-3xl"></i>
      </a>
      <a href="https://linkedin.com/in/fariiike" target="_blank" class="text-gray-300 hover:text-[#0A66C2] hover:scale-110 transition-all duration-300">
        <i class="fab fa-linkedin text-3xl"></i>
      </a>
      <a href="https://twitter.com/fariiike" target="_blank" class="text-gray-300 hover:text-[#1DA1F2] hover:scale-110 transition-all duration-300">
        <i class="fab fa-twitter text-3xl"></i>
      </a>
      <a href="https://youtube.com/@fariiiq" target="_blank" class="text-gray-300 hover:text-[#FF0000] hover:scale-110 transition-all duration-300">
        <i class="fab fa-youtube text-3xl"></i>
      </a>
    </div>
  </div>
</section>
  `;
}
