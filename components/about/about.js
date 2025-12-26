export default function About() {
  return `
    <section id="about" class="relative z-10 w-full min-h-screen px-6 md:px-20 pt-16 md:pt-20 pb-20 text-white flex flex-col items-center justify-center">
      
                  <!-- زر القائمة للهاتف -->
      <button 
        id="menu-btn"
        class="absolute top-5 left-5 md:hidden bg-gradient-to-r from-blue-600 to-cyan-400
               text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50"
        aria-label="Toggle menu">
        ☰
      </button>  
      
      <!-- Icon + Title -->
      <div class="text-center mb-12">
        <div class="text-cyan-400 text-6xl mb-4 drop-shadow-[0_0_15px_#22d3ee]">
          <i class="fas fa-user-astronaut"></i>
        </div>
        <h2 class="text-4xl font-bold text-cyan-400 mb-2 tracking-wide drop-shadow-[0_0_10px_#22d3ee]">About Me</h2>
        <p class="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Passionate Full-Stack Web Developer & Content Creator dedicated to crafting digital experiences that combine design, technology, and creativity.
        </p>
      </div>

      <!-- Content Box -->
      <div class="bg-gradient-to-br from-blue-900/60 via-cyan-800/40 to-blue-900/60 
                  border border-cyan-400/10 backdrop-blur-lg rounded-3xl shadow-lg
                  p-8 md:p-12 max-w-5xl mx-auto text-gray-200 space-y-8">
        
        <!-- Section 1 -->
        <div>
          <h3 class="text-2xl font-semibold text-cyan-300 mb-3">
            <i class="fas fa-code mr-2 text-cyan-400"></i> Who I Am
          </h3>
          <p class="leading-relaxed text-gray-300">
            I'm <span class="text-cyan-400 font-medium">Farik</span>, a passionate developer who thrives on transforming ideas into modern, scalable web applications.
            My journey in technology is fueled by creativity, curiosity, and a constant desire to learn new things every day.
          </p>
        </div>

        <!-- Section 2 -->
        <div>
          <h3 class="text-2xl font-semibold text-cyan-300 mb-3">
            <i class="fas fa-lightbulb mr-2 text-cyan-400"></i> My Mission
          </h3>
          <p class="leading-relaxed text-gray-300">
            My mission is to deliver exceptional user experiences by blending elegant interfaces with powerful backend systems. 
            I believe that every line of code should serve both performance and purpose.
          </p>
        </div>

        <!-- Section 3 -->
        <div>
          <h3 class="text-2xl font-semibold text-cyan-300 mb-3">
            <i class="fas fa-rocket mr-2 text-cyan-400"></i> What I Do
          </h3>
          <ul class="list-disc list-inside space-y-2 text-gray-300">
            <li>Design and build full-stack web applications.</li>
            <li>Develop responsive and high-performance front-end experiences.</li>
            <li>Integrate APIs and cloud services for scalable solutions.</li>
            <li>Create engaging content and tutorials for developers online.</li>
          </ul>
        </div>

      </div>
    </section>
  `;
}
