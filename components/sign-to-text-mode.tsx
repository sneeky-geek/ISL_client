"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Camera, Square, Play, RotateCcw } from "lucide-react"

export function SignToTextMode() {
  const [isRecording, setIsRecording] = useState(false)
  const [detectedText, setDetectedText] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const toggleRecording = () => {
    if (isRecording) {
      setIsRecording(false)
      setIsProcessing(true)
      // Simulate processing
      setTimeout(() => {
        setDetectedText("Hello, how are you today?")
        setIsProcessing(false)
      }, 2000)
    } else {
      setIsRecording(true)
      setDetectedText("")
    }
  }

  const resetSession = () => {
    setIsRecording(false)
    setDetectedText("")
    setIsProcessing(false)
  }

  return (
    <div className="animate-fade-in">
      {/* Camera Feed Card */}
      <Card className="p-8 mb-6 bg-gradient-to-br from-card to-accent/10 border-2 border-border/50 rounded-3xl shadow-lg">
        <div className="aspect-video bg-muted/30 rounded-2xl border-2 border-dashed border-border/30 flex items-center justify-center mb-6 relative overflow-hidden">
          {isRecording ? (
            <div className="absolute inset-0 bg-gradient-to-br from-recording/20 to-recording/5 flex items-center justify-center">
              <div className="text-center">
                <div className="w-4 h-4 bg-recording rounded-full animate-pulse mb-4 mx-auto"></div>
                <p className="text-recording font-medium">Recording in progress...</p>
                <p className="text-sm text-muted-foreground mt-1">Show your signs clearly</p>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <Camera className="w-16 h-16 text-muted-foreground/50 mb-4 mx-auto" />
              <p className="text-muted-foreground font-medium">Camera feed will appear here</p>
              <p className="text-sm text-muted-foreground/70 mt-1">Click record to start</p>
            </div>
          )}
        </div>

        {/* Recording Controls */}
        <div className="flex items-center justify-center space-x-4">
          <Button
            variant="outline"
            size="lg"
            onClick={resetSession}
            disabled={isRecording || isProcessing}
            className="rounded-2xl px-6 py-3 border-2 bg-transparent"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Reset
          </Button>

          <Button
            size="lg"
            onClick={toggleRecording}
            disabled={isProcessing}
            className={`rounded-2xl px-8 py-3 font-medium transition-all duration-200 ${
              isRecording
                ? "bg-recording hover:bg-recording/90 text-recording-foreground"
                : "bg-primary hover:bg-primary/90"
            }`}
          >
            {isRecording ? (
              <>
                <Square className="w-5 h-5 mr-2" />
                Stop Recording
              </>
            ) : (
              <>
                <Play className="w-5 h-5 mr-2" />
                Start Recording
              </>
            )}
          </Button>
        </div>
      </Card>

      {/* Output Card */}
      <Card className="p-8 bg-gradient-to-br from-card to-success/5 border-2 border-border/50 rounded-3xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Detected Text</h3>
          {detectedText && (
            <div className="flex items-center space-x-2 text-success">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-sm font-medium">Converted</span>
            </div>
          )}
        </div>

        <div className="min-h-[120px] bg-muted/30 rounded-2xl p-6 border border-border/30">
          {isProcessing ? (
            <div className="flex items-center justify-center h-full">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                <span className="text-muted-foreground">Processing signs...</span>
              </div>
            </div>
          ) : detectedText ? (
            <p className="text-lg text-foreground leading-relaxed">{detectedText}</p>
          ) : (
            <p className="text-muted-foreground text-center">Converted text will appear here after recording</p>
          )}
        </div>
      </Card>
    </div>
  )
}
