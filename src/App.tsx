import "./App.css";
import Featurepage from "./app/pages/Feature/page";
import FooterPage from "./app/pages/footer/page";
import FAQPage from "./app/pages/FQA/page";
import Homepage from "./app/pages/Home/page";
import Navpage from "./app/pages/Navbar/page";
import UseCasePage from "./app/pages/UseCase/page";
import Workspage from "./app/pages/Works/page";

function App() {
  return (
    <>
      <Navpage />
      <Homepage />
      <Featurepage />
      <Workspage />
      <UseCasePage />
      <FAQPage />
      <FooterPage />
    </>
  );
}

export default App;
