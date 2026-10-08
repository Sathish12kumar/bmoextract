import { useEffect, useState } from "react";
import "./App.css";
import Featurepage from "./app/pages/Feature/page";
import FooterPage from "./app/pages/footer/page";
import FAQPage from "./app/pages/FQA/page";
import Homepage from "./app/pages/Home/page";
// import AboutPage from "./app/pages/About/page";
import Navpage from "./app/pages/Navbar/page";
// import LivePreview from "./app/pages/LivePreview/page";
import UseCasePage from "./app/pages/UseCase/page";
import Workspage from "./app/pages/Works/page";
// import CTABanner from "./app/pages/CTA/page";
import ReviewsPage from "./app/pages/Reviews/page";
import useSmoothScroll from "./app/core/hooks/useSmoothScroll";
import useScrollReveal from "./app/core/hooks/useScrollReveal";

function App() {
  const [loading, setLoading] = useState(true);
  useSmoothScroll();
  useScrollReveal(loading);

  useEffect(() => {
    // Ensure refreshed page starts at Home session (top)
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      if (window.location.hash && window.location.hash !== "#home") {
        window.history.replaceState(null, "", window.location.pathname + "#home");
      }
      window.scrollTo(0, 0);
      if (window.lenisInstance) {
        window.lenisInstance.scrollTo(0, { immediate: true });
      }
    }

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
      if (window.lenisInstance) {
        window.lenisInstance.scrollTo(0, { immediate: true });
      }
    }, 1500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="relative w-full max-w-full overflow-x-hidden [overflow-x:clip] min-h-screen bg-[var(--color-light)] text-[var(--color-dark)] selection:bg-[#ff7c36]/20 selection:text-[#ff7c36]">
      {loading && (
        <div className="loading-screen" role="status" aria-label="Loading BMO Extract">
          <div className="loading-content">
            <div className="loading-logo">
              <img src="/icon-1.png" alt="BMO Extract" />
            </div>

            <div className="loading-brand font-display">
              BMO <span>EXTRACT</span>
            </div>

            <p className="mt-1 text-[11px] font-bold tracking-widest text-orange-400 uppercase">
              Initializing Intelligence
            </p>

            <div className="loading-line">
              <div className="loading-line-progress" />
            </div>
          </div>
        </div>
      )}

      <Navpage />
      <Homepage />
      {/* <AboutPage /> */}
      <Featurepage />
      {/* <LivePreview /> */}
      <Workspage />
      <UseCasePage />
      <ReviewsPage />
      <FAQPage />
      {/* <CTABanner /> */}
      <FooterPage />
    </div>
  );
}

export default App;
