import { useEffect, useState } from "react";
import "./App.css";
import Featurepage from "./app/pages/Feature/page";
import FooterPage from "./app/pages/footer/page";
import FAQPage from "./app/pages/FQA/page";
import Homepage from "./app/pages/Home/page";
import Navpage from "./app/pages/Navbar/page";
import UseCasePage from "./app/pages/UseCase/page";
import Workspage from "./app/pages/Works/page";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-logo">
            <img src="/icon-1.png" alt="BMO Extract" />
          </div>

          <div className="loading-brand">
            BMO <span>EXTRACT</span>
          </div>

          <div className="loading-line">
            <div className="loading-line-progress" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      {!loading && (
        <>
          <Navpage />
          <Homepage />
          <Featurepage />
          <Workspage />
          <UseCasePage />
          <FAQPage />
          <FooterPage />
        </>
      )}
    </>
  );
}

export default App;
