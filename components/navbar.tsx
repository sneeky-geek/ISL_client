"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Globe, Languages, BookOpen, ArrowLeft, Sun, Moon } from "lucide-react"

interface NavbarProps {
  currentPage?: "home" | "learn"
  onNavigate?: (page: "home" | "learn") => void
}

export function Navbar({ currentPage = "home", onNavigate }: NavbarProps) {
  const [language, setLanguage] = useState<"en" | "gu">("en")
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem("isl-converter-theme") as "light" | "dark"
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      // Check system preference
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      setTheme(systemTheme)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)
    localStorage.setItem("isl-converter-theme", theme)
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "gu" : "en"))
  }

  return (
    <nav className="w-full bg-card/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* App Name */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center">
              <Languages className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">ISL Converter</h1>
              <p className="text-xs text-muted-foreground">Indian Sign Language</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {/* Navigation Buttons */}
            <div className="flex items-center space-x-2">
              <Button
                variant={currentPage === "home" ? "default" : "ghost"}
                size="sm"
                onClick={() => onNavigate?.("home")}
                className="rounded-2xl transition-all duration-200"
              >
                {currentPage === "learn" && <ArrowLeft className="w-4 h-4 mr-2" />}
                Converter
              </Button>
              <Button
                variant={currentPage === "learn" ? "default" : "ghost"}
                size="sm"
                onClick={() => onNavigate?.("learn")}
                className="rounded-2xl transition-all duration-200"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Learn ISL
              </Button>
            </div>

            {/* Theme Toggle */}
            {mounted && (
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className="rounded-2xl border-2 hover:bg-accent/50 transition-all duration-200 bg-transparent p-2"
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              >
                {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </Button>
            )}

            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-2 rounded-2xl border-2 hover:bg-accent/50 transition-all duration-200 bg-transparent"
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium">{language === "en" ? "English" : "ગુજરાતી"}</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
