export default function Hero() {
    return (
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl font-bold text-balance">Sowmya Gupta</h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-light max-w-4xl">
              Software Developer | Frontend | Backend | DevOps | Performance Optimization
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed text-justify">
              I’m a full-stack web developer skilled in React, Next.js, Node.js, Express.js, and MongoDB, with strong foundations in DSA, databases, and system fundamentals. I enjoy building responsive UIs, secure backend systems, and performance-optimized applications. I’m always learning—whether it’s cloud deployment, advanced JavaScript patterns, or AI-accelerated development.
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
  