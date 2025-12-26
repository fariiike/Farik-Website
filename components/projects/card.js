export default function ProjectCard(project, statsHTML) {
  return `
    <article class="project-card bg-gradient-to-br from-blue-900/50 via-cyan-800/30 to-blue-900/50
                border border-cyan-400/10 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-lg 
                hover:shadow-[0_0_40px_rgba(0,255,255,0.12)] transition-transform duration-400 transform hover:-translate-y-1">
      <img src="${project.image}" alt="${project.title}" 
           class="w-full h-48 md:h-56 object-cover rounded-lg mb-4">
      <h3 class="text-xl md:text-2xl font-bold text-cyan-300 mb-2">${project.title}</h3>
      <p class="text-gray-300 text-sm md:text-base mb-4">${project.description}</p>

      <div class="flex items-center justify-between">
        <a href="${project.link}" class="preview-btn inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:shadow-md transition">
          Preview
        </a>
      </div>

      <div class="mt-5">
        ${statsHTML}
      </div>
    </article>
  `;
}
