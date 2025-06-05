import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-teal-900/20 to-black" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative container mx-auto px-6 text-center">
        {/* Trust Badge */}
        <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-teal-500 rounded-full border-2 border-black"></div>
            <div className="w-6 h-6 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full border-2 border-black"></div>
            <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-2 border-black"></div>
            <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full border-2 border-black"></div>
          </div>
          <span className="text-gray-300 text-sm">Empowering 500K+ Students & Startups</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          The Future of
          <span className="bg-gradient-to-r from-green-400 via-teal-500 to-cyan-400 bg-clip-text text-transparent"> Recruitment </span>
          Starts Here
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          ResuHire connects students and fresh graduates with top-tier internships and startups.
          Simplify hiring, get discovered, and launch your career or team today.
        </p>

        {/* Email Signup Form */}
        <div className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <Button className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-200">
              Join Now
            </Button>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Start connecting with opportunities — no fees, just impact.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">+200K</div>
            <div className="text-gray-400">Students Matched</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">3K+</div>
            <div className="text-gray-400">Partner Startups</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400">Platform Access</div>
          </div>
        </div>
      </div>
    </section>
  )
}
