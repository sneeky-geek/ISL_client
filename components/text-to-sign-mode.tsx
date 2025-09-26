"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Hand, Play, Pause, RotateCcw, Type } from "lucide-react"

export function TextToSignMode() {
  const [inputText, setInputText] = useState("")
  const [isPlaying, setIsPlaying] = useState(false)
  const [isConverted, setIsConverted] = useState(false)

  const convertToSign = () => {
    if (inputText.trim()) {
      setIsConverted(true)
    }
  }

  const togglePlayback = () => {
    setIsPlaying(!isPlaying)
  }

  const resetSession = () => {
    setInputText("")
    setIsPlaying(false)
    setIsConverted(false)
  }

  return (
    <div className="animate-fade-in">
      {/* Text Input Card */}
      <Card className="p-8 mb-6 bg-gradient-to-br from-card to-accent/10 border-2 border-border/50 rounded-3xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground flex items-center">
            <Type className="w-5 h-5 mr-2 text-primary" />
            Enter Text
          </h3>
        </div>

        <Textarea
          placeholder="Type your message here to convert to sign language..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="min-h-[120px] text-lg rounded-2xl border-2 border-border/50 focus:border-primary/50 resize-none bg-background/50"
        />

        <div className="flex items-center justify-between mt-6">
          <p className="text-sm text-muted-foreground">{inputText.length} characters</p>

          <div className="flex space-x-3">
            <Button variant="outline" onClick={resetSession} className="rounded-2xl px-6 py-2 border-2 bg-transparent">
              <RotateCcw className="w-4 h-4 mr-2" />
              Clear
            </Button>

            <Button
              onClick={convertToSign}
              disabled={!inputText.trim()}
              className="rounded-2xl px-6 py-2 bg-primary hover:bg-primary/90"
            >
              <Hand className="w-4 h-4 mr-2" />
              Convert to Signs
            </Button>
          </div>
        </div>
      </Card>

      {/* Sign Animation Card */}
      <Card className="p-8 bg-gradient-to-br from-card to-success/5 border-2 border-border/50 rounded-3xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Sign Language Animation</h3>
          {isConverted && (
            <div className="flex items-center space-x-2 text-success">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-sm font-medium">Ready</span>
            </div>
          )}
        </div>

        <div className="aspect-video bg-muted/30 rounded-2xl border-2 border-dashed border-border/30 flex items-center justify-center mb-6 relative overflow-hidden">
          {isConverted ? (
            <div className="text-center">
              {isPlaying ? (
                <div className="animate-pulse">
                  <Hand className="w-20 h-20 text-primary mb-4 mx-auto animate-bounce" />
                  <p className="text-primary font-medium">Playing sign animation...</p>
                  <p className="text-sm text-muted-foreground mt-1">"{inputText.slice(0, 30)}..."</p>
                </div>
              ) : (
                <div>
                  <Hand className="w-16 h-16 text-success mb-4 mx-auto" />
                  <p className="text-success font-medium">Animation ready</p>
                  <p className="text-sm text-muted-foreground mt-1">Click play to start</p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center">
              <Hand className="w-16 h-16 text-muted-foreground/50 mb-4 mx-auto" />
              <p className="text-muted-foreground font-medium">Sign animation will appear here</p>
              <p className="text-sm text-muted-foreground/70 mt-1">Enter text and convert first</p>
            </div>
          )}
        </div>

        {/* Playback Controls */}
        <div className="flex items-center justify-center space-x-4">
          <Button
            variant="outline"
            size="lg"
            onClick={resetSession}
            className="rounded-2xl px-6 py-3 border-2 bg-transparent"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Reset
          </Button>

          <Button
            size="lg"
            onClick={togglePlayback}
            disabled={!isConverted}
            className="rounded-2xl px-8 py-3 font-medium bg-success hover:bg-success/90 text-success-foreground"
          >
            {isPlaying ? (
              <>
                <Pause className="w-5 h-5 mr-2" />
                Pause Animation
              </>
            ) : (
              <>
                <Play className="w-5 h-5 mr-2" />
                Play Animation
              </>
            )}
          </Button>
        </div>
      </Card>
    </div>
  )
}
