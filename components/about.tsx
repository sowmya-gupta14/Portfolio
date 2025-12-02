export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-2">About Me</h2>
          <p className="text-lg text-primary font-semibold">Full-Stack Developer & Performance Enthusiast</p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Personal Journey */}
          <div className="border-l-4 border-primary pl-6 py-2">
            <p className="text-lg leading-relaxed text-foreground">
              I&apos;m a passionate developer from Delhi, currently pursuing my B.Tech in Electronics and Communication
              Engineering at IGDTU. My journey into tech started with curiosity—I wanted to understand how digital
              products work and how to build experiences that matter. Today, I transform that curiosity into code.
            </p>
          </div>

          {/* Core Philosophy */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-secondary/50 rounded-lg p-6 border border-primary/20">
              <h3 className="font-semibold text-primary mb-3 text-lg">My Approach</h3>
              <p className="text-foreground leading-relaxed">
                I believe in building software that&apos;s not just functional, but delightful. Performance,
                accessibility, and user experience aren&apos;t afterthoughts—they&apos;re at the core of everything I
                create. Every line of code should serve a purpose.
              </p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-6 border border-primary/20">
              <h3 className="font-semibold text-primary mb-3 text-lg">What Excites Me</h3>
              <p className="text-foreground leading-relaxed">
                AI-powered development, modern web performance optimization, and exploring the intersection of design
                and engineering. I&apos;m constantly learning and experimenting with new tools like Cursor and exploring
                how AI can amplify human creativity.
              </p>
            </div>
          </div>

          {/* Beyond Code */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Beyond Code</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-secondary/30 rounded-lg border border-border">
                <div className="text-primary font-semibold mb-1">Quick Learner</div>
                <p className="text-sm text-muted-foreground">Love exploring new tech and frameworks</p>
              </div>
              <div className="p-4 bg-secondary/30 rounded-lg border border-border">
                <div className="text-primary font-semibold mb-1">Problem Solver</div>
                <p className="text-sm text-muted-foreground">Enjoy tackling complex technical challenges</p>
              </div>
              <div className="p-4 bg-secondary/30 rounded-lg border border-border">
                <div className="text-primary font-semibold mb-1">Community Driven</div>
                <p className="text-sm text-muted-foreground">Active member of tech communities and mentorship</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-4">
            <p className="text-muted-foreground">
              Want to work together or chat about tech?{" "}
              <span className="text-primary font-semibold">Let&apos;s connect!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
