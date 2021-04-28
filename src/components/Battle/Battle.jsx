import PropTypes from 'prop-types';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Battle({ heroToFight }) {
  const [CpuHero, setCpuHero] = useState({});
  useEffect(() => {
    const randomID = Math.floor(Math.random() * 730);
    axios
      .get(`https://superheroapi.com/api.php/4118415658211107/${randomID}`)
      .then(({ data }) => {
        setCpuHero(data);
      });
  }, []);

  return (
    <>
      {CpuHero.image && (
        <>
          <img src={heroToFight.image.url} alt="" className="myHeroImg" />
          <img src={CpuHero.image.url} alt="" className="myHeroImg" />
        </>
      )}
    </>
  );
}

Battle.propTypes = {
  heroToFight: PropTypes.shape,
};

Battle.defaultProps = {
  heroToFight: {},
};
