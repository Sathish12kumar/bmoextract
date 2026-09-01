import "./App.css";
import Featurepage from "./app/pages/Feature/page";
import Homepage from "./app/pages/Home/page";
import Navpage from "./app/pages/Navbar/page";

function App() {
  return (
    <>
      <Navpage />
      {/* <h1>Wellcome to BMO</h1> */}
      {/* <img src="/icon-1.png" alt="" /> */}
      <Homepage />
      <Featurepage />
    </>
  );
}

export default App;
