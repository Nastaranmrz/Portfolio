window.STORIES = window.STORIES || {};
window.STORIES["marketplace"] = {
  tools: "Figma",
  story: [
    { type: "stats", items: [
      { value: "6", label: "Key app screens" },
      { value: "2", label: "Sides served: vendors & users" },
    ] },
    { title: "Overview",
      body: [
        "This application was designed to facilitate service delivery by vendors, creating an efficient platform for interaction between vendors and users. With a focus on smooth user experience and quick access to services, it enables vendors to present their offerings in an effective and professional manner.",
        "The user interface follows a minimal and user-centered design approach, allowing users to easily find the information they need at any stage of the process with just a quick glance.",
      ] },
    { type: "media", title: "Profile, home & update", note: "Completing the user profile, the home screen with offers and services, and the in-app update prompt.", items: [
      { img: "images/cs/marketplace/profile.jpg", label: "Profile", span: "third", bg: "none" },
      { img: "images/cs/marketplace/home.jpg", label: "Home", span: "third", bg: "none" },
      { img: "images/cs/marketplace/update.jpg", label: "Update", span: "third", bg: "none" },
    ] },
    { type: "media", title: "Welcome, membership & store front", note: "Onboarding, membership cards with their benefits, and a vendor’s store front.", items: [
      { img: "images/cs/marketplace/welcome.jpg", label: "Welcome", span: "third", bg: "none" },
      { img: "images/cs/marketplace/cards.jpg", label: "Membership Cards", span: "third", bg: "none" },
      { img: "images/cs/marketplace/store.jpg", label: "Store Front", span: "third", bg: "none" },
    ] },
    { title: "Admin panel", body: ["To support efficient service management, a dedicated admin panel was also designed. It enables seamless monitoring, management, and updating of services in one central place."] },
    { title: "Result", body: ["With its emphasis on intuitive UX and fast service access, the app helps vendors deliver their services more efficiently, while users enjoy a straightforward and purposeful interaction with the platform."] },
  ],
};
