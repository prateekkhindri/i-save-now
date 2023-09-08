import "./App.css";
import ComingSoon from "./pages/coming-soon/ComingSoon";
import logo from "./assets/iSaveNow-Logos-RGB_Logo-1.png";
import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-[#0A2844] z-50">
          <img src={logo} alt="Loading..." className="w-32 md:w-64" />
        </div>
      ) : (
        <ComingSoon />
      )}
    </div>
  );
};

export default App;
