export default function Contact() {
  return `
    <section id="contact" class="relative z-10 w-full min-h-screen px-6 md:px-20 py-16 text-white">
               <!-- زر القائمة للهاتف -->
      <button 
        id="menu-btn"
        class="absolute top-5 left-5 md:hidden bg-gradient-to-r from-blue-600 to-cyan-400
               text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50"
        aria-label="Toggle menu">
        ☰
      </button> 

      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        <!-- Left: Form -->
        <div class="bg-gradient-to-br from-blue-900/50 via-cyan-800/30 to-blue-900/50 
                    border border-cyan-400/10 backdrop-blur-md rounded-2xl p-8 shadow-lg">
          <div class="flex items-center gap-4 mb-6">
            <div class="text-4xl text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.3)]">
              <i class="fas fa-envelope-open-text"></i>
            </div>
            <div>
              <h2 class="text-2xl font-bold">Contact Me</h2>
              <p class="text-gray-300 text-sm">Send me a message — I reply fast. Or use one of the quick links on the right.</p>
            </div>
          </div>

          <form id="contact-form" class="space-y-4">
            <div>
              <label for="c-name" class="text-sm text-gray-200">Your name</label>
              <input id="c-name" name="name" type="text" required
                     class="w-full mt-1 px-4 py-3 rounded-lg bg-gray-800/60 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" 
                     placeholder="Farik"/>
            </div>

            <div>
              <label for="c-phone" class="text-sm text-gray-200">WhatsApp number (optional)</label>
              <input id="c-phone" name="phone" type="tel"
                     class="w-full mt-1 px-4 py-3 rounded-lg bg-gray-800/60 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" 
                     placeholder="+() ........."/>
            </div>

            <div>
              <label for="c-message" class="text-sm text-gray-200">Message</label>
              <textarea id="c-message" name="message" rows="6" required
                        class="w-full mt-1 px-4 py-3 rounded-lg bg-gray-800/60 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        placeholder="Write your message..."></textarea>
            </div>

            <div class="flex items-center gap-3">
              <button id="contact-send" type="submit"
                      class="bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 rounded-lg text-white font-semibold hover:shadow-[0_0_20px_rgba(34,211,238,0.25)] transition">
                Send Message
              </button>

              <button id="contact-clear" type="button"
                      class="px-4 py-2 rounded-lg border border-gray-700 text-gray-200 hover:bg-gray-800 transition">
                Clear
              </button>

              <p id="contact-feedback" class="text-sm text-gray-300 ml-3 hidden"></p>
            </div>
          </form>
        </div>

        <!-- Right: Quick contacts -->
        <aside class="flex flex-col gap-6">
          <div class="bg-gradient-to-br from-blue-900/40 to-cyan-900/20 border border-cyan-400/10 backdrop-blur-md rounded-2xl p-6 shadow-md">
            <h3 class="text-cyan-300 font-semibold mb-3">Quick contact</h3>

            <div class="space-y-3 text-gray-300">
              <div>
                <div class="text-sm text-gray-400">Email</div>
                <a id="quick-mail" href="mailto:fariiikcontact@gmail.com" class="text-white font-medium break-all">farik7sa7402@gmail.com</a>
              </div>

              <div>
                <div class="text-sm text-gray-400">WhatsApp</div>
                <a id="quick-wa" href="https://wa.me/212697559439" target="_blank" class="text-white font-medium">+212 697 559 439</a>
              </div>

              <div>
                <div class="text-sm text-gray-400">Instagram</div>
                <a id="quick-ig" href="https://instagram.com/fariiike" target="_blank" class="text-white font-medium">@fariiike</a>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-blue-800/30 to-blue-900/20 border border-cyan-400/10 backdrop-blur-md rounded-2xl p-6 shadow-md">
            <h3 class="text-cyan-300 font-semibold mb-3">Info</h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              Prefer email? Use the form. Want instant reply? Use WhatsApp. All messages land in my inbox.
            </p>
          </div>
        </aside>

      </div>
    </section>
  `;
}
export function initContact(opts = {}) {
  const config = {
    toEmail: opts.toEmail || 'fariiikcontact@gmail.com',
    subjectPrefix: opts.subjectPrefix || 'Website Contact',
    maxMailtoLength: opts.maxMailtoLength || 1900 
  };

  const form = document.getElementById('contact-form');
  if (!form) return;
  const nameEl = document.getElementById('c-name');
  const phoneEl = document.getElementById('c-phone');
  const messageEl = document.getElementById('c-message');
  const feedback = document.getElementById('contact-feedback');

  const clearBtn = document.getElementById('contact-clear');
  clearBtn?.addEventListener('click', () => {
    nameEl.value = '';
    phoneEl.value = '';
    messageEl.value = '';
    feedback.classList.add('hidden');
  });

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    feedback.classList.add('hidden');

    const name = (nameEl.value || '').trim();
    const phone = (phoneEl.value || '').trim();
    const message = (messageEl.value || '').trim();

    if (!name || !message) {
      feedback.textContent = 'Please enter your name and a message.';
      feedback.classList.remove('hidden');
      return;
    }
    const subject = `${config.subjectPrefix}: ${name}`;
    const bodyLines = [
      `Name: ${name}`,
      phone ? `WhatsApp: ${phone}` : '',
      '',
      `Message:`,
      message
    ].filter(Boolean).join('\n');
    const mailto = `mailto:${config.toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines)}`;
    if (mailto.length > config.maxMailtoLength) {
      feedback.textContent = 'Message too long for mail client. Please shorten your message.';
      feedback.classList.remove('hidden');
      return;
    }
    window.location.href = mailto;
  });
}
