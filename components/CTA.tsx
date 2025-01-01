import { Button } from '@/components/ui/button'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Rights?</h2>
        <p className="text-xl mb-8">Join Ethio Legal Shield today and get the legal protection you deserve.</p>
        <Button className="bg-white text-blue-800 hover:bg-gray-100">
          Get Started Now
        </Button>
      </div>
    </section>
  )
}

