import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Text } from 'react-native';

interface FilterState {
    selectedId : string,
    setSelectedId : string,
}
interface FilterProps {
    onPress : any,
}


const DATA = [
    {
      id: "histoire",
      title: "Histoire",
    },
    {
      id: "geographie",
      title: "Géographie",
    },
    {
      id: "sport",
      title: "Sport",
    },
    {
        id: "chimie",
        title: "Chimie",
      },
      {
        id: "physique",
        title: "Physique",
      },
      {
        id: "maths",
        title: "Maths",
      },
  ];
  
  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
  );

export default class Filter extends React.Component<FilterProps, FilterState>  {
        state = {
          selectedId: null,
          setSelectedId: null,
        };

    renderItem = ({ item }) => {
      const backgroundColor = item.id === this.state.selectedId ? "#318CE7" : "#77B5FE";
      const color = item.id === this.state.selectedId ? 'white' : 'white';
  
      return (
        <Item
          item={item}
          onPress={() => this.props.onPress(item.id)}
          backgroundColor={{ backgroundColor }}
          textColor={{ color }}
        />
      );
    };

  render() {
    return (
        <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id}
          extraData={this.state.selectedId}
          numColumns={3}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 0.5,

    },
    item: {
      width : 95,
      padding: 8,
      borderRadius : 10,
      marginVertical: 8,
      marginHorizontal: 12,
    },
    title: {
      fontSize: 15,
      textAlign : "center"
    },
  });
  
