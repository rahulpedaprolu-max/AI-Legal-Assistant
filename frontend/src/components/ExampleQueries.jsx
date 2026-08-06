function ExampleQueries() {

  const examples = [

    "Employer not paying salary",

    "Landlord refusing deposit",

    "Cheque bounced",

    "Property dispute",

    "Cyber fraud"

  ];

  return (

    <div className="max-w-4xl mx-auto mt-10">

      <h2 className="text-xl font-semibold mb-4">

        Example Queries

      </h2>

      <div className="grid grid-cols-2 gap-4">

        {

          examples.map((item, index) => (

            <div
              key={index}
              className="border p-4 rounded-lg cursor-pointer hover:bg-gray-100"
            >

              {item}

            </div>

          ))

        }

      </div>

    </div>

  );

}

export default ExampleQueries;