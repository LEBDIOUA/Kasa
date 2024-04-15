import { useParams } from "react-router-dom";
import Model from "../utils/dataManager";
import { useEffect, useState } from "react";
import DetailsToggler from "../components/main/DetailsToggler";
import Stars from "../components/main/Stars";
import SlideShow from "../components/main/SlideShow";
import Error from "./Error";
import Loading from "./Loading";
import { useLoading } from "../contexts/context";

function Galerie() {
  let { id } = useParams();
  const { loading, setLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [appart, setAppart] = useState(null);

  useEffect(() => {
    const fetchAppart = async () => {
      try {
        const { appart, err } = await Model.getAppartById(id);
        if (err) {
          throw new Error(err);
        }
        setAppart(appart);
        setLoading(true);
      } catch (err) {
        setError(true);
      } finally {
        // Attendre au moins 1 secondes avant de désactiver le chargement
        setTimeout(() => {
          setLoading(false);
          setLoaded(true);
        }, 500);
      }
    };
    fetchAppart();
  }, [id]);

  if (error) {
    return <Error />;
  } else if (loading) {
    return <Loading />;
  } else if (loaded) {
    return (
      <main className="gallerie">
        <SlideShow pictures={appart.pictures} />

        <section className="appartDetails">
          <div className="details">
            <div className="appartInfoTags">
              <div className="titleLocation">
                <h1>{appart.title}</h1>
                <h3>{appart.location}</h3>
              </div>

              <div className="tags">
                {appart.tags.length > 0 &&
                  appart.tags.map((tag, index) => (
                    <button key={index} id={tag}>
                      {tag}
                    </button>
                  ))}
              </div>
            </div>

            <div className="hostRating">
              <div className="hostInfo">
                <h2>{appart.host.name}</h2>
                <img src={appart.host.picture} title={appart.host.name} />
              </div>

              <Stars nbEtoiles="5" nbEtoilesColorees={appart.rating} />
            </div>
          </div>

          <div className="detailsToggler">
            <DetailsToggler
              tag="div"
              title="Description"
              details={appart.description}
              type="texte"
            />
            <DetailsToggler
              tag="div"
              title="Equipements"
              details={appart.equipments}
              type="liste"
            />
          </div>
        </section>
      </main>
    );
  }
}
export default Galerie;
