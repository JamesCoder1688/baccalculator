'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { useRouter } from 'next/navigation'

type Gender = 'men' | 'women'

interface BMIFormData {
  gender: Gender
  age: number
  height: number
  weight: number
}

export default function BMICalculator() {
  const router = useRouter()
  const [formData, setFormData] = useState<BMIFormData>({
    gender: 'men',
    age: 25,
    height: 180,
    weight: 70
  })
  
  const [bmiResult, setBmiResult] = useState<number | null>(null)
  const [bmiCategory, setBmiCategory] = useState('')

  const calculateBMI = (height: number, weight: number): number => {
    const heightInMeters = height / 100
    return Number((weight / (heightInMeters ** 2)).toFixed(1))
  }

  const getBMICategory = (bmi: number): string => {
    if (bmi < 18.5) return 'Underweight'
    if (bmi < 24.9) return 'Normal weight'
    if (bmi < 29.9) return 'Overweight'
    return 'Obese'
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const bmi = calculateBMI(formData.height, formData.weight)
    setBmiResult(bmi)
    setBmiCategory(getBMICategory(bmi))
  }

  const handleNavigateToImproveBMI = () => {
    router.push('/improve-bmi')
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'gender' ? value : Number(value)
    }))
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="men">men</option>
            <option value="women">women</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            min="1"
            max="120"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Height (cm)
          </label>
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            min="50"
            max="250"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Weight (kg)
          </label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            min="30"
            max="300"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Calculate BMI
        </button>
      </form>

      {bmiResult && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 bg-gray-50 rounded-lg"
        >
          <h3 className="text-lg font-semibold mb-2">BMI Results</h3>
          <div className="space-y-2">
            <p>Your BMI: <span className="font-medium">{bmiResult}</span></p>
            <p>Category: <span className="font-medium">{bmiCategory}</span></p>
          </div>

          <button
            onClick={handleNavigateToImproveBMI}
            className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
          >
            Get Improvement Tips
          </button>
        </motion.div>
      )}
    </div>
  )
}