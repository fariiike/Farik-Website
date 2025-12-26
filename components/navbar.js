export default function Navbar() {
  const navbarHTML = `
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet">

<!-- Sidebar -->
<nav id="navbar"
  class="fixed top-0 left-0 h-screen min-h-full w-64 
         bg-gradient-to-b from-gray-900 via-gray-800 to-gray-950 
         text-white flex flex-col justify-between shadow-2xl z-50
         transition-transform duration-500 transform -translate-x-full md:translate-x-0 font-poppins">

      <!-- Scrollable container -->
      <div class="flex flex-col h-full overflow-hidden">

        <div class="flex-1 overflow-y-auto p-6 custom-scrollbar">

          <!-- Logo -->
          <div class="text-center mb-6 flex-shrink-0 md:mt-4">
            <h1 class="text-4xl font-extrabold tracking-wide text-gradient bg-clip-text text-transparent" style="color:white;background: linear-gradient(45deg, #4ade80, #3b82f6);">
              Farik
            </h1>
            <p class="text-gray-400 text-sm mt-1">Full Stack Developer</p>
          </div>

<!-- Links -->
<ul class="flex flex-col space-y-3">
  ${[
    "Home", "Projects", "Services", "About", "Contact",
  ]
    .map(
      (item) => `
        <li>
          <a href=""
             data-page="${item.toLowerCase()}"
             class="block py-3 px-6 rounded-lg text-lg font-semibold text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:text-white hover:shadow-lg transition-all duration-300 nav-link">
             ${item}
          </a>
        </li>
      `
    )
    .join("")}
</ul>


          <!-- Profile + Socials -->
          <div class="mt-6 text-center flex-shrink-0">
            <img src="assets/favicon.png" alt="Farik" 
                 class="w-20 h-20 mx-auto rounded-full border-4 border-blue-500 shadow-lg mb-4">
            <div class="flex justify-center space-x-4 text-xl">
              <a href="https://youtube.com/@fariiiq" target="_blank" class="hover:text-red-500 transition-colors"><i class="fab fa-youtube"></i></a>
              <a href="https://x.com/Farik_AS7735377" target="_blank" class="hover:text-sky-400 transition-colors"><i class="fab fa-twitter"></i></a>
              <a href="https://github.com/fariksa731" target="_blank" class="hover:text-gray-300 transition-colors"><i class="fab fa-github"></i></a>
            </div>
          </div>
          <p class="text-gray-400 text-sm mt-1">All rights reserved / Farik 2025 ©</p>

        </div>
      </div>
    </nav>

        <!-- Mobile Buttons (غير fixed) -->
    <!--div class="md:hidden ">
      <button id="menu-btn" class="bg-blue-600 text-white p-3 rounded-xl shadow hover:bg-blue-700 transition active:scale-95">
        <i class="fas fa-bars text-2xl"></i>
      </button>
    </div-->

    <!-- Custom Scrollbar CSS -->
    <style>
      .custom-scrollbar::-webkit-scrollbar { width: 6px; }
      .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
      .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(59, 130, 246, 0.7); border-radius: 10px; }
      .custom-scrollbar { scrollbar-width: thin; scrollbar-color: rgba(59, 130, 246, 0.7) transparent; }
      .text-gradient { background-clip: text; -webkit-background-clip: text; color: transparent; }
    </style>
  `;
 setTimeout(() => {
    const navbar = document.getElementById("navbar");
    const menuBtn = document.getElementById("menu-btn");

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
  }, 50);
  return navbarHTML;
  }

