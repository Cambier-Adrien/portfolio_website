import {
  Banner,
  TitleSection,
  Separation,
  CountryCard,
} from "../../Components";
import TravelBg from "../../Images/background-voyages.jpg";
import { Link } from "react-router-dom";
import ChiangMai from "../../Images/pagode-repere-dans-parc-national-doi-inthanon-chiang-mai-thailande.jpg";
import firstPic from "../../Images/Galerie/1.jpg";
import secondPic from "../../Images/Galerie/2.jpg";
import thirdPic from "../../Images/Galerie/3.jpg";
import fourthPic from "../../Images/Galerie/4.jpg";
import fifthPic from "../../Images/Galerie/5.jpg";
import sixthPic from "../../Images/Galerie/6.jpg";
import seventhPic from "../../Images/Galerie/7.jpg";
import eighthPic from "../../Images/Galerie/8.jpg";
import traductions from "../../Data/traductions.json";
import { useContext } from "react";
import { LanguageContext } from "../../Contexts";
import text from "../../Data/text.json";

export default function Travel() {
  const { selectedLanguage } = useContext(LanguageContext);

  const images = [
    firstPic,
    secondPic,
    thirdPic,
    fourthPic,
    fifthPic,
    sixthPic,
    seventhPic,
    eighthPic,
  ];

  return (
    <>
      <Banner image={TravelBg} />
      <div className="beige-section">
        <TitleSection
          title={traductions[selectedLanguage as "fr" | "en"]["Mes voyages"]}
        />
        <p className="introduction-text">
          {text.travels[1][selectedLanguage as "fr" | "en"]}
        </p>
        <Link className="beige-button" to="https://www.instagram.com/adri1.cr/">
          {traductions[selectedLanguage as "fr" | "en"]["Mon Instagram"]}
        </Link>
        <p className="introduction-text">
          {text.travels[2][selectedLanguage as "fr" | "en"]}
        </p>
        <Separation />
        <CountryCard
          image={ChiangMai}
          title={traductions[selectedLanguage as "fr" | "en"]["Thaïlande"]}
          content={text.travels[3][selectedLanguage as "fr" | "en"]}
        />
        <Separation />
        <CountryCard
          image="https://static.independent.co.uk/2023/07/04/09/iStock-1193239486.jpg"
          title={
            traductions[selectedLanguage as "fr" | "en"]["Émirats Arabes Unis"]
          }
          content={text.travels[4][selectedLanguage as "fr" | "en"]}
        />
        <Separation />
        <CountryCard
          image="https://media.istockphoto.com/id/1248448159/fr/photo/villefranche-sur-mer-village-in-france.jpg?s=612x612&w=0&k=20&c=1efCuW9JAlQm11CthKCArfFJtCycCm33vzzqWpCx2nI="
          title={traductions[selectedLanguage as "fr" | "en"]["France"]}
          content={text.travels[5][selectedLanguage as "fr" | "en"]}
        />
        <Separation />
        <CountryCard
          image="https://media.routard.com/image/81/3/venise-grand-canal.1479813.142.jpg"
          title={traductions[selectedLanguage as "fr" | "en"]["Italie"]}
          content={text.travels[6][selectedLanguage as "fr" | "en"]}
        />
        <TitleSection
          title={traductions[selectedLanguage as "fr" | "en"]["Galerie photo"]}
        />
        <div className="grid-container">
          {images.map((img, index) => {
            if (index % 2 === 0) {
              return (
                <div className="grid space-between" key={index}>
                  <img
                    className="grid-img galerie-pic"
                    src={img}
                    alt={`Image ${index + 1}`}
                  />
                  {images[index + 1] && (
                    <img
                      className="grid-img galerie-pic"
                      src={images[index + 1]}
                      alt={`Image ${index + 2}`}
                    />
                  )}
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </>
  );
}