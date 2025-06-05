import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">RH</span>
            </div>
            <span className="text-white font-bold text-xl">ResuHire</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Solutions</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">For Students</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">For Recruiters</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Internships</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:bg-gray-800">
              Log In
            </Button>
            <Button className="bg-gradient-to-r from-green-500 to-teal-600 text-white border-0 hover:from-green-600 hover:to-teal-700">
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
