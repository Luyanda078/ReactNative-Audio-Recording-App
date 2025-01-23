import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // FontAwesome icons

const RecordingItem = ({ item, onPlay, onPause, onRename, onDelete }) => (
  <View style={styles.recordingItem}>
    <Text>{item.name || 'Untitled'}</Text>
    <Text>{new Date(item.date).toLocaleString()}</Text>
    <View style={styles.actions}>
      <TouchableOpacity onPress={() => onPlay(item.uri)}>
        <Icon name="play" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPause}>
        <Icon name="pause" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onRename(item.uri)}>
        <Icon name="edit" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(item.uri)}>
        <Icon name="trash" size={30} color="red" />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  recordingItem: {
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default RecordingItem;
