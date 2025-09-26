"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Camera, Hand } from "lucide-react"
import { cn } from "@/lib/utils"

interface ModeToggleProps {
  onModeChange: (mode: "sign-to-text" | "text-to-sign") => void
}

export function ModeToggle({ onModeChange }: ModeToggleProps) {
  const [activeMode, setActiveMode] = useState<"sign-to-text" | "text-to-sign">("sign-to-text")

  const handleModeChange = (mode: "sign-to-text" | "text-to-sign") => {
    setActiveMode(mode)
    onModeChange(mode)
  }

  return (
    <div className="flex items-center justify-center mb-8">
      <div className="bg-secondary/50 p-2 rounded-3xl border border-border/50 shadow-sm">
        <div className="flex space-x-2">
          <Button
            variant={activeMode === "sign-to-text" ? "default" : "ghost"}
            size="lg"
            onClick={() => handleModeChange("sign-to-text")}
            className={cn(
              "rounded-2xl px-6 py-3 font-medium transition-all duration-300 flex items-center space-x-3",
              activeMode === "sign-to-text"
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-muted-foreground hover:text-foreground hover:bg-accent/30",
            )}
          >
            <Camera className="w-5 h-5" />
            <span>Sign to Text</span>
          </Button>

          <Button
            variant={activeMode === "text-to-sign" ? "default" : "ghost"}
            size="lg"
            onClick={() => handleModeChange("text-to-sign")}
            className={cn(
              "rounded-2xl px-6 py-3 font-medium transition-all duration-300 flex items-center space-x-3",
              activeMode === "text-to-sign"
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-muted-foreground hover:text-foreground hover:bg-accent/30",
            )}
          >
            <Hand className="w-5 h-5" />
            <span>Text to Sign</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
