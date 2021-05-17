import PropTypes from 'prop-types';

function DeckCard({ cards }) {
  return (
    <>
      <h1>{cards.name}</h1>
      <img src={cards.image.url} alt="bla" />
    </>
  );
}

DeckCard.propTypes = {
  cards: PropTypes.string,
};
DeckCard.defaultProps = {
  cards: 'Default',
};

export default DeckCard;
