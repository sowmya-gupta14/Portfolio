export default function Hero() {
    return (
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl font-bold text-balance">Sowmya Gupta</h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-light max-w-2xl">
              Full Stack Developer | Next.js | React | Performance Optimization
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Currently a Software Developer Intern at PharmEasy, improving user experiences through modern web
              technologies and meticulous performance optimization. Passionate about building scalable applications and
              exploring the intersection of design and development.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#contact"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-2 border border-primary text-primary rounded-md font-medium hover:bg-primary/10 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
  