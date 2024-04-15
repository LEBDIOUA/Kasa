import TitleMain from "../components/main/TitleMain";
import DetailsToggler from "../components/main/DetailsToggler";

function APropos() {
  const contenu =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  return (
    <main className="aPropos">
      <section className="mainTitle">
        <TitleMain
          bgImgSrc="../assets/BackgroundAPropos.png"
          bgImgTitle="Background A Propos"
          bgImgClass="bgTitle aPropos"
        />
      </section>
      <section className="mainContent detailsToggler">
        <DetailsToggler
          tag="article"
          title="Fiabilité"
          details={contenu}
          type="texte"
        />
        <DetailsToggler
          tag="article"
          title="Respect"
          details={contenu}
          type="texte"
        />
        <DetailsToggler
          tag="article"
          title="Service"
          details={contenu}
          type="texte"
        />
        <DetailsToggler
          tag="article"
          title="Sécurité"
          details={contenu}
          type="texte"
        />
      </section>
    </main>
  );
}

export default APropos;
