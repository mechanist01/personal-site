// app/about/page.tsx
export default async function About() {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 p-4 md:p-6 bg-zinc-900 border border-zinc-800">
          <h1 className="text-xl md:text-2xl font-medium mb-2 md:mb-3">About Me</h1>
          <p className="text-zinc-400 text-sm md:text-base">AI Developer & Sales Strategist</p>
        </div>
  
        <div className="grid gap-6">
          <div className="p-4 md:p-6 bg-zinc-900 border border-zinc-800">
            <h2 className="text-lg font-medium mb-3">Background</h2>
            <p className="text-zinc-400">
              Professional with deep experience in sales, marketing, and software development. 
              Focused on building AI-powered solutions that merge technical innovation with practical business applications.
            </p>
          </div>
  
          <div className="p-4 md:p-6 bg-zinc-900 border border-zinc-800">
            <h2 className="text-lg font-medium mb-3">Experience</h2>
            <div className="space-y-4 text-zinc-400">
              <div>
                <h3 className="font-medium text-zinc-100">AI Software Development</h3>
                <p className="text-sm">2023 - Present</p>
                <p className="mt-2">Building AI-powered applications with focus on semantic search and automation solutions.</p>
              </div>
              <div>
                <h3 className="font-medium text-zinc-100">Marketing Strategy</h3>
                <p className="text-sm">2019 - 2023</p>
                <p className="mt-2">Digital marketing, funnel optimization, and marketing automation implementation.</p>
              </div>
              <div>
                <h3 className="font-medium text-zinc-100">Sales Leadership</h3>
                <p className="text-sm">2012 - 2023</p>
                <p className="mt-2">Outbound and inside sales, focusing on relationship building and strategic partnerships.</p>
              </div>
            </div>
          </div>
  
          <div className="p-4 md:p-6 bg-zinc-900 border border-zinc-800">
            <h2 className="text-lg font-medium mb-3">Skills</h2>
            <div className="grid md:grid-cols-3 gap-4 text-zinc-400">
              <div>
                <h3 className="font-medium text-zinc-100 mb-2">Sales</h3>
                <ul className="space-y-1">
                  <li>• Enterprise Sales</li>
                  <li>• Solution Selling</li>
                  <li>• Sales Operations</li>
                  <li>• Pipeline Management</li>
                  <li>• Territory Planning</li>
                  <li>• Account Management</li>
                  <li>• Contract Negotiation</li>
                  <li>• CRM Management</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-zinc-100 mb-2">Marketing</h3>
                <ul className="space-y-1">
                  <li>• Meta Ads Manager</li>
                  <li>• Google Analytics</li>
                  <li>• SEO/SEM</li>
                  <li>• Content Strategy</li>
                  <li>• Email Marketing</li>
                  <li>• Marketing Automation</li>
                  <li>• Funnel Optimization</li>
                  <li>• Adobe Creative Suite</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-zinc-100 mb-2">Development</h3>
                <ul className="space-y-1">
                  <li>• Claude/GPT Integration</li>
                  <li>• React/Next.js/Node</li>
                  <li>• Python/FastAPI</li>
                  <li>• Bubble.io</li>
                  <li>• Make.com</li>
                  <li>• RapidAPI</li>
                  <li>• Semantic Search</li>
                  <li>• Vector Databases</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }