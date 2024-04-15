function Stars({ nbEtoiles, nbEtoilesColorees }) {
  if (!nbEtoiles) nbEtoiles = 5;
  return (
    <div className="rating">
      {[...Array(parseInt(nbEtoiles))].map((_, index) => (
        <i
          key={index}
          className={
            index < parseInt(nbEtoilesColorees)
              ? "fa-solid fa-star fa-rempli"
              : "fa-solid fa-star"
          }
        ></i>
      ))}
    </div>
  );
}
export default Stars;
