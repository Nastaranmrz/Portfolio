// Multi-product Dashboard — rebuilt case study (Figma: Page 2 case study, dark copy on Page 1)
window.STORIES = window.STORIES || {};
window.STORIES["dashboard"] = {
  tools: "Figma, ChatGPT",
  story: [
    { type: "stats", items: [
      { value: "2 weeks", label: "Project duration (in progress)" },
      { value: "+2", label: "Screens" },
    ] },
    { title: "About the project",
      body: [
        "A dashboard template for different businesses. The goal was to design and develop a dashboard template that can be used across different businesses and products. In this phase only one or two screens were fully designed and presented; the main focus was on creating the design structure, building a design system and defining a coherent visual language.",
        "The core aim was an extensible, scalable foundation for dashboards that can serve different products and domains. That is why a large share of the project time went into designing and structuring the system rather than just designing screens.",
      ],
      sub: [
        { title: "Main focus areas", list: [
          "Designing and structuring a coherent, extensible design system",
          "Designing and documenting components, and working through their states and variants",
          "Using Auto Layout for flexible, extensible structures",
          "Responsive design — considering how components and layouts behave at different sizes",
          "Defining light mode and dark mode, with a structure that manages both themes",
          "Structuring and defining design tokens: colours, typography, spacing, sizing, border radius and other base values",
          "A consistent naming system for tokens, components and variants",
          "Defining visual hierarchy and a unified visual language",
          "Designing components with reuse and scalability in mind",
          "Structuring the system so it can be used and extended in future projects too",
        ] },
        { title: "Design approach", body: [
          "The focus was not only on a good-looking interface; design decisions were meant to come from design thinking, problem solving and UX/UI principles. Before designing each part, its structure, purpose, use and room to grow were considered, so the result works well in function and structure, not just in looks.",
          "In the components, consistency, reusability, accessibility, scalability and maintainability were treated as core principles.",
          "In the end, this project is less a single dashboard sample and more an exercise in design-system thinking, component-based design and systematic UI design — its output can serve as a starting foundation for designing and developing different products and dashboards.",
        ] },
      ] },
    { type: "media", title: "Dashboard page", note: "Stat cards, charts and recent records on the main dashboard.", items: [
      { img: "images/cs/dashboard/dashboard.jpg", bg: "none" },
    ] },
    { type: "media", title: "Employee list page", note: "A data table with search, actions and pagination.", items: [
      { img: "images/cs/dashboard/employee-list.jpg", bg: "none" },
    ] },
  ],
};
