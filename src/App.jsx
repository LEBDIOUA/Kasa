import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import APropos from "./pages/APropos";
import Galerie from "./pages/Galerie";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* Définition des différentes routes de l'application */}
          <Route path="/" element={<Accueil />} />{" "}
          {/* Route vers la page d'accueil */}
          <Route path="/apropos" element={<APropos />} />
          <Route path="/galerie/:id" element={<Galerie />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
