export default function Stats() {
  const stats = [
    { label: "Content Videos", value: 61 },    
    { label: "Projects Completed", value: 7 },
    { label: "Happy Clients", value: 5 },
  ];

  const skills = [
    { name: "JavaScript / Vanilla JS", level: 90 },
    { name: "React / Next.js", level: 85 },
    { name: "Node.js + Express / Python ...", level: 80 },
    { name: "MongoDB / MYSQL + PHP", level: 75 },
    { name: "UI/UX Design", level: 70 },
  ];

  return `
<section id="stats-skills" 
  class="relative w-full bg-transparent 
         mt-6 md:mt-10 pb-16 px-6 md:px-20 text-white z-10">

  <div class="max-w-6xl mx-auto flex flex-col md:flex-row 
              md:items-start items-center 
              md:space-x-10 space-y-12 md:space-y-0">

    <!-- Stats Section -->
<div class="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">

      ${stats.map(s => `
        <div class="relative bg-gradient-to-br from-blue-800/60 via-cyan-700/40 to-blue-900/60
                    backdrop-blur-md border border-cyan-400/20 p-6 rounded-2xl 
                    shadow-[0_0_25px_rgba(0,255,255,0.2)]
                    hover:shadow-[0_0_35px_rgba(0,255,255,0.4)] 
                    transition-all duration-500 text-center w-full">
          <span class="text-5xl font-extrabold text-cyan-400 counter 
                       drop-shadow-[0_0_10px_#22d3ee]" data-target="${s.value}">0</span>
          <span class="block mt-3 text-gray-300 text-base md:text-lg font-medium break-words text-center">${s.label}</span>
        </div>
      `).join("")}
    </div>

    <!-- Skills Section -->
    <div class="flex-1 w-full md:mt-0 mt-10">
      <h2 class="text-3xl font-bold text-cyan-400 mb-6 text-center md:text-left 
                 drop-shadow-[0_0_10px_#22d3ee]">Skills</h2>
      <div class="space-y-6">
        ${skills.map(skill => `
          <div class="w-full">
            <div class="flex justify-between text-gray-300 mb-1 text-sm md:text-base">
              <span>${skill.name}</span>
              <span>${skill.level}%</span>
            </div>
            <div class="w-full h-3 bg-gray-700/60 rounded-full overflow-hidden relative">
              <div class="absolute top-0 left-0 h-3 
                          bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-800 
                          rounded-full shadow-[0_0_20px_rgba(0,255,255,0.5)] 
                          animate-bar" 
                          style="width:0%" data-width="${skill.level}%"></div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>

  </div>

  <style>
    @keyframes fillBar {
      from { width: 0; }
      to { width: var(--target-width); }
    }
    #stats-skills {
      transition: all 0.4s ease-in-out;
    }
    #stats-skills:hover {
      background: radial-gradient(circle at 30% 20%, rgba(0,255,255,0.05), transparent 60%);
    }
    @media (max-width: 900px) {
      #stats-skills .grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1.5rem;
      }
    }
    @media (max-width: 640px) {
      #stats-skills .grid {
        grid-template-columns: 1fr;
      }
    }
      @media (max-width: 1285px) and (min-width: 700px) {
  #stats-skills .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  }
  #stats-skills .counter {
    font-size: 2.5rem !important;
  }
  #stats-skills span.block {
    font-size: 0.95rem !important;
    white-space: normal !important;
  }
}

  </style>
</section>
  `;
}

//  Animation logic 
export function animateStats() {
  const counters = document.querySelectorAll("#stats-skills .counter");
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const increment = target / 60;
    const update = () => {
      count += increment;
      if (count < target) {
        counter.innerText = Math.floor(count);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });

  // تعبئة مبيانات المهارات
  const bars = document.querySelectorAll("#stats-skills [data-width]");
  bars.forEach(bar => {
    const width = bar.getAttribute("data-width");
    bar.style.setProperty("--target-width", width);
    setTimeout(() => {
      bar.style.animation = "fillBar 1.5s ease-out forwards";
    }, 300);
  });
}
