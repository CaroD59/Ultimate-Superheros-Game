import CSSRules from './CSSRules';

export default function Rules() {
  return (
    <CSSRules>
      <div className="BigContainerRules">
        <div className="HowToPlay">
          <h1>Comment jouer ?</h1>
          <p className="pRules">But du jeu : Battre votre adversaire!</p>
          <img src="/images/icones/thor.gif" alt="" className="Thor" />
        </div>
        <div className="Preparation">
          <h2>Préparation :</h2>
          <p className="pRules">
            Depuis votre Deck, choisissez votre carte Héros. Prenez connaissance
            des statistiques de votre Héros afin de maîtriser au mieux votre
            adversaire!
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
            Rendez-vous vers l&apos;arène afin de commencer le combat! Votre
            carte sera affichée ainsi que la carte de l&apos;adversaire. Le
            joueur qui aura un stat de vitesse plus élevé aura plus de chance de
            commencer à attaquer le premier. Le joueur qui aura un stat plus
            élevé en force donnera des coups beaucoup plus puissants. Et le
            joueur qui aura un stat plus élevé en défense obtiendra moins de
            dégats lors d&apos;une attaque subie. Frappez votre adversaire
            jusqu&apos;à ce qu&apos;il soit totalement ko. Ainsi, vous aurez
            gagné la partie.
          </p>
        </div>
      </div>
    </CSSRules>
  );
}
