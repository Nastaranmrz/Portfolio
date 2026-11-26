// Shared helpers: footer, header shadow, reveal animation.
const ARROW = '<svg aria-hidden="true"><use href="#arrow"/></svg>';
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const img = (id, kind) => `images/projects/${id}-${kind}.jpg`;
const projectUrl = id => `project.html?id=${encodeURIComponent(id)}`;

// Header — same layout as the Framer nav: "NM | Work About" on the left, social icons on the right
const ICONS = {
  telegram: '<path d="M21.5 4.5 2.5 11.6l6.6 2.3m12.4-9.4-3 15-7.6-5.6m10.6-9.4L9.1 13.9m0 0 .6 5.6 3-3.6"/>',
  dribbble: '<circle cx="12" cy="12" r="9"/><path d="M3.7 9.6c4.7.4 10-1.1 13.5-4.6M6.3 18.9c3-4.7 8-6.6 14.5-4.8M8.6 3.7c3.6 4.6 6.2 10.3 7.1 16.7"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10.5V16M8 7.6v.1M11.5 16v-5.5m0 2.4c0-1.5 1-2.6 2.3-2.6 1.4 0 2.2.9 2.2 2.6V16"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 7 8.5 6 8.5-6"/>',
};
const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;

function renderNav() {
  const c = window.CONTACT;
  const home = location.pathname.endsWith("project.html") ? "index.html" : "";
  document.getElementById("top").innerHTML = `
    <nav class="wrap nav" aria-label="Main">
      <div class="nav-left">
        <a href="index.html" class="logo">NM</a>
        <span class="nav-div" aria-hidden="true">|</span>
        <a href="${home}#work">Work</a>
        <a href="${home}#about">About</a>
      </div>
      <div class="nav-social">
        ${c.telegram ? `<a href="${esc(c.telegram)}" target="_blank" rel="noopener" aria-label="Telegram">${icon("telegram")}</a>` : ""}
        ${c.dribbble ? `<a href="${esc(c.dribbble)}" target="_blank" rel="noopener" aria-label="Dribbble">${icon("dribbble")}</a>` : ""}
        ${c.email ? `<a href="mailto:${esc(c.email)}" aria-label="Email">${icon("mail")}</a>` : ""}
      </div>
    </nav>`;
}

function renderFooter() {
  const c = window.CONTACT;
  const home = location.pathname.endsWith("project.html") ? "index.html" : "";
  const socials = [
    c.telegram && ["Telegram", c.telegram, "telegram"],
    c.dribbble && ["Dribbble", c.dribbble, "dribbble"],
    c.linkedin && ["LinkedIn", c.linkedin, "linkedin"],
    c.email && ["Email", "mailto:" + c.email, "mail"],
  ].filter(Boolean);
  document.getElementById("contact").innerHTML = `
    <div class="wrap">
      <!-- Call to action card -->
      <div class="cta-card reveal">
        <span class="cta-status"><span class="dot"></span>Available for new opportunities</span>
        <p class="big">Have a project or a role in mind? <span class="accent">Let’s talk.</span></p>
        <div class="cta-actions">
          <a class="btn btn-primary" href="mailto:${esc(c.email)}">${esc(c.email)} ${ARROW}</a>
          <button type="button" class="btn btn-secondary copy-email" data-email="${esc(c.email)}">Copy email</button>
        </div>
      </div>

      <!-- Link columns -->
      <div class="foot-grid">
        <div class="foot-brand">
          <a href="${home || "index.html"}" class="logo">NM</a>
          <p class="small">UI/UX designer making complex systems simple. Based in Karaj, Iran.</p>
        </div>
        <div>
          <span class="foot-title">Pages</span>
          <a href="${home}#work">Work</a>
          <a href="${home}#about">About</a>
          ${c.cv ? `<a href="${esc(c.cv)}" target="_blank" rel="noopener">CV (PDF)</a>` : ""}
        </div>
        <div>
          <span class="foot-title">Connect</span>
          ${socials.map(([label, url, ic]) => `<a href="${esc(url)}" ${url.startsWith("mailto:") ? "" : 'target="_blank" rel="noopener"'}>${icon(ic)}${label}</a>`).join("")}
        </div>
      </div>

      <div class="bottom small">
        <span>© ${new Date().getFullYear()} Nastaran Mirzaei. All rights reserved.</span>
        <a class="link" href="#top">Back to top ↑</a>
      </div>
    </div>`;

  // "Copy email" button with a short confirmation
  const btn = document.querySelector(".copy-email");
  btn?.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(btn.dataset.email); btn.textContent = "Copied ✓"; }
    catch { btn.textContent = btn.dataset.email; }
    setTimeout(() => { btn.textContent = "Copy email"; }, 1800);
  });
}

function initPage() {
  renderNav();
  renderFooter();
  const header = document.querySelector("header");
  addEventListener("scroll", () => header.classList.toggle("scrolled", scrollY > 8), { passive: true });
  const els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0, rootMargin: "0px 0px -60px 0px" }); // threshold 0 so very tall images (e.g. Mehrino) still appear
    els.forEach(el => io.observe(el));
  } else els.forEach(el => el.classList.add("in"));
  drawPlan(document.querySelector(".hero"));
  drawPlan(document.querySelector(".cs-hero"), { seed: 29 });
  drawPlan(document.querySelector(".cta-card"), { fit: true, seed: 5 });
}

// ---- "Site plan" backdrop: a faint street-and-block map (my urban-design background).
// On the home hero an orange route draws through the streets and stops at the avatar (the one load animation).
function drawPlan(host, { route = false, target = null, fit = false, seed = 11 } = {}) {
  if (!host) return;
  const layer = document.createElement("div");
  layer.className = "plan" + (fit ? " fit" : "");
  layer.setAttribute("aria-hidden", "true");
  host.prepend(layer);
  const NS = "http://www.w3.org/2000/svg";
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const render = animate => {
    let s = seed; const rnd = (a, b) => { s = (s * 16807) % 2147483647; return a + (s / 2147483647) * (b - a); };
    const W = layer.clientWidth, H = layer.clientHeight, ST = 14;
    // street centre lines
    const vx = [], hy = [];
    for (let x = -rnd(20, 80); x < W + 200; x += rnd(90, 190)) vx.push(x);
    for (let y = -rnd(10, 50); y < H + 120; y += rnd(60, 120)) hy.push(y);
    let blocks = "";
    for (let i = 0; i < vx.length - 1; i++) for (let j = 0; j < hy.length - 1; j++) {
      const x = vx[i] + ST / 2, y = hy[j] + ST / 2, w = vx[i + 1] - vx[i] - ST, h = hy[j + 1] - hy[j] - ST;
      const r = rnd(0, 1);
      if (r < 0.06) { blocks += `<rect class="park" x="${x}" y="${y}" width="${w}" height="${h}" rx="10"/>`; continue; }
      if (r < 0.4 && w > 90) { const k = rnd(0.35, 0.65) * w; blocks += `<rect x="${x}" y="${y}" width="${k - 4}" height="${h}" rx="6"/><rect x="${x + k + 4}" y="${y}" width="${w - k - 4}" height="${h}" rx="6"/>`; continue; }
      blocks += `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6"/>`;
    }
    let html = `<svg class="plan-blocks" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${blocks}</svg>`;

    let pts = null;
    if (route && target) {
      const L = layer.getBoundingClientRect(), T = target.getBoundingClientRect();
      const tx = T.left - L.left, ty = T.top - L.top + T.height / 2;
      const near = (arr, v) => arr.reduce((a, b) => Math.abs(b - v) < Math.abs(a - v) ? b : a);
      const left = vx.filter(x => x > 40 && x < tx - 60);
      if (left.length >= 2) {
        const va = near(left, Math.min(W * 0.16, tx - 200)), vb = Math.max(...left.filter(x => x > va + 40).concat(va + 40));
        const h1 = near(hy.filter(y => y > ty + 120 && y < H - 40), H * 0.72) || H * 0.7, h2 = near(hy, ty - 40);
        pts = [[0, h1], [va, h1], [va, h2], [vb, h2], [vb, ty], [tx - 10, ty]];
        html += `<svg class="plan-route" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><polyline points="${pts.map(p => p.join(",")).join(" ")}"/><circle class="pin" cx="${tx - 10}" cy="${ty}" r="5"/></svg>`;
      }
    }
    layer.innerHTML = html;
    const line = layer.querySelector(".plan-route polyline");
    if (line) {
      const len = line.getTotalLength();
      line.style.strokeDasharray = len;
      if (animate && !reduce) {
        line.style.strokeDashoffset = len;
        requestAnimationFrame(() => requestAnimationFrame(() => { line.style.strokeDashoffset = 0; layer.classList.add("go"); }));
      } else { line.style.strokeDashoffset = 0; layer.classList.add("go", "now"); }
    }
  };
  const start = () => render(true);
  document.readyState === "complete" ? start() : addEventListener("load", start, { once: true });
  let t; addEventListener("resize", () => { clearTimeout(t); t = setTimeout(() => render(false), 150); });
}
