'use client'

import React, { useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'

interface FormData {
  height: number
  weight: number
  age: number
  gender: 'Men' | 'Women'
  activityLevel: 'sedentary' | 'moderate' | 'active'
  goal: 'lose' | 'maintain' | 'gain'
}

export default function ImproveBMI() {
  const [formData, setFormData] = useState<FormData>({
    height: 180,
    weight: 70,
    age: 30,
    gender: 'Men',
    activityLevel: 'moderate',
    goal: 'maintain'
  })
  const [recommendations, setRecommendations] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'height' || name === 'weight' || name === 'age' ? Number(value) : value
    }))
  }

  const calculateBMI = (height: number, weight: number): number => {
    const heightInMeters = height / 100
    return Number((weight / (heightInMeters * heightInMeters)).toFixed(1))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const bmi = calculateBMI(formData.height, formData.weight)

    try {
      const response = await axios.post('/api/recommendations', {
        bmi,
        ...formData
      })
      setRecommendations(response.data.recommendations)
    } catch (err) {
      setError('Failed to get recommendations. Please try again later.')
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  const cleanRecommendationText = (text: string) => {
    return text.replace(/[#*-]/g, '').trim()
  }

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Bmi chart
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Get Personalized BMI Improvement Plan
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="height" className="block text-sm font-medium text-gray-700">
                  Height (cm)
                </label>
                <input
                  type="number"
                  name="height"
                  id="height"
                  value={formData.height}
                  onChange={handleInputChange}
                  className="input-primary"
                  min="100"
                  max="250"
                  required
                />
              </div>

              <div>
                <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  name="weight"
                  id="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  className="input-primary"
                  min="30"
                  max="300"
                  required
                />
              </div>

              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  id="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="input-primary"
                  min="18"
                  max="120"
                  required
                />
              </div>

              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <select
                  name="gender"
                  id="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="input-primary"
                >
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                </select>
              </div>

              <div>
                <label htmlFor="activityLevel" className="block text-sm font-medium text-gray-700">
                  Activity Level
                </label>
                <select
                  name="activityLevel"
                  id="activityLevel"
                  value={formData.activityLevel}
                  onChange={handleInputChange}
                  className="input-primary"
                >
                  <option value="sedentary">Sedentary</option>
                  <option value="moderate">Moderately Active</option>
                  <option value="active">Very Active</option>
                </select>
              </div>

              <div>
                <label htmlFor="goal" className="block text-sm font-medium text-gray-700">
                  Goal
                </label>
                <select
                  name="goal"
                  id="goal"
                  value={formData.goal}
                  onChange={handleInputChange}
                  className="input-primary"
                >
                  <option value="lose">Lose Weight</option>
                  <option value="maintain">Maintain Weight</option>
                  <option value="gain">Gain Weight</option>
                </select>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
              >
                {loading ? 'Getting Recommendations...' : 'Get Personalized Plan'}
              </button>
            </div>
          </form>

          {error && (
            <div className="mt-6 bg-red-50 border border-red-200 rounded-md p-4">
              <p className="text-red-600">{error}</p>
            </div>
          )}

          {recommendations && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 bg-blue-50 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Your Personalized Recommendations
              </h3>
              <div className="prose prose-blue max-w-none">
                <p className="text-gray-600 whitespace-pre-line">
                  {cleanRecommendationText(recommendations)}
                </p>
              </div>
            </motion.div>
          )}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            General Health Tips
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900">Regular Exercise</h4>
              <p className="mt-2 text-gray-600">
                Aim for at least 150 minutes of moderate activity or 75 minutes of vigorous activity per week.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900">Balanced Diet</h4>
              <p className="mt-2 text-gray-600">
                Focus on whole foods, lean proteins, fruits, vegetables, and healthy fats.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900">Lifestyle Habits</h4>
              <p className="mt-2 text-gray-600">
                Get 7-9 hours of quality sleep and manage stress through relaxation techniques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}