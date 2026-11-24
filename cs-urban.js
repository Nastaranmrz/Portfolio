/*
  Urban Manage — design system, rebuilt as real HTML/CSS from the values in Figma
  (Tailwind colour palette, IRANYekanX type scale → Vazirmatn on the web, Heroicons, components).
  Each function returns the HTML for one "custom" story block in projects.js.
*/
(() => {
  const PALETTE = {
    Slate: "#f8fafc #f1f5f9 #e2e8f0 #cbd5e1 #94a3b8 #64748b #475569 #334155 #1e293b #0f172a #020617",
    Gray: "#ffffff #f3f4f6 #e5e7eb #d1d5db #9ca3af #6b7280 #4b5563 #374151 #1f2937 #111827 #030712",
    Zinc: "#fafafa #f4f4f5 #e4e4e7 #d4d4d8 #a1a1aa #71717a #52525b #3f3f46 #27272a #18181b #09090b",
    Neutral: "#fafafa #f5f5f5 #e5e5e5 #d4d4d4 #a3a3a3 #737373 #525252 #404040 #262626 #171717 #0a0a0a",
    Stone: "#fafaf9 #f5f5f4 #e7e5e4 #d6d3d1 #a8a29e #78716c #57534e #44403c #292524 #1c1917 #0c0a09",
    Red: "#fef2f2 #fee2e2 #fecaca #fca5a5 #f87171 #ef4444 #dc2626 #b91c1c #991b1b #7f1d1d #450a0a",
    Orange: "#fff7ed #ffedd5 #fed7aa #fdba74 #fb923c #f97316 #ea580c #c2410c #9a3412 #7c2d12 #431407",
    Amber: "#fffbeb #fef3c7 #fde68a #fcd34d #fbbf24 #f59e0b #d97706 #b45309 #92400e #78350f #451a03",
    Yellow: "#fefce8 #fef9c3 #fef081 #fde047 #facc15 #eab308 #ca8a04 #a16207 #854d0e #713f12 #422006",
    Lime: "#f7fee7 #ecfccb #d9f99d #bef264 #a3e635 #84cc16 #65a30d #4d7c0f #3f6212 #365314 #1a2e05",
    Green: "#f0fdf4 #dcfce7 #bbf7d0 #86efac #4ade80 #22c55e #16a34a #15803d #166534 #14532d #052e16",
    Emerald: "#ecfdf5 #d1fae5 #a7f3d0 #6ee7b7 #34d399 #10b981 #059669 #047857 #065f46 #064e3b #022c22",
    Teal: "#f0fdfa #ccfbf1 #99f6e4 #5eead4 #2dd4bf #14b8a6 #0d9488 #0f766e #115e59 #134e4e #042f2e",
    Cyan: "#ecfeff #cffafe #a5f3fc #67e8f9 #22d3ee #06b6d4 #0891b2 #0e7490 #155e75 #164e63 #083344",
    Sky: "#f0f9ff #e0f2fe #bae6fd #7dd3fc #38bdf8 #0ea5e9 #0284c7 #0369a1 #075985 #0c4a6e #082f49",
    Blue: "#eff6ff #dbeafe #bfdbfe #93c5fd #60a5fa #3b82f6 #2563eb #1d4ed8 #1e40af #1e3a8a #172554",
    Indigo: "#eef2ff #e0e7ff #c7d2fe #a5b4fc #818cf8 #6366f1 #4f46e5 #4338ca #3730a3 #312e81 #1e1b4b",
    Violet: "#f5f3ff #ede9fe #ddd6fe #c4b5fd #a78bfa #8b5cf6 #7c3aed #6d28d9 #5b21b6 #4c1d95 #2e1065",
    Purple: "#faf5ff #f3e8ff #e9d5ff #d8b4fe #c084fc #a855f7 #9333ea #7e22ce #6b21a8 #581c87 #3b0764",
    Fuchsia: "#fdf4ff #fae8ff #f5d0fe #f0abfc #e879f9 #d946ef #c026d3 #a21caf #86198f #701a75 #4a044e",
    Pink: "#fdf2f8 #fce7f3 #fbcfe8 #f9a8d4 #f472b6 #ec4899 #db2777 #be185d #9d174d #831843 #500724",
    Rose: "#fff1f2 #ffe4e6 #fecdd3 #fda4af #fb7185 #f43f5e #e11d48 #be123c #9f1239 #881337 #4c0519",
  };
  const STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  // Type scale from the Figma "typography" frame (size / line-height / weights)
  const TYPE = [
    ["font-size-11", 42, 48, [600]], ["font-size-10", 32, 36, [600]], ["font-size-09", 28, 32, [600]],
    ["font-size-08", 24, 32, [600]], ["font-size-07", 20, 24, [500, 400]], ["font-size-06", 18, 24, [500, 400]],
    ["font-size-04", 14, 24, [500, 400]], ["font-size-03", 13, 16, [500, 400]], ["font-size-02", 12, 16, [500, 400]],
    ["font-size-01", 11, 16, [500, 400]], ["font-size-sm", 10, 14, [500, 400]], ["font-size-xsm", 8, 12, [500, 400]],
  ];

  // Heroicons (the icon set used in the Figma file) — real SVGs from the heroicons package
  const ICONS = ["home", "user", "users", "bell", "cog-6-tooth", "magnifying-glass", "document-text", "folder",
    "calendar", "chart-bar", "check-circle", "x-circle", "exclamation-triangle", "information-circle", "envelope",
    "phone", "map-pin", "building-office", "clipboard-document-check", "arrow-down-tray", "pencil-square", "trash",
    "eye", "lock-closed", "cube-transparent", "shield-check", "clock", "inbox", "paper-airplane", "star",
    "link", "funnel", "squares-2x2", "adjustments-horizontal", "plus-circle", "arrow-right-on-rectangle"];
  const ICON_SETS = [["Mini", "20/solid"], ["Outline", "24/outline"], ["Solid", "24/solid"]];
  const iconUrl = (set, name) => `https://cdn.jsdelivr.net/npm/heroicons@2.1.5/${set}/${name}.svg`;
  const hi = (name, set = "20/solid") => `<i class="hi" style="--icon:url('${iconUrl(set, name)}')" aria-hidden="true"></i>`;

  const L = "عنوان"; // label text used throughout the Figma components

  window.CS_BLOCKS = Object.assign(window.CS_BLOCKS || {}, {
    "urban-foundation": () => `
      <div class="ds-bento">
        <div class="ds-canvas span2">
          <div class="ds-label">Color palette <span>Tailwind · 22 × 11</span></div>
          <div class="ds-pal">
            ${Object.entries(PALETTE).map(([name, list]) => `
            <div class="ds-pal-col" title="${name}">${list.split(" ").map((c, i) => `<span style="background:${c}" title="${name} ${STEPS[i]} · ${c.toUpperCase()}"></span>`).join("")}<b>${name.slice(0, 3)}</b></div>`).join("")}
          </div>
        </div>
        <div class="ds-canvas">
          <div class="ds-label">Typography <span>IRANYekanX</span></div>
          <div class="ds-type2" dir="rtl">
            ${TYPE.map(([token, size, lh, weights]) => `
            <div><span style="font-size:${Math.min(Math.max(size * 0.55, 9), 22)}px;font-weight:${weights[0]}">عنوان نوشته</span><code dir="ltr">${size}/${lh} · ${weights.join("·")}</code></div>`).join("")}
          </div>
        </div>
        <div class="ds-canvas">
          <div class="ds-label">Icons <span>Heroicons</span></div>
          ${ICON_SETS.map(([label, set]) => `
          <div class="ds-sub">${label}</div>
          <div class="ds-icons2">${ICONS.slice(0, 12).map(n => `<span title="${n}">${hi(n, set)}</span>`).join("")}</div>`).join("")}
        </div>
      </div>`,

    "urban-components": () => {
      const types = ["primary", "outline", "dashed", "link"];
      const states = ["idle", "hover", "focus", "disable"];
      const btn = (t, s) => `<button type="button" class="u-btn ${t} ${s}" tabindex="-1">${hi("cube-transparent")}<span>${L}</span></button>`;
      const field = (state, help, helpType = "info") => `
        <label class="u-field ${state}">
          <span class="u-title">${L} <em>*</em></span>
          <span class="u-input">${hi("cube-transparent")}<span class="ph">ورود اطلاعات</span></span>
          <span class="u-help ${helpType}">${help}</span>
        </label>`;
      return `
      <div class="ds-bento">
        <div class="ds-canvas span2">
          <div class="ds-label">Button <span>4 types × 4 states · icon button</span></div>
          <div class="ds-btns" dir="rtl">
            ${states.map(s => `<div class="ds-btn-row"><em dir="ltr">${s}</em>${types.map(t => btn(t, s)).join("")}</div>`).join("")}
            <div class="ds-btn-row"><em dir="ltr">icon</em>${["idle", "hover", "active", "disable"].map(s => `<button type="button" class="u-icon-btn ${s}" tabindex="-1" title="${s}">${hi("cube-transparent")}</button>`).join("")}${["idle", "active"].map(s => `<button type="button" class="u-icon-btn line ${s}" tabindex="-1" title="${s}">${hi("cube-transparent")}</button>`).join("")}</div>
          </div>
        </div>
        <div class="ds-canvas">
          <div class="ds-label">Input <span>states + helper</span></div>
          <div class="ds-fields" dir="rtl">
            ${field("idle", "راهنمای ورود اطلاعات")}
            ${field("focus", "راهنمای ورود اطلاعات", "link")}
            ${field("error", "راهنمای ورود اطلاعات", "error")}
            ${field("disable", "راهنمای ورود اطلاعات")}
          </div>
        </div>
        <div class="ds-canvas">
          <div class="ds-label">Table <span>rows, link, checkbox</span></div>
          <table class="u-table" dir="rtl">
            <thead><tr><th class="c"><i class="u-check"></i></th><th>${L}</th><th>${L}</th></tr></thead>
            <tbody>
              <tr><td class="c"><i class="u-check on"></i></td><td>${L}</td><td><a>${L}</a></td></tr>
              <tr class="hover"><td class="c"><i class="u-check"></i></td><td>${L}</td><td><a>${L}</a></td></tr>
              <tr class="outline"><td class="c"><i class="u-check"></i></td><td>${L}</td><td><a>${L}</a></td></tr>
            </tbody>
          </table>
          <div class="ds-label ds-label-2">Profile picture</div>
          <div class="ds-row" dir="rtl">
            ${[26, 32, 40, 48].map(s => `<img class="u-avatar" src="images/cs/urban-ai/avatar.jpg" alt="" style="width:${s}px;height:${s}px">`).join("")}
            ${[32, 40].map(s => `<img class="u-avatar sq" src="images/cs/urban-ai/avatar.jpg" alt="" style="width:${s}px;height:${s}px">`).join("")}
          </div>
          <div class="ds-row" dir="rtl" style="margin-top:10px">
            <div class="u-profile"><img class="u-avatar" src="images/cs/urban-ai/avatar.jpg" alt="" width="32" height="32"><div><b>مهندس علی نجفی</b><span>اپراتور بخش تایید</span></div></div>
          </div>
        </div>
      </div>`;
    },

    // BPMS — drawn as SVG with the exact coordinates of the Figma diagram
    "urban-bpms": () => {
      const ICON = { user: "user", op: "user-circle", ai: "cog-6-tooth" };
      const tasks = [
        [406, 266, "user", "ورود کاربر به پلتفرم از طریق پنجره ورود شهرداری"],
        [664, 212, "user", "ورود کاربر"],
        [664, 334, "user", "ثبت نام کاربر"],
        [828, 334, "user", "درخواست صدور پروانه"],
        [991, 334, "user", "وارد کردن اطلاعات و مدارک مورد نیاز و ثبت درخواست"],
        [1155, 334, "user", "ثبت درخواست"],
        [406, 520, "op", "ارسال درخواست به کارتابل اپراتور مربوطه"],
        [570, 520, "op", "مراجعه حضوری جهت بررسی در زمان تعیین شده"],
        [828, 461, "op", "اطلاع رسانی به کاربر و نمایش در داشبورد مربوطه"],
        [828, 595, "op", "ارسال اطلاعات به هوش مصنوعی"],
        [406, 736, "ai", "جنریت پروانه ساخت و ارسال آن به پروفایل کاربر"],
        [570, 736, "ai", "ارسال پیامک به کاربر و اطلاع رسانی"],
      ];
      const flows = [ // [points, dashed]
        ["345,299 405,299"], ["508,299 569,299"],
        ["586,283 586,244 663,244"], ["586,316 586,367 663,367"],
        ["766,244 879,244 879,333"], ["766,367 827,367"], ["930,367 990,367"], ["1094,367 1154,367"],
        ["1206,400 1206,447 457,447 457,519", 1],
        ["508,553 569,553"], ["672,553 732,553"],
        ["750,537 750,494 827,494"], ["750,570 750,628 827,628"], ["930,494 990,494"],
        ["879,661 879,707 457,707 457,735", 1],
        ["508,769 569,769"], ["672,769 732,769"],
      ];
      const lanes = [[189, 233, "USER", 134], [430, 260, "Operator", 138], [698, 141, "AI", 130]];
      const tag = (x, y, t) => `<rect x="${x}" y="${y}" width="33" height="17" fill="#161616"/><text x="${x + 16.5}" y="${y + 12}" class="bp-t" text-anchor="middle">${t}</text>`;
      const circle = (x, y, w, label) => `<circle cx="${x + 16.5}" cy="${y + 16.5}" r="15.5" class="bp-c" stroke-width="${w}"/><text x="${x + 16.5}" y="${y + 46}" class="bp-t" text-anchor="middle">${label}</text>`;
      const gate = (x, y, label) => `<g transform="translate(${x + 16.5} ${y + 16.5})"><rect x="-11.5" y="-11.5" width="23" height="23" rx="2" transform="rotate(45)" class="bp-c" stroke-width="2"/><path d="M-5 -5L5 5M5 -5L-5 5" stroke="#C2C2C2" stroke-width="1.4" stroke-linecap="round"/></g><text x="${x + 16.5}" y="${y + 46}" class="bp-t" text-anchor="middle">${label}</text>`;
      return `
      <div class="bp-scroll" data-drag>
        <svg class="bp-svg" viewBox="98 189 1277 650" role="img" aria-label="BPMS diagram: user, operator and AI lanes">
          <defs><marker id="bp-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L8 4L0 8z" fill="#7A8699"/></marker></defs>
          ${lanes.map(([y, h, name, x]) => `<rect x="98" y="${y}" width="1277" height="${h}" rx="18" fill="#1E1E1E" fill-opacity=".8"/><text x="${x}" y="${y + h / 2 + 7}" class="bp-lane-t">${name}</text>`).join("")}
          ${flows.map(([pts, dash]) => `<polyline points="${pts}" class="bp-f${dash ? " dash" : ""}" marker-end="url(#bp-arrow)"/>`).join("")}
          ${circle(312, 283, 1, "شروع فرایند")}${circle(991, 477, 2, "پایان فرایند")}${circle(733, 752, 2, "پایان فرایند")}
          ${gate(570, 283, "Login?")}${gate(733, 537, "Confirm?")}
          ${tag(608, 236, "YES")}${tag(614, 359, "NO")}${tag(772, 486, "NO")}${tag(773, 620, "YES")}
          ${tasks.map(([x, y, ic, t]) => `
          <rect x="${x}" y="${y}" width="102" height="66" rx="7.7" fill="#FDBA74" stroke="#475569"/>
          <foreignObject x="${x}" y="${y}" width="102" height="66"><div xmlns="http://www.w3.org/1999/xhtml" class="bp-task">${hi(ICON[ic], "24/outline")}<span dir="rtl">${t}</span></div></foreignObject>`).join("")}
        </svg>
      </div>`;
    },

    // (older simplified version, kept for reference)
    "urban-bpms-simple": () => {
      const box = t => `<span class="bp-box" dir="rtl">${t}</span>`;
      const ar = `<span class="bp-ar" aria-hidden="true"></span>`;
      const end = t => `<span class="bp-end" dir="rtl"><i></i>${t}</span>`;
      const gate = t => `<span class="bp-gate"><i></i>${t}</span>`;
      return `
      <div class="bpms">
        <div class="bp-lane"><div class="bp-who">User</div><div class="bp-flow">
          <div class="bp-line">${end("شروع فرایند")}${ar}${box("ورود کاربر به پلتفرم از طریق پنجره ورود شهرداری")}${ar}${gate("Login?")}</div>
          <div class="bp-branch">
            <div class="bp-line"><span class="bp-tag">YES</span>${box("ورود کاربر")}</div>
            <div class="bp-line"><span class="bp-tag">NO</span>${box("ثبت نام کاربر")}</div>
          </div>
          <div class="bp-line">${ar}${box("درخواست صدور پروانه")}${ar}${box("وارد کردن اطلاعات و مدارک مورد نیاز و ثبت درخواست")}${ar}${box("ثبت درخواست")}<span class="bp-down">to operator</span></div>
        </div></div>
        <div class="bp-lane"><div class="bp-who">Operator</div><div class="bp-flow">
          <div class="bp-line">${box("ارسال درخواست به کارتابل اپراتور مربوطه")}${ar}${box("مراجعه حضوری جهت بررسی در زمان تعیین شده")}${ar}${gate("Confirm?")}</div>
          <div class="bp-branch">
            <div class="bp-line"><span class="bp-tag">NO</span>${box("اطلاع رسانی به کاربر و نمایش در داشبورد مربوطه")}${ar}${end("پایان فرایند")}</div>
            <div class="bp-line"><span class="bp-tag">YES</span>${box("ارسال اطلاعات به هوش مصنوعی")}<span class="bp-down">to AI</span></div>
          </div>
        </div></div>
        <div class="bp-lane"><div class="bp-who">AI</div><div class="bp-flow">
          <div class="bp-line">${box("جنریت پروانه ساخت و ارسال آن به پروفایل کاربر")}${ar}${box("ارسال پیامک به کاربر و اطلاع رسانی")}${ar}${end("پایان فرایند")}</div>
        </div></div>
      </div>`;
    },
  });
})();
