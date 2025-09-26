const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { body, validationResult } = require("express-validator")
const router = express.Router()

// Mock user storage (replace with database in production)
const users = []

// Register endpoint
router.post(
  "/register",
  [
    body("email").isEmail().normalizeEmail(),
    body("password").isLength({ min: 6 }),
    body("name").trim().isLength({ min: 2 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }

      const { email, password, name } = req.body

      // Check if user already exists
      const existingUser = users.find((user) => user.email === email)
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" })
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 12)

      // Create user
      const user = {
        id: users.length + 1,
        email,
        password: hashedPassword,
        name,
        createdAt: new Date(),
      }

      users.push(user)

      // Generate JWT
      const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET || "fallback-secret", {
        expiresIn: "7d",
      })

      res.status(201).json({
        message: "User registered successfully",
        token,
        user: { id: user.id, email: user.email, name: user.name },
      })
    } catch (error) {
      res.status(500).json({ message: "Server error during registration" })
    }
  },
)

// Login endpoint
router.post("/login", [body("email").isEmail().normalizeEmail(), body("password").exists()], async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body

    // Find user
    const user = users.find((user) => user.email === email)
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" })
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" })
    }

    // Generate JWT
    const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET || "fallback-secret", {
      expiresIn: "7d",
    })

    res.json({
      message: "Login successful",
      token,
      user: { id: user.id, email: user.email, name: user.name },
    })
  } catch (error) {
    res.status(500).json({ message: "Server error during login" })
  }
})

module.exports = router
