import "./App.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import Routes from "./pages/Routes";
import FruitesContextProvider from "./context/FruitesContext";


function App() {
  
  return (
    <>
  <FruitesContextProvider>
   <Routes/>
  </FruitesContextProvider>
    </>
  );
}

export default App;
