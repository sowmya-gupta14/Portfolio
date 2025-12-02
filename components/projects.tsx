export default function Projects() {
    const projects = [
      {
        title: "FoodGate",
        description:
          "A full-stack food delivery application with real-time features, secure authentication, and payment integration.",
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Payment Gateway"],
        highlights: [
          "Built responsive UI for both customer and admin interfaces",
          "Implemented role-based authentication using cookies",
          "Integrated payment gateway with encrypted checkout",
          "Designed and optimized MongoDB database schema",
        ],
        link: "https://github.com/sowmya-gupta14/foodgate",
      },
      {
        title: "SafarSaathi",
        description: "A travel advisor app with real-time map navigation and location-based search capabilities.",
        technologies: ["React.js", "Google Maps API", "Geolocation API", "Asynchronous Data Fetching"],
        highlights: [
          "Integrated Google Maps API for real-time navigation",
          "Built intuitive filtering and search interface",
          "Optimized page load performance with React hooks",
          "Implemented geospatial data visualization",
        ],
        link: "https://github.com/sowmya-gupta14/travel_advisor",
      },
    ]
  
    return (
      <section id="projects" className="py-16 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border border-border rounded-lg p-6 hover:border-primary transition-colors group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="mb-4">
                <p className="text-sm font-semibold text-foreground mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="space-y-2 mb-4">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary flex-shrink-0">✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <a
                href={project.link}
                className="inline-block text-primary font-semibold hover:gap-2 transition-all flex items-center gap-1"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </section>
    )
  }
  