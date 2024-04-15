import Model from "../utils/dataManager.js";
import React, { useEffect, useState } from "react";
import Loading from "./Loading.jsx";
import { useFirstVisit, useLoading } from "../contexts/context.jsx";
import { NavLink } from "react-router-dom";
import TitleMain from "../components/main/TitleMain";
import Appartement from "../components/main/Appartement";

function Accueil() {
  const { loading, setLoading } = useLoading(); // Utilisation du hook useLoading pour gérer l'état de chargement
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const { isFirstVisit, setIsFirstVisit } = useFirstVisit();
  const [apparts, setApparts] = useState([]);
  const [loadingType, setLoadingType] = useState(""); // Nouvel état pour déterminer le type de chargement

  useEffect(() => {
    const fetchApparts = async () => {
      try {
        const { apparts, err } = await Model.getApparts();
        if (err) {
          throw new Error(err);
        }
        setApparts(apparts);
        setLoading(true);
        setIsFirstVisit(false);
        setLoadingType(isFirstVisit ? "principal" : "secondaire"); // Définir le type de chargement en fonction de isFirstVisit
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
      finally {
        // Attendre au moins 1.5 secondes avant de désactiver le chargement
        setTimeout(() => {
          setLoading(false);
          setLoaded(true);
        }, 500);
      }
    };
    fetchApparts();
  }, []); // Déclencher l'effet seulement si setLoading ou setIsFirstVisit change

  if (error) {
    return <Error />;
  }
  else if (loading) {
    if (loadingType === "principal")
      return <Loading chargement="principal" />
    else if (loadingType === "secondaire")
      return <Loading />
  }
  else if (loaded) {
    return (
      <main className={loading ? "accueil loading" : "accueil"}>
        <section className="mainTitle">
          <TitleMain
            bgImgSrc="../assets/BackgroundAccueil.png"
            bgImgTitle="Background Accueil"
            bgImgClass="bgTitle accueil"
            title="Chez vous, partout et ailleurs"
          />
        </section>
        <section className="mainContent">
          {apparts.map((appart, index) => (
            <NavLink to={`/galerie/${appart.id}`} key={index}>
              <Appartement cover={appart.cover} title={appart.title} />
            </NavLink>
          ))}
        </section>
      </main>
    );
  }
}

export default Accueil;
