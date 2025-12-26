// imports (تأكد من المسارات صحيحة)
import Navbar from './components/navbar.js';
import Background from './components/home/background.js';
import Hero from './components/home/hero.js';
import Stats, { animateStats } from './components/home/stats.js';
import Projects, { initProjectStats } from './components/projects/projects.js';
import Services from './components/services/services.js';
import About from './components/about/about.js';
import Contact, { initContact }  from './components/contact/contact.js';
// root
const app = document.getElementById('app');

// render navbar + main shell
app.innerHTML = `
 
${Navbar()}
  <main id="main-content" class="md:ml-64 transition-all duration-500"></main>
`;
const mainContent = document.getElementById('main-content');
function renderSection(name) {
  switch (name) {
    case 'home':
      mainContent.innerHTML = `
        <div class="relative w-full min-h-screen overflow-hidden">
          ${Background()}
          <div class="relative z-10">
            ${Hero()}
            ${Stats()}
          </div>
        </div>
      `;  
      animateStats();
      setupMenuButton();
      break;

function setupMenuButton() {
  setTimeout(() => {
    const navbar = document.getElementById("navbar");
    const menuBtn = document.getElementById("menu-btn");

    if (!menuBtn || !navbar) return;

    menuBtn.onclick = () => {
      navbar.classList.remove("-translate-x-full");
      menuBtn.classList.add("hidden");
    };

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth < 768) {
          navbar.classList.add("-translate-x-full");
          menuBtn.classList.remove("hidden");
        }
      });
    });
  }, 100);
}
    // باقي الأقسام:
    case 'projects':
      mainContent.innerHTML = `
        <div class="relative w-full min-h-screen overflow-hidden">
          ${Background()}
          <div class="relative z-10">
          ${Projects()}
          </div>
        </div>      
      `;
  setTimeout(() => {
    initProjectStats();
  }, 0);
  setupMenuButton();
      break;
    case 'services':
            mainContent.innerHTML = `
        <div class="relative w-full min-h-screen overflow-hidden">
          ${Background()}
          <div class="relative z-10">
          ${Services()}
          </div>
        </div>      
      `;
      setupMenuButton();
      break;
    case 'about':
            mainContent.innerHTML = `
        <div class="relative w-full min-h-screen overflow-hidden">
          ${Background()}
          <div class="relative z-10">
          ${About()}
          </div>
        </div>      
      `;
      setupMenuButton();
      break;
    case 'contact':
            mainContent.innerHTML = `
        <div class="relative w-full min-h-screen overflow-hidden">
          ${Background()}
          <div class="relative z-10">
          ${Contact()}
          </div>
        </div>      
      `;
      initContact({ toEmail: 'farik7sa7402@gmail.com', subjectPrefix: 'Contact Form' });
      setupMenuButton();
      break;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
// دالة مساعدة لقراءة اسم الصفحة من عنصر الرابط
function getPageFromElement(el) {
  if (!el) return null;
  // data-page 
  const dp = el.getAttribute('data-page');
  if (dp) return dp;
  // href#xxx
  const href = el.getAttribute('href');
  if (href && href.startsWith('#') && href.length > 1) return href.replace('#','');
  // href="#" فقط -> null
  return null;
}
function initialLoad() {
  if (!location.hash) {
    history.replaceState(null, '', '#home');
  }
  const hash = location.hash.replace('#', '') || 'home';
  renderSection(hash);
}
initialLoad();
document.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (!link) return;
  const isExternal = link.target === '_blank' || (link.href && link.href.startsWith('http') && !link.href.includes(location.hostname));
  if (isExternal) return;

  const page = getPageFromElement(link);
  if (page) {
    e.preventDefault();
    renderSection(page);
    history.replaceState(null, '', `#${page}`);
   const navbar = document.getElementById('navbar');
    if (navbar && !navbar.classList.contains('-translate-x-full')) {
      navbar.classList.add('-translate-x-full');
    }
  }
});
window.addEventListener('hashchange', () => {
  const hash = location.hash.replace('#','') || 'home';
  renderSection(hash);
});
document.addEventListener('click', e => {
  const link = e.target.closest('a.nav-link');
  if(!link) return;
  const target = link.getAttribute('href').replace('#','');
  if(target === 'home') animateSkills();
});
