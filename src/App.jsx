import "./App.css";
import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox.jsx";

function App() {
  return(
    <>
     <MsgBox userName="Afjol" text="yellow" />
     <ProductTab/>
    </>
  );
}
export default App;
