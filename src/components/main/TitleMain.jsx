function TitleMain({ bgImgSrc, bgImgTitle, bgImgClass, title }) {
  return (
    <>
      <img src={bgImgSrc} title={bgImgTitle} className={bgImgClass}></img>
      {title && <h1>Chez vous, partout et ailleurs</h1>}
    </>
  );
}

export default TitleMain;
