const express = require("express")
const multer = require("multer")
const { body, validationResult } = require("express-validator")
const router = express.Router()

// Configure multer for file uploads
const upload = multer({
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/") || file.mimetype.startsWith("video/")) {
      cb(null, true)
    } else {
      cb(new Error("Only image and video files are allowed"))
    }
  },
})

// Sign to Text translation
router.post("/sign-to-text", upload.single("signVideo"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No video file provided" })
    }

    // TODO: Implement actual sign language recognition
    // This is a placeholder response
    const mockTranslation = {
      text: "Hello, how are you?",
      gujarati: "હેલો, તમે કેમ છો?",
      confidence: 0.85,
      detectedSigns: ["hello", "how", "are", "you"],
    }

    res.json({
      success: true,
      translation: mockTranslation,
      message: "Sign successfully translated to text",
    })
  } catch (error) {
    res.status(500).json({ message: "Error processing sign translation" })
  }
})

// Text to Sign translation
router.post(
  "/text-to-sign",
  [body("text").trim().isLength({ min: 1 }), body("language").optional().isIn(["english", "gujarati"])],
  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }

      const { text, language = "english" } = req.body

      // TODO: Implement actual text to sign conversion
      // This is a placeholder response
      const mockSignData = {
        signVideoUrl: "/api/signs/demo-video.mp4",
        signImages: ["/api/signs/sign1.jpg", "/api/signs/sign2.jpg", "/api/signs/sign3.jpg"],
        breakdown: text.split(" ").map((word) => ({
          word,
          signUrl: `/api/signs/${word.toLowerCase()}.jpg`,
        })),
        duration: text.split(" ").length * 2, // 2 seconds per word
      }

      res.json({
        success: true,
        originalText: text,
        language,
        signData: mockSignData,
        message: "Text successfully converted to sign language",
      })
    } catch (error) {
      res.status(500).json({ message: "Error processing text to sign conversion" })
    }
  },
)

module.exports = router
