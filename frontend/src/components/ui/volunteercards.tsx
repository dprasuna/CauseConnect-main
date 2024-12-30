import React from 'react'
import { User, Quote } from 'lucide-react'

interface Volunteer {
  name: string
  feedback: string
}

const volunteers: Volunteer[] = [
  { name: 'John Doe', feedback: 'Great event, very well organized! Had a fantastic time volunteering and meeting new people.' },
  { name: 'Jane Smith', feedback: 'Loved the community spirit! It was rewarding to be part of something so positive.' },
  { name: 'Michael Brown', feedback: 'Amazing opportunity to meet new people and give back to the community.' },
  { name: 'Emily White', feedback: 'Very fulfilling experience! Felt great to contribute in a meaningful way.' },
  { name: 'Robert Green', feedback: 'Great networking opportunities and an enjoyable event overall. Highly recommend!' },
]

const VolunteerCards: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white to-indigo-50/50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-blue-800 text-transparent bg-clip-text">
              Volunteer Stories
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our amazing volunteers about their experiences and the impact they've made in their communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {volunteers.map((volunteer, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-24 h-24 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full blur-2xl opacity-0 group-hover:opacity-70 transition-opacity" />
              <Quote className="absolute top-4 right-4 w-8 h-8 text-indigo-100" />

              <div className="relative">
                <div className="flex items-center mb-6">
                  <di className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </di  >
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{volunteer.name}</h3>
                    <p className="text-sm text-gray-500">Volunteer</p>
                  </div>
                </div>
                <blockquote className="relative">
                  <p className="text-gray-600 leading-relaxed">
                    "{volunteer.feedback}"
                  </p>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VolunteerCards