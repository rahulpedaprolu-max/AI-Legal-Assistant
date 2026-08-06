function ResultCard({ title, items }) {

    if (!items || items.length === 0) return null;

    return (

        <div className="bg-white rounded-2xl shadow-lg p-6">

            <h2 className="text-2xl font-bold mb-4">
                {title}
            </h2>

            <ul className="space-y-3">

                {items.map((item, index) => (

                    <li
                        key={index}
                        className="bg-gray-100 rounded-lg p-3"
                    >

                        {typeof item === "string"
                            ? item
                            : JSON.stringify(item)}

                    </li>

                ))}

            </ul>

        </div>

    );

}

export default ResultCard;