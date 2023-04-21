import "./App.css";
import StyledText from "./components/StyledText/index";
import AlertButton from "./components/AlertButton/index";

function App() {
   return (
      <>
         <StyledText color="blue" />
         <AlertButton label="Baixar CV" />
      </>
   );
}

export default App;