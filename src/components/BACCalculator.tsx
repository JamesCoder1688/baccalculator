'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

type Gender = 'men' | 'women'

interface BACFormData {
  gender: Gender
  weight: number
  drinks: number
  hours: number
  drinkType: string
}

export default function BACCalculator() {
  const router = useRouter()
  const [formData, setFormData] = useState<BACFormData>({
    gender: 'men',
    weight: 70,
    drinks: 1,
    hours: 1,
    drinkType: 'beer'
  })
  
  const [bacResult, setBacResult] = useState<number | null>(null)
  const [bacCategory, setBacCategory] = useState('')

  const calculateBAC = (weight: number, drinks: number, hours: number, gender: Gender): number => {
    const genderConstant = gender === 'men' ? 0.68 : 0.55
    const alcoholGrams = drinks * 14 // 每个标准杯约含14克酒精
    const bac = (alcoholGrams * 100) / (weight * 1000 * genderConstant) - (0.015 * hours)
    return Number(Math.max(0, bac).toFixed(3))
  }

  const getBACCategory = (bac: number): string => {
    if (bac === 0) return 'Safe to drive'
    if (bac < 0.02) return 'Minimal impairment'
    if (bac < 0.05) return 'Mild impairment'
    if (bac < 0.08) return 'Increased impairment'
    return 'Legally intoxicated - DO NOT DRIVE'
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const bac = calculateBAC(formData.weight, formData.drinks, formData.hours, formData.gender)
    setBacResult(bac)
    setBacCategory(getBACCategory(bac))
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'gender' || name === 'drinkType' ? value : Number(value)
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
            <option value="men">Men</option>
            <option value="women">Women</option>
          </select>
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

        <div>
          <label className="block text-sm font-medium text-gray-700">Drink Type</label>
          <select
            name="drinkType"
            value={formData.drinkType}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="beer">Beer (12 oz, 5%)</option>
            <option value="wine">Wine (5 oz, 12%)</option>
            <option value="spirits">Spirits (1.5 oz, 40%)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Number of Drinks
          </label>
          <input
            type="number"
            name="drinks"
            value={formData.drinks}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            min="0"
            step="1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Hours Since First Drink
          </label>
          <input
            type="number"
            name="hours"
            value={formData.hours}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            min="0"
            step="0.5"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Calculate BAC
        </button>
      </form>

      {bacResult !== null && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 bg-gray-50 rounded-lg"
        >
          <h3 className="text-lg font-semibold mb-2">BAC Results</h3>
          <div className="space-y-2">
            <p>Your BAC: <span className="font-medium">{bacResult}%</span></p>
            <p>Status: <span className={`font-medium ${bacResult >= 0.08 ? 'text-red-600' : 'text-green-600'}`}>
              {bacCategory}
            </span></p>
            <p className="text-sm text-gray-500 mt-2">
              Note: This is an estimate only. Actual BAC may vary based on various factors.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  )
}