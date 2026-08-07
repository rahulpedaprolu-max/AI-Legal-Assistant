function ExampleQueries() {

  const examples = [

    "My employer has not paid my salary.",

    "Someone stole my bike.",

    "My landlord is not returning my deposit.",

    "I received a fake UPI payment request.",

    "Amazon refused my refund."

  ];

  return (

    <div className="max-w-6xl mx-auto mt-12">

      <h2 className="text-2xl font-bold mb-5">

        💡 Try These Example Queries

      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        {examples.map((q,index)=>(

          <div
            key={index}
            className="bg-white shadow rounded-xl p-4"
          >

            {q}

          </div>

        ))}

      </div>

    </div>

  );

}

export default ExampleQueries;