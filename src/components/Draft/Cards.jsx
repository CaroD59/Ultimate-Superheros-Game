import DisplayDraft from './DisplayDraft';

const Cards = () => {
  const IDs = [];
  for (let i = 0; i < 20; i += 1) {
    const randomID = Math.floor(Math.random() * 730);
    IDs[i] = randomID;
  }

  return (
    <>
      {IDs.map((number) => {
        return <DisplayDraft id={number} />;
      })}
    </>
  );
};

export default Cards;
