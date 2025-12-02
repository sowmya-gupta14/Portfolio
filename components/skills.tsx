export default function Skills() {
    const skills = {
      "Programming Languages": ["Java", "Python", "JavaScript", "TypeScript"],
      Frontend: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "GSAP", "Swiper.js"],
      Backend: ["Node.js", "Express.js", "REST APIs", "Django"],
      Databases: ["MySQL", "MongoDB"],
      "Tools & Others": ["Git", "GitHub", "Vercel", "AI Tools (Cursor, Copilot, ChatGPT)", "Prompt Engineering"],
      "CS Fundamentals": ["Data Structures", "OOPs", "Databases", "OS"],
    }
  
    return (
      <section id="skills" className="py-16 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-4">{category}</h3>
              <ul className="space-y-2">
                {items.map((skill, idx) => (
                  <li key={idx} className="text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    )
  }
  