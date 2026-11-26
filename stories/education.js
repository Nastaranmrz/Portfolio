// Educational App Redesign — rebuilt case study (Figma: "DARK-CLEAN — education", Before / After slides)
window.STORIES = window.STORIES || {};
window.STORIES["education"] = {
  tools: "Figma",
  live: "apps/education/index.html",
  story: [
    { type: "stats", items: [
      { value: "2", label: "Key screens redesigned" },
      { value: "Before → After", label: "Login / sign-up and onboarding" },
    ] },
    { title: "Overview",
      body: ["This application was originally developed to manage user registration for an educational program, but it suffered from a poor and ineffective user interface and experience. I was assigned to redesign the app with the goal of improving both its UI and UX."] },
    { title: "Goal",
      body: ["Create a visually appealing and user-friendly design that offers a smooth, pleasant, yet highly functional experience — making interaction both enjoyable and efficient."] },
    { title: "Approach",
      body: ["I applied minimal, user-centered design principles to simplify navigation and improve access to key features. These changes improved the overall experience and helped strengthen user trust and satisfaction with the brand."] },
    { type: "custom", title: "Before → After", note: "The original screens next to the redesign. Click a screen to view it full size.", render: "education-before-after" },
  ],
};

window.CS_BLOCKS = Object.assign(window.CS_BLOCKS || {}, {
  "education-before-after": () => {
    const pairs = [
      { title: "Login / sign-up screen", before: "before-login", after: "after-login" },
      { title: "Onboarding screen", before: "before-onboarding", after: "after-onboarding" },
    ];
    const fig = (name, label, cls) => `
      <figure class="ds-card none ba-fig">
        <figcaption><span class="ba-tag ${cls}">${label}</span></figcaption>
        <div class="ds-img"><img src="images/cs/education/${name}.jpg" alt="${label} — ${name.replace("-", " ")}" loading="lazy"></div>
      </figure>`;
    return `<div class="ba">${pairs.map(p => `
      <div class="ba-pair">
        <h4 class="ba-title">${p.title}</h4>
        <div class="ba-row">
          ${fig(p.before, "Before", "is-before")}
          <span class="ba-arrow" aria-hidden="true">→</span>
          ${fig(p.after, "After", "is-after")}
        </div>
      </div>`).join("")}</div>`;
  },
});

(function () {
  const s = document.createElement("style");
  s.textContent = `
    .ba{display:flex;flex-direction:column;gap:28px}
    .ba-pair{background:var(--surface);border:1px solid var(--line);border-radius:20px;padding:22px 22px 26px}
    .ba-title{color:var(--ink);font-size:17px;font-weight:600;margin-bottom:16px}
    .ba-row{display:grid;grid-template-columns:1fr auto 1fr;align-items:start;gap:14px}
    .ba-arrow{color:var(--accent);font-size:26px;line-height:1;align-self:center}
    .ba-row > .ba-fig{grid-column:auto;gap:12px}
    .ba .ba-fig figcaption{padding:0;text-align:center}
    .ba-fig .ds-img img{width:100%;max-width:300px;max-height:none;border-radius:22px;border:1px solid var(--line);margin-inline:auto}
    .ba-tag{display:inline-block;font-size:12px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;padding:4px 12px;border-radius:999px;border:1px solid var(--line);color:var(--gray)}
    .ba-tag.is-after{color:var(--accent);border-color:var(--accent-soft);background:rgba(255,107,0,.08)}
    @media (max-width:560px){
      .ba-row{grid-template-columns:1fr 1fr;gap:10px}
      .ba-arrow{display:none}
      .ba-pair{padding:16px}
    }`;
  document.head.appendChild(s);
})();
