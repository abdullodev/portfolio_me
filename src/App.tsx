import { Routes } from "routes";
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  return (
    <main className="app">
      <Routes />
      <Toaster />
    </main>
  );
}

export default App;
