// Dashboard Design — rebuilt case study (Figma: "DARK-CLEAN — subscription-dashboard", Manage Active Subscription)
window.STORIES = window.STORIES || {};
window.STORIES["subscription-dashboard"] = {
  tools: "Figma",
  story: [
    { type: "stats", items: [
      { value: "2", label: "User types — students & business owners" },
      { value: "1", label: "Screen — manage active subscription" },
    ] },
    { title: "Overview",
      body: ["This project involved designing a subscription sales dashboard for two user types — students and business owners. The interface was designed in a minimal, user-friendly style so users can scan the page at first glance and easily identify each section."] },
    { type: "media", title: "Manage active subscription", note: "The subscription page of the dashboard. Click to view it full size.", items: [
      { img: "images/cs/subscription-dashboard/dashboard.jpg", bg: "none" },
    ] },
    { type: "custom", title: "Subscription status at a glance", note: "Rebuilt here in code from the dashboard’s status card.", render: "subdash-status" },
  ],
};

window.CS_BLOCKS = Object.assign(window.CS_BLOCKS || {}, {
  "subdash-status": () => `
    <div class="sd-grid">
      <div class="sd-card">
        <div class="sd-demo sd-active">
          <span class="sd-ring"><b>18</b><small>days left</small></span>
          <span class="sd-chip">Active</span>
        </div>
        <h4>Active = green</h4>
        <p>When a subscription is active, the page is highlighted in green, giving users an immediate visual confirmation.</p>
      </div>
      <div class="sd-card">
        <div class="sd-demo sd-expired">
          <span class="sd-ring"><b>0</b><small>days left</small></span>
          <span class="sd-chip">Expired</span>
        </div>
        <h4>Expired = red</h4>
        <p>When a subscription has expired, the page turns red to clearly alert the user.</p>
      </div>
      <div class="sd-card">
        <div class="sd-demo sd-dates">
          <div class="sd-cal"><span class="sd-cal-top"></span><small>Start date</small><b>1403/06/08</b></div>
          <div class="sd-cal"><span class="sd-cal-top"></span><small>End date</small><b>1403/07/08</b></div>
        </div>
        <h4>Calendar-style dates</h4>
        <p>Start and end dates are shown in calendar-style boxes, so the exact subscription period is easy to read.</p>
      </div>
    </div>`,
});

(function () {
  const s = document.createElement("style");
  s.textContent = `
    .sd-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
    .sd-card{background:var(--surface);border:1px solid var(--line);border-radius:20px;padding:18px;display:flex;flex-direction:column;gap:8px}
    .sd-card h4{color:var(--ink);font-size:16px;font-weight:600;margin-top:6px}
    .sd-card p{font-size:15px;color:var(--text);line-height:1.55}
    .sd-demo{height:150px;border-radius:14px;background:#F3F4F6;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px}
    .sd-ring{--c:#16A34A;width:82px;height:82px;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;
      background:radial-gradient(closest-side,#fff 78%,transparent 79%),conic-gradient(var(--c) var(--p,60%),color-mix(in srgb,var(--c) 18%,#fff) 0)}
    .sd-ring b{font-size:22px;line-height:1;color:#111827}
    .sd-ring small{font-size:10px;color:#6B7280;letter-spacing:0}
    .sd-chip{font-size:13px;font-weight:600;padding:3px 14px;border-radius:999px}
    .sd-active .sd-chip{color:#15803D;background:#DCFCE7}
    .sd-expired .sd-ring{--c:#DC2626;--p:100%}
    .sd-expired .sd-chip{color:#B91C1C;background:#FEE2E2}
    .sd-dates{flex-direction:row;gap:10px}
    .sd-cal{position:relative;background:#fff;border:1px solid #E5E7EB;border-radius:12px;padding:20px 10px 10px;display:flex;flex-direction:column;align-items:center;gap:2px;min-width:92px}
    .sd-cal-top{position:absolute;top:0;left:0;right:0;height:10px;border-radius:12px 12px 0 0;background:#16A34A}
    .sd-cal small{font-size:11px;color:#6B7280;letter-spacing:0}
    .sd-cal b{font-size:14px;color:#111827;font-weight:600;letter-spacing:0}
    @media (max-width:700px){ .sd-grid{grid-template-columns:1fr} }`;
  document.head.appendChild(s);
})();
