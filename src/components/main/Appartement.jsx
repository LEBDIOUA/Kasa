function Appartement({ cover, title }) {
  const myStyle = {
    //backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(10, 10, 10, 0) 42%, rgba(4, 4, 4, 0.205) 99.99%, rgba(0, 0, 0, 0.5) 100%), url(${cover})`,
    backgroundImage: `linear-gradient(rgba(10, 10, 10, 0) 42%, rgb(4, 4, 4, 0.63) 99.99%), url(${cover})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <article className="appart" style={myStyle}>
      <h3 className="appartTitle">{title}</h3>
    </article>
  );
}
export default Appartement;
