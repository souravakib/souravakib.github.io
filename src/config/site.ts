export const site = {
  name: "Sourav Akib Sarkar",
  title: "Sourav Akib Sarkar — AI Researcher",
  description:
    "AI Researcher with experience in machine learning, medical imaging, and astrophysics. MSc Artificial Intelligence at the University of Surrey.",
  url: "https://souravakib.github.io",
  role: "AI Researcher",
  location: "London, UK",
  email: "s.souravakib@gmail.com",
  whatsapp: "+601116581370",
  phone: "+8801842846321",
  github: "https://github.com/souravakib",
  linkedin: "https://www.linkedin.com/in/sourav-akib-sarkar-853887157/",
  calendlyUrl: import.meta.env.PUBLIC_CALENDLY_URL ?? "",
  calendlyEmbedUrl:
    import.meta.env.PUBLIC_CALENDLY_EMBED_URL ??
    "https://calendly.com/souravakib",
  nav: [
    { href: "/", label: "Home" },
    { href: "/cv", label: "CV" },
    { href: "/projects", label: "Projects" },
    { href: "/availability", label: "Availability" },
  ],
} as const;

export const featuredRepos = [
  "TheGalahCompressionModel",
  "DRB_AML",
  "Melenoma.Ai",
  "DetectingSkinCancerMelenoma",
] as const;
