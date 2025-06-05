export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-white font-bold text-xl">Resuhire</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Resuhire bridges the gap between education and employment by empowering students, job seekers, and recruiters through AI-driven matching, industry-relevant training, and revolutionary recruitment workflows.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span className="text-white">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span className="text-white">🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span className="text-white">📸</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span className="text-white">💼</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Free Plan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Premium Plan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Gold Plan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Workshops & Training</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Hackathons</a></li>
            </ul>
          </div>

          {/* For Recruiters */}
          <div>
            <h3 className="text-white font-semibold mb-6">For Recruiters</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Smart Matching (85%)</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Talent Discovery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Quick Hiring Form</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Startup Hiring</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">No Traditional Process</a></li>
            </ul>
          </div>

          {/* Opportunities */}
          <div>
            <h3 className="text-white font-semibold mb-6">Opportunities</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Internships (FAANG)</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Startup Jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mental Coaching</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Interview Prep</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Body Language Training</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 mb-6 lg:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookies</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Legal Notice</a>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 Resuhire. Built by Youths, for Youths.
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-500 text-xs leading-relaxed">
              Resuhire does not follow traditional job market practices. We empower individuals to become career-ready and help recruiters connect with talent through modern, AI-powered solutions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
