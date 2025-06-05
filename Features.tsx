import { Card, CardContent } from "@/components/ui/card";

export function Features() {
  const features = [
    {
      title: "Market-Correcting Intelligence",
      description:
        "Resuhire addresses the global talent mismatch at its root—transforming unfiltered applicant pools into role-ready candidates through intelligent curation, not keyword matching.",
      icon: "🧠",
      gradient: "from-purple-700 to-indigo-600",
    },
    {
      title: "Recruitment Without Resumes",
      description:
        "We eliminate legacy bottlenecks—no CVs, no cover letters. Just a dynamic signal-based profile that accelerates match time by 70% and boosts recruiter precision.",
      icon: "🚫📄",
      gradient: "from-rose-600 to-red-500",
    },
    {
      title: "AI-Powered Human Capital Engine",
      description:
        "Our proprietary AI assesses not only skills but also mindset, growth potential, and communication—metrics overlooked by traditional systems but critical to retention.",
      icon: "🤖",
      gradient: "from-sky-600 to-cyan-500",
    },
    {
      title: "Vertical SaaS for Talent Supply Chains",
      description:
        "Beyond recruitment: we embed into the entire early talent lifecycle—training, mentorship, mental resilience, and placement—maximizing LTV per user segment.",
      icon: "📊",
      gradient: "from-green-700 to-emerald-500",
    },
    {
      title: "Gen Z Network Effects",
      description:
        "A digitally native community built by and for the under-25 workforce. Every user is a potential evangelist, mentor, or hire—fueling organic distribution.",
      icon: "🌐",
      gradient: "from-yellow-500 to-orange-400",
    },
    {
      title: "Internships at FAANG. Jobs at Startups.",
      description:
        "We reverse-engineer the journey to elite hiring outcomes. From college year one to top-tier internships, we drive high-visibility, career-defining conversions.",
      icon: "🚀",
      gradient: "from-indigo-500 to-blue-400",
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Strategic Edge</span> of Resuhire
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Resuhire isn’t fixing recruiting—it’s reinventing it. With proprietary AI, frictionless UX, and a deep focus on candidate transformation, we’re building the infrastructure for next-gen employment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105"
            >
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA for Investors */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 max-w-2xl mx-auto border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4">Let’s Build the Future of Work</h3>
            <p className="text-gray-400 mb-6">
              We’re opening our next round. If you believe the hiring model is broken—and the next unicorn lies in fixing it—Resuhire is your call.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200">
              Access Investor Materials
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
