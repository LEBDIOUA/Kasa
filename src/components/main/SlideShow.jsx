import { useState } from "react";

function SlideShow({ pictures }) {
  const [position, setPosition] = useState(0);
  const nbPhotos = pictures ? pictures.length : 0;

  const myStyle = {
    backgroundImage: `linear-gradient(rgba(10, 10, 10, 0) 42%, rgba(4, 4, 4, 0.3) 99.99%), url(${pictures[position]})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const photoPrecedente = () => {
    const pos = position === 0 ? nbPhotos - 1 : position - 1;
    setPosition(pos);
  };

  const photoSuivante = () => {
    const pos = position === nbPhotos - 1 ? 0 : position + 1;
    setPosition(pos);
  };

  return (
    <section className="slideShow" style={myStyle}>
      {nbPhotos>1 && (
        <>
          <i className="fa-solid fa-chevron-left" onClick={photoPrecedente}></i>
          <p className="pagination">
            {position + 1} / {nbPhotos}
          </p>
          <i className="fa-solid fa-chevron-right" onClick={photoSuivante}></i>
        </>
      )}
      
    </section>
  );
}
export default SlideShow;
