import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero-section";
import Transparent from "./Components/Transparent-pricing";
import About from "./Components/About-us";
import Utilization from "./Components/Utilization";
import Solar from "./Components/Solar-Saver";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Transparent />
      <About />
      <Utilization />
      <Solar />
    </div>
  );
};

export default App;
