import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const MemoryMatchingPairsGame = () => {
    const [cards, setCards] = useState([
      { id: 1, data: 'R', value: 'r', type: 'letter', visible: false },
      { id: 2, data: 'H', value: 'h', type: 'letter', visible: false },
      { id: 3, data: 'A', value: 'a', type: 'letter', visible: false },
      { id: 4, data: 'C', value: 'c', type: 'letter', visible: false },
      { id: 5, data: 'F', value: 'f', type: 'letter', visible: false },
      { id: 6,  data: 'S', value: 's', type: 'letter', visible: false },
      { id: 7, data: 'C', value: require('../assets/images/quizimages/pairs/cat.png'), type: 'image', visible: false },
      { id: 8, data: 'H', value: require('../assets/images/quizimages/pairs/hat.png'), type: 'image', visible: false },
      { id: 9, data: 'S', value: require('../assets/images/quizimages/pairs/sun.png'), type: 'image', visible: false },
      { id: 10, data: 'F', value: require('../assets/images/quizimages/pairs/frog.png'), type: 'image', visible: false },
      { id: 11, data: 'R', value: require('../assets/images/quizimages/pairs/rat.png'), type: 'image', visible: false },
      { id: 12, data: 'A', value: require('../assets/images/quizimages/pairs/ant.png'), type: 'image', visible: false },
    ]);

  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardPress = (card) => {
    if (selectedCards.length === 2) {
      return;
    }

    const updatedCards = cards.map((c) => {
      if (c.id === card.id) {
        return { ...c, visible: true };
      }
      return c;
    });

    setCards(updatedCards);
    setSelectedCards([...selectedCards, card]);
  };

  const checkForMatch = () => {
    const [card1, card2] = selectedCards;

    if (card1.data === card2.data) {
      const updatedCards = cards.map((c) => {
        if (c.id === card1.id || c.id === card2.id) {
          return { ...c, visible: true };
        }
        return c;
      });

      setCards(updatedCards);
      setSelectedCards([]);
    } else {
      setTimeout(() => {
        const updatedCards = cards.map((c) => {
          if (c.id === card1.id || c.id === card2.id) {
            return { ...c, visible: false };
          }
          return c;
        });

        setCards(updatedCards);
        setSelectedCards([]);
      }, 1000);
    }
  };

  const checkForWin = () => {
    return cards.every((c) => c.visible);
  };

  const handleReset = () => {
    setCards(cards.map((c) => ({ ...c, visible: false })));
    setSelectedCards([]);
  };

  return (
    <View style={styles.container}>

      <View style={styles.cardsContainer}>
        {cards.map((card) => (
          <TouchableOpacity
            key={card.id}
            style={[
              styles.card,
              card.visible ? styles.cardVisible : styles.cardHidden,
            ]}
            onPress={() => handleCardPress(card)}
          >
            {card.visible && (
              <Text style={styles.cardText}>{card.type === 'letter' ? card.value : ''}</Text>
            )}
            {card.visible && (
              <Image
                source={card.type === 'image' ? card.value : null}
                style={styles.cardImage}
              />
            )}
          </TouchableOpacity>
        ))}
      </View>
      {selectedCards.length === 2 && checkForMatch()}
      {checkForWin() && (
        <View style={styles.winContainer}>
                  <View style={styles.header}>
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.resetButtonText}>Play again</Text>
        </TouchableOpacity>
      </View>
          <Text style={styles.winText}>Congratulations! You won!</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f354b",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  resetButton: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 80,
    height: 80,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#f878b5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardVisible: {
    backgroundColor: '#6cdfef',
  },
  cardHidden: {
    backgroundColor: '#f878b5',
  },
  cardText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  winText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: 'bold',
  },
});

export default MemoryMatchingPairsGame;
