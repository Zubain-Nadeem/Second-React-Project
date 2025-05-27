import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero-section";
import Transparent from "./Components/Transparent-pricing";
import About from "./Components/About-us";
import Utilization from "./Components/Utilization";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Transparent />
      <About />
      <Utilization />
    </div>
  );
};

export default App;
