function Footer() {
  return (
    <footer className="mt-24 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-8 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Project */}

          <div>

            <h2 className="text-3xl font-bold mb-4">
              ⚖ AI Legal Assistant
            </h2>

            <p className="text-gray-300 leading-7">

              Empowering every citizen with accessible, explainable,
              and AI-powered legal guidance based on Indian laws.

            </p>

          </div>

          {/* Technologies */}

          <div>

            <h3 className="text-xl font-semibold mb-4">
              🚀 Tech Stack
            </h3>

            <ul className="space-y-2 text-gray-300">

              <li>⚛ React + Tailwind CSS</li>

              <li>⚡ FastAPI</li>

              <li>📚 LangChain + ChromaDB</li>

              <li>🤖 Groq Llama 3.3</li>

              <li>🔍 Retrieval-Augmented Generation (RAG)</li>

            </ul>

          </div>

          {/* Features */}

          <div>

            <h3 className="text-xl font-semibold mb-4">
              ⭐ Features
            </h3>

            <ul className="space-y-2 text-gray-300">

              <li>✔ AI Legal Research</li>

              <li>✔ Explainable Responses</li>

              <li>✔ Source Citations</li>

              <li>✔ Procedure Guidance</li>

              <li>✔ Required Documents</li>

            </ul>

          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">

          © 2026 AI Legal Assistant • Built for Hackathon • Powered by AI

        </div>

      </div>

    </footer>
  );
}

export default Footer;