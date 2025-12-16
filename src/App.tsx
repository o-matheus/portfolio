import { BrowserRouter } from "react-router-dom";
import Header from "./componentes/Header";
import { GlobalCSS, MainContentWrapper } from "./styles/global";
import Rotas from "./routes";
import Footer from "./componentes/Footer";

function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <MainContentWrapper>
        <Header />
        <Rotas />
        <Footer />
      </MainContentWrapper>
    </BrowserRouter>
  );
}

export default App;
