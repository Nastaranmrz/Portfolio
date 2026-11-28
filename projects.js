/*
  All project data lives here. Each card on the home page and each case-study page
  (project.html?id=...) is built from this list.

  To add details to a project, fill these optional fields:
    overview:  ["paragraph", "paragraph"]
    sections:  [{ title: "The problem", body: ["paragraph"], list: ["point", "point"] }]
    figma:     "https://www.figma.com/..."
    live:      "https://..."
    stats:     [{ value: "2", label: "weeks" }]
    screens:   [{ title: "Screen name", bold: "Bold part", img: "images/screens/x.jpg" }]
  When "screens" is set, the case-study page shows these real text titles + screen images.
  Without it, the page falls back to the single long design image.
  Fields left empty are simply not shown on the page.
*/
window.PROJECTS = [
  {
    id: "erp", featured: true,
    title: "ERP Design", year: "2026", platform: "Web platform", industry: "Gov-tech",
    summary: "Unifying municipal resources, finance and health services into one platform for city staff.",
    tags: ["Research", "Information architecture", "Design system"],
    role: "UI/UX Designer", tools: "Figma, ChatGPT",
    overview: [
      "This case study outlines the development of several distinct applications for the Municipality.",
      "One of these applications is an ERP (Enterprise Resource Planning) system designed to manage the municipality’s resources and internal processes. Administrator-defined access controls grant specific permissions to relevant personnel, ensuring efficient and organized task execution within each department.",
      "Another application is Trade, which enables employees to invest in various funds through the platform, simplifying and increasing the transparency of their financial management.",
      "Additionally, the Health application is currently in the design phase. This system will be used for managing employee medical records, aiming to centralize health information and streamline access to medical histories.",
      "The overall project is still under active development and design, with further updates to be posted here as they become available.",
    ],
    sections: [],
    // Screenshots taken from the live build (nastaranmrz.github.io/ERP)
    screens: [
      { bold: "HR", title: "Employee list & profile", desc: "Search and filter staff, then open a full profile right next to the list.", img: "images/screens/erp/list.jpg" },
      { bold: "TaskManage", title: "Project board", desc: "A board for tracking each team’s tasks by status.", img: "images/screens/erp/tasks.jpg" },
      { bold: "Trade", title: "Investment funds", desc: "Employees compare funds and invest, with the price history in a side panel.", img: "images/screens/erp/invest.jpg" },
      { bold: "FormBuilder", title: "Form designer", desc: "Build forms by placing fields on a canvas, no code needed.", img: "images/screens/erp/forms.jpg" },
      { bold: "BPMS", title: "Process builder", desc: "Draw a department’s workflow as a visual process.", img: "images/screens/erp/proc.jpg" },
      { bold: "ACL", title: "Access control", desc: "Admins decide exactly what each role can see and do.", img: "images/screens/erp/acl.jpg" },
    ],
    live: "https://nastaranmrz.github.io/ERP",
  },
  {
    id: "marketplace", featured: true, designBg: "#0d0d0d",
    title: "Service Marketplace App", year: "2025", platform: "Mobile app", industry: "Services",
    summary: "A mobile app where vendors offer their services and users find and book them fast.",
    tags: ["Mobile app", "Marketplace"],
    role: "UI/UX Designer", tools: "Figma",
    overview: [
      "This application was designed to facilitate service delivery by vendors, creating an efficient platform for interaction between vendors and users. With a focus on smooth user experience and quick access to services, it enables vendors to present their offerings in an effective and professional manner.",
      "The user interface follows a minimal and user-centered design approach, allowing users to easily find the information they need at any stage of the process with just a quick glance.",
    ],
    sections: [
      { title: "Admin panel", body: ["To support efficient service management, a dedicated admin panel was also designed. It enables seamless monitoring, management, and updating of services in one central place."] },
      { title: "Result", body: ["With its emphasis on intuitive UX and fast service access, the app helps vendors deliver their services more efficiently, while users enjoy a straightforward and purposeful interaction with the platform."] },
    ],
  },
  {
    id: "admin-panel", featured: true, designBg: "#0d0d0d",
    title: "Vendor Admin Panel", year: "2025", platform: "Web app", industry: "Services",
    summary: "One clean panel for vendors to manage their services and customers.",
    tags: ["Admin panel", "UX"],
    role: "UI/UX Designer", tools: "Figma",
    overview: [
      "The admin panel of this application was designed with special attention to smooth user experience and visual appeal. Every user flow and process has been carefully crafted to ensure that interacting with the panel is simple, fast, and enjoyable.",
      "Vendors can easily add, edit, or manage their services through the panel, and all updates are instantly and seamlessly reflected in the user-facing app. The panel’s clean and intuitive interface supports efficient service management, helping vendors optimize their operations with minimal complexity.",
    ],
    sections: [],
  },
  {
    id: "job-search", featured: true, designBg: "#0d0d0d",
    title: "Karyar — AI Job Search", year: "2026", platform: "Web app", industry: "Careers",
    summary: "An AI assistant that finds, filters and applies to jobs for you.",
    tags: ["AI", "Product design"],
    role: "UI/UX Designer", tools: "Figma",
    overview: ["A product that uses AI to automate the repetitive parts of searching and applying for jobs."],
    sections: [],
  },
  {
    id: "education", featured: true, designBg: "#0d0d0d",
    title: "Educational App Redesign", year: "2025", platform: "Mobile app", industry: "Education",
    summary: "Redesigning a course-registration app with a clearer, friendlier interface.",
    tags: ["Redesign", "Mobile app"],
    role: "UI/UX Designer", tools: "Figma",
    overview: [
      "This application was originally developed to manage user registration for an educational program, but it suffered from a poor and ineffective user interface and experience. I was assigned to redesign the app with the goal of improving both its UI and UX.",
    ],
    sections: [
      { title: "Goal", body: ["Create a visually appealing and user-friendly design that offers a smooth, pleasant, yet highly functional experience — making interaction both enjoyable and efficient."] },
      { title: "Approach", body: ["I applied minimal, user-centered design principles to simplify navigation and improve access to key features. These changes improved the overall experience and helped strengthen user trust and satisfaction with the brand."] },
    ],
  },
  {
    id: "dashboard", featured: true, designBg: "#0d0d0d",
    title: "Multi-product Dashboard", year: "2025", platform: "Web app", industry: "SaaS",
    summary: "A dashboard template and design system that adapts to different businesses.",
    tags: ["Dashboard", "Data visualization"],
    role: "UI/UX Designer", tools: "Figma",
    overview: ["A flexible dashboard layout designed to work across different products and types of data."],
    sections: [],
    figma: "https://www.figma.com/design/8Owjsvv36MDA18v1RaIPcM/Dashboard?node-id=341-18928&p=f&t=AEZxysKU3rfMQ4Ko-0",
  },
  {
    id: "linkedin", designBg: "#0d0d0d",
    title: "LinkedIn Messages Redesign", year: "2026", platform: "Web", industry: "Concept",
    summary: "A UX review of LinkedIn messaging — from the user journey to a cleaner redesign.",
    tags: ["Journey mapping", "Concept"],
    role: "UI/UX Designer", tools: "Figma, FigJam",
    overview: [
      "A concept redesign of LinkedIn messaging, built on an analysis of the user journey to find and fix the main points of friction.",
    ],
    sections: [],
  },
  {
    id: "doctor", designBg: "#0d0d0d",
    title: "Doctor Appointment App", year: "2025", platform: "Mobile app", industry: "Healthcare",
    summary: "Finding a doctor and booking a visit, built on a scalable design system.",
    tags: ["Mobile app", "User flows"],
    role: "UI/UX Designer", tools: "Figma",
    overview: [
      "A mobile app for finding doctors and booking appointments, designed to scale to many specialties and clinics.",
    ],
    sections: [],
    figma: "https://www.figma.com/design/xbHEsfDJmEdWQTgazy6qXf/Doctor-App?node-id=0-1&p=f&t=rw96vTmYeuUl78RL-0",
  },
  {
    id: "snapp", designBg: "#0d0d0d",
    title: "Snapp Fare Transparency", year: "2025", platform: "Mobile app", industry: "Ride-hailing",
    summary: "Redesigning how fares are explained to riders, to rebuild trust in the pricing.",
    tags: ["UX research", "Mobile", "Redesign"],
    role: "UI/UX Designer", tools: "Figma",
    overview: [
      "A redesign concept focused on how ride prices are shown and explained, so riders understand what they pay for and trust the fare.",
    ],
    sections: [],
  },
  {
    id: "urban-ai", designBg: "#0d0d0d",
    title: "Urban Manage — AI services", year: "2026", platform: "Web platform", industry: "Gov-tech",
    summary: "An AI-driven platform for municipal services.",
    tags: ["AI", "Gov-tech"],
    role: "UI/UX Designer", tools: "Figma, ChatGPT",
    // Built as real page parts; only the design pieces are images (exported from Figma)
    story: [
      { type: "stats", items: [
        { value: "3 weeks", label: "Project duration (in progress)" },
        { value: "+2", label: "Screens" },
      ] },
      { title: "About the project",
        body: ["We are currently designing and developing a comprehensive and integrated urban management platform, specifically tailored for municipalities. This platform consists of two primary components:"],
        list: [
          "Citizen-facing services (B2C): providing direct digital services to citizens, builders, and applicants of urban services.",
          "Municipality-facing services (B2B): offering operational and management solutions to municipalities, including ERP systems, specialized operator workbenches, and process automation tools.",
        ],
        after: ["In the first phase, our focus is on the design and implementation of a fully digital building permit application process."],
        sub: [
          { title: "Current situation", body: ["At present, the building permit issuance process is entirely physical and in-person. It is time-consuming, costly, prone to human error, and can take several months to complete."] },
          { title: "Proposed solution", body: ["Our goal is to transform this process into a digital, intelligent, and semi-automated system that significantly improves speed, accuracy, and transparency through operational automation and artificial intelligence."] },
        ] },
      { type: "steps", title: "Proposed workflow", items: [
        { title: "User login", text: "The applicant accesses the municipality’s website and logs into the unified platform using their mobile number." },
        { title: "Application submission & document upload", text: "The user enters the required information and uploads the necessary documents." },
        { title: "AI-powered document verification", text: "A trained AI model instantly checks the documents and information for completeness, accuracy, consistency, and validity." },
        { title: "Submission to operator workbench", text: "The submitted data is automatically sent to the relevant operator’s workbench within the municipality." },
        { title: "Review and initial approval", text: "The operator reviews the information, and if needed, an in-person verification and site visit is carried out. Upon final approval, the process moves to the issuance stage." },
        { title: "Automated building permit generation", text: "After approval, the data is processed by the AI engine, which automatically generates the building permit." },
        { title: "Digital delivery to applicant", text: "The issued permit is added to the user’s dashboard, where it can be downloaded immediately." },
      ] },
      { type: "media", title: "BPMS", note: "How a permit request moves between the user, the operator and the AI.", items: [
        { img: "images/cs/urban-ai/bpms.png", bg: "none" },
      ] },
      { type: "custom", title: "Design system — foundation", note: "Colours, type scale and icons used across the platform.", render: "urban-foundation" },
      { type: "custom", title: "Design system — components", note: "Rebuilt here in code from the Figma components.", render: "urban-components" },
      { type: "media", title: "Operator dashboard", note: "The operator’s workbench for reviewing permit requests.", items: [
        { img: "images/cs/urban-ai/dashboard.jpg", bg: "none" },
      ] },
      { title: "Impact",
        sub: [{ title: "Benefits and value proposition", list: [
          "Reduce permit issuance time from several months to less than one week",
          "Lower administrative and operational costs",
          "Minimize in-person visits",
          "Increase transparency and process traceability",
          "Reduce human errors",
          "Enhance the overall citizen experience",
          "Improve municipal operational efficiency",
        ] }],
        after: [],
        body: [],
        closing: true },
      { title: "What’s next", body: ["This project is continuously evolving, with ongoing updates, refinements, and enhancements applied in iterative phases."] },
    ],
  },
  {
    id: "payment", designBg: "#0d0d0d",
    title: "Dana Payment Page", year: "2025", platform: "Web", industry: "Fintech",
    summary: "A clear, trustworthy checkout flow.",
    tags: ["Checkout", "UI"],
    role: "UI/UX Designer", tools: "Figma",
    overview: ["A payment page designed to make checkout clear, quick and trustworthy."],
    sections: [],
  },
  {
    id: "subscription-dashboard", designBg: "#0d0d0d",
    title: "Subscription Dashboard", year: "2025", platform: "Web app", industry: "SaaS",
    summary: "Subscription status at a glance for students and business owners.",
    tags: ["Dashboard", "UI"],
    role: "UI/UX Designer", tools: "Figma",
    overview: [
      "This project involved designing a subscription sales dashboard for two user types — students and business owners. The interface was designed in a minimal, user-friendly style so users can scan the page at first glance and easily identify each section.",
    ],
    sections: [
      { title: "Subscription status at a glance", list: [
        "When a subscription is active, the page is highlighted in green, giving users an immediate visual confirmation.",
        "When a subscription has expired, the page turns red to clearly alert the user.",
        "Start and end dates are shown in calendar-style boxes, so the exact subscription period is easy to read.",
      ] },
    ],
  },
  {
    id: "mehrino", designBg: "#0d0d0d",
    title: "Mehrino", year: "2025", platform: "Mobile app", industry: "Non-profit",
    summary: "Transparent aid for rural communities.",
    tags: ["Mobile app", "Social impact"],
    role: "UI/UX Designer", tools: "Figma",
    overview: ["An app that makes donating to rural communities transparent, so donors can see where their help goes."],
    sections: [],
  },
];

window.CONTACT = {
  email: "nastaranmrz9@gmail.com",
  telegram: "https://t.me/nastaranuiux",
  dribbble: "https://dribbble.com/nastaranmrz",
  linkedin: "", // add your LinkedIn URL here
  cv: "cv.pdf",
};
