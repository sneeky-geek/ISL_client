"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Play, Volume2, RotateCcw } from "lucide-react"

interface Lesson {
  id: string
  title: string
  videoUrl: string
  englishMeaning: string
  gujaratiMeaning: string
  audioUrl?: string
  description: string
}

// Sample lesson data - in a real app, this would come from an API
const sampleLessons: Record<string, Lesson[]> = {
  alphabets: [
    {
      id: "a",
      title: "Letter A",
      videoUrl: "/isl-sign-for-letter-a.jpg",
      englishMeaning: "A",
      gujaratiMeaning: "અ",
      description: "Make a fist with your thumb pointing up and to the side.",
    },
    {
      id: "b",
      title: "Letter B",
      videoUrl: "/isl-sign-for-letter-b.jpg",
      englishMeaning: "B",
      gujaratiMeaning: "બ",
      description: "Hold your hand up with fingers straight and thumb tucked in.",
    },
  ],
  numbers: [
    {
      id: "1",
      title: "Number 1",
      videoUrl: "/isl-sign-for-number-1.jpg",
      englishMeaning: "One",
      gujaratiMeaning: "એક",
      description: "Point your index finger up while keeping other fingers closed.",
    },
  ],
}

interface LessonPageProps {
  moduleId: string
  onBack: () => void
}

export function LessonPage({ moduleId, onBack }: LessonPageProps) {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0)
  const lessons = sampleLessons[moduleId] || []
  const currentLesson = lessons[currentLessonIndex]

  if (!currentLesson) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">Lessons for this module are coming soon!</p>
        <Button onClick={onBack} variant="outline" className="rounded-2xl bg-transparent">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Modules
        </Button>
      </div>
    )
  }

  const nextLesson = () => {
    if (currentLessonIndex < lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1)
    }
  }

  const prevLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1)
    }
  }

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Button onClick={onBack} variant="outline" className="rounded-2xl bg-transparent">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Modules
        </Button>
        <div className="text-center">
          <h2 className="text-xl font-bold text-foreground">{currentLesson.title}</h2>
          <p className="text-sm text-muted-foreground">
            Lesson {currentLessonIndex + 1} of {lessons.length}
          </p>
        </div>
        <div className="w-32" /> {/* Spacer for centering */}
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-muted rounded-full h-2 mb-8">
        <div
          className="bg-gradient-to-r from-primary to-chart-1 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentLessonIndex + 1) / lessons.length) * 100}%` }}
        />
      </div>

      {/* Main Lesson Content */}
      <Card className="mb-8 border-2 shadow-xl bg-card/50 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-foreground mb-2">{currentLesson.title}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Video/GIF Area */}
          <div className="relative bg-muted rounded-3xl p-8 text-center">
            <div className="relative inline-block">
              <img
                src={currentLesson.videoUrl || "/placeholder.svg"}
                alt={`ISL sign for ${currentLesson.title}`}
                className="w-80 h-60 object-cover rounded-2xl shadow-lg mx-auto"
              />
              <Button
                size="lg"
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-primary/90 hover:bg-primary text-primary-foreground shadow-lg"
              >
                <Play className="w-6 h-6 ml-1" />
              </Button>
            </div>

            <Button variant="outline" size="sm" className="mt-4 rounded-2xl bg-transparent">
              <RotateCcw className="w-4 h-4 mr-2" />
              Replay
            </Button>
          </div>

          {/* Meanings */}
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">English</h3>
                <p className="text-2xl font-bold text-blue-800 dark:text-blue-200">{currentLesson.englishMeaning}</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">ગુજરાતી</h3>
                <p className="text-2xl font-bold text-green-800 dark:text-green-200">{currentLesson.gujaratiMeaning}</p>
              </CardContent>
            </Card>
          </div>

          {/* Audio Pronunciation */}
          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 border-orange-200 dark:border-orange-800">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-3">Pronunciation</h3>
              <Button
                variant="outline"
                className="rounded-2xl bg-white/50 dark:bg-black/20 border-orange-300 dark:border-orange-700 text-orange-800 dark:text-orange-200 hover:bg-orange-100 dark:hover:bg-orange-900"
              >
                <Volume2 className="w-4 h-4 mr-2" />
                Play Audio
              </Button>
            </CardContent>
          </Card>

          {/* Description */}
          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-3">How to Sign</h3>
              <p className="text-muted-foreground leading-relaxed">{currentLesson.description}</p>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button
          onClick={prevLesson}
          disabled={currentLessonIndex === 0}
          variant="outline"
          className="rounded-2xl bg-transparent"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>

        <div className="flex space-x-2">
          {lessons.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentLessonIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentLessonIndex ? "bg-primary scale-125" : "bg-muted hover:bg-muted-foreground/20"
              }`}
            />
          ))}
        </div>

        <Button
          onClick={nextLesson}
          disabled={currentLessonIndex === lessons.length - 1}
          className="rounded-2xl bg-gradient-to-r from-primary to-chart-1 hover:from-primary/90 hover:to-chart-1/90"
        >
          Next
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}
