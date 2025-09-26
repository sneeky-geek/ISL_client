"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { ModeToggle } from "@/components/mode-toggle"
import { SignToTextMode } from "@/components/sign-to-text-mode"
import { TextToSignMode } from "@/components/text-to-sign-mode"
import { LearnPage } from "@/components/learn-isl/learn-page"
import { Footer } from "@/components/footer"

export default function Home() {
  const [currentMode, setCurrentMode] = useState<"sign-to-text" | "text-to-sign">("sign-to-text")
  const [currentPage, setCurrentPage] = useState<"home" | "learn">("home")

  const handlePageNavigation = (page: "home" | "learn") => {
    setCurrentPage(page)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <Navbar currentPage={currentPage} onNavigate={handlePageNavigation} />

      {currentPage === "learn" ? (
        <LearnPage />
      ) : (
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <div className="text-center mb-12 animate-slide-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Indian Sign Language
              <span className="block text-primary">Converter</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Bridge communication gaps with our AI-powered ISL converter. Convert between sign language and text
              seamlessly.
            </p>
          </div>

          {/* Mode Toggle */}
          <ModeToggle onModeChange={setCurrentMode} />

          {/* Dynamic Content Area */}
          <div className="transition-all duration-500 ease-in-out">
            {currentMode === "sign-to-text" ? <SignToTextMode /> : <TextToSignMode />}
          </div>
        </main>
      )}

      <Footer />
    </div>
  )
}
