export function TrustIndicators() {
  return (
    <section className="py-16 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-gray-400 text-lg">
            Trusted by millions of users worldwide for secure and reliable service
          </p>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-70">
          <div className="flex flex-col items-center justify-center">
            <div className="text-white font-bold text-3xl">50M+</div>
            <div className="text-gray-400 text-sm mt-1">Active Users</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-white font-bold text-3xl">180+</div>
            <div className="text-gray-400 text-sm mt-1">Countries Served</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-white font-bold text-3xl">99.99%</div>
            <div className="text-gray-400 text-sm mt-1">Uptime Guarantee</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-white font-bold text-3xl">1B+</div>
            <div className="text-gray-400 text-sm mt-1">Transactions Processed</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-white font-bold text-3xl">24/7</div>
            <div className="text-gray-400 text-sm mt-1">Support Availability</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-white font-bold text-3xl">15+</div>
            <div className="text-gray-400 text-sm mt-1">Years in Operation</div>
          </div>
        </div>

        {/* Security and Compliance Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-16">
          <div className="flex items-center space-x-3 bg-gray-800/30 rounded-lg px-6 py-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">✓</span>
            </div>
            <div>
              <div className="text-white font-semibold">SOC 2 Certified</div>
              <div className="text-gray-400 text-sm">Data Security & Privacy</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-gray-800/30 rounded-lg px-6 py-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">🔒</span>
            </div>
            <div>
              <div className="text-white font-semibold">256-bit SSL Encryption</div>
              <div className="text-gray-400 text-sm">End-to-end Security</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-gray-800/30 rounded-lg px-6 py-3">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">🛡️</span>
            </div>
            <div>
              <div className="text-white font-semibold">GDPR Compliant</div>
              <div className="text-gray-400 text-sm">User Privacy Protection</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
