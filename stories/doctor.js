// Doctor App — rebuilt case study (Figma: Page 2 "Doctor App" case study, dark copy on Page 1)
window.STORIES = window.STORIES || {};
window.STORIES["doctor"] = {
  tools: "Figma, ChatGPT",
  story: [
    { type: "stats", items: [
      { value: "2 weeks", label: "Project duration (in progress)" },
      { value: "+2", label: "Screens" },
    ] },
    { title: "About the project",
      body: [
        "This project set out to design an app for finding doctors and booking appointments. In this phase only one screen of the app has been fully published; the main focus has been on systematic UI design, building a design system and creating a structure the product can grow on.",
        "Before designing many screens, the aim was to lay a coherent foundation for the interface. That is why a large part of the work went into designing and structuring components, defining visual standards and building a reusable system.",
      ],
      sub: [
        { title: "Main focus areas", list: [
          "Designing and structuring the app’s design system",
          "Designing and building components, with their states and variants",
          "Using Auto Layout for flexible, extensible structures",
          "Responsive design — checking how UI elements behave at different sizes",
          "Designing and implementing light mode and dark mode",
          "Defining and structuring design tokens: colours, typography, sizes, spacing, border radius and other base values",
          "A consistent naming system for components, variants and tokens",
          "Consistency across the different parts of the interface",
          "Designing components to be reusable and scalable",
          "Attention to visual hierarchy, readability, contrast and core UI design principles",
        ] },
        { title: "Design approach", body: [
          "The focus was not only on how a single screen looks; design decisions were meant to come from design thinking, problem solving and user needs.",
          "Because the app is built around tasks like finding a doctor, checking their details and booking an appointment, the interface aims to make that path simple, easy to understand and low-friction, presenting information with a clear visual hierarchy.",
          "Components were designed with consistency, reusability, scalability, accessibility and usability in mind, so the system meets today’s needs and can also grow to support future screens and features.",
          "In the end, this project is less a UI for a booking app and more an exercise in design-system thinking, component-based design, systematic design and problem solving in a digital product.",
        ] },
      ] },
    { type: "media", title: "Doctor list screen", note: "The same screen in dark mode and light mode.", items: [
      { img: "images/cs/doctor/doctor-list-dark.jpg", label: "Dark mode", span: "half", bg: "dark" },
      { img: "images/cs/doctor/doctor-list-light.jpg", label: "Light mode", span: "half", bg: "dark" },
    ] },
  ],
};
