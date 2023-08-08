import { Routes } from "routes";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  return (
    <main className="app">
      <Routes />
    </main>
  );
}

export default App;
