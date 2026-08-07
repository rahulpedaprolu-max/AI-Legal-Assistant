function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-700 shadow-lg">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <div>

          <h1 className="text-3xl font-extrabold text-white tracking-wide">
            ⚖ AI Legal Assistant
          </h1>

          <p className="text-blue-100 text-sm mt-1">
            AI-powered legal guidance using RAG, Indian Laws & Groq LLM
          </p>

        </div>

        <div className="hidden md:flex gap-6 text-white font-medium">

          <a
            href="#"
            className="hover:text-yellow-300 transition"
          >
            Home
          </a>

          <a
            href="#"
            className="hover:text-yellow-300 transition"
          >
            Analyze Case
          </a>

          <a
            href="#"
            className="hover:text-yellow-300 transition"
          >
            About
          </a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;