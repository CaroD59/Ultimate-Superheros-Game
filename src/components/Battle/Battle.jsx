import PropTypes from 'prop-types';

export default function Battle({ heroToFight }) {
  return (
    <>
      <img src={heroToFight.image.url} alt="" className="myHeroImg" />
    </>
  );
}
Battle.propTypes = {
  heroToFight: PropTypes.shape,
};

Battle.defaultProps = {
  heroToFight: {},
};
