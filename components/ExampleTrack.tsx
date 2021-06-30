import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { NavigationProps } from "../navigation/app_stacks";
import {Track} from "../services/deezer.model";

interface TrackItemProps extends NavigationProps {
  track: Track;
}

export default class TrackItem extends Component<TrackItemProps> {
  render() {
    const { track, navigation } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
        onPress={() => {
          navigation.navigate("Track", {
            tracktitle: track.title, 
            trackpreview: track.preview,
          });
        }}
        >
          <Text style={styles.title}> {track.title} </Text>
          <Image style={styles.image} source={{ uri: `https://fr.shopping.rakuten.com/photo/936864695_L.jpg` }} />
        </TouchableOpacity>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  image: { 
    height: 150, 
    width: 150,
    borderRadius : 5,
    marginTop : 20,
  },
  container: { 
margin : 20,
padding : 10,
backgroundColor : "#77B5FE",
borderRadius : 5,
  },
 title: {
    fontSize: 20, // End result looks like the provided UI mockup
    color : "white"
  }
});






