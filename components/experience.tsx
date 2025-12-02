export default function Experience() {
    const experiences = [
      {
        role: "Software Developer Intern",
        company: "API Holdings (PharmEasy)",
        location: "Bangalore, India",
        period: "Jan 2025 – Oct 2025",
        highlights: [
          "Contributed to 30+ user-facing features using Next.js and TypeScript",
          "Improved INP by 50% through critical performance optimizations including React hooks",
          "Boosted SEO performance by 35% through semantic HTML and design enhancements",
          "Refactored Product Detail Pages to increase organic traffic by 30%",
          "Reduced LCP by 42%, bringing page load time from 3.2s to 1.8s",
          "Integrated 20+ APIs and configured 10+ proxy endpoints",
        ],
      },
      {
        role: "Academic Trainee in Web Development",
        company: "Anveshan Foundation, IGDTUW",
        location: "Delhi",
        period: "May 2023 - Jul 2023",
        highlights: [
          "Built responsive web apps with Next.js and Node.js/Express.js",
          "Implemented dynamic routing and component-based design patterns",
          "Optimized performance with lazy loading, caching, and image compression",
          "Explored AI APIs (OpenAI, Gemini) for intelligent feature prototyping",
          "Learned cloud deployment and CI/CD pipelines",
        ],
      },
    ]
  
    return (
      <section id="experience" className="py-16 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-primary pl-6 pb-8">
              <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
              <p className="text-primary font-semibold mt-1">{exp.company}</p>
              <p className="text-sm text-muted-foreground">
                {exp.location} • {exp.period}
              </p>
              <ul className="mt-4 space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-muted-foreground leading-relaxed flex gap-3">
                    <span className="text-primary mt-1 flex-shrink-0">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    )
  }
  