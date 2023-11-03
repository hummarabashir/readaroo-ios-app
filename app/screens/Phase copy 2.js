import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const MemoryMatchingPairsGame = () => {
    const [cards, setCards] = useState([
      { id: 1, data: 'A', value: 'A', type: 'letter', visible: false },
      { id: 2, data: 'B', value: 'B', type: 'letter', visible: false },
      { id: 3, data: 'C', value: 'C', type: 'letter', visible: false },
      { id: 4, data: 'D', value: 'D', type: 'letter', visible: false },
      { id: 5, data: 'E', value: 'E', type: 'letter', visible: false },
      { id: 6,  data: 'F', value: 'F', type: 'letter', visible: false },
      { id: 7, data: 'C', value: require('../assets/images/quizimages/cat.png'), type: 'image', visible: false },
      { id: 8, data: 'B', value: require('../assets/images/quizimages/bus.png'), type: 'image', visible: false },
      { id: 9, data: 'A', value: require('../assets/images/quizimages/socks.png'), type: 'image', visible: false },
      { id: 10, data: 'D', value: require('../assets/images/quizimages/duck.png'), type: 'image', visible: false },
      { id: 11, data: 'E', value: require('../assets/images/quizimages/leaf.png'), type: 'image', visible: false },
      { id: 12, data: 'F', value: require('../assets/images/quizimages/igloo.png'), type: 'image', visible: false },
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
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
    width: '100%',
    height: '70%',
  },
  card: {
    width: '20%',
    height: '20%',
    margin: '2%',
    borderRadius: 10,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardVisible: {
    backgroundColor: '#fff',
  },
  cardHidden: {
    backgroundColor: '#ccc',
  },
  cardText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
//   winContainer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
  winText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: 'bold',
  },
});

export default MemoryMatchingPairsGame;
