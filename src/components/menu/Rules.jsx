import CSSRules from './CSSRules';

export default function Rules() {
  return (
    <CSSRules>
      <div className="BigContainerRules">
        <h1>Comment jouer ? // PARTIE EN PREPARATION //</h1>
        <p>But du jeu : Battre votre adversaire !</p>
        <h2>Préparation :</h2>
        <p>
          Depuis votre Deck, choisissez votre carte Héros. Prenez connaissance
          des statistiques de votre Héros afin de maîtriser au mieux votre
          adversaire ! DESCRIPTION D&apos;UNE CARTE
        </p>
        <img src="/images/icones/CardRules.png" alt="" className=" CardRules" />
        <h2>Le jeu :</h2>
        <img src="/images/icones/LogoVS.png" alt="" className=" LogoVSRules" />
        <p>
          Rendez-vous vers l&apos;arène afin de commencer le combat ! Le joueur
          met sa carte sur la table, l&apos;adversaire fait de même.
        </p>
      </div>
    </CSSRules>
  );
}
