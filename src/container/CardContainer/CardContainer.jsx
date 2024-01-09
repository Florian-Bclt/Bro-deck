import { useState, useEffect } from 'react';
import './CardContainer.css'

function CardContainer() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [cards, setCards] = useState([]);
  const [cardImages, setCardImages] = useState([]);
  const [displayedCards, setDisplayedCards] = useState(20);
  const [cardsToAdd, setCardsToAdd] = useState(20);

  useEffect(() => {
    fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
      .then(response => response.json())
      .then(data => {
        if (data && data.data && data.data.length > 0) {
          setCards(data.data);
          setCardImages(data.data.map(card => card.card_images[0]?.image_url || '')); // Utilisez l'image s'il y en a une, sinon une chaîne vide
          setLoading(false);
        } else {
          setError(true);
          setLoading(false);
        }
      })
      .catch(err => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div>
        {loading && <p>Chargement en cours...</p>}
        {error && <p>Une erreur s'est produite lors du chargement des données.</p>}
        {!loading && !error && (
          <div className='app_cardContainer'>
            <div className='app_cardContainer-cards'>
              {cards.slice(0, displayedCards).map((card, index) => (
                <div className='app_cardContainer-card' key={card.id}>
                  <img className='card-img' src={cardImages[index]} alt={card.name} />
                  <h3>{card.name}</h3>
                  {/* Affichez d'autres détails de la carte */}
                </div>
              ))}
            </div>
            <button onClick={() => setDisplayedCards(prev => prev + cardsToAdd)}>Charger plus de cartes</button>
          </div>
        )}
      </div>
    </>
  );
}

export default CardContainer;
