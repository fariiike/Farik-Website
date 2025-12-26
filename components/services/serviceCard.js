export default function ServiceCard(service) {
  return `
    <div class="service-card group bg-gradient-to-br from-blue-900/50 via-cyan-800/30 to-blue-900/50
                border border-cyan-400/10 rounded-2xl p-6 shadow-md backdrop-blur-md
                hover:shadow-[0_0_25px_rgba(0,255,255,0.2)] hover:-translate-y-2
                transition-all duration-500 flex flex-col justify-between">
      
      <div class="flex flex-col items-center text-center space-y-4">
        <div class="text-cyan-400 text-5xl mb-2 transition-transform duration-500 group-hover:scale-110">
          <i class="${service.icon}"></i>
        </div>
        <h3 class="text-xl font-bold text-cyan-300">${service.title}</h3>
        <p class="text-gray-300 text-sm leading-relaxed">${service.description}</p>
      </div>

      <div class="mt-6 text-center">
        <a href="#contact" class="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-md transition-all">
          Contact Me
        </a>
      </div>
    </div>
  `;
}
