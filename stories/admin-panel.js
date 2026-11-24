window.STORIES = window.STORIES || {};
window.STORIES["admin-panel"] = {
  tools: "Figma",
  story: [
    { type: "stats", items: [
      { value: "3", label: "Key panel screens" },
      { value: "Web", label: "Desktop admin for vendors" },
    ] },
    { title: "Overview",
      body: [
        "The admin panel of this application was designed with special attention to smooth user experience and visual appeal. Every user flow and process has been carefully crafted to ensure that interacting with the panel is simple, fast, and enjoyable.",
        "Vendors can easily add, edit, or manage their services through the panel, and all updates are instantly and seamlessly reflected in the user-facing app. The panel’s clean and intuitive interface supports efficient service management, helping vendors optimize their operations with minimal complexity.",
      ] },
    { type: "media", title: "Customer management", note: "All customers in one table — service level, mobile number and last purchase, with quick view and edit actions.", items: [
      { img: "images/cs/admin-panel/customers.jpg", label: "Customer management", bg: "none" },
    ] },
    { type: "media", title: "Customer profile", note: "A single customer’s details, current orders and activity history.", items: [
      { img: "images/cs/admin-panel/customer-profile.jpg", label: "Customer profile", bg: "none" },
    ] },
    { type: "media", title: "Chat list", note: "Conversations between the vendor and their customers.", items: [
      { img: "images/cs/admin-panel/chat.jpg", label: "Chat list", bg: "none" },
    ] },
  ],
};
