import ProjectCard from './card.js';
import ProjectStats from './stats.js';

export default function Projects() {
  const projects = [
    {
      title: "A simple portfolio + PWA ",
      image: "./assets/projects/portfolio.png",
      description: "A beautiful one-page portfolio suitable for displaying a personal profile, skills, completed projects, and a contact section ::))) + an Arabic section, ... + the possibility of installing it as a PWA application",
      link: "https://fariiik.netlify.app/Portfolio#en",
      stats: [
        { name: "HTML", level: 70 },
        { name: "CSS", level: 60 },
        { name: "JavaScript", level: 80 },
      ]
    },
    {
      title: "A website for a startup",
      image: "./assets/projects/taswik.png",
      description: "This is a simple website that displays the work of a virtual company and contains a home page + pages about us, ; blog; services; + contact page / and an admin page protected by Google login ouath. ",
      link: "https://fariiik.infinityfreeapp.com",
      stats: [
        { name: "HTML+CSS+JS", level: 50 },
        { name: "PHP", level: 60 },
        { name: "MYSQL", level: 30 },
      ]
    },
  ];

  const html = `
 <section id="projects" class="relative z-10 w-full min-h-screen bg-transparent px-6 md:px-20 pt-10 md:pt-16 pb-20 text-white">
               <!-- زر القائمة للهاتف -->
      <button 
        id="menu-btn"
        class="absolute top-5 left-5 md:hidden bg-gradient-to-r from-blue-600 to-cyan-400
               text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50"
        aria-label="Toggle menu">
        ☰
      </button>      
 <h2 class="text-4xl font-bold text-cyan-400 text-center mb-12 drop-shadow-[0_0_10px_#22d3ee]">Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        ${projects.map(p => ProjectCard(p, ProjectStats(p.stats))).join('')}
      </div>
    </section>
  `;

  return html;
}

export function initProjectStats() {
  const bars = document.querySelectorAll('.stat-bar');
  if (!bars || bars.length === 0) return;

  // IntersectionObserver to animate when visible
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const container = entry.target;
        const innerBars = container.querySelectorAll('.stat-bar');
        innerBars.forEach(bar => {
          const w = bar.getAttribute('data-width') || '0';
          // animate using Web Animations API for smoothness
          bar.animate(
            [{ width: '0%' }, { width: w + '%' }],
            { duration: 1200, easing: 'cubic-bezier(.22,.9,.22,1)', fill: 'forwards' }
          );
        });
        obs.unobserve(container); // animate once
      }
    });
  }, { threshold: 0.2 });

  // we want to observe each card (so animation runs when card visible)
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => observer.observe(card));
}
