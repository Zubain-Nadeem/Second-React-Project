import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero-section";
import Transparent from "./Components/Transparent-pricing";
import About from "./Components/About-us";
import Utilization from "./Components/Utilization";
import Solar from "./Components/Solar-Saver";
import BeforAfter from "./Components/Befor-After"
import Equiment from "./Components/Equiment";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Transparent />
      <About />
      <Utilization />
      <Solar />
      <BeforAfter />
      <Equiment />
    </div>
  );
};

export default App;
