# ISL Converter - Full Stack Application

*Modern Indian Sign Language Converter with AI-powered translation*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/sharad-srts-projects/v0-isl-converter-ui)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/8VbuCOn6hpN)

## Overview

A comprehensive Indian Sign Language (ISL) converter application that enables seamless communication between sign language and text. Built for SIH 2025 — Gujarat Vidyapith.

### Features

- **Sign to Text**: Convert ISL videos to readable text in English and Gujarati
- **Text to Sign**: Transform text into ISL video demonstrations
- **Learn ISL**: Interactive learning modules with step-by-step lessons
- **Dual Language Support**: English and Gujarati interface
- **Light/Dark Mode**: Comfortable viewing in any environment
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile

## Project Structure

This is a full-stack application with separate frontend and backend:

\`\`\`
ISL_client/
├── client/                 # Next.js Frontend Application
│   ├── app/               # Next.js App Router pages
│   ├── components/        # React components
│   ├── public/           # Static assets
│   ├── package.json      # Frontend dependencies
│   └── ...
└── server/                # Express.js Backend API
    ├── routes/           # API route handlers
    ├── uploads/          # File upload directory
    ├── package.json      # Backend dependencies
    └── server.js         # Main server file
\`\`\`

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Frontend Setup

1. Navigate to the client directory:
   \`\`\`bash
   cd client
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

The frontend will be available at `http://localhost:3000`

### Backend Setup

1. Navigate to the server directory:
   \`\`\`bash
   cd server
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Create environment file:
   \`\`\`bash
   cp .env.example .env
   \`\`\`

4. Update the `.env` file with your configuration values.

5. Create uploads directory:
   \`\`\`bash
   mkdir uploads
   \`\`\`

6. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

The backend API will be available at `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Translation
- `POST /api/translate/sign-to-text` - Convert sign language video to text
- `POST /api/translate/text-to-sign` - Convert text to sign language

### Learning System
- `GET /api/learn/modules` - Get all learning modules
- `GET /api/learn/modules/:moduleId` - Get specific module with lessons
- `POST /api/learn/progress` - Track learning progress

### File Upload
- `POST /api/upload/single` - Upload single file
- `POST /api/upload/multiple` - Upload multiple files

## Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Modern utility-first styling
- **Shadcn/ui** - Beautiful, accessible components
- **Lucide React** - Icon library

### Backend
- **Express.js** - Web application framework
- **JWT** - Authentication tokens
- **Multer** - File upload handling
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing
- **Rate Limiting** - API protection

## Development

Continue building your app on:

**[https://v0.app/chat/projects/8VbuCOn6hpN](https://v0.app/chat/projects/8VbuCOn6hpN)**

## Deployment

### Frontend Deployment
The frontend is automatically deployed to Vercel and stays in sync with your v0.app project.

### Backend Deployment
Deploy the backend to your preferred platform (Vercel, Railway, Heroku, etc.) and update the `CLIENT_URL` environment variable.

## Contributing

Built for SIH 2025 — Gujarat Vidyapith. This project aims to bridge communication gaps and make Indian Sign Language more accessible to everyone.

## License

MIT License - see LICENSE file for details.
