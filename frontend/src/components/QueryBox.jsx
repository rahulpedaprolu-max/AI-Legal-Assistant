import { useState } from "react";
import api from "../services/api";
import ResultCard from "./ResultCard";

function QueryBox() {
  const [query, setQuery] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const analyzeCase = async () => {
    if (!query.trim()) {
      alert("Please enter your legal issue.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("query", query);

      if (selectedFile) {
        formData.append("file", selectedFile);
      }

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
    } catch (error) {
      console.error(error);
      alert("Unable to connect to backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">

      <div className="bg-white shadow-xl rounded-3xl p-8">

        <h2 className="text-3xl font-bold mb-6 text-center">
          Describe Your Legal Issue
        </h2>

        <textarea
          rows="8"
          className="w-full border rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Example: My employer has not paid my salary for 3 months..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="mt-6">

          <label className="block font-semibold mb-2">
            Upload Supporting Document (Optional)
          </label>

          <input
            type="file"
            accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
            onChange={(e) => setSelectedFile(e.target.files[0])}
            className="w-full border rounded-lg p-2"
          />

          {selectedFile && (
            <p className="text-green-600 mt-2">
              Selected File: {selectedFile.name}
            </p>
          )}

        </div>

        <div className="mt-8 text-center">

          <button
            onClick={analyzeCase}
            disabled={loading}
            className={`px-8 py-3 rounded-xl text-white text-lg font-semibold transition ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-700 hover:bg-blue-800"
            }`}
          >
            {loading ? "Analyzing..." : "Analyze Case"}
          </button>

        </div>

      </div>

      {result && (

        <div className="mt-10 space-y-6">

          <ResultCard
            title="📄 Summary"
            items={[result.summary]}
          />

          <ResultCard
            title="⚖ Applicable Law Sections"
            items={result.law_sections}
          />

          <ResultCard
            title="📝 Procedure"
            items={result.procedure}
          />

          <ResultCard
            title="📂 Required Documents"
            items={result.documents}
          />

          {result.sources && result.sources.length > 0 && (

            <div className="bg-white rounded-2xl shadow-lg p-6">

              <h2 className="text-2xl font-bold mb-5">
                📚 Sources
              </h2>

              <div className="space-y-3">

                {result.sources.map((source, index) => (

                  <div
                    key={index}
                    className="border rounded-xl p-4 bg-gray-100"
                  >

                    <p>

                      <strong>Document:</strong>{" "}
                      {source.document}

                    </p>

                    <p>

                      <strong>Page:</strong>{" "}
                      {source.page}

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