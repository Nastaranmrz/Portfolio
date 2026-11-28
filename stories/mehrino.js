// Mehrino — humanitarian aid app for rural communities.
// Case study rebuilt to mirror the designer's Figma case study (dark frame "Desktop - 48", node 20:29543):
// Roboto headings with one bold word, dashed blue separators, the 01–05 design-process row,
// the dashed timeline with dots, bordered navy cards, pie charts, personas, empathy maps, style guide and screens.
// Everything is HTML/CSS; only the sketch, avatars, tool logos, persona drawings and app screens are images.
window.STORIES = window.STORIES || {};
window.STORIES["mehrino"] = {
  tools: "Figma, ChatGPT, Google Form",
  story: [
    { type: "custom", title: "About the project", render: "mehrino-intro" },
    { type: "custom", title: "Case study", render: "mehrino-phases" },
    { type: "custom", title: "Final UI", render: "mehrino-final" },
  ],
};

(() => {
  const IMG = "images/cs/mehrino/";
  // *word* -> bold word (Figma headings mix one bold word with a light one)
  const B = s => s.replace(/\*(.+?)\*/g, "<b>$1</b>");
  const ul = (items, cls = "mh-ul") => `<ul class="${cls}">${items.map(i => `<li>${i}</li>`).join("")}</ul>`;
  const BRACE = `<svg class="mh-brace" viewBox="0 0 164 21" aria-hidden="true"><path d="M1 1Q1 10 10 10H72Q80 10 82 20Q84 10 92 10H154Q163 10 163 1" fill="none" stroke="#FAFAFA" stroke-width="1.2"/></svg>`;

  // ---------- content (kept from the earlier rebuild; names/typos fixed) ----------
  const ABOUT = [
    "In this project, we aim to develop a comprehensive application for collecting humanitarian aid specifically for rural families. As is well known, many villages across the country lack adequate medical equipment, educational facilities, energy infrastructure, and other essential services. At the same time, local village and city councils often fail to take effective action to address these challenges, and at the regional level, there is generally no organized charity, association, or specialized group dedicated to systematically meeting these needs.",
    "Moreover, many of us have close or extended family members living in rural areas and have witnessed these problems firsthand. We clearly understand how difficult and burdensome rural life can be without proper facilities and infrastructure. Additionally, reducing migration from villages to cities requires improving rural infrastructure and quality of life—an objective that cannot be achieved without investing in and supporting rural areas, which themselves represent vital resources for national production.",
    "For these reasons, we have decided to design a comprehensive, integrated, transparent, and trustworthy platform for managing and collecting humanitarian aid—one that benefits rural communities while also providing donors with full confidence and assurance in how their contributions are managed and delivered.",
  ];
  const PROCESS = [
    ["01", "Understand", ["Problem statement", "Interview for empathy"], "o"],
    ["02", "Observe", ["Empathy map", "Persona/user profile"], "s"],
    ["03", "Define", ["“How might we…” question"], "o"],
    ["04", "Ideate", ["Brainstorming", "2x2 matrix"], "s"],
    ["05", "Prototype", ["Wireframe", "Final UI"], "o"],
  ];

  const INTERVIEWEES = [
    { n: "2.1", av: "av21.png", name: "Zeynab Salehi", age: 35, job: "Computer Engineer", where: "Online" },
    { n: "2.2", av: "av22.png", name: "Ali Zarabi", age: 45, job: "Construction / Building", where: "Online" },
    { n: "2.3", av: "av23.png", name: "Kobra Mahdavi", age: 86, job: "Rural Homemaker, Farmer, and Vendor", where: "On-Site" },
    { n: "2.4", av: "av24.png", name: "Eskandar Hatami", age: 50, job: "Rural Livestock Farmer", where: "On-Site" },
  ];
  const Q_DONORS = [
    "Would you be willing to participate in humanitarian aid for rural communities in need?",
    "Do you know any organization or institution that you fully trust to support rural humanitarian aid?",
    "What is the minimum amount you would prefer to allocate for such humanitarian contributions?",
    "In what form would you prefer your humanitarian aid to be provided?",
    "Do you have full trust and confidence in existing charities?",
    "In your opinion, do charities—whether large or small—operate transparently in reporting their incoming and outgoing funds?",
    "When was the last time you participated in a humanitarian aid activity?",
    "What type of humanitarian aid did you provide the last time?",
    "Approximately how much was your monetary contribution?",
    "On average, how much of your monthly income do you spend on humanitarian contributions?",
    "How much time do you allocate each month to humanitarian activities?",
    "How often do you usually engage in humanitarian aid?",
    "What personal motivations and values encourage you to participate in humanitarian aid?",
  ];
  const Q_RURAL = [
    "What is your biggest need or challenge at the moment?",
    "What other problems exist in the village that affect your daily life?",
    "Are you satisfied with how the village council addresses existing issues and problems?",
    "Has any organization, institution, charity, government body, or specific individual ever taken action to address your needs or problems?",
    "If there were a team that could address your needs and problems through public donations, would you be willing to receive such support?",
    "If a system were designed that allows you to register your needs so that the process of receiving assistance becomes easier, would you be willing to use it?",
  ];
  const INSIGHTS = [
    { n: "2.1", who: "Zeynab Salehi",
      pain: ["Lack of a comprehensive and trustworthy platform for collecting humanitarian aid, both monetary and non-monetary.", "Absence of a system that enables humanitarian donations with very low minimum monetary amounts.", "Lack of trust in existing organizations collecting humanitarian aid due to insufficient transparency in how the collected funds are spent."],
      gain: ["A strong sense of fulfillment and satisfaction from helping others, with a willingness to do whatever is possible to alleviate their problems."] },
    { n: "2.2", who: "Ali Zarabi",
      pain: ["General trust in charities for collecting humanitarian aid, but a perceived lack of transparency within these institutions.", "Absence of a dedicated platform specifically focused on humanitarian aid for rural communities.", "Lack of the ability to choose who receives the aid and what type of assistance is provided."],
      gain: ["Contributing to solving the problems of those in need while creating a sense of pride and social responsibility for oneself and the construction company."] },
    { n: "2.3", who: "Kobra Mahdavi",
      pain: ["Negligence and lack of proper attention by village councils in addressing existing issues, including failure to take action against illegal activities in the village.", "Inequality and unfair distribution of resources within the village.", "Lack of adequate medical, educational, and other essential facilities in the village.", "Absence of an effective institution to follow up on and address ongoing village problems and needs."],
      gain: ["Despite numerous challenges, a strong love for rural life, appreciation of the climate and environment, and no desire to migrate to the city."] },
    { n: "2.4", who: "Eskandar Hatami",
      pain: ["Lack of attention to the problems and needs of rural residents, leading to the neglect of these highly valuable resources.", "Migration of villagers to cities and the gradual depopulation of rural areas due to insufficient support and development."],
      gain: ["Having lived in the village for many years and invested significant effort in improving the garden, farmland, and home, resulting in strong satisfaction with the current living conditions."] },
  ];

  // Survey: questions + options (Question Map) and the pie charts (Analysis).
  // arcs = Figma arcData of the four slices in degrees (0° = 3 o'clock, clockwise) and lab = the % label Figma puts on each slice.
  const SURVEY = [
    { q: "Would you be willing to participate in humanitarian aid for rural communities in need?",
      o: [["Yes, absolutely", 50], ["To some extent", 30], ["Not sure", 13], ["No", 7]],
      lab: [50, 30, 13, 7], arcs: [[90, 270], [-90.5, 17.8], [17.7, 65.1], [65.1, 90]],
      i: "There is a strong intrinsic willingness to help, but full commitment is limited by uncertainty and doubt." },
    { q: "Do you know any organization or institution that you fully trust to support rural communities in need?",
      o: [["Yes, several organizations", 7], ["Yes, only one organization", 13], ["I have heard of some, but I am not sure", 40], ["No, I do not know any", 40]],
      lab: [40, 40, 13, 7], arcs: [[89.4, 242.2], [-39.5, 90], [269.6, 320.5], [242.2, 269.7]],
      i: "A clear trust gap exists, with many people unable to identify a fully reliable organization for rural humanitarian aid." },
    { q: "In what form would you prefer your humanitarian aid to be provided?", multi: true,
      o: [["Monetary donations", 38], ["In-kind donations (goods and essential items)", 30], ["Volunteering (time or skills)", 17], ["Construction or infrastructure support", 14]],
      lab: [38, 30, 17, 14], arcs: [[118.4, 270.8], [-89.7, 38.9], [37.9, 82.9], [82.6, 118.8]],
      i: "Monetary donations are the most preferred form of support due to ease and accessibility, while in-kind donations remain highly valued." },
    { q: "Do you fully trust existing charities?",
      o: [["Yes, completely", 10], ["To some extent", 37], ["I usually do not trust them", 33], ["No, not at all", 20]],
      lab: [10, 37, 33, 20], arcs: [[232, 269.9], [-90.8, 35.3], [35, 173.5], [173.3, 232]],
      i: "Complete trust in existing charities is low; skepticism and partial trust dominate public perception." },
    { q: "When was the last time you provided humanitarian aid?",
      o: [["Less than one month ago", 20], ["1–6 months ago", 33], ["More than 6 months ago", 27], ["Never", 20]],
      lab: [20, 33, 27, 20], arcs: [[209.8, 270.1], [-90.1, 48], [47.7, 153.5], [153, 210.1]],
      i: "Humanitarian support is mostly reactive and situational rather than regular or structured." },
    { q: "How often do you usually engage in humanitarian aid?",
      o: [["Weekly", 7], ["Monthly", 23], ["Once a year", 20], ["Irregularly", 50]],
      lab: [50, 23, 20, 7], arcs: [[35.9, 245.4], [269, 340], [-20.3, 36.7], [245.2, 269.9]],
      i: "Irregular participation is the dominant behavioral pattern, indicating a lack of enabling systems rather than lack of compassion." },
    { q: "What are your main motivations for participating in humanitarian aid?", multi: true,
      o: [["Reducing the suffering and problems of others", 33], ["Feeling useful and giving meaning to life", 26], ["Fulfilling a social or human responsibility", 19], ["Personal satisfaction and inner peace", 22]],
      lab: [33, 26, 19, 22], arcs: [[131.4, 270.3], [-90.5, 17.8], [17.3, 64.7], [64.6, 131.3]],
      i: "Motivations are deeply human and intrinsic, centered on empathy, meaning, and personal fulfillment rather than external recognition." },
  ];
  // slice opacity per arc, as in Figma
  const OPA = [1, .76, .49, .26];
  const SURVEY_INSIGHT = [
    "The survey results indicate a strong willingness among participants to engage in humanitarian aid for rural communities; however, this willingness is constrained by a significant lack of trust and transparency in existing charitable systems. Most respondents prefer monetary and in-kind donations due to their accessibility and perceived effectiveness, while volunteering and construction-related support are less frequently selected.",
    "Humanitarian participation is largely irregular and situational rather than systematic, suggesting that the primary barrier is not a lack of compassion but the absence of reliable and transparent mechanisms. Motivations for participation are predominantly intrinsic and human-centered, driven by empathy, a desire to reduce others’ suffering, a sense of meaning, and personal fulfillment.",
    "Overall, the findings highlight a clear opportunity for a transparent, trustworthy, and flexible platform—one that supports micro-donations, allows donor choice, and provides clear reporting—to significantly increase and sustain humanitarian engagement for rural communities.",
  ];

  const PREP = [
    ["*W*hat is the problem and *w*hy does it matter?", `<p>There is currently no comprehensive, integrated, and at the same time transparent and trustworthy system for collecting public donations for rural communities. Addressing the problems and needs of rural families therefore relies largely on informal and unstructured public contributions.<br>Many people are willing to help those in need directly or to act as intermediaries to deliver humanitarian assistance; however, they do not know of any reliable platform or channel through which to do so. In addition, some individuals collect donations on a personal basis, and both well-known and unknown figures on social media also initiate fundraising efforts—many of which lack transparency and credibility and may even involve fraud. This highlights the critical gap and urgent need for a comprehensive and reliable system.<br>On the other side of this issue, there are rural residents with urgent needs who do not know how or where to seek support, while at the same time responsible authorities often fail to adequately address these problems.</p>`],
    ["*H*ow is it solved today?", `<p>At present, public donations are mainly collected through charities; however, this approach has its own challenges, such as a lack of transparency in financial inflows and outflows and the absence of mechanisms that allow for very small (minimum) monetary donations.<br>Similarly, addressing the problems and needs of villages is typically handled by village councils or local leaders, but these methods also face significant limitations, including insufficient attention to villagers’ issues, budget constraints, and limited capacity to effectively respond to existing needs.</p>`],
    ["*W*hen and where does the problem occur?", ul(["In rural communities", "When a problem or issue arises", "During efforts to improve welfare and development in the village", "When providing monetary and non-monetary assistance to people in need"])],
    ["*W*HO?", ul(["Individuals who are willing to provide humanitarian aid but do not know of any reliable or trustworthy channel to do so.", "Individuals who prefer to contribute to humanitarian aid in non-monetary forms.", "Rural residents who are in need of humanitarian assistance.", "Rural communities that require support and follow-up to address their ongoing problems and challenges."])],
  ];
  const HMW_Q = [
    "How can we provide a trustworthy and reliable platform that allows rural residents to submit their requests for assistance, needs, and problems?",
    "How can we create a system that ensures rural communities’ needs and challenges are properly addressed and followed up?",
    "How can we develop a comprehensive, integrated, transparent, and reliable platform that enables donors to register and publish verified needs and aid requests?",
    "How can we build a comprehensive, integrated, transparent, and trustworthy platform for donors who wish to provide both monetary and non-monetary assistance?",
    "How can we create a comprehensive, integrated, transparent, and reliable system that allows donors to make even very small monetary contributions comfortably and without hesitation?",
    "How can we provide a comprehensive, integrated, transparent, and trustworthy platform that allows donors to track how their financial contributions are used and which specific needs they address?",
    "How can we develop a comprehensive, integrated, transparent, secure, and fully traceable system that donors can confidently rely on for humanitarian contributions?",
  ];
  const PROBLEM = [
    "How might we create a comprehensive, integrated, transparent, and trustworthy platform for donors who want to use a secure, reliable, and fully traceable system for public humanitarian contributions?",
    "How might we create a platform that enables rural communities to have their needs and problems effectively addressed and supported?",
  ];

  const PERSONAS = [
    { img: "persona-1.png", name: "Zeynab Salehi",
      facts: [["Name", "Zeynab Salehi"], ["Marital Status", "Single"], ["Age", "35"], ["Occupation", "Computer Engineer and Software Developer at a software development company"], ["Location", "East Tehran"], ["Social Class", "Middle class"]],
      jobs: ["Making monetary donations in both small and large amounts", "Searching for a trustworthy and reliable charitable organization"],
      pains: ["The absence of a truly comprehensive platform that I can trust to make donations without fear or concern.", "The lack of a system that allows me to provide non-monetary support and offer my skills and abilities voluntarily and free of charge."],
      gain: ["I have always dreamed of helping people in need to the best of my ability—whether through monetary or non-monetary support—and I derive immense joy and an indescribably positive feeling from doing so."],
      influencer: ["Her available budget plays a decisive role in her ability to contribute.", "Her personality traits significantly influence her decision-making.", "Friends, acquaintances, and people around her influence her choices.", "Other donors and philanthropists also affect her motivation and behavior."],
      trends: ["Current market inflation"],
      scenario: "For example, I have often experienced street fundraisers stopping me on the street or coming to my door to collect donations. Personally, I am someone who trusts very slowly—it takes time for a person or situation to feel safe to me—so I do not trust any of them at all. Still, I often feel sympathy and end up donating, but deep down I do not feel good about it. In the end, they usually give a receipt that I am not even sure is genuine or fake.<br>Overall, this situation feels completely unreliable and non-transparent. You cannot truly trust them, and you have no idea whether your money actually reaches people in need or is instead used for other purposes." },
    { img: "persona-2.png", name: "Kobra Mahdavi",
      facts: [["Name", "Kobra Mahdavi"], ["Marital Status", "Widowed"], ["Age", "80"], ["Occupation", "Homemaker, farmer, and egg seller in the village"], ["Location", "Rural area"], ["Social Class", "Low-income"]],
      jobs: ["Purchasing water for irrigating the village", "Visiting the village head (Kadkhoda) and village councils to follow up on the issue that has arisen"],
      pains: ["Water shortage", "Lack of adequate medical equipment and a proper healthcare clinic in the village", "Insufficient educational facilities in the village", "Failure of city and village councils to address existing rural problems", "Lack of follow-up and enforcement regarding illegal activities in the village"],
      gain: ["The ability to distinguish between trustworthy and untrustworthy individuals—those who prioritize collective benefit and do not destroy shared water resources out of self-interest."],
      influencer: ["Neglect by authorities toward existing issues and problems in rural areas", "Lack of proper attention and failure to adequately address ongoing rural challenges"],
      trends: ["Neglect by authorities toward existing issues and problems in rural areas", "Insufficient action and negligence in addressing ongoing rural challenges"],
      scenario: "Regarding the water shortage issue, the villagers themselves are not entirely without responsibility. If everyone had been satisfied with their fair share from the spring and had not drilled so many illegal wells in their yards—especially those living in the upper part of the village—the spring’s water would not have decreased and would have been sufficient for all residents. In that case, the entire village could have used the water equally and fairly.<br>However, due to these illegal wells, the spring has dried up, and now we are forced to buy water from one of the villagers who has drilled a well in their yard and has access to a large amount of water. What is striking is that not only is the well illegal, but that person is also profiting from it—essentially turning it into a private business." },
  ];

  // Persona 01 = Zeynab (donor), Persona 02 = Kobra (rural resident)
  const EMPATHY = [
    { hear: ["“Don’t trust these charities. How do you know they actually spend your money on good causes? They’re not trustworthy at all.”", "“Why do you stress yourself so much for others? Just live your own life. Do you really think people will appreciate you for your help?”", "“This charity seems more credible to me, but you should still check it yourself.”"],
      think: ["Strong desire to help people in need, both financially and through skills", "Need for a trustworthy and reliable platform to give with confidence", "Helping others brings a strong sense of meaning and positive emotion", "Belief that even small contributions can create significant impact", "Deep concern about poverty, unemployment, and rural-to-urban migration"],
      see: ["People who are distressed by the lack of basic facilities and essential resources.", "People whose lives can be significantly transformed with even the smallest amount of support."],
      say: ["She occasionally donates to charities, but she would like her giving to be regular and structured, setting aside a monthly amount—even if it is very small—for this purpose."],
      pains: "<p>Seeing people suffer causes me deep distress—especially rural residents—because my own family also lives in a village, and this makes the situation particularly painful for me.</p>",
      gains: ul(["She deeply enjoys the very pleasant feeling that comes from helping to remove people’s obstacles, problems, and unmet needs, and finds great satisfaction in doing so."]) },
    { hear: ["“This country is full of problems—do you really expect everyone to drop everything and come deal with your issues?”", "“Honestly, our situation isn’t that bad. You’re being overly sensitive. Having the water turned on once every three days should be enough for you.”", "“Illegal wells have plundered underground water resources.”"],
      think: ["Feels deep distress and frustration over the ongoing water shortage", "Fears that years of hard work may be lost", "Feels unheard and unsupported due to the lack of effective authorities", "Experiences a strong sense of injustice and inequality in water access", "Feels helpless but hopeful that someone compassionate might intervene"],
      see: ["The yard and garden have dried up", "The spring has dried up", "Illegal wells", "Unauthorized sale of underground water resources", "Inequality and injustice in water distribution"],
      say: ["There is nothing I can do except feel frustrated and curse those responsible for these problems.", "Going to the spring and bringing back water, even though it is very minimal.", "Filling containers and household vessels with water once every three days.", "Practicing extreme water conservation in daily usage."],
      pains: "<p>Unfair and inequitable distribution of water resources</p>",
      gains: ul(["I deeply love living in the village and do not want to lose it. I have spent my entire life here—I was born here, grew up here, got married, and raised my children here—and I truly love its climate and environment.", "I would not survive in the city; I would die very quickly there."]) },
  ];

  const HMW = [
    ["design a comprehensive, integrated, secure, and trustworthy platform", "people who want to provide humanitarian aid,", "they can feel confident and assured about where and how their contributions are being used?"],
    ["design a platform", "humanitarian aid", "people who want to help can easily contribute and experience the positive feelings and fulfillment that come from supporting others?"],
    ["design a platform", "humanitarian aid for rural communities in need", "their needs and problems can be effectively identified and addressed?"],
    ["design a platform", "monetary humanitarian aid", "people who want to help can easily provide financial support to those in need?"],
    ["design a platform", "non-monetary humanitarian aid", "people who want to help can support others by contributing their skills, abilities, and resources?"],
  ];
  const IDEAS = [
    "Designing a comprehensive and trustworthy application for collecting humanitarian donations.",
    "Establishing local volunteer groups or teams in each village to help collect and organize humanitarian aid.",
    "Raising awareness among rural residents about official channels for addressing and following up on their issues.",
    "Visiting villages to assess conditions and gather reports on their current situation and needs.",
    "Collecting donations in urban areas on behalf of rural communities in need.",
    "Engaging with existing charities to create a dedicated category focused on supporting villages and vulnerable rural residents.",
  ];

  // Style guide values from Figma
  const SAMPLE = "متن آزمایشی";
  const W6 = [["Light", 300], ["Regular", 400], ["Semibold", 600], ["Bold", 700], ["ExtraBold", 800], ["ExtraBlack", 900]];
  const HEADINGS = [["H1", 40], ["H2", 32], ["H3", 24], ["H4", 20], ["H5", 18], ["H6", 16]];
  const BODY = [["XL", "LG", 18], ["LG", "MD", 16], ["MD", "SM", 14], ["SM", "SM", 12]];
  const CAPTION = [["XL", "LG", 16], ["LG", "MD", 14], ["MD", "SM", 12], ["SM", "SM", 10]];
  const tile = (tag, w, wv, size) => `
    <div class="mh-tt"><small>${w}</small>
      <div class="mh-tile"><span><i>${tag}</i>${w}-${size}-180%</span><b dir="rtl" style="font-weight:${wv};font-size:${(6.5 + size * .1).toFixed(1)}px">${SAMPLE}</b></div></div>`;
  const tcol = (title, tag, size, weights) => `<div class="mh-tcol"><h5>${title}</h5>${weights.map(([w, v]) => tile(tag, w, v, size)).join("")}</div>`;

  const HOME = "صفحه اصلی";
  const STATES = ["نرمال", "هاور / پرس", "فعال (اکتیو)", "فرم انیمیت", "غیر فعال"];
  const STATE_CLS = ["normal", "hover", "active", "loading", "disabled"];
  const ICONS = [["both", "آیکون + ابتدا و انتها"], ["start", "آیکون + ابتدا"], ["end", "آیکون + انتها"], ["none", "آیکون + هیچکدام"]];
  const HOUSE = `<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 5.2 6 2l4 3.2V10H2z" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linejoin="round"/></svg>`;
  const btn = (kind, st, ic) => {
    const inner = st === "loading" ? `<i class="mh-spin"></i>${HOME}` : `${ic === "both" || ic === "start" ? HOUSE : ""}${HOME}${ic === "both" || ic === "end" ? HOUSE : ""}`;
    return `<span class="mh-btn ${kind} ${st}">${inner}</span>`;
  };
  const DEVICES = [["دسکتاپ", "d"], ["تبلت", "t"], ["موبایل", "m"]];

  const WF = [["login", "Login/Signup Screen"], ["home", "Home Screen"], ["amount", "Select Amount Screen"], ["invoice", "Invoice Details Screen"],
    ["profile", "Profile Screen"], ["profile-info", "Information Profile Screen"], ["wallet", "Wallet Screen"], ["my-help", "My Help Screen"]];

  // ---------- pieces ----------
  const pie = (s, n) => {
    const r = 62, c = 62, rad = d => d * Math.PI / 180;
    const pt = (d, rr) => `${(c + rr * Math.cos(rad(d))).toFixed(2)} ${(c + rr * Math.sin(rad(d))).toFixed(2)}`;
    const slices = s.arcs.map(([a, b], k) => {
      const lo = Math.min(a, b), hi = Math.max(a, b);
      const big = hi - lo > 180 ? 1 : 0;
      return { k, lo, hi, d: `M${c} ${c}L${pt(lo, r)}A${r} ${r} 0 ${big} 1 ${pt(hi, r)}Z` };
    });
    const labels = slices.map(({ k, lo, hi }) => {
      const m = rad((lo + hi) / 2), rr = r * .7;
      return `<span style="left:${(c + rr * Math.cos(m)).toFixed(1)}px;top:${(c + rr * Math.sin(m)).toFixed(1)}px">${s.lab[k]}%</span>`;
    }).join("");
    return `
      <div class="mh-pie-col">
        <div class="mh-pie" role="img" aria-label="Question ${n}: ${s.o.map(([l, v], k) => `${"ABCD"[k]}) ${l} ${v}%`).join(", ")}">
          <svg viewBox="0 0 124 124" aria-hidden="true">${slices.map(({ k, d }) => `<path d="${d}" fill="#6951AE" fill-opacity="${OPA[k]}"/>`).join("")}<circle cx="62" cy="62" r="23" fill="#0C0E10"/></svg>
          <em>${n}</em>${labels}
        </div>
        <div class="mh-legend">${"ABCD".split("").map((L, k) => `<span title="${s.o[k][0]}"><i class="o${k}"></i>Option ${L}</span>`).join("")}</div>
        ${BRACE}
        <p>${s.i}</p>
      </div>`;
  };

  const personaBlock = (p, i) => `
    <h4 class="mh-ctitle"><b>${i + 1}.&nbsp; Persona</b> 0${i + 1}</h4>
    <div class="mh-persona">
      <div class="mh-pcol">
        <div class="mh-pbox"><h5>${B("*D*escription *of* *p*ersona")}</h5><p class="mh-facts">${p.facts.map(([k, v]) => `${k}: ${v}`).join("<br>")}</p></div>
        <div class="mh-pbox"><h5>${B("*I*nfluencer")}</h5>${ul(p.influencer)}</div>
        <div class="mh-pbox"><h5>${B("*T*rends")}</h5>${ul(p.trends)}</div>
      </div>
      <div class="mh-pimg"><img src="${IMG}${p.img}" alt="${p.name} — persona illustration" loading="lazy"></div>
      <div class="mh-pcol">
        <div class="mh-pbox"><h5>${B("*J*obs to be done")}</h5>${ul(p.jobs)}</div>
        <div class="mh-pbox"><h5>${B("*P*roblems / *P*ains")}</h5>${ul(p.pains)}</div>
        <div class="mh-pbox"><h5>${B("*G*ain")}</h5>${ul(p.gain)}</div>
      </div>
    </div>
    <div class="mh-card mh-usecase"><h5>${B("*U*se cases / *A*pplication senario")}</h5><p>${p.scenario}</p></div>`;

  const empathyBlock = (e, i) => `
    <h4 class="mh-ctitle"><b>${i + 1}.&nbsp; Empathy</b> map of <b>Persona</b> 0${i + 1}</h4>
    <div class="mh-emp">
      ${[["*H*earing", e.hear], ["*T*hinking and *F*eeling", e.think], ["*S*eeing", e.see], ["*S*aying and *D*oing", e.say]].map(([t, l]) => `
      <div class="mh-emp-col"><h5>${B(t)}</h5><div class="mh-emp-box">${ul(l)}</div></div>`).join("")}
    </div>
    <div class="mh-pg">
      <div class="mh-card"><h5>${B("*P*ains")}</h5><div>${e.pains}</div></div>
      <div class="mh-card"><h5>${B("*G*ains")}</h5><div>${e.gains}</div></div>
    </div>`;

  const phase = (num, title) => `<div class="mh-ph"><span class="mh-badge">${num}</span><h2>${B(title)}</h2></div>`;
  const sub = (title, cls = "") => `<div class="mh-sh ${cls}"><i></i><h3>${B(title)}</h3></div>`;
  const phones = (prefix, labelled) => `
    <div class="mh-phones${labelled ? " lab" : ""}">${WF.map(([f, label]) => `
      <figure>${labelled ? `<figcaption><span>${label}</span></figcaption>` : ""}
        <img src="${IMG}${prefix}-${f}.jpg" alt="${prefix === "wf" ? "Wireframe" : "Final UI"} — ${label}" loading="lazy" width="206" height="459">
      </figure>`).join("")}
    </div>`;

  window.CS_BLOCKS = Object.assign(window.CS_BLOCKS || {}, {
    "mehrino-intro": () => `
      <div class="mh-root">
        <section class="mh-about">
          <h2 class="mh-h">${B("*About* Project")}</h2>
          <div class="mh-about-p">${ABOUT.map(t => `<p>${t}</p>`).join("")}</div>
          <div class="mh-dt">
            <div>
              <h2 class="mh-h">${B("Project *Duration*")}</h2>
              <div class="mh-stats"><div><b>4</b><span>weeks</span></div><div><b>+10</b><span>screens</span></div></div>
            </div>
            <div class="mh-tools-c">
              <h2 class="mh-h">${B("*Tools* Used")}</h2>
              <div class="mh-tools">
                <div><img src="${IMG}tool-figma.png" alt="" width="46" height="46"><span>Figma</span></div>
                <div><img src="${IMG}tool-chatgpt.png" alt="" width="40" height="40"><span>ChatGPT</span></div>
                <div><img src="${IMG}tool-gforms.png" alt="" width="40" height="40"><span>Google Form</span></div>
              </div>
            </div>
          </div>
        </section>
        <div class="mh-sep l" aria-hidden="true"></div>
        <section class="mh-process">
          <h2 class="mh-h">${B("Design *Process*")}</h2>
          <ol class="mh-steps">${PROCESS.map(([n, t, subs, style], k) => `
            ${k ? `<li class="mh-chev" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M9 5.5 15.5 12 9 18.5" fill="none" stroke="#FAFAFA" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg></li>` : ""}
            <li class="mh-step"><span class="mh-sn ${style}">${n}</span><h4>${t}</h4>${subs.map(s => `<p>${s}</p>`).join("")}</li>`).join("")}
          </ol>
        </section>
        <div class="mh-sep r" aria-hidden="true"></div>
      </div>`,

    "mehrino-phases": () => `
      <div class="mh-root mh-tl">
        ${phase("01", "*Under*stand")}

        ${sub("*1.1 Interview* for empathy")}
        <div class="mh-lane">
          <div class="mh-int">
            <div class="mh-card mh-subject">
              <h4>${B("*S*ubject")}</h4>
              <p><b>Designing an application to organize humanitarian aid for rural communities</b><br>with a core focus on enhancing trust and transparency in financial inflows and outflows.<br>The platform supports minimum donation amounts and enables both monetary and non-monetary contributions.</p>
              <img src="${IMG}subject-sketch.jpg" alt="Line sketch of a village street" loading="lazy">
            </div>
            ${INTERVIEWEES.map(p => `
            <div class="mh-card mh-desc">
              <span class="mh-dnum">${p.n[0]}<small>${p.n.slice(1)}</small></span>
              <h4><b>D</b>escription <small>of the persona interviewed</small></h4>
              <img src="${IMG}${p.av}" alt="" loading="lazy">
              <dl>
                <div><dt>Name</dt><dd>${p.name}</dd></div>
                <div><dt>Age</dt><dd>${p.age}</dd></div>
                <div><dt>Personal data</dt><dd>${p.job}</dd></div>
                <div><dt>Place / date of the interview</dt><dd>${p.where} | 2025/23/11</dd></div>
              </dl>
            </div>`).join("")}
          </div>

          <div class="mh-card mh-qmap">
            <h4>${B("*Q*uestion *M*ap *O*f")} <small>Persona <b>2.1 &amp; 2.2</b></small></h4>
            ${ul(Q_DONORS)}
            <h4>${B("*Q*uestion *M*ap *O*f")} <small>Persona <b>2.3 &amp; 2.4</b></small></h4>
            ${ul(Q_RURAL)}
          </div>

          <div class="mh-card mh-ins">
            <span class="mh-ghost" aria-hidden="true">4</span>
            <h4 class="mh-ct">${B("*I*nsight *O*f *I*nterview")}</h4>
            <div class="mh-ins-grid">${INSIGHTS.map(p => `
              <div>
                <h5>persona <b>${p.n}</b></h5><span class="mh-who">${p.who}</span>
                <h6>${B("*P*ain")}</h6><div class="mh-ibox pain">${ul(p.pain)}</div>
                <h6>${B("*G*ain")}</h6><div class="mh-ibox">${ul(p.gain)}</div>
              </div>`).join("")}
            </div>
          </div>
        </div>

        ${sub("*1.2 Survey* for empathy", "s12")}
        <div class="mh-lane">
          <div class="mh-card mh-sq">
            <h4 class="mh-ct">${B("*Q*uestion *M*ap")}</h4>
            <ol>${SURVEY.map((s, n) => `
              <li><h5><span>${n + 1}.</span> ${s.q}${s.multi ? `<small>(You may select more than one option)</small>` : ""}</h5>
                ${ul(s.o.map(([l], k) => `${"ABCD"[k]}) ${l}`))}</li>`).join("")}
            </ol>
          </div>
          <div class="mh-card mh-ana">
            <span class="mh-ghost" aria-hidden="true">2</span>
            <h4 class="mh-ct">${B("*A*nalysis")}</h4>
            <div class="mh-pies">${SURVEY.map((s, n) => pie(s, n + 1)).join("")}</div>
          </div>
          <div class="mh-card mh-sins">
            <span class="mh-ghost" aria-hidden="true">3</span>
            <h4 class="mh-ct">${B("*I*nsight")}</h4>
            ${SURVEY_INSIGHT.map(t => `<p>${t}</p>`).join("")}
          </div>
        </div>

        ${sub("*1.3 Problem* Statement", "s13")}
        <div class="mh-lane">
          <h4 class="mh-ctitle prep">${B("*P*reparatory *Q*uestions")}</h4>
          <div class="mh-prep">${PREP.map(([t, body]) => `<div><h5>${B(t)}</h5><div class="mh-pq">${body}</div></div>`).join("")}</div>
          <h4 class="mh-ctitle hmw">“<b>How might we</b>…” question</h4>
          <div class="mh-hmwq">${HMW_Q.map(q => `<p>${q}</p>`).join("")}</div>
          <h4 class="mh-ctitle ps"><b>Problem</b> Statement</h4>
          <div class="mh-ps">${PROBLEM.map(q => `<p>${q}</p>`).join("")}</div>
        </div>

        ${phase("02", "*Observe*")}
        ${sub("*2.1 Persona*/user profiles")}
        <div class="mh-lane mh-personas">${PERSONAS.map(personaBlock).join("")}</div>
        ${sub("*2.2 Empathy* map", "s22")}
        <div class="mh-lane mh-emps">${EMPATHY.map(empathyBlock).join("")}</div>

        ${phase("03", "*Define*")}
        ${sub("*3.1 “How might we…”* question")}
        <div class="mh-lane">
          <div class="mh-hmw">${HMW.map(([d, f, s]) => `
            <div><b>How might we</b><p>${d}</p><b>for</b><p>${f}</p><b>so that</b><p>${s}</p></div>`).join("")}
          </div>
        </div>

        ${phase("04", "*Ideate*")}
        ${sub("*4.1 B*rainstorming")}
        <div class="mh-lane"><div class="mh-ideas">${IDEAS.map(t => `<p>${t}</p>`).join("")}</div></div>
        ${sub("*4.2* 2x2 matrix", "s42")}
        <div class="mh-lane">
          <div class="mh-matrix">
            <div class="mh-ylab"><span>High</span><b>Value</b><span>Low</span></div>
            <div class="mh-plot">
              <div class="mh-quads">
                <div>${["Raising awareness among rural residents and informing them about available ways to follow up on their issues through village heads (Kadkhoda), village councils, municipalities, or city councils.", "Engaging with existing charities to create a dedicated category focused on supporting villages and vulnerable rural residents."].map(t => `<p>${t}</p>`).join("")}</div>
                <div>${["Designing a comprehensive and trustworthy application for collecting humanitarian donations.", "Visiting villages to assess conditions and gather reports on their current situation and needs.", "Establishing local volunteer groups or teams in each village to help collect and organize humanitarian aid."].map(t => `<p>${t}</p>`).join("")}</div>
                <div></div>
                <div><p>Collecting donations in urban areas on behalf of rural communities in need.</p></div>
              </div>
              <div class="mh-xlab"><span>High</span><b>Effort</b><span>Low</span></div>
            </div>
          </div>
          <h4 class="mh-ctitle sel">${B("*S*elected *I*dea")}</h4>
          ${BRACE}
          <p class="mh-selected">Designing a comprehensive and trustworthy application for collecting humanitarian donations.</p>
        </div>

        ${phase("05", "*Prototype*")}
        ${sub("*5.1 S*tyle *G*uide", "s5")}
        <div class="mh-lane">
          <div class="mh-sg">
            <h4>Typography</h4><p class="mh-sg-sub">Yekan Bakh</p>
            <h6>Heading</h6>
            <div class="mh-tgrid">${HEADINGS.map(([t, s]) => tcol(t, t, s, W6)).join("")}</div>
            <h6>Body</h6>
            <div class="mh-tgrid">${BODY.map(([t, tag, s]) => tcol(t, tag, s, W6.slice(0, 5))).join("")}</div>
            <h6>Caption</h6>
            <div class="mh-tgrid">${CAPTION.map(([t, tag, s]) => tcol(t, tag, s, W6.slice(0, 5))).join("")}</div>
          </div>
          <div class="mh-sg">
            <h4>Color Guidance</h4>
            <h6 class="big">Base Color</h6>
            <div class="mh-sw">
              <div><i style="background:#003647"></i><b>Dominant Color</b><span>#003647</span></div>
              <div><i style="background:#0B1517"></i><b>Complement Color</b><span>#003647 · 10%</span></div>
              <div><i style="background:#E6E6E6"></i><b>Accent Color</b><span>#E6E6E6</span></div>
            </div>
          </div>
          <div class="mh-sg mh-bt">
            <h4>Button</h4>
            <div class="mh-bscroll" dir="rtl">
              <div class="mh-bm" dir="rtl">
                <div class="mh-bhead"><span></span><span>Primary</span><span>Secondary</span><span>Link</span></div>
                ${DEVICES.map(([dev, cls]) => `
                <div class="mh-bdev ${cls}">
                  <div class="mh-brow mh-bcols"><b>${dev}</b>${["primary", "secondary", "link"].map(() => ICONS.map(([, l]) => `<span>${l}</span>`).join("")).join("")}</div>
                  ${STATES.map((st, si) => `
                  <div class="mh-brow"><span class="mh-bst">${st}</span>${["primary", "secondary", "link"].map(k => ICONS.map(([ic]) => `<span>${btn(k, STATE_CLS[si], ic)}</span>`).join("")).join("")}</div>`).join("")}
                </div>`).join("")}
              </div>
            </div>
          </div>
        </div>

        ${sub("*5.2 W*ireframe", "s5 s52")}
        <div class="mh-lane">${phones("wf", true)}</div>

        ${sub("*5.3 Final* UI", "s5 s53")}
      </div>`,

    "mehrino-final": () => `<div class="mh-root"><div class="mh-lane mh-final">${phones("ui", false)}</div></div>`,
  });

  const font = document.createElement("link");
  font.rel = "stylesheet";
  font.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&family=Rammetto+One&family=Roboto:wght@300;400;500;600;700;800;900&family=Rubik:wght@900&family=Vazirmatn:wght@300;400;600;700;800;900&display=swap";
  document.head.appendChild(font);

  const s = document.createElement("style");
  s.textContent = `
    html,body{overflow-x:clip}
    .cs-media:has(> .mh-root){padding:0;border:0}
    .cs-media:has(> .mh-root) > .cs-media-head{display:none}
    .cs-story:has(.mh-root){padding-bottom:40px}
    .mh-root section{padding:0}
    .mh-root{--b:#0F518F;--nv:#082C4E;--c2:#C2C2C2;--ink:#FAFAFA;--card:rgba(8,44,78,.03);--edge:rgba(255,255,255,.26);--edge2:rgba(255,255,255,.16);
      position:relative;width:1216px;
      font-family:Roboto,system-ui,sans-serif;color:var(--ink);letter-spacing:0;line-height:1.5;font-size:16px}
    .mh-root :is(h2,h3,h4,h5,h6){color:var(--ink);letter-spacing:0;line-height:1.2;font-weight:300;margin:0}
    .mh-root b{font-weight:800}
    .mh-root img{max-width:100%}
    .mh-root ul{list-style:none;margin:0;padding:0}
    .mh-ul li{position:relative;padding-left:1.05em}
    .mh-ul li::before{content:"•";position:absolute;left:.15em;top:0}

    /* intro */
    .mh-h{font-size:34px;font-weight:400!important;line-height:40px!important}
    .mh-about-p{margin-top:26px;font-size:20px;line-height:30px;text-align:justify;hyphens:auto}
    .mh-dt{display:grid;grid-template-columns:539px 1fr;margin-top:96px}
    .mh-stats,.mh-tools{display:flex;margin-top:63px}
    .mh-stats{gap:88px}.mh-tools{gap:45px}
    .mh-stats div,.mh-tools div{display:flex;flex-direction:column;align-items:center;gap:14px}
    .mh-stats b{font-size:40px;font-weight:700;line-height:47px}
    .mh-stats span,.mh-tools span{font-size:24px;font-weight:300;line-height:28px}
    .mh-tools img{height:46px;width:auto;object-fit:contain}
    .mh-tools div{gap:21px}
    .mh-sep{height:4px;background:repeating-linear-gradient(90deg,var(--b) 0 10px,transparent 10px 20px)}
    .mh-sep.l{margin:129px 0 0 0;width:68.75%}
    .mh-sep.r{margin:98px 0 0 34%;width:66%}
    .mh-process{margin-top:52px}
    .mh-steps{list-style:none;display:flex;justify-content:space-between;align-items:flex-start;margin:55px 0 0;padding:0}
    .mh-step{flex:0 1 189px;text-align:center;display:flex;flex-direction:column;align-items:center}
    .mh-sn{height:100px;display:grid;place-items:center;font:900 50px/1 Rubik,sans-serif;letter-spacing:-.02em}
    .mh-sn.o{color:#0B1C2E;-webkit-text-stroke:2px #1460AE}
    .mh-sn.s{color:#FAFAFA;-webkit-text-stroke:1px #0D0D0D}
    .mh-step h4{font-size:24px;font-weight:600!important;line-height:28px!important;margin-top:20px!important}
    .mh-step p{font-size:16px;font-weight:300;line-height:19px;margin-top:12px}
    .mh-step h4 + p{margin-top:24px}
    .mh-chev{flex:0 0 36px;height:100px;display:grid;place-items:center}
    .mh-chev svg{width:36px;height:36px}

    /* timeline + phase headers */
    .mh-tl{margin-top:97px;padding-bottom:1px}
    .mh-tl::before{content:"";position:absolute;left:54px;top:140px;bottom:23px;width:4px;background:repeating-linear-gradient(180deg,var(--b) 0 10px,transparent 10px 20px)}
    .mh-ph{position:relative;display:flex;align-items:center;margin-top:230px;min-height:120px}
    .mh-tl > .mh-ph:first-child{margin-top:0}
    .mh-badge{position:relative;z-index:1;width:116px;margin-left:-2px;text-align:center;font:900 90px/1 Rubik,sans-serif;letter-spacing:-.03em;color:#0E549C;-webkit-text-stroke:7px #FAFAFA;paint-order:stroke fill}
    .mh-ph h2{font-size:50px;font-weight:400!important;margin-left:55px!important;line-height:59px!important}
    .mh-sh{position:relative;display:flex;align-items:center;min-height:41px;padding-left:98px;margin:95px 0 41px}
    .mh-sh i{position:absolute;left:43px;top:50%;width:26px;height:26px;margin-top:-13px;border-radius:50%;background:var(--nv)}
    .mh-sh h3{font-size:35px;font-weight:300!important;line-height:41px!important}
    .mh-sh.s12{margin-top:73px}
    .mh-sh.s13{margin-top:182px}
    .mh-sh.s22{margin-top:200px}
    .mh-sh.s42{margin-top:116px}
    .mh-sh.s5{padding-left:118px}
    .mh-sh.s52{margin-top:227px}
    .mh-sh.s53{margin-top:330px;margin-bottom:0}
    .mh-lane{position:relative;margin-left:72px}
    .mh-card{position:relative;background:var(--card);border:1px solid var(--edge);border-radius:20px}
    .mh-ghost{position:absolute;left:15px;top:16px;font:100px/1 "Rammetto One",sans-serif;color:rgba(250,250,250,.1);pointer-events:none}
    .mh-ct{position:relative;font-size:30px;line-height:35px!important}
    .mh-ct b{font-weight:700}

    /* 1.1 interviews */
    .mh-int{display:grid;grid-template-columns:448fr 332fr 332fr;grid-template-rows:267px 267px;gap:16px}
    .mh-subject{grid-row:span 2;overflow:hidden;padding:69px 22px 0 29px;color:var(--c2);font-size:14px;line-height:21px}
    .mh-subject h4{font-size:30px;line-height:35px!important;margin:0 0 13px 9px!important}
    .mh-subject h4 b{font-weight:700}
    .mh-subject img{position:absolute;left:2px;right:2px;bottom:0;width:calc(100% - 4px);height:auto}
    .mh-desc{padding:128px 18px 0 19px;color:var(--c2)}
    .mh-dnum{position:absolute;z-index:0;left:17px;top:24px;font:80px/1 "Rammetto One",sans-serif;color:rgba(194,194,194,.14);letter-spacing:-.02em;pointer-events:none}
    .mh-dnum small{font-size:50px}
    .mh-desc h4{position:absolute;left:26px;top:76px;font-size:30px;line-height:35px!important;color:var(--c2)!important;white-space:nowrap}
    .mh-desc h4 b{font-weight:700}
    .mh-desc h4 small{font-size:12px;font-weight:300}
    .mh-desc img{position:absolute;right:8px;top:4px;width:43px;height:83px;object-fit:cover;border-radius:100px}
    .mh-desc dl{display:flex;flex-direction:column;gap:17px;margin:0}
    .mh-desc dl div{display:flex;justify-content:space-between;gap:12px;font-size:12px;line-height:14px}
    .mh-desc dt{font-weight:700} .mh-desc dd{font-weight:300;text-align:right;margin:0}
    .mh-qmap{margin-top:20px;padding:67px 26px 30px;color:var(--c2);background:rgba(8,44,78,.1)}
    .mh-qmap h4{font-size:30px;line-height:35px!important;color:var(--c2)!important}
    .mh-qmap h4 b{font-weight:700}
    .mh-qmap h4 small{font-size:20px;font-weight:300}
    .mh-qmap ul{margin:16px 0 40px -16px!important;font-size:16px;line-height:24px}
    .mh-qmap ul:last-child{margin-bottom:0!important}
    .mh-ins{margin-top:25px;padding:85px 24px 46px;background:rgba(8,44,78,.1)}
    .mh-ins .mh-ct{margin-left:2px}
    .mh-ins-grid{display:grid;grid-template-columns:repeat(4,minmax(0,228px));grid-template-rows:repeat(6,auto);gap:0 30px;margin-top:31px}
    .mh-ins-grid > div{display:grid;grid-row:span 6;grid-template-rows:subgrid;align-content:start}
    .mh-ins-grid h5{font-size:24px;line-height:28px!important}
    .mh-who{display:block;font-size:12px;color:var(--c2);margin-top:8px}
    .mh-ins-grid h6{font-size:20px;line-height:23px!important;margin:10px 0 9px!important}
    .mh-ins-grid h6 b{font-weight:700}
    .mh-ibox{background:rgba(8,44,78,.06);border:1px solid var(--edge2);border-radius:20px;padding:23px 14px 14px 18px;font-size:10px;line-height:1.5;color:var(--c2)}
    .mh-ibox.pain{min-height:227px;margin-bottom:9px}
    .mh-ibox.pain + h6{margin-top:0!important}
    .mh-ibox:not(.pain){min-height:98px;padding-top:11px}

    /* 1.2 survey */
    .mh-sq{padding:77px 26px 30px;color:var(--c2)}
    .mh-sq .mh-ct{margin-left:14px}
    .mh-sq ol{list-style:none;margin:8px 0 0;padding:0;font-family:Inter,sans-serif}
    .mh-sq ol > li + li{margin-top:16px}
    .mh-sq h5{display:inline-block;font:700 14px/21px Inter,sans-serif!important;color:var(--c2)!important;background:rgba(8,44,78,.06);border-radius:6px;padding:4px 6px 4px 1px}
    .mh-sq h5 span{display:inline-block;width:18px}
    .mh-sq h5 small{display:block;font:400 10px/12px Inter,sans-serif;padding-left:18px}
    .mh-sq ul{font:500 9.5px/15px Inter,sans-serif;margin:8px 0 0 1px!important}
    .mh-sq ul li{padding-left:9px}
    .mh-ana{margin-top:29px;padding:56px 0 26px}
    .mh-ana .mh-ct{position:absolute;left:26px;top:82px}
    .mh-pies{display:flex;flex-wrap:wrap;justify-content:center;row-gap:18px;max-width:900px;margin:0 auto}
    .mh-pie-col{width:222px;display:flex;flex-direction:column;align-items:center;text-align:center}
    .mh-pie{position:relative;width:124px;height:124px}
    .mh-pie svg{display:block;width:124px;height:124px}
    .mh-pie em{position:absolute;inset:0;display:grid;place-items:center;font:20px/1 "Rammetto One",sans-serif;font-style:normal;color:rgba(135,116,190,.9)}
    .mh-pie span{position:absolute;transform:translate(-50%,-50%);font:900 10px/1 Inter,sans-serif;color:#FFF;white-space:nowrap}
    .mh-legend{display:grid;grid-template-columns:82px 66px;row-gap:14px;margin-top:24px;font:400 11.5px/14px Inter,sans-serif;text-align:left}
    .mh-legend span{display:flex;align-items:center;gap:5px;white-space:nowrap}
    .mh-legend i{width:14px;height:14px;border-radius:50%;flex:none}
    .mh-legend .o0{background:#6951AE}.mh-legend .o1{background:#8D7BC1}.mh-legend .o2{background:#B5AAD7}.mh-legend .o3{background:#D8D2EA}
    .mh-brace{display:block;width:164px;height:21px;margin-top:13px}
    .mh-pie-col p{width:198px;margin-top:12px;font:400 10px/18px Inter,sans-serif;color:var(--ink)}
    .mh-sins{margin-top:24px;padding:91px 21px 32px 23px;font-size:16px;line-height:1.5;color:var(--ink)}
    .mh-sins .mh-ct{margin:0 0 13px 3px}
    .mh-sins p + p{margin-top:24px}

    /* 1.3 problem statement */
    .mh-ctitle{text-align:center;font-size:24px;font-weight:400!important;line-height:28px!important}
    .mh-ctitle b{font-weight:800}
    .mh-ctitle.prep{margin-top:128px}
    .mh-ctitle.prep b,.mh-ctitle.sel b,.mh-root h5 b,.mh-root h6 b{font-weight:700}
    .mh-ctitle.prep,.mh-ctitle.sel{font-weight:300!important}
    .mh-prep{display:grid;grid-template-columns:repeat(2,minmax(0,416px));justify-content:center;column-gap:40px;row-gap:40px;margin-top:42px}
    .mh-prep h5{text-align:center;font-size:16px;line-height:19px!important;color:var(--c2)!important;margin-bottom:16px!important}
    .mh-prep h5 b{font-weight:800}
    .mh-pq{height:calc(100% - 35px);background:rgba(8,44,78,.04);border:1px solid var(--edge2);border-radius:20px;padding:15px 10px 15px 10px;font-size:12px;line-height:18px;color:var(--c2);text-align:justify}
    .mh-pq ul{text-align:left;padding:10px 6px 0}
    .mh-prep > div:nth-child(-n+2) .mh-pq{min-height:307px}
    .mh-prep > div:nth-child(n+3) .mh-pq{min-height:179px}
    .mh-ctitle.hmw{margin-top:113px}
    .mh-hmwq{display:flex;flex-direction:column;align-items:center;gap:12px;margin-top:30px}
    .mh-hmwq p{width:min(730px,100%);min-height:70px;display:grid;place-items:center;padding:12px 40px;background:rgba(8,44,78,.04);border:1px solid var(--edge2);border-radius:10px;font-size:14px;line-height:21px;text-align:center}
    .mh-ctitle.ps{margin-top:59px}
    .mh-ps{display:flex;flex-direction:column;align-items:center;gap:16px;margin-top:40px}
    .mh-ps p{width:min(897px,100%);min-height:93px;display:grid;place-items:center;padding:12px 27px;background:rgba(8,44,78,.05);border:1px solid var(--edge2);border-radius:10px;font-size:16px;font-weight:500;line-height:24px;text-align:center}

    /* 02 personas */
    .mh-personas{margin-top:91px}
    .mh-personas > .mh-ctitle ~ .mh-ctitle{margin-top:150px}
    .mh-persona{display:grid;grid-template-columns:419fr 272fr 419fr;gap:16px;margin-top:28px}
    .mh-pcol{display:flex;flex-direction:column;gap:8px}
    .mh-pbox{background:rgba(8,44,78,.05);border:1px solid var(--edge2);border-radius:20px;padding:10px 18px 14px 10px;font-size:14px;line-height:21px;color:var(--c2)}
    .mh-pcol .mh-pbox:last-child{flex:1}
    .mh-root .mh-pbox h5,.mh-usecase h5,.mh-emp h5,.mh-pg h5{font-size:20px;line-height:23px;text-align:center;margin-bottom:10px}
    .mh-facts{padding-left:7px}
    .mh-pimg{display:grid;place-items:center;border:1px solid var(--edge);border-radius:20px;background:rgba(8,44,78,.05);padding:20px 0}
    .mh-pimg img{width:190px;height:auto;border-radius:100px}
    .mh-usecase{margin-top:18px;padding:20px 40px 24px;text-align:center;font-size:14px;line-height:21px;color:var(--c2);background:rgba(8,44,78,.05)}
    .mh-emps{margin-top:81px}
    .mh-emps > .mh-ctitle ~ .mh-ctitle{margin-top:164px}
    .mh-emp{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:22px;margin-top:73px}
    .mh-emp h5{margin-bottom:21px!important}
    .mh-emp-box{min-height:263px;background:rgba(8,44,78,.05);border:1px solid var(--edge2);border-radius:20px;padding:29px 22px 20px 25px;font-size:12px;line-height:18px;color:var(--c2)}
    .mh-pg{display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-top:21px}
    .mh-pg .mh-card{display:flex;align-items:center;gap:24px;min-height:113px;padding:16px 26px 16px 33px;background:rgba(8,44,78,.05);font-size:12px;line-height:15px;color:var(--c2)}
    .mh-pg .mh-card h5{margin:0!important;flex:none;width:60px;text-align:left}
    .mh-pg .mh-card > div{flex:1}
    .mh-pg .mh-card:first-child > div{text-align:center}

    /* 03 define */
    .mh-hmw{display:grid;grid-template-columns:repeat(2,minmax(0,425px));justify-content:center;gap:24px 17px;margin-top:85px}
    .mh-hmw > div{min-height:177px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;padding:14px 22px;background:rgba(8,44,78,.05);border:1px solid var(--edge2);border-radius:10px;text-align:center}
    .mh-hmw > div:last-child:nth-child(odd){grid-column:1 / -1;justify-self:center;width:min(425px,100%)}
    .mh-hmw b{font-size:12px;font-weight:700;line-height:14px}
    .mh-hmw p{font-size:10.5px;line-height:13px;color:var(--c2);margin-bottom:6px}
    .mh-hmw p:last-child{margin-bottom:0}

    /* 04 ideate */
    .mh-ideas{display:grid;grid-template-columns:repeat(2,minmax(0,452px));justify-content:center;gap:16px 27px;margin-top:54px}
    .mh-ideas p{min-height:91px;display:grid;place-items:center;padding:12px 35px;background:rgba(8,44,78,.05);border:1px solid var(--edge);border-radius:10px;font-size:15px;line-height:18px;color:var(--c2);text-align:center}
    .mh-matrix{display:grid;grid-template-columns:60px 1fr;margin:93px 0 0 96px;max-width:881px}
    .mh-ylab{display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;height:483px;padding-right:12px;font-size:16px;line-height:25px}
    .mh-ylab span{margin-left:4px}
    .mh-ylab b,.mh-xlab b{font-weight:800}
    .mh-plot{position:relative}
    .mh-quads{position:relative;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:220px 220px;gap:11px 10px;padding:0 0 32px 21px;
      background:linear-gradient(var(--b),var(--b)) 9px 0/1.5px calc(100% - 14px) no-repeat,linear-gradient(var(--b),var(--b)) 0 calc(100% - 14px)/100% 1.5px no-repeat,
        repeating-linear-gradient(180deg,transparent 0 41px,var(--b) 41px 42.5px) 3px 0/6px calc(100% - 20px) no-repeat,
        repeating-linear-gradient(90deg,transparent 0 65px,var(--b) 65px 66.5px) 9px calc(100% - 15px)/100% 7px no-repeat}
    .mh-quads::before{content:"";position:absolute;left:5px;top:-2px;border:4.5px solid transparent;border-bottom:7px solid var(--b);border-top:0}
    .mh-quads::after{content:"";position:absolute;right:-2px;bottom:10.5px;border:4.5px solid transparent;border-left:7px solid var(--b);border-right:0}
    .mh-quads > div{background:rgba(8,44,78,.05);border:1px solid var(--edge2);border-radius:20px;padding:28px 32px;display:flex;flex-direction:column;gap:18px;font-size:12px;line-height:18px;text-align:center}
    .mh-quads > div:nth-child(2){gap:10px}
    .mh-quads > div:nth-child(4){padding-top:36px}
    .mh-xlab{display:flex;justify-content:space-between;padding-left:21px;margin-top:-6px;font-size:16px;line-height:25px}
    .mh-ctitle.sel{margin-top:95px}
    .mh-matrix + .mh-ctitle + .mh-brace,.mh-ctitle.sel + .mh-brace{margin:17px auto 0}
    .mh-selected{width:min(819px,100%);min-height:110px;display:grid;place-items:center;margin:17px auto 0;padding:16px clamp(16px,13vw,148px);background:rgba(8,44,78,.05);border:1px solid var(--edge2);border-radius:20px;font-size:16px;line-height:24px;text-align:center}

    /* 05 style guide */
    .mh-sg{margin:105px 0 0 59px;width:calc(100% - 26px);background:rgba(8,44,78,.03);border:1px solid var(--edge2);border-radius:20px;padding:14px 61px 40px;font-family:Inter,sans-serif}
    .mh-sg + .mh-sg{margin-top:40px}
    .mh-sg h4{font:700 35px/63px Inter,sans-serif!important}
    .mh-sg-sub{font:300 15px/27px Inter,sans-serif;color:var(--c2)}
    .mh-sg h6{font:700 13px/24px Inter,sans-serif!important;color:var(--c2)!important;margin:28px 0 8px!important}
    .mh-sg h6.big{font:700 20px/36px Roboto,sans-serif!important;color:var(--ink)!important;margin:20px 0 16px!important}
    .mh-tgrid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));column-gap:clamp(10px,3.6vw,45px)}
    .mh-tcol h5{font:700 10.5px/18px Inter,sans-serif!important;color:var(--c2)!important;margin-bottom:6px!important}
    .mh-tt{margin-bottom:7px}
    .mh-tt > small{display:block;font:400 7.5px/12px Inter,sans-serif;color:var(--c2)}
    .mh-tile{display:flex;align-items:center;justify-content:space-between;gap:4px;min-height:22px;padding:2px 6px;background:#F0F0F0;border-radius:2px;color:#1A1A1A}
    .mh-tile span{font:400 6.5px/1.35 Inter,sans-serif;color:#555;white-space:nowrap}
    .mh-tile span i{display:block;font-style:normal}
    .mh-tile b{font-family:Vazirmatn,sans-serif;line-height:1.2;white-space:nowrap;color:#111;overflow:hidden}
    .mh-sw{display:flex;gap:30px;flex-wrap:wrap}
    .mh-sw div{width:140px;border-radius:10px;overflow:hidden;background:#FFF;display:flex;flex-direction:column}
    .mh-sw i{height:110px}
    .mh-sw b{font:600 10px/12px Inter,sans-serif;color:#1A1A1A;padding:9px 12px 2px}
    .mh-sw span{font:400 8.5px/12px Inter,sans-serif;color:#8A8A8A;padding:0 12px 14px}
    .mh-bt{padding-bottom:45px}
    .mh-bscroll{overflow-x:auto;margin-top:18px}
    .mh-bm{min-width:900px;font-family:Vazirmatn,sans-serif}
    .mh-bhead,.mh-brow{display:grid;grid-template-columns:70px repeat(12,minmax(0,1fr));align-items:center}
    .mh-bhead{grid-template-columns:70px repeat(3,minmax(0,1fr));font:700 13.3px/24px Inter,sans-serif;color:var(--c2);text-align:center;margin-bottom:14px}
    .mh-bdev{position:relative;padding-bottom:26px}
    .mh-bdev::after{content:"";position:absolute;left:0;right:70px;top:34px;bottom:12px;border:1px dashed #4F4F4F;border-right-width:1px;pointer-events:none}
    .mh-bdev + .mh-bdev::after{border-top:0;top:0}
    .mh-bdev.d::after{border-bottom:0}.mh-bdev.t::after{border-bottom:0;bottom:0}.mh-bdev.m::after{bottom:12px}
    .mh-bcols{height:34px;font-size:7.5px;color:var(--c2);text-align:center}
    .mh-bcols b{font-size:12px;font-weight:700;color:var(--ink);text-align:right}
    .mh-brow:not(.mh-bcols){height:26px}
    .mh-brow > span{display:flex;justify-content:center}
    .mh-bst{justify-content:flex-start!important;font-size:7.5px;color:var(--c2)}
    .mh-btn{display:inline-flex;align-items:center;gap:3px;height:16px;padding:0 8px;border-radius:999px;font:600 7px/1 Vazirmatn,sans-serif;white-space:nowrap;border:1px solid transparent}
    .mh-bdev.t .mh-btn{height:15px;padding:0 7px}.mh-bdev.m .mh-btn{height:14px;padding:0 6px;font-size:6.5px}
    .mh-btn svg{width:8px;height:8px}
    .mh-btn.primary{background:#003647;color:#FCFCFC}
    .mh-btn.primary.hover{background:#002A37}.mh-btn.primary.active{background:#004357}
    .mh-btn.primary.loading{background:#C4C9CB;color:#FCFCFC}.mh-btn.primary.disabled{background:#918FA3;color:#E6E6E6}
    .mh-btn.secondary{border-color:#0E6A82;color:#CFE3EA;background:transparent}
    .mh-btn.secondary:is(.hover,.active,.loading){background:#ECEAFA;color:#003647;border-color:#ECEAFA}
    .mh-btn.secondary.disabled{border-color:#918FA3;color:#918FA3}
    .mh-btn.link{color:#CFE3EA;background:transparent}
    .mh-btn.link:is(.hover,.active,.loading){background:#ECEAFA;color:#003647}
    .mh-btn.link.disabled{color:#918FA3}
    .mh-spin{width:7px;height:7px;border-radius:50%;border:1.2px solid currentColor;border-right-color:transparent;animation:mhspin 1s linear infinite}
    @keyframes mhspin{to{transform:rotate(360deg)}}

    /* wireframes / final UI */
    .mh-phones{display:grid;grid-template-columns:repeat(4,minmax(0,206px));justify-content:center;column-gap:80px;row-gap:124px}
    .mh-phones.lab{margin-top:85px;row-gap:74px}
    .mh-phones figure{margin:0}
    .mh-phones img{display:block;width:100%;height:auto}
    .mh-phones figcaption{position:relative;height:50px;display:flex;justify-content:center}
    .mh-phones figcaption span{height:22px;padding:0 14px;display:grid;place-items:center;border:1px dashed #4F4F4F;font-size:10px;font-weight:600;line-height:12px;white-space:nowrap}
    .mh-phones figcaption::after{content:"";position:absolute;left:50%;top:22px;bottom:0;border-left:1px dashed #4F4F4F}
    .mh-final{padding-top:83px;padding-bottom:40px}

    /* tablet */
    @media (max-width:700px){
      .mh-dt{grid-template-columns:1fr 1fr}
      .mh-sg{width:calc(100% - 59px)}
      .mh-sn{font-size:42px}.mh-step h4{font-size:20px}.mh-step p{font-size:14px}
      .mh-matrix{margin-left:0}
      .mh-phones{column-gap:32px}
    }
    @media (max-width:700px){
      .mh-int{grid-template-columns:1fr 1fr;grid-template-rows:auto}
      .mh-subject{grid-column:1 / -1;grid-row:auto;min-height:520px}
      .mh-desc{min-height:267px}
      .mh-ins-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
      .mh-persona{grid-template-columns:1fr 1fr}
      .mh-pimg{grid-column:1 / -1;grid-row:1}
      .mh-emp{grid-template-columns:repeat(2,minmax(0,1fr))}
      .mh-pg{grid-template-columns:1fr}
      .mh-phones{grid-template-columns:repeat(2,minmax(0,206px));column-gap:48px}
      .mh-sg{margin-left:0;width:100%;padding-left:28px;padding-right:28px}
      .mh-tgrid{grid-template-columns:repeat(3,minmax(0,1fr))}
      .mh-tgrid .mh-tcol:nth-child(n+4){margin-top:14px}
    }
    /* phone */
    @media (max-width:700px){
      .mh-root{font-size:15px}
      .mh-h{font-size:26px;line-height:32px!important}
      .mh-about-p{font-size:16px;line-height:25px;margin-top:18px;text-align:left}
      .mh-dt{grid-template-columns:1fr;gap:48px;margin-top:56px}
      .mh-stats,.mh-tools{margin-top:28px}
      .mh-tools{gap:28px}.mh-stats span,.mh-tools span{font-size:18px}.mh-stats b{font-size:34px}
      .mh-tools img{height:38px}
      .mh-sep.l{margin-top:64px}.mh-sep.r{margin-top:56px}.mh-process{margin-top:40px}
      .mh-steps{display:grid;grid-template-columns:1fr 1fr;gap:28px 12px;margin-top:28px}
      .mh-chev{display:none}
      .mh-sn{height:64px;font-size:40px}
      .mh-step h4{margin-top:8px!important}
      .mh-tl{margin-top:64px}
      .mh-tl::before{left:10px;top:86px}
      .mh-ph{margin-top:130px;min-height:80px}
      .mh-badge{width:auto;margin-left:-6px;font-size:58px;-webkit-text-stroke:5px #FAFAFA}
      .mh-ph h2{font-size:34px;margin-left:16px!important;line-height:40px!important}
      .mh-sh,.mh-sh.s5{padding-left:36px;margin:64px 0 24px}
      .mh-sh.s12,.mh-sh.s13,.mh-sh.s22,.mh-sh.s42,.mh-sh.s52,.mh-sh.s53{margin-top:72px}
      .mh-sh i{left:1px;width:22px;height:22px;margin-top:-11px}
      .mh-sh h3{font-size:24px;line-height:30px!important}
      .mh-lane{margin-left:28px}
      .mh-int,.mh-ins-grid,.mh-prep,.mh-persona,.mh-emp,.mh-hmw,.mh-ideas{grid-template-columns:minmax(0,1fr)}
      .mh-subject{min-height:0;padding:40px 18px 64%}
      .mh-desc{min-height:0;padding-bottom:20px}
      .mh-desc h4{font-size:26px}
      .mh-desc h4{white-space:normal}.mh-desc h4 small{display:block;margin-top:2px}
      .mh-qmap,.mh-sq{padding:48px 16px 24px}
      .mh-qmap h4,.mh-ct{font-size:24px}
      .mh-qmap h4 small{font-size:16px}
      .mh-qmap ul{margin-left:0!important;font-size:14px;line-height:21px}
      .mh-ins{padding:64px 16px 28px}
      .mh-ibox.pain,.mh-ibox:not(.pain){min-height:0}
      .mh-ibox{font-size:12px}
      .mh-sq ul{font-size:11px;line-height:17px}
      .mh-pie-col .mh-brace{width:80%}
      .mh-ana{padding-top:88px}
      .mh-ana .mh-ct{top:40px;left:16px}
      .mh-pie-col{width:50%}
      .mh-pie-col p{width:auto;padding:0 6px}
      .mh-legend{grid-template-columns:auto auto;column-gap:10px}
      .mh-sins{padding:64px 16px 24px;font-size:15px}
      .mh-ctitle{font-size:20px}
      .mh-ctitle.prep,.mh-ctitle.hmw{margin-top:56px}
      .mh-pq{min-height:0!important;height:auto}
      .mh-hmwq p,.mh-ps p{padding:12px 16px}
      .mh-personas,.mh-emps{margin-top:40px}
      .mh-personas > .mh-ctitle ~ .mh-ctitle,.mh-emps > .mh-ctitle ~ .mh-ctitle{margin-top:80px}
      .mh-pimg{grid-row:auto}
      .mh-usecase{padding:18px 16px}
      .mh-emp{margin-top:32px;gap:18px}
      .mh-emp h5{margin-bottom:10px!important}
      .mh-emp-box{min-height:0}
      .mh-pg .mh-card{flex-direction:column;align-items:flex-start;gap:8px;padding:16px 18px}
      .mh-pg .mh-card:first-child > div{text-align:left}
      .mh-hmw,.mh-ideas{margin-top:32px}
      .mh-matrix{margin-top:40px;grid-template-columns:44px 1fr}
      .mh-ylab{height:auto;font-size:13px}
      .mh-quads{grid-template-rows:auto auto;padding-left:14px}
      .mh-quads > div{padding:14px 8px;font-size:11px;line-height:15px;min-height:120px}
      .mh-xlab{font-size:13px;padding-left:14px}
      .mh-sg{padding:8px 16px 28px;margin-top:48px}
      .mh-sg h4{font-size:26px!important;line-height:44px!important}
      .mh-tgrid{grid-template-columns:repeat(2,minmax(0,1fr))}
      .mh-tgrid .mh-tcol:nth-child(n+3){margin-top:14px}
      .mh-sw{gap:12px}.mh-sw div{width:calc(33.3% - 8px)}.mh-sw i{height:80px}
      .mh-phones{grid-template-columns:repeat(2,minmax(0,1fr));column-gap:16px;row-gap:32px}
      .mh-phones.lab{margin-top:32px;row-gap:24px}
      .mh-phones figcaption span{padding:0 6px;font-size:9px}
      .mh-final{padding-top:40px}
    }`;
  document.head.appendChild(s);
})();

// Keep the exact Figma layout (1216px wide) and scale it down to the site's content column,
// so the page has the same left/right margins as the rest of the site. Phones get the stacked layout.
(function () {
  const s = document.createElement("style");
  s.textContent = `@media (max-width:700px){ .mh-root{width:100%!important;zoom:1!important} }`;
  document.head.appendChild(s);
  const fit = () => document.querySelectorAll(".mh-root").forEach(el => {
    if (innerWidth <= 700) { el.style.zoom = ""; return; }
    const w = el.parentElement.clientWidth;
    el.style.zoom = Math.min(1, w / 1216);
  });
  addEventListener("DOMContentLoaded", fit);
  addEventListener("load", fit);
  addEventListener("resize", fit);
})();
