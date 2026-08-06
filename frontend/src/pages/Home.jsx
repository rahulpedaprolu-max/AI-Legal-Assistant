import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import QueryBox from "../components/QueryBox";
import ExampleQueries from "../components/ExampleQueries";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <QueryBox />
      <ExampleQueries />
      <Footer />
    </>
  );
}

export default Home;