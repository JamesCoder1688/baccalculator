import React from 'react'
import { StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Fitness Enthusiast',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'This BMI calculator has been instrumental in my fitness journey. The personalized recommendations are incredibly helpful!',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Personal Trainer',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'I recommend this tool to all my clients. It\'s accurate, easy to use, and provides valuable insights.',
    rating: 5
  },
  {
    name: 'Emma Wilson',
    role: 'Healthcare Professional',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'As a healthcare professional, I appreciate the accuracy and comprehensive health advice provided by this bmi calculator.',
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
                    <h2><p className="mt-2 text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
            Trusted by Over 100,000 Users
          </p></h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See what our users have to say about their experience with our BMI calculator
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start gap-x-4 mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="h-12 w-12 rounded-full" />
                <div>
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm leading-6 text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}