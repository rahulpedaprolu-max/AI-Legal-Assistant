function ResultCard({ title, items }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition duration-300">

      <div className="flex items-center mb-6">

        <div className="w-2 h-10 bg-blue-700 rounded-full mr-4"></div>

        <h2 className="text-3xl font-bold text-slate-800">
          {title}
        </h2>

      </div>

      <ul className="space-y-4">

        {items.map((item, index) => (

          <li
            key={index}
            className="flex items-start bg-blue-50 border border-blue-100 rounded-2xl p-4"
          >

            <span className="text-blue-700 text-xl mr-3 mt-1">
              ✓
            </span>

            <span className="text-gray-700 leading-7 text-lg">

              {typeof item === "string"
                ? item
                : JSON.stringify(item)}

            </span>

          </li>

        ))}

      </ul>

    </div>
  );
}

export default ResultCard;