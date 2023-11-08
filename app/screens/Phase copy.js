import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MemoryMatchingPairsGame = () => {
  const [cards, setCards] = useState([
    { id: 1, value: 'A', type: 'letter', visible: false },
    { id: 2, value: 'B', type: 'letter', visible: false },
    { id: 3, value: 'C', type: 'letter', visible: false },
    { id: 4, value: 'D', type: 'letter', visible: false },
    { id: 5, value: 'E', type: 'letter', visible: false },
    { id: 6, value: 'F', type: 'letter', visible: false },
    { id: 7, value: require('../assets/images/quizimages/cat.png'), type: 'image', visible: false },
    { id: 8, value: require('../assets/images/quizimages/bus.png'), type: 'image', visible: false },
    { id: 9, value: require('../assets/images/quizimages/socks.png'), type: 'image', visible: false },
    { id: 10, value: require('../assets/images/quizimages/duck.png'), type: 'image', visible: false },
    { id: 11, value: require('../assets/images/quizimages/leaf.png'), type: 'image', visible: false },
    { id: 12, value: require('../assets/images/quizimages/cat.png'), type: 'image', visible: false },
  ]);

  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardPress = (card) => {
    if (selectedCards.length === 1 && selectedCards[0].type !== card.type) {
      const matchingCard = cards.find((c) => c.type !== card.type && c.value === selectedCards[0].value);
      if (matchingCard && matchingCard.id !== card.id) {
        const newCards = cards.map((c) => {
          if (c.id === card.id || c.id === matchingCard.id) {
            return { ...c, visible: true };
          }
          return c;
        });
        setCards(newCards);
      }
      setSelectedCards([]);
    } else {
      setSelectedCards([...selectedCards, card]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        {cards.map((card) => (
          <TouchableOpacity
            key={card.id}
            style={[styles.card, card.visible && styles.visibleCard]}
            onPress={() => handleCardPress(card)}
            disabled={card.visible}
          >
            {card.visible ? (
              card.type === 'letter' ? (
                <Text style={styles.cardText}>{card.value}</Text>
              ) : (
                <Image source={card.value} style={styles.cardImage} />
              )
            ) : (
              <Text style={styles.cardText}>?</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    width: 80,
    height: 80,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  visibleCard: {
    backgroundColor: '#fff',
  },
  cardText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  cardImage: {
    width: 60,
    height: 60,
  },
});

export default MemoryMatchingPairsGame;
