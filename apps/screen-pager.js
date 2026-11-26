/* Screen pager — shared by the live prototypes.
   When the side panel is hidden (phones / small tablets) it replaces the "Screens" pill with a small bar:
     ‹  Group · Screen name  3/9  ›
   - the arrows step through the same list as the side panel
   - tapping the name opens the full screen list (the existing bottom sheet)
   - swiping left/right works ON THE BAR ONLY, so it never fights with swipes inside the prototype
     (carousels, onboarding, the sideways pan of the desktop designs)
   It reads the panel's own nav buttons and their "on" class, so every prototype keeps its own routing. */
(() => {
  const panel = document.getElementById("panel"), nav = document.getElementById("screenNav"), sheet = document.getElementById("sheet");
  if (!panel || !nav || !sheet) return;

  const css = `
.menu-fab{display:none!important}
.spgr{position:fixed;top:max(6px,env(safe-area-inset-top));left:50%;transform:translateX(-50%);z-index:85;display:none;align-items:center;gap:8px;
  direction:ltr;font:600 12px "Segoe UI",system-ui,sans-serif;color:#fff;touch-action:pan-y;user-select:none;-webkit-user-select:none}
.spgr.show{display:flex}
/* three separate glass pieces, so an arrow tap can never land on the name */
.spgr button{font:inherit;color:inherit;border:1px solid rgba(255,255,255,.1);background:rgba(22,23,26,.76);cursor:pointer;-webkit-tap-highlight-color:transparent;
  box-shadow:0 6px 18px rgba(0,0,0,.22);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);transition:background .15s,opacity .2s,transform .12s}
.spgr button:active{transform:scale(.94)}
.spgr .pg-arr{width:40px;height:40px;border-radius:50%;display:grid;place-items:center;flex:none}
.spgr .pg-arr:hover{background:rgba(44,46,52,.86)}
.spgr .pg-arr:disabled{opacity:.35;cursor:default;transform:none;background:rgba(22,23,26,.6)}
.spgr .pg-arr svg{width:16px;height:16px}
.spgr .pg-mid{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;width:min(58vw,220px);height:40px;padding:0 14px;border-radius:20px;overflow:hidden}
.spgr .pg-mid:hover{background:rgba(44,46,52,.86)}
.spgr .pg-top{display:flex;gap:4px;max-width:100%;font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:rgba(255,255,255,.55);line-height:1.2}
.spgr .pg-cat{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.spgr .pg-n{flex:none;font-variant-numeric:tabular-nums;letter-spacing:0}
.spgr .pg-name{max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:13px;line-height:1.25}
.spgr .pg-txt{display:contents}
.spgr .pg-mid.in-l .pg-name,.spgr .pg-mid.in-l .pg-cat{animation:pgInL .28s cubic-bezier(.22,1,.36,1)}
.spgr .pg-mid.in-r .pg-name,.spgr .pg-mid.in-r .pg-cat{animation:pgInR .28s cubic-bezier(.22,1,.36,1)}
@keyframes pgInL{from{opacity:0;transform:translateX(14px)}}
@keyframes pgInR{from{opacity:0;transform:translateX(-14px)}}
.spgr button:focus-visible{outline:2px solid #fff;outline-offset:2px}
@media (prefers-reduced-motion:reduce){.spgr .pg-mid .pg-name,.spgr .pg-mid .pg-cat{animation:none!important}}`;
  document.head.insertAdjacentHTML("beforeend", `<style id="screen-pager-css">${css}</style>`);

  const chev = d => `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="${d}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const bar = document.createElement("div");
  bar.className = "spgr";
  bar.setAttribute("role", "navigation");
  bar.setAttribute("aria-label", "Prototype screens");
  bar.innerHTML = `<button class="pg-arr" data-step="-1" aria-label="Previous screen">${chev("M10 3.5 5.5 8l4.5 4.5")}</button>
    <button class="pg-mid" aria-haspopup="dialog"><span class="pg-top"><span class="pg-cat"></span><span class="pg-n"></span></span><span class="pg-name"></span></button>
    <button class="pg-arr" data-step="1" aria-label="Next screen">${chev("M6 3.5 10.5 8 6 12.5")}</button>`;
  document.body.appendChild(bar);

  const items = () => [...nav.querySelectorAll("button")];
  const groupOf = b => { let el = b.closest("nav")?.previousElementSibling; return el && el.tagName === "H6" ? el.textContent : ""; };
  const curIndex = () => items().findIndex(b => b.classList.contains("on"));
  const mid = bar.querySelector(".pg-mid"), cat = bar.querySelector(".pg-cat"), name = bar.querySelector(".pg-name"), num = bar.querySelector(".pg-n");
  const [prev, , next] = bar.querySelectorAll("button");
  let last = -1;

  // two lines: category + position on top, screen name below
  function render() {
    const list = items(), i = curIndex();
    if (i < 0) return;
    const b = list[i], g = groupOf(b);
    cat.textContent = g; cat.hidden = !g;
    name.textContent = b.textContent;
    num.textContent = (g ? "· " : "") + `${i + 1}/${list.length}`;
    mid.setAttribute("aria-label", `${g ? g + ", " : ""}${b.textContent}, screen ${i + 1} of ${list.length}. Show all screens`);
    prev.disabled = i === 0; next.disabled = i === list.length - 1;
    if (last >= 0 && last !== i) { mid.classList.remove("in-l", "in-r"); void mid.offsetWidth; mid.classList.add(i > last ? "in-l" : "in-r"); }
    last = i;
  }
  const step = d => { const list = items(), i = curIndex(), t = list[i + d]; if (t) t.click(); };

  prev.onclick = () => step(-1);
  next.onclick = () => step(1);
  bar.querySelector(".pg-mid").onclick = () => sheet.classList.add("open");

  // swipe on the bar: left → next, right → previous
  let x0 = null, y0 = 0;
  bar.addEventListener("pointerdown", e => { x0 = e.clientX; y0 = e.clientY; });
  bar.addEventListener("pointerup", e => {
    if (x0 === null) return;
    const dx = e.clientX - x0, dy = e.clientY - y0; x0 = null;
    if (Math.abs(dx) > 28 && Math.abs(dx) > Math.abs(dy)) { e.preventDefault(); step(dx < 0 ? 1 : -1); bar.dataset.swiped = "1"; setTimeout(() => delete bar.dataset.swiped, 0); }
  });
  // a swipe that ends on a button must not also count as a tap
  bar.addEventListener("click", e => { if (bar.dataset.swiped) { e.stopPropagation(); e.preventDefault(); } }, true);
  bar.addEventListener("pointercancel", () => { x0 = null; });

  // show the bar only when the side panel is hidden
  const sync = () => bar.classList.toggle("show", getComputedStyle(panel).display === "none");
  addEventListener("resize", sync); sync();

  new MutationObserver(render).observe(nav, { subtree: true, attributes: true, attributeFilter: ["class"], childList: true });
  render();
})();
