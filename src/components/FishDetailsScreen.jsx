import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const FishDetailsScreen = ({ route }) => {
  const { fish } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: fish.image }} style={styles.image} />
      <Text style={styles.name}>{fish.name}</Text>
      <Text style={styles.description}>{fish.description}</Text>
      <Text style={styles.details}>Type: {fish.type}</Text>
      <Text style={styles.details}>Price: ${fish.price.toFixed(2)}</Text>
      <Text style={styles.details}>Availability: {fish.availability ? 'In Stock' : 'Out of Stock'}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  details: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default FishDetailsScreen;
