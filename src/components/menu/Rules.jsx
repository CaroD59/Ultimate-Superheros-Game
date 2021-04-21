import styled from 'styled-components';

const RulesApp = styled.div``;

export default function Rules() {
  return (
    <RulesApp>
      <div>
        <h2>Comment jouer ? // PARTIE EN PREPARATION //</h2>
        <p>But du jeu : Battre votre adversaire !</p>
        <p>
          Préparation : Depuis votre Deck, choisissez votre carte Héros. Prenez
          connaissance des statistiques de votre Héros afin de maîtriser au
          mieux votre adversaire ! Image force : force Image défense : défense
          Image vitesse : vitesse
        </p>
        <p>
          Le jeu : Rendez-vous vers l&apos;arène afin de commencer le combat !
          Le joueur met sa carte sur la table, l&apos;adversaire fait de même.
        </p>
      </div>
    </RulesApp>
  );
}
