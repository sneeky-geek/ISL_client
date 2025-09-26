# ISL Converter Server

Backend API server for the Indian Sign Language (ISL) Converter application.

## Features

- **Authentication**: User registration and login with JWT tokens
- **Translation API**: Sign-to-text and text-to-sign conversion endpoints
- **Learning System**: API for ISL learning modules and progress tracking
- **File Upload**: Secure file upload handling for images and videos
- **Security**: Rate limiting, CORS, helmet, and input validation

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

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

### Running the Server

Development mode:
\`\`\`bash
npm run dev
\`\`\`

Production mode:
\`\`\`bash
npm start
\`\`\`

The server will start on `http://localhost:5000` (or the port specified in your `.env` file).

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Translation
- `POST /api/translate/sign-to-text` - Convert sign language video to text
- `POST /api/translate/text-to-sign` - Convert text to sign language

### Learning
- `GET /api/learn/modules` - Get all learning modules
- `GET /api/learn/modules/:moduleId` - Get specific module with lessons
- `GET /api/learn/modules/:moduleId/lessons/:lessonId` - Get specific lesson
- `POST /api/learn/progress` - Track learning progress

### File Upload
- `POST /api/upload/single` - Upload single file
- `POST /api/upload/multiple` - Upload multiple files

### Health Check
- `GET /api/health` - Server health status

## Project Structure

\`\`\`
server/
├── routes/
│   ├── auth.js          # Authentication routes
│   ├── translate.js     # Translation API routes
│   ├── learn.js         # Learning system routes
│   └── upload.js        # File upload routes
├── uploads/             # File upload directory
├── .env.example         # Environment variables template
├── server.js            # Main server file
├── package.json         # Dependencies and scripts
└── README.md           # This file
\`\`\`

## Security Features

- **Rate Limiting**: Prevents API abuse
- **CORS**: Configured for frontend domain
- **Helmet**: Security headers
- **Input Validation**: Request validation using express-validator
- **File Upload Security**: File type and size restrictions

## Development

The server uses nodemon for development, which automatically restarts the server when files change.

## TODO

- [ ] Implement actual sign language recognition AI
- [ ] Add database integration (MongoDB/PostgreSQL)
- [ ] Implement real-time WebSocket communication
- [ ] Add comprehensive error logging
- [ ] Implement email notifications
- [ ] Add API documentation with Swagger
- [ ] Add unit and integration tests
