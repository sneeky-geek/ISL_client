"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Hash, Calculator, MessageCircle, Coffee, Heart, Home, Utensils, Clock } from "lucide-react"

interface Module {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  lessons: number
}

const modules: Module[] = [
  {
    id: "alphabets",
    title: "Alphabets",
    description: "Learn the ISL alphabet from A to Z",
    icon: <Hash className="w-8 h-8" />,
    color: "from-blue-500 to-blue-600",
    lessons: 26,
  },
  {
    id: "numbers",
    title: "Numbers",
    description: "Master numbers from 0 to 100",
    icon: <Calculator className="w-8 h-8" />,
    color: "from-green-500 to-green-600",
    lessons: 15,
  },
  {
    id: "common-phrases",
    title: "Common Phrases",
    description: "Essential phrases for daily conversation",
    icon: <MessageCircle className="w-8 h-8" />,
    color: "from-purple-500 to-purple-600",
    lessons: 20,
  },
  {
    id: "daily-activities",
    title: "Daily Activities",
    description: "Signs for everyday actions and routines",
    icon: <Coffee className="w-8 h-8" />,
    color: "from-orange-500 to-orange-600",
    lessons: 18,
  },
  {
    id: "emotions",
    title: "Emotions",
    description: "Express feelings and emotions",
    icon: <Heart className="w-8 h-8" />,
    color: "from-pink-500 to-pink-600",
    lessons: 12,
  },
  {
    id: "family-home",
    title: "Family & Home",
    description: "Family members and household items",
    icon: <Home className="w-8 h-8" />,
    color: "from-indigo-500 to-indigo-600",
    lessons: 16,
  },
  {
    id: "food-drinks",
    title: "Food & Drinks",
    description: "Common food items and beverages",
    icon: <Utensils className="w-8 h-8" />,
    color: "from-red-500 to-red-600",
    lessons: 22,
  },
  {
    id: "time-dates",
    title: "Time & Dates",
    description: "Days, months, and time expressions",
    icon: <Clock className="w-8 h-8" />,
    color: "from-teal-500 to-teal-600",
    lessons: 14,
  },
]

interface LearningModulesProps {
  onModuleSelect: (moduleId: string) => void
}

export function LearningModules({ onModuleSelect }: LearningModulesProps) {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Choose Your Learning Path</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {modules.map((module, index) => (
          <Card
            key={module.id}
            className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader className="text-center pb-4">
              <div
                className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {module.icon}
              </div>
              <CardTitle className="text-lg font-bold text-foreground">{module.title}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">{module.description}</CardDescription>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="text-center mb-4">
                <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                  {module.lessons} lessons
                </span>
              </div>

              <Button
                onClick={() => onModuleSelect(module.id)}
                className="w-full rounded-2xl bg-gradient-to-r from-primary to-chart-1 hover:from-primary/90 hover:to-chart-1/90 text-primary-foreground font-medium transition-all duration-200 hover:shadow-lg"
              >
                Start Learning
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
