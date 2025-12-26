export default function ProjectStats(stats) {
  return `
    <div class="space-y-4 project-stats">
      ${stats.map(s => `
        <div>
          <div class="flex justify-between text-gray-300 mb-1">
            <span>${s.name}</span>
            <span>${s.level}%</span>
          </div>
          <div class="w-full h-2 bg-gray-700/60 rounded-full overflow-hidden relative">
            <div class="stat-bar absolute top-0 left-0 h-2 
                        bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 
                        rounded-full shadow-[0_0_15px_rgba(0,255,255,0.5)]"
                 data-width="${s.level}"
                 style="width: 0%;">
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}
