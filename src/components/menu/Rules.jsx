import CSSRules from './CSSRules';

export default function Rules() {
  return (
    <CSSRules>
      <div className="BigContainerRules">
        <div className="HowToPlay">
          <h1 className="RulesTitles">Comment jouer ?</h1>
          <p className="pRules">
            Le joueur ayant la plus grande vitesse engage le combat (icone:
            &quot;ailes&quot;) La valeur de l&apos;attaque (icone:
            &quot;poing&quot;) du joueur ayant démarrer le combat et alors
            deduite de la défense (icone: &quot;bouclier&quot;) du joueur
            adversaire. Si la défense du joueur attaqué n&apos;est pas tombé à
            0, celui démarre alors sa phase d attaque. Ce processus sera alors
            répété jusqu&apos;à ce que la défense d&apos;un des 2 participants
            tombe à 0. Le joueur ayant alors perdu tout ces points de défense
            perd la partie, donnant ainsi la victoire au personnage ayant
            toujours des points de défense.
          </p>
          <img src="/images/icones/thor.gif" alt="" className="Thor" />
        </div>
        <div className="Preparation">
          <h2 className="RulesTitles">Préparation :</h2>
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
          <h2 className="RulesTitles">Le jeu :</h2>
          <img
            src="/images/icones/LogoVS.png"
            alt=""
            className=" LogoVSRules"
          />
          <p className="pRules">
            Qui n&apos;as jamais rêver de voir s&apos;affronter Chuck Norris et
            Superman? Dans USG c&apos;est désormais possible. Pour Pimenter le
            jeu ces 2 protagonistes ont fait un pari... Le perdant devra
            toujours porter un slip rouge au dessus de son pantalon.
          </p>
        </div>
      </div>
    </CSSRules>
  );
}
