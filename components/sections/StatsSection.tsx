export default function StatsSection() {
  return (
    <section className="bg-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div>
            <div className="text-5xl font-black mb-2">29+</div>
            <div className="text-lg font-medium opacity-90">Fleet Units</div>
          </div>
          <div>
            <div className="text-5xl font-black mb-2">17+</div>
            <div className="text-lg font-medium opacity-90">Years Experience</div>
          </div>
          <div>
            <div className="text-5xl font-black mb-2">100%</div>
            <div className="text-lg font-medium opacity-90">Indonesian Coverage</div>
          </div>
          <div>
            <div className="text-5xl font-black mb-2">24/7</div>
            <div className="text-lg font-medium opacity-90">Operations</div>
          </div>
        </div>
      </div>
    </section>
  )
}
