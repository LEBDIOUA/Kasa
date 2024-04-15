function Loading({chargement}) {
  if (chargement === 'principal') {
    return (
      <div className="loadingAnimation">
        <div className="container1">
          {[...Array(13)].map((_, index) => (
            <div key={index} className="cercle"></div>
          ))}
        </div>
        <div className="container2">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="cercle"></div>
          ))}
        </div>
        <div className="container3">
          <div className="cercle"></div>
        </div>
      </div>
    );
  } else {
    return (
      <main className="troisPointsChargement">
        <p>En cours de chargement</p>
        <div className="cercle"></div>
        <div className="cercle"></div>
        <div className="cercle"></div>
      </main>
    );
  }
}
export default Loading;
