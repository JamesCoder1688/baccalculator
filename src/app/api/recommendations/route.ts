import { NextResponse } from 'next/server'
import axios from 'axios'

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY
const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions'

export async function POST(request: Request) {
  try {
    const { bmi, age, gender, activityLevel, goal } = await request.json()

    const prompt = `As a health expert, provide personalized recommendations for a ${age} year old ${gender} with a BMI of ${bmi}. 
    Their activity level is ${activityLevel} and their goal is to ${goal} weight. 
    Focus on specific, actionable advice for diet, exercise, and lifestyle changes. 
    Include daily calorie targets, recommended exercises, meal planning tips, and lifestyle adjustments.
    Keep the response concise and well-structured.`

    const response = await axios.post(DEEPSEEK_API_URL, {
      model: 'deepseek-chat',
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ]
    }, {
      headers: {
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
        'Content-Type': 'application/json'
      }
    })

    return NextResponse.json({
      recommendations: response.data.choices[0].message.content
    })
  } catch (error) {
    console.error('Error fetching recommendations:', error)
    return NextResponse.json(
      { error: 'Failed to get recommendations' },
      { status: 500 }
    )
  }
}