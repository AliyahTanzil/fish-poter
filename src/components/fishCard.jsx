import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const FishCard = ({ fish }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: fish.image }} style={styles.image} />
      <Text style={styles.name}>{fish.name}</Text>
      <Text style={styles.description}>{fish.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default FishCard;
