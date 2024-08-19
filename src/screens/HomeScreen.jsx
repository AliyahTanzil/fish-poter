import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import FishList from '../components/FishList';
import SearchBar from '../components/SearchBar';
import { useSelector, useDispatch } from 'react-redux';
import { setFishList } from '../features/fishSlices';
import axios from 'axios';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const fishes = useSelector((state) => state.fish.list);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/fishes')
      .then(response => dispatch(setFishList(response.data)))
      .catch(error => console.error(error));
  }, [dispatch]);

  const filteredFishes = fishes.filter(fish =>
    fish.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FishList fishes={filteredFishes} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default HomeScreen;
