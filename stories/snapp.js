// Snapp — pricing transparency case study. Figma: light "Frame 1321317477" (Page 2, 12:73144),
// dark copy (Page 1, 20:20097). Text and user quotes are real HTML; only the app screens,
// sketches and the small user avatars are images.
window.STORIES = window.STORIES || {};
window.STORIES["snapp"] = {
  tools: "Figma, ChatGPT",
  story: [
    { type: "stats", items: [
      { value: "2 weeks", label: "Project duration" },
      { value: "+20", label: "Screens" },
    ] },
    { title: "About the project",
      body: ["In this case study, we examine the challenges, issues and pain points that emerge from real user experiences. By analysing users’ feedback and behaviour, we aim to identify the core problems and propose appropriate, user-centred solutions. We then evaluate the impact of these solutions on the overall user experience and user trust."],
      sub: [
        { title: "Design challenge", body: [
          "A significant number of users express frustration with the lack of transparency in Snapp’s pricing system during the ride request process. Users often report unexpected price changes, inconsistent fares for similar routes and times, and sudden price increases without clear explanations. This ambiguity leads to confusion, dissatisfaction and a decline in user trust toward the platform.",
          "The main challenge is to design a pricing experience that feels transparent, predictable and fair, while clearly communicating the reasons behind price fluctuations to users at the right moment in their journey.",
        ] },
      ] },
    { type: "custom", title: "User problem comments", note: "What riders say about Snapp’s pricing.", render: "snapp-quotes" },
    { type: "custom", title: "User journey", note: "A morning commute, from waking up to requesting a ride.", render: "snapp-journey" },
    { type: "custom", title: "Pain points", render: "snapp-pain" },
    { title: "Solution",
      body: ["Designing a feature that clearly explains Snapp’s pricing logic and increases transparency throughout the fare calculation process, allowing users to understand how prices are determined and build trust in the system."] },
    { type: "media", title: "Solution sketch", items: [
      { img: "images/cs/snapp/sketch-1.jpg", span: "half", bg: "none" },
      { img: "images/cs/snapp/sketch-2.jpg", span: "half", bg: "none" },
    ] },
    { type: "media", title: "Solution design", items: [
      { img: "images/cs/snapp/design-1.jpg", span: "half", bg: "none" },
      { img: "images/cs/snapp/design-2.jpg", span: "half", bg: "none" },
    ] },
    { title: "Impact",
      list: [
        "Increasing user trust in the fares displayed on Snapp",
        "Improving pricing transparency by clearly communicating how fares are calculated",
        "Helping users understand the pricing logic behind fare changes within the Snapp app",
      ] },
  ],
};

window.CS_BLOCKS = Object.assign(window.CS_BLOCKS || {}, (() => {
  const D = "images/cs/snapp/";
  const QUOTES = [
    "This pricing model makes absolutely no sense. Same route, same time, but a different price every time — what does that even mean?",
    "Why does the price double after you take the same trip once? Are you punishing loyal users?",
    "The exact same route, at the same hour, becomes 30,000 tomans more expensive in less than a minute. Do you seriously expect users to trust this system?",
    "On what basis are these prices calculated? Every time it’s some random, sky-high number with no explanation. This is not transparency.",
    "When you search for the same route multiple times and the price keeps going up, it genuinely feels like exploitation. Why should the user pay the price for that?",
  ];
  const ul = items => `<ul class="ps-list">${items.map(li => `<li>${li}</li>`).join("")}</ul>`;
  return {
    "snapp-quotes": () => `
      <div class="ps-quotes">
        ${QUOTES.map((q, i) => `
        <blockquote class="ps-quote${i % 2 ? " alt" : ""}">
          <img class="ps-avatar" src="${D}avatar-${i + 1}.jpg" alt="" loading="lazy">
          <p>“${q}”</p>
        </blockquote>`).join("")}
      </div>`,
    "snapp-journey": () => `
      <ol class="ps-timeline">
        <li><span class="ps-time">7:00 AM</span><p>I get up and start getting ready for work.</p></li>
        <li><span class="ps-time">7:30 AM</span>
          <p>Alright, I open the app, go to the Snapp section, choose my pickup and destination, and tap on “Request Ride.” What? Why is it so much more expensive than yesterday? I took the exact same ride yesterday at the same time for 100,000 tomans. Why is it suddenly 150,000 today? What’s the logic behind this? Snapp has really gone too far this time.</p>
          <p>How am I supposed to know this price is actually fair? How do I know it’s not just a random number the app came up with? How can I trust it?</p>
          <p>Alright, finally a driver accepted the ride — even with this made-up price. Whatever. I’m in a hurry. I’ll let it go and take the ride.</p>
        </li>
      </ol>
      <div class="cs-media-grid" style="margin-top:24px">
        <figure class="ds-card none full"><div class="ds-img"><img src="${D}journey.jpg" alt="The ride request flow in the Snapp app: home, choosing a ride, waiting for a driver" loading="lazy"></div></figure>
      </div>`,
    "snapp-pain": () => `
      <div class="ps-split ps-split-phone">
        <div class="ps-text">${ul([
          "Lack of user trust in Snapp’s pricing system",
          "Insufficient transparency in fare calculation",
          "Unjustified and sudden price increases",
          "Inconsistent pricing that undermines user confidence",
          "Absence of a clear and standardised pricing logic",
          "Lack of a consistent and predictable pricing rule for users",
        ])}</div>
        <figure class="ds-card none ps-phone"><div class="ds-img"><img src="${D}pain-point.jpg" alt="Ride options screen with the fares highlighted" loading="lazy"></div></figure>
      </div>`,
  };
})());

(function () {
  const s = document.createElement("style");
  s.textContent = `
    .ps-quotes{display:flex;flex-direction:column;gap:14px}
    .ps-quote{margin:0;display:flex;gap:16px;align-items:center;max-width:620px;background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);padding:16px 20px}
    .ps-quote.alt{margin-left:auto}
    .ps-quote p{font-size:16px;line-height:1.55;color:var(--ink)}
    .ps-avatar{flex:none;width:52px;height:52px;border-radius:50%;object-fit:cover;object-position:top;background:#fff;border:2px solid color-mix(in srgb,var(--accent) 40%,transparent)}
    .ps-timeline{list-style:none;border-left:1px solid var(--line);margin-left:6px;display:flex;flex-direction:column;gap:24px}
    .ps-timeline li{position:relative;padding-left:24px}
    .ps-timeline li::before{content:"";position:absolute;left:-6px;top:6px;width:11px;height:11px;border-radius:50%;background:var(--accent);box-shadow:0 0 0 4px var(--accent-soft)}
    .ps-time{display:inline-block;font-size:13px;font-weight:600;color:var(--accent);letter-spacing:.04em;margin-bottom:6px}
    .ps-timeline p+p{margin-top:12px}
    .ps-split{display:grid;grid-template-columns:1.35fr 1fr;gap:clamp(20px,4vw,40px);align-items:center}
    .ps-list{list-style:none;display:flex;flex-direction:column;gap:10px}
    .ps-list li{position:relative;padding-left:22px}
    .ps-list li::before{content:"";position:absolute;left:2px;top:.62em;width:8px;height:8px;border-radius:2px;background:var(--accent)}
    .ps-phone{grid-column:auto;max-width:300px;justify-self:center;width:100%}
    @media (max-width:700px){ .ps-split{grid-template-columns:1fr} .ps-quote.alt{margin-left:0} }
  `;
  document.head.appendChild(s);
})();
