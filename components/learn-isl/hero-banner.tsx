import { Hand } from "lucide-react"

export function HeroBanner() {
  return (
    <div className="text-center mb-16 animate-slide-in">
      <div className="flex items-center justify-center mb-6">
        <div className="w-20 h-20 bg-gradient-to-br from-primary to-chart-1 rounded-3xl flex items-center justify-center shadow-lg">
          <Hand className="w-10 h-10 text-primary-foreground" />
        </div>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
        Learn Indian Sign Language
        <span className="block text-primary">(ISL)</span>
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
        Master ISL through interactive lessons, practice exercises, and step-by-step guidance. Start your journey to
        inclusive communication today.
      </p>
    </div>
  )
}
