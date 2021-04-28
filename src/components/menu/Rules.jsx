import CSSRules from './CSSRules';

export default function Rules() {
  return (
    <CSSRules>
      <div className="BigContainerRules">
        <div className="HowToPlay">
          <h1>Comment jouer ?</h1>
          <p className="pRules">But du jeu : Battre votre adversaire !</p>
        </div>
        <div className="Preparation">
          <h2>Préparation :</h2>
          <p className="pRules">
            Depuis votre Deck, choisissez votre carte Héros. Prenez connaissance
            des statistiques de votre Héros afin de maîtriser au mieux votre
            adversaire !
          </p>
          <img
            src="/images/icones/CardRules.png"
            alt=""
            className=" CardRules"
          />
        </div>
        <div className="TheGame">
          <h2>Le jeu :</h2>
          <img
            src="/images/icones/LogoVS.png"
            alt=""
            className=" LogoVSRules"
          />
          <p className="pRules">
            Rendez-vous vers l&apos;arène afin de commencer le combat ! Le
            joueur met sa carte sur la table, l&apos;adversaire fait de même.
          </p>
        </div>
      </div>
    </CSSRules>
  );
}
