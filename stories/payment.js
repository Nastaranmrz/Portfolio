// Payment Page (Dana) — rebuilt case study. Figma: light "Frame 237" (Page 2, 12:86601),
// dark copy (Page 1, 20:24839). Text translated from Persian; only illustrations, the
// lo-fi wireframe and the Before / After screens are images.
window.STORIES = window.STORIES || {};
window.STORIES["payment"] = {
  industry: "EdTech",
  summary: "Redesigning the checkout of Dana, an online-course startup, so paying for a course is clearer and simpler.",
  role: "UI/UX Designer",
  tools: "Figma",
  story: [
    { type: "stats", items: [
      { value: "1 week", label: "Project duration" },
      { value: "1 page", label: "Payment page design" },
    ] },
    { type: "custom", title: "About the project", render: "pay-intro" },
    { type: "custom", title: "Client requirements", render: "pay-requirements" },
    { type: "custom", title: "Constraints & challenges", render: "pay-constraints" },
    { type: "steps", title: "Design process", items: [
      { title: "Analysing the current page (Before)", text: "Reviewing the existing payment page to find what needed to change." },
      { title: "Lo-fi wireframe", text: "Restructuring the page into an order summary and a confirmation & payment section." },
      { title: "Final design (After)", text: "Visual polish: colours, buttons, menus, input fields, corner radii and icons." },
      { title: "Continuous collaboration with the dev team", text: "Working with developers so the proposed features were implemented correctly." },
    ] },
    { title: "Step 1 — Analysing the current page (Before)",
      list: [
        "The layout and visual design of the first version were simple and lacked detail.",
        "The colours and fonts used lacked visual appeal.",
        "Some elements, such as the discount-code section and the buttons, needed improvement.",
      ] },
    { title: "Step 2 — Lo-fi wireframe",
      sub: [
        { title: "Splitting the page into two main sections", list: [
          "Section one: the order summary",
          "Section two: confirmation and payment",
        ], body: [] },
        { title: "Improved layout and new elements", list: [
          "Fields such as personal and education information were added to the order summary, so users can see all the related information in one place and edit it if needed.",
          "The payment elements — registration fee, discount amount and final cost — were added as well.",
          "Elements were grouped so users can move easily between the different sections.",
        ] },
      ],
      after: [] },
    { type: "custom", title: "Lo-fi wireframe", note: "This structure helps users follow the steps easily and find the information they need quickly.", render: "pay-wireframe" },
    { title: "Step 3 — Final design (After)",
      body: ["Visual polish and a better user experience:"],
      sub: [
        { title: "Colours", list: ["The colours were changed to softer tones that match the brand’s visual identity."] },
        { title: "Buttons and menus", list: [
          "To increase contrast and draw attention, the main buttons (“Confirm and pay”) were changed to green.",
          "The dashboard menu was also set to a colour that matches the brand identity, for a modern, user-friendly look.",
        ] },
        { title: "Input fields and corner radii", list: [
          "The input field styles were updated to look consistent with the other elements.",
          "Corner radii were tuned more carefully, giving the whole page a more modern and polished look.",
        ] },
        { title: "Consistent icons", list: ["A unified icon set that fits the overall theme was used to keep the design cohesive."] },
      ] },
    { type: "custom", title: "Before vs After", note: "The original payment page and the redesigned version. Click a screen to view it full size.", render: "pay-before-after" },
    { title: "Step 4 — Continuous collaboration with the dev team",
      body: ["Throughout the project there was continuous coordination with the development team so that the proposed features were implemented correctly. Challenges such as technical limitations were solved with creative solutions."] },
    { type: "custom", title: "Results & learnings", render: "pay-results" },
  ],
};

window.CS_BLOCKS = Object.assign(window.CS_BLOCKS || {}, (() => {
  const D = "images/cs/payment/";
  const ul = items => `<ul class="ps-list">${items.map(li => `<li>${li}</li>`).join("")}</ul>`;
  const split = (text, img, alt) => `
    <div class="ps-split">
      <div class="ps-text">${text}</div>
      <div class="ps-illus"><img src="${D}${img}" alt="${alt}" loading="lazy"></div>
    </div>`;
  return {
    "pay-intro": () => split(
      `<p>Dana is an education startup that offers online courses. This project focused on improving the user experience of the payment page — one of the key steps in the sign-up and purchase flow.</p>
       <p>Because of time and budget constraints, the improvements were made through targeted optimisations and subtle changes to the layout and visual design.</p>`,
      "illus-intro.jpg", "Illustration: two people building a page together"),
    "pay-requirements": () => split(
      ul([
        "Polish the user interface (colours and layout)",
        "Improve the user experience by simplifying the process",
        "Add an order summary section to the page",
      ]),
      "illus-requirements.jpg", "Illustration: client and designer discussing requirements"),
    "pay-constraints": () => split(
      ul([
        "<strong>Technical team limitations:</strong> some of the proposed features needed a more complex implementation, which ran into the technical team’s limitations.",
        "<strong>Budget and timeline:</strong> with a limited budget, a comprehensive research phase wasn’t possible, so the focus was on fast, effective optimisation.",
      ]),
      "illus-constraints.jpg", "Illustration: a person arranging interface elements"),
    "pay-wireframe": () => `
      <div class="cs-media-grid">
        <figure class="ds-card none full"><div class="ds-img"><img src="${D}wireframe.png" alt="Lo-fi wireframe: order summary on one side, confirmation and payment on the other" loading="lazy"></div></figure>
      </div>`,
    "pay-before-after": () => `
      <div class="ps-ba">
        <figure class="ds-card none ps-ba-item">
          <figcaption><span class="ps-tag before">Before</span> The original payment page — a simple layout without detail; the discount-code section and buttons needed work.</figcaption>
          <div class="ds-img"><img src="${D}before.jpg" alt="Before: the original payment page" loading="lazy"></div>
        </figure>
        <figure class="ds-card none ps-ba-item">
          <figcaption><span class="ps-tag after">After</span> The redesign — order summary and a clear payment card with a green “Confirm and pay” button.</figcaption>
          <div class="ds-img"><img src="${D}after.jpg" alt="After: the redesigned payment page" loading="lazy"></div>
        </figure>
      </div>`,
    "pay-results": () => split(
      `<p>The payment page was redesigned to be both more visually appealing and more efficient, so users can easily find the information they need and the payment process is simple and easy to understand. The client’s satisfaction with the final result also showed the project’s success.</p>
       <h4 class="ps-sub">What I learned</h4>
       ${ul([
         "Designing within the project’s constraints — timeline, client needs and the technical team’s limitations — while focusing on delivering the best possible user experience.",
         "Working effectively with the development team to implement the proposed features accurately and make sure the designs are feasible.",
         "Paying close attention to key design details such as corner radii, icons and other subtle elements, which have a big impact on the user experience.",
       ])}`,
      "illus-results.jpg", "Illustration: a person launching a paper plane"),
  };
})());

(function () {
  const s = document.createElement("style");
  s.textContent = `
    .ps-split{display:grid;grid-template-columns:1.35fr 1fr;gap:clamp(20px,4vw,40px);align-items:center}
    .ps-text p+p{margin-top:14px}
    .ps-illus{border-radius:var(--radius);overflow:hidden;background:#0F1B2D;border:1px solid #1E2D45}
    .ps-illus img{width:100%;height:auto;display:block}
    .ps-list{list-style:none;display:flex;flex-direction:column;gap:10px}
    .ps-text p + .ps-list{margin-top:14px}
    .ps-list li{position:relative;padding-left:22px}
    .ps-list li::before{content:"";position:absolute;left:2px;top:.62em;width:8px;height:8px;border-radius:2px;background:var(--accent)}
    .ps-list strong,.ps-text strong{color:var(--ink);font-weight:600}
    .ps-sub{font-size:17px;color:var(--ink);margin:24px 0 10px}
    .ps-ba{display:grid;gap:28px}
    .ps-ba .ds-card{grid-column:auto}
    .ps-ba-item figcaption{padding:0 0 12px;font-size:14px;line-height:1.5;display:flex;gap:10px;align-items:baseline;flex-wrap:wrap}
    .ps-ba-item .ds-img{border:1px solid var(--line);border-radius:12px;overflow:hidden}
    .ps-ba-item .ds-img img{max-height:none}
    .ps-tag{font-size:12px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;padding:3px 10px;border-radius:999px;border:1px solid}
    .ps-tag.before{color:#F87171;border-color:#F8717166;background:#F871711A}
    .ps-tag.after{color:#4ADE80;border-color:#4ADE8066;background:#4ADE801A}
    @media (max-width:700px){ .ps-split{grid-template-columns:1fr} .ps-illus{max-width:420px} }
  `;
  document.head.appendChild(s);
})();
