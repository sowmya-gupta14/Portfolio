export default function Footer() {
    const currentYear = new Date().getFullYear()
  
    return (
      <footer className="border-t border-border mt-16 sm:mt-24 py-8 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© {currentYear} Sowmya Gupta. All rights reserved.</p>
            <p className="text-sm text-muted-foreground">Built with React, Next.js, and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    )
  }
  