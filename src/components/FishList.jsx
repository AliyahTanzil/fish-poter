import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import FishCard from './FishCard';

const FishList = ({ fishes }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={fishes}
        renderItem={({ item }) => <FishCard fish={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default FishList;
