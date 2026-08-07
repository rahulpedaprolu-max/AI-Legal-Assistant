function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="text-center">

        {/* Badge */}

        <div className="inline-block bg-blue-100 text-blue-800 px-5 py-2 rounded-full font-semibold mb-6">
          🇮🇳 AI-Powered Indian Legal Assistance
        </div>

        {/* Heading */}

        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
          Understand Your
          <span className="text-blue-700"> Legal Rights </span>
          with AI
        </h1>

        {/* Description */}

        <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto leading-8">
          Describe your legal issue in simple language. Our AI retrieves
          relevant Indian laws, explains them in plain English, and guides
          you through the legal process with supporting references.
        </p>

        {/* Disclaimer */}

        <div className="mt-8 bg-yellow-50 border border-yellow-300 rounded-2xl p-5 max-w-4xl mx-auto shadow-sm">

          <p className="text-yellow-900 leading-7">

            ⚠ <strong>Disclaimer:</strong> This platform provides AI-assisted
            legal guidance based on Indian laws and publicly available legal
            documents. The information is intended for educational and
            informational purposes only and should not be considered a
            substitute for professional legal advice.

          </p>

        </div>

        {/* Technology Tags */}

        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <span className="bg-white shadow-md rounded-full px-5 py-3 font-semibold">
            ⚖ BNS & BNSS
          </span>

          <span className="bg-white shadow-md rounded-full px-5 py-3 font-semibold">
            📚 RAG Powered
          </span>

          <span className="bg-white shadow-md rounded-full px-5 py-3 font-semibold">
            🤖 Groq Llama 3.3
          </span>

          <span className="bg-white shadow-md rounded-full px-5 py-3 font-semibold">
            📄 Explainable Results
          </span>

        </div>

      </div>

      {/* Feature Cards */}

      <div className="grid md:grid-cols-3 gap-8 mt-16">

        {/* Card 1 */}

        <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition duration-300">

          <div className="text-5xl mb-5">
            ⚖
          </div>

          <h2 className="text-2xl font-bold mb-3">
            Legal Research
          </h2>

          <p className="text-gray-600 leading-7">
            Retrieves relevant sections from Bharatiya Nyaya Sanhita (BNS),
            BNSS, Constitution of India and other legal documents using
            Retrieval-Augmented Generation (RAG).
          </p>

        </div>

        {/* Card 2 */}

        <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition duration-300">

          <div className="text-5xl mb-5">
            📄
          </div>

          <h2 className="text-2xl font-bold mb-3">
            Step-by-Step Guidance
          </h2>

          <p className="text-gray-600 leading-7">
            Understand the legal process, filing procedure, timelines,
            and required documents in clear and simple language suitable
            for every citizen.
          </p>

        </div>

        {/* Card 3 */}

        <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition duration-300">

          <div className="text-5xl mb-5">
            🔒
          </div>

          <h2 className="text-2xl font-bold mb-3">
            Explainable AI
          </h2>

          <p className="text-gray-600 leading-7">
            Every response is grounded in retrieved legal documents instead
            of AI guesses, providing transparent and trustworthy legal
            assistance with source references.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Hero;