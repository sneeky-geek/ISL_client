"use client"

import { useState } from "react"
import { HeroBanner } from "./hero-banner"
import { LearningModules } from "./learning-modules"
import { LessonPage } from "./lesson-page"

export function LearnPage() {
  const [selectedModule, setSelectedModule] = useState<string | null>(null)

  const handleModuleSelect = (moduleId: string) => {
    setSelectedModule(moduleId)
  }

  const handleBackToModules = () => {
    setSelectedModule(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {selectedModule ? (
          <LessonPage moduleId={selectedModule} onBack={handleBackToModules} />
        ) : (
          <>
            <HeroBanner />
            <LearningModules onModuleSelect={handleModuleSelect} />
          </>
        )}
      </main>
    </div>
  )
}
