import { useState, useEffect } from 'react';

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
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
              {cards.slice(0, displayedCards).map((card, index) => (
                <div key={card.id}>
                  <img src={cardImages[index]} alt={card.name} />
                  <h3>{card.name}</h3>
                  <p>{card.desc}</p>
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
