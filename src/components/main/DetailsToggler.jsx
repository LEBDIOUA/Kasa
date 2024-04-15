import { useState } from "react";

function DetailsToggler({ tag, title, details, type }) {
  const [plusDetails, setPlusDetails] = useState(false);
  const [visible, setVisible] = useState(false);
  const TagName = tag;

  const motsSeparateurs = (texte) => {
    const final = [];
    let mots = [];
    const phrases = texte.split(/[\n]/);
    for (let i = 0; i < phrases.length; i++) {
      mots = phrases[i].split(" ");
      for (let j = 0; j < mots.length; j++) {
        if (j !== mots.length - 1) {
          final.push(mots[j]);
          final.push("<s>");
        } else {
          final.push(mots[j]);
        }
      }
      final.push("<n>");
    }
    return final;
  };

  const affichageTextParMot = (data, parentElement) => {
    const nomClass = ".".concat(type);
    const content = parentElement.querySelector(nomClass);
    content.textContent = "";

    if (content.tagName === "P") {
      const montexteSepare = motsSeparateurs(data);
      let delay = 0;
      montexteSepare.forEach((element) => {
        setTimeout(() => {
          if (element === "<s>") {
            content.textContent += " ";
          } else if (element === "<n>") {
            content.innerHTML += "<br>";
          } else {
            content.textContent += element;
          }
        }, delay);
        delay += 1;
      });
    } else if (content.tagName === "UL") {
      let delay = 0;
      data.forEach((element) => {
        setTimeout(() => {
          {
            content.innerHTML += `<li>${element}</li>`;
          }
        }, delay);
        delay += 100;
      });
    }
  };

  const handleClick = (parentElement) => {
    setPlusDetails(!plusDetails);
    if (!plusDetails) {
      setVisible(true);
      affichageTextParMot(details, parentElement);
    } else {
      setVisible(false);
    }
  };

  return (
    <TagName
      className={title
        .concat(" group ")
        .concat(plusDetails ? "clicked" : "noClicked")}
    >
      <div
        onClick={(event) => handleClick(event.currentTarget.parentElement)}
        className="clickable-div"
      >
        <p>{title}</p>
        <i
          className={
            plusDetails ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-up"
          }
        ></i>
      </div>
      <div className={visible ? "visible" : "Detail invisible"}>
        {type === "texte" && <p className={type}></p>}
        {type === "liste" && <ul className={type}></ul>}
      </div>
    </TagName>
  );
}
export default DetailsToggler;
