import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./stylesheets/css/style.css";
import { FirstVisitProvider, LoadingProvider } from "./contexts/context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Utilisé pour mettre en évidence les problèmes potentiels dans l'application */}
    <LoadingProvider>
      {/* Pour envelopper les composants qui ont besoin d'accéder à l'état de chargement */}
      <FirstVisitProvider>
        {/*  Pour envelopper les composants qui doivent détecter s'il s'agit de la première visite de l'utilisateur */}
        <App />
      </FirstVisitProvider>
    </LoadingProvider>
  </React.StrictMode>,
);
