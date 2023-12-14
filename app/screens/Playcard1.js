import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const BirthdayCard = () => {
  return (
    <View style={styles.container}>
    <View style={styles.bdayCard}>
      {/* Top part of the card: image + decorations */}
      <View style={styles.bdayDecorContainer}>
        <View style={styles.bdayPic}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1572451479139-6a308211d8be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2670&q=80",
            }}
            style={styles.bdayPicImage}
          />
        </View>
      </View>

      {/* Banner */}
      <Text style={styles.bdayBanner}>
        <Text style={styles.bdayBannerText}>Happy</Text>{" "}
        <Text style={styles.bdayBannerText}>Birthday</Text>
      </Text>

      {/* Message + decoration */}
      <View style={styles.bdayMessage}>
        <Text style={styles.bdayMessageText}>
          Ana, yet another year that we get to celebrate together! Hope you have
          a great day, and may your new age be full of health, love and
          laughter. Love you loads
          {"\n"}
          Camila
        </Text>
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bdayCard: {
    width: 300,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  bdayPic: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 280,
    height: 200,
    padding: 8,
    backgroundColor: "white",
    borderRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "rgba(0,0,0, .15)",
    shadowOpacity: 1,
    transform: [{ rotate: "5deg" }, { translateX: 20 }, { translateY: 45 }],
  },
  bdayPicImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  bdayDecorContainer: {
    position: "relative",
  },
  bdayBanner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "baseline",
    fontSize: 42,
    zIndex: 1,
    color: "white",
    fontFamily: "Abril Fatface",
    textTransform: "uppercase",
    transform: [{ rotate: "-5deg" }],
    marginVertical: 8,
  },
  bdayBannerText: {
    backgroundColor: "#1C0C5B",
    paddingVertical: 16,
    paddingHorizontal: 48,
    flexGrow: 0
  },
  bdayMessage: {
    maxWidth: "80%",
    padding: 35,
    fontFamily: "Shadows Into Light",
    fontSize: 18,
    lineHeight: 32,
    color: "#333333",
    backgroundColor: "#F1EDE9",
    background: 'repeating-linear-gradient(#F1EDE9, #F1EDE9 31px, #94ACD4 31px, #94ACD4 32px)',
    boxShadow: '5px 5px 15px rgba(0,0,0, .15)',
  },
  bdayMessageText: {
    marginBottom: 16,
  },
  bdayDecor: {
    fontSize: 96,
  },
  bdayDecorTopRight: {
    position: "absolute",
    bottom: -70,
    right: -20,
  },
  bdayDecorTopLeft: {
    position: "absolute",
    bottom: 0,
    left: -25,
  },
  bdayDecorBottomRight: {
    position: "absolute",
    right: 20,
  },
});

export default BirthdayCard;
