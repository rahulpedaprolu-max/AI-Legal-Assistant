import { useState } from "react";
import api from "../services/api";
import ResultCard from "./ResultCard";

function QueryBox() {
  const [query, setQuery] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState("");
  const [result, setResult] = useState(null);

  const analyzeCase = async () => {
    if (!query.trim()) {
      alert("Please enter your legal issue.");
      return;
    }

    try {
      setLoading(true);
      setResult(null);

      setLoadingStep("🔍 Searching legal documents...");

      const formData = new FormData();
      formData.append("query", query);

      if (selectedFile) {
        formData.append("file", selectedFile);
      }

      setTimeout(() => {
        setLoadingStep("⚖ Retrieving relevant law sections...");
      }, 1000);

      setTimeout(() => {
        setLoadingStep("🤖 Generating AI legal guidance...");
      }, 2200);

      const response = await api.post(
        "/analyze-case",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResult(response.data);

    } catch (err) {
      console.error("Backend Error:", err);

      if (err.response) {
        alert(
          `Backend Error (${err.response.status})\n\n${JSON.stringify(
            err.response.data,
            null,
            2
          )}`
        );
      } else if (err.request) {
        alert(
          "Unable to reach the backend.\n\nPlease check if the Render backend is running."
        );
      } else {
        alert(err.message);
      }

    } finally {
      setLoading(false);
      setLoadingStep("");
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-12 px-6">

      <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-10">

        <h2 className="text-4xl font-bold text-center text-slate-800">
          📝 Describe Your Legal Issue
        </h2>

        <p className="text-center text-gray-500 mt-3 mb-8">
          Explain your issue in simple language.
          Our AI retrieves relevant Indian laws,
          procedures and supporting references.
        </p>

        <textarea
          rows={8}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Example: My employer has not paid my salary for three months despite repeated reminders..."
          className="w-full rounded-2xl border-2 border-gray-300 p-5 text-lg resize-none focus:border-blue-600 focus:outline-none"
        />

        <div className="mt-8">

          <label className="block text-lg font-semibold mb-3">
            📎 Upload Supporting Document (Optional)
          </label>

          <input
            type="file"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            onChange={(e) => setSelectedFile(e.target.files[0])}
            className="w-full border rounded-xl p-3"
          />

          {selectedFile && (
            <div className="mt-3 bg-green-100 border border-green-300 rounded-xl p-3">
              ✅ Selected File:
              <strong> {selectedFile.name}</strong>
            </div>
          )}

        </div>

        <div className="text-center mt-10">

          <button
            onClick={analyzeCase}
            disabled={loading}
            className="bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white text-xl font-bold px-10 py-4 rounded-2xl shadow-lg transition duration-300 disabled:bg-gray-400"
          >
            {loading ? "Analyzing..." : "🔍 Analyze Case"}
          </button>

        </div>

        {loading && (
          <div className="mt-10 bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center animate-pulse">

            <h3 className="text-2xl font-bold text-blue-700">
              🤖 AI is analyzing your case...
            </h3>

            <p className="mt-5 text-lg text-gray-700">
              {loadingStep}
            </p>

            <div className="w-full bg-gray-300 rounded-full h-4 mt-8 overflow-hidden">
              <div className="bg-blue-700 h-4 rounded-full animate-pulse w-3/4"></div>
            </div>

            <p className="mt-6 text-gray-500">
              This usually takes a few seconds.
            </p>

          </div>
        )}

      </div>

      {result && (

        <div className="mt-12 space-y-8">

          <ResultCard
            title="📄 Case Summary"
            items={[result.summary]}
          />

          <ResultCard
            title="⚖ Applicable Law Sections"
            items={result.law_sections}
          />

          <ResultCard
            title="📝 Step-by-Step Procedure"
            items={result.procedure}
          />

          <ResultCard
            title="📂 Required Documents"
            items={result.documents}
          />

          {result.sources && result.sources.length > 0 && (

            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8">

              <div className="flex items-center mb-6">

                <div className="w-2 h-10 bg-blue-700 rounded-full mr-4"></div>

                <h2 className="text-3xl font-bold text-slate-800">
                  📚 Legal Sources
                </h2>

              </div>

              <p className="text-gray-500 mb-6">
                The following legal documents were retrieved by the RAG system while generating this response.
              </p>

              <div className="grid md:grid-cols-2 gap-5">

                {result.sources.map((source, index) => (

                  <div
                    key={index}
                    className="bg-blue-50 border border-blue-200 rounded-2xl p-5 hover:shadow-lg transition"
                  >

                    <h3 className="text-xl font-bold text-blue-800 mb-3">
                      📄 {source.document}
                    </h3>

                    <p className="text-gray-700">
                      <strong>📑 Page:</strong> {source.page}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          )}

        </div>

      )}

    </div>
  );
}

export default QueryBox;