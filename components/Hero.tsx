import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Protect Your Rights with Ethio Legal Shield</h1>
          <p className="text-xl mb-8">Affordable legal protection for individuals and businesses in Ethiopia</p>
          <Button className="bg-white text-blue-800 hover:bg-gray-100">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}

