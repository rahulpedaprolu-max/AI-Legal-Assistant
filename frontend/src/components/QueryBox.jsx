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

      // Change loading messages while the request is processing
      const step1 = setTimeout(() => {
        setLoadingStep("⚖ Retrieving relevant law sections...");
      }, 1000);

      const step2 = setTimeout(() => {
        setLoadingStep("🤖 Generating AI legal guidance...");
      }, 2200);

      // Send request to Render backend
      // Do NOT manually set Content-Type.
      const response = await api.post("/analyze-case", formData);

      clearTimeout(step1);
      clearTimeout(step2);

      setResult(response.data);
    } catch (err) {
      console.error("Backend connection error:", err);

      if (err.response) {
        console.error("Backend response:", err.response.data);
        console.error("Status:", err.response.status);
      } else if (err.request) {
        console.error("No response received from backend.");
      } else {
        console.error("Request error:", err.message);
      }

      alert("Unable to connect to backend. Please try again.");
    } finally {
      setLoading(false);
      setLoadingStep("");
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4">

      {/* Query Section */}
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 md:p-10">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800">
          📝 Describe Your Legal Issue
        </h2>

        <p className="text-center text-gray-500 mt-3 mb-8">
          Explain your issue in simple language.
          Our AI will retrieve relevant Indian laws,
          procedures and supporting references.
        </p>

        {/* Legal Query */}
        <textarea
          rows="8"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Example:
My employer has not paid my salary for three months despite repeated reminders...`}
          className="w-full rounded-2xl border-2 border-gray-300 p-5 text-lg resize-none focus:border-blue-600 focus:outline-none"
        />

        {/* File Upload */}
        <div className="mt-8">

          <label className="block text-lg font-semibold mb-3">
            📎 Upload Supporting Document (Optional)
          </label>

          <input
            type="file"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            onChange={(e) => {
              const file = e.target.files?.[0] || null;
              setSelectedFile(file);
            }}
            className="w-full border rounded-xl p-3"
          />

          {selectedFile && (
            <div className="mt-3 bg-green-100 border border-green-300 rounded-xl p-3">

              ✅ Selected File:
              <strong> {selectedFile.name}</strong>

            </div>
          )}

        </div>

        {/* Analyze Button */}
        <div className="text-center mt-10">

          <button
            onClick={analyzeCase}
            disabled={loading}
            className="bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white text-xl font-bold px-10 py-4 rounded-2xl shadow-lg transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? "Analyzing..." : "🔍 Analyze Case"}
          </button>

        </div>

        {/* Loading Section */}
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

      {/* Results */}
      {result && (
        <div className="mt-12 space-y-8">

          {/* Case Summary */}
          <ResultCard
            title="📄 Case Summary"
            items={[result.summary]}
          />

          {/* Applicable Laws */}
          <ResultCard
            title="⚖ Applicable Law Sections"
            items={result.law_sections || []}
          />

          {/* Procedure */}
          <ResultCard
            title="📝 Step-by-Step Procedure"
            items={result.procedure || []}
          />

          {/* Documents */}
          <ResultCard
            title="📂 Required Documents"
            items={result.documents || []}
          />

          {/* Legal Sources */}
          {result.sources && result.sources.length > 0 && (
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6 md:p-8">

              <div className="flex items-center mb-6">

                <div className="w-2 h-10 bg-blue-700 rounded-full mr-4"></div>

                <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                  📚 Legal Sources
                </h2>

              </div>

              <p className="text-gray-500 mb-6">
                The following legal documents were retrieved by the RAG
                system while generating this response.
              </p>

              <div className="grid md:grid-cols-2 gap-5">

                {result.sources.map((source, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 border border-blue-200 rounded-2xl p-5 hover:shadow-lg transition duration-300"
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