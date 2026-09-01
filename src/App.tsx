import "./App.css";
import Featurepage from "./app/pages/Feature/page";
import FAQPage from "./app/pages/FQA/page";
import Homepage from "./app/pages/Home/page";
import Navpage from "./app/pages/Navbar/page";
import UseCasePage from "./app/pages/UseCase/page";
import Workspage from "./app/pages/Works/page";

function App() {
  return (
    <>
      <Navpage />
      {/* <h1>Wellcome to BMO</h1> */}
      {/* <img src="/icon-1.png" alt="" /> */}
      <Homepage />
      <Featurepage />
      <Workspage />
      <UseCasePage />
      <FAQPage />
    </>
  );
}

export default App;
