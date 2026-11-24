// AI Job Search ("Karyar") — rebuilt case study (Figma: Page 2 case study, dark copy on Page 1)
window.STORIES = window.STORIES || {};
window.STORIES["job-search"] = {
  tools: "Figma, Claude",
  story: [
    { type: "stats", items: [
      { value: "2 weeks", label: "Project duration (in progress)" },
      { value: "1", label: "Screen" },
    ] },
    { title: "About the project",
      body: [
        "Karyar is an AI job-search assistant that brings a scattered process together in one place. Job seekers sign up once and set up their résumé and job preferences. From then on, the assistant searches job ads from different sources every day, filters them by the seeker’s criteria and gathers them all on one page. Each ad shows a match percentage against the résumé, so the seeker can tell which opportunities are worth their time without reading everything.",
        "Job seekers decide for themselves how automated the process is:",
      ],
      list: [
        "Automatic mode: the assistant finds suitable ads and sends the résumé to them.",
        "Manual mode: the assistant finds and filters the ads, but reviewing them and deciding what to apply to stays with the job seeker.",
      ],
      after: [
        "Job seekers also choose the search sources themselves (Jobvision, Jobinja, e-Estekhdam, IranTalent, LinkedIn and even social networks such as Instagram and Telegram) and the filter criteria — such as work model, employment type, company size, salary and location — available in the “Job preferences” panel at the side of the page.",
        "After applying, ads are kept in an archive. At any time the seeker can see which ad they applied to, from which source and when — and if a company calls back later, the ad is easy to find.",
      ],
      sub: [
        { title: "Result", body: ["Karyar shrinks the “find, review, apply and follow up” cycle — which usually takes hours of a job seeker’s time — to a few minutes. Seekers no longer miss opportunities, and their application history is kept in one place."] },
      ] },
    { type: "media", title: "Job listings page", note: "Matched ads with their match percentage, sources and the job-preferences panel.", items: [
      { img: "images/cs/job-search/job-listings.jpg", bg: "none" },
    ] },
  ],
};
