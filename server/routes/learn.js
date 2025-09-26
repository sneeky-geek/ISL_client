const express = require("express")
const router = express.Router()

// Mock learning data
const learningModules = [
  {
    id: "alphabets",
    title: "Alphabets",
    description: "Learn ISL alphabet signs",
    lessons: [
      { id: "a", letter: "A", videoUrl: "/api/signs/alphabet/a.mp4", image: "/api/signs/alphabet/a.jpg" },
      { id: "b", letter: "B", videoUrl: "/api/signs/alphabet/b.mp4", image: "/api/signs/alphabet/b.jpg" },
      // Add more letters...
    ],
  },
  {
    id: "numbers",
    title: "Numbers",
    description: "Learn ISL number signs",
    lessons: [
      { id: "1", number: "1", videoUrl: "/api/signs/numbers/1.mp4", image: "/api/signs/numbers/1.jpg" },
      { id: "2", number: "2", videoUrl: "/api/signs/numbers/2.mp4", image: "/api/signs/numbers/2.jpg" },
      // Add more numbers...
    ],
  },
  {
    id: "phrases",
    title: "Common Phrases",
    description: "Learn common ISL phrases",
    lessons: [
      { id: "hello", phrase: "Hello", gujarati: "હેલો", videoUrl: "/api/signs/phrases/hello.mp4" },
      { id: "thank-you", phrase: "Thank You", gujarati: "આભાર", videoUrl: "/api/signs/phrases/thank-you.mp4" },
      // Add more phrases...
    ],
  },
]

// Get all learning modules
router.get("/modules", (req, res) => {
  res.json({
    success: true,
    modules: learningModules.map((module) => ({
      id: module.id,
      title: module.title,
      description: module.description,
      lessonCount: module.lessons.length,
    })),
  })
})

// Get specific module with lessons
router.get("/modules/:moduleId", (req, res) => {
  const { moduleId } = req.params
  const module = learningModules.find((m) => m.id === moduleId)

  if (!module) {
    return res.status(404).json({ message: "Module not found" })
  }

  res.json({
    success: true,
    module,
  })
})

// Get specific lesson
router.get("/modules/:moduleId/lessons/:lessonId", (req, res) => {
  const { moduleId, lessonId } = req.params
  const module = learningModules.find((m) => m.id === moduleId)

  if (!module) {
    return res.status(404).json({ message: "Module not found" })
  }

  const lesson = module.lessons.find((l) => l.id === lessonId)
  if (!lesson) {
    return res.status(404).json({ message: "Lesson not found" })
  }

  res.json({
    success: true,
    lesson,
    moduleTitle: module.title,
  })
})

// Track learning progress (placeholder)
router.post("/progress", (req, res) => {
  const { moduleId, lessonId, completed } = req.body

  // TODO: Implement actual progress tracking with database
  res.json({
    success: true,
    message: "Progress updated successfully",
    progress: { moduleId, lessonId, completed, timestamp: new Date() },
  })
})

module.exports = router
