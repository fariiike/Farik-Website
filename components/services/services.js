import ServiceCard from './serviceCard.js';

export default function Services() {
  const services = [
    {
      title: "Web Development",
      icon: "fas fa-code",
      description: "Building responsive, high-performance websites with clean and modern UI/UX using the latest technologies.",
    },
    {
      title: "Backend & APIs",
      icon: "fas fa-server",
      description: "Designing and implementing powerful, secure, and scalable RESTful APIs and server-side logic.",
    },
    {
      title: "UI/UX Design",
      icon: "fas fa-pencil-ruler",
      description: "Creating intuitive and beautiful interfaces that enhance user engagement and conversion.",
    },
    {
      title: "SEO Optimization",
      icon: "fas fa-search",
      description: "Improving visibility and ranking of websites across major search engines through smart SEO strategies.",
    },
    {
      title: "Content Creation",
      icon: "fas fa-video",
      description: "Producing creative content for YouTube and social media with focus on storytelling and branding.",
    },
    {
      title: "Full Stack Solutions",
      icon: "fas fa-laptop-code",
      description: "Delivering complete end-to-end solutions, from frontend design to backend deployment.",
    },
  ];

  return `
    <section id="services" class="relative z-10 w-full min-h-screen bg-transparent px-6 md:px-20 pt-16 md:pt-20 pb-20 text-white">
              <!-- زر القائمة للهاتف -->
      <button 
        id="menu-btn"
        class="absolute top-5 left-5 md:hidden bg-gradient-to-r from-blue-600 to-cyan-400
               text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50"
        aria-label="Toggle menu">
        ☰
      </button>  
    <h2 class="text-4xl font-bold text-cyan-400 text-center mb-12 drop-shadow-[0_0_10px_#22d3ee]">Services</h2>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        ${services.map(service => ServiceCard(service)).join('')}
      </div>
    </section>
  `;
}
