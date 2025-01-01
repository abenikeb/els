import { Shield, Scale, Users } from 'lucide-react'

const features = [
  {
    icon: <Shield className="h-10 w-10 text-blue-600" />,
    title: 'Legal Protection',
    description: 'Get access to a network of experienced attorneys for your legal needs.'
  },
  {
    icon: <Scale className="h-10 w-10 text-blue-600" />,
    title: 'Legal Advice',
    description: 'Receive professional legal advice on various matters affecting your life or business.'
  },
  {
    icon: <Users className="h-10 w-10 text-blue-600" />,
    title: 'Family Coverage',
    description: 'Extend legal protection to your family members at no additional cost.'
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

