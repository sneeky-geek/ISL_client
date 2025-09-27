import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { text } = body

    // Validate input
    if (!text || typeof text !== 'string') {
      return NextResponse.json(
        { error: 'Text input is required' },
        { status: 400 }
      )
    }

    // For now, return hardcoded response
    // You can replace this with actual text-to-sign conversion logic later
    const convertedText = "cat sorry child"

    return NextResponse.json({
      success: true,
      originalText: text,
      convertedText: convertedText,
      message: 'Text converted to sign language successfully'
    })

  } catch (error) {
    console.error('Error in text-to-sign API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle GET requests (optional, for testing)
export async function GET() {
  return NextResponse.json({
    message: 'Text to Sign Language API is running',
    endpoint: 'POST /api/text-to-sign',
    expectedBody: { text: 'string' }
  })
}