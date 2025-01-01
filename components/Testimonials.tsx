const testimonials = [
  {
    quote: "Ethio Legal Shield has been a game-changer for my business. Their legal advice has saved me from potential pitfalls.",
    author: "Abebe Kebede",
    title: "Small Business Owner"
  },
  {
    quote: "I feel more secure knowing that I have legal protection for my family. The service is excellent and affordable.",
    author: "Tigist Haile",
    title: "Mother of Three"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

