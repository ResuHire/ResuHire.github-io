export function Statistics() {
  const stats = [
    {
      number: "1M+",
      label: "Jobs Posted",
      description: "Opportunities listed across industries"
    },
    {
      number: "500K+",
      label: "Active Recruiters",
      description: "Trusted employers sourcing top talent"
    },
    {
      number: "2M+",
      label: "Resumes Submitted",
      description: "Candidates actively applying worldwide"
    },
    {
      number: "99.8%",
      label: "Match Accuracy",
      description: "Precision in matching candidates to roles"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900/50 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Proven Track Record of
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"> Excellence</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our platform delivers measurable results connecting talent and employers efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{stat.label}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Achievements */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🏆</span>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Award Winning</h4>
            <p className="text-gray-400 text-sm">Best Hiring Platform 2025</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🔒</span>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Data Privacy</h4>
            <p className="text-gray-400 text-sm">GDPR compliant and secure</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">⚡</span>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Fast Matching</h4>
            <p className="text-gray-400 text-sm">Instant candidate-job alignment</p>
          </div>
        </div>
      </div>
    </section>
  )
}
