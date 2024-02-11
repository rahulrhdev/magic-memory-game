import "./SingleCard.css";

const SingleCard = ({ card, handleChoice, flipped }) => {

    const handleClick = () => {
        handleChoice(card)
    }

  return (
    <div className="card" key={card.id}>
      <div className={flipped ? 'flipped' : ''}>
        <img src={card.src} alt="card-front" className="front" />
        <img className="back" src="/img/cover.png" alt="card-back" onClick={handleClick} />
      </div>
    </div>
  );
};

export default SingleCard;
