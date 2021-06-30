import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { NavigationProps } from "../navigation/app_stacks";
import {Podcast} from "../services/deezer.model";
import PodcastItem from "./PodcastItem";

interface PlaylistProps extends NavigationProps {
  playlist: Array<Podcast>;
}

export default class Playlist extends Component<PlaylistProps> {
  render() {
    if (this.props.playlist?.length > 0)
      return (
        <View style={styles.container} >
        <Text style={styles.title}> Podcast </Text>
        <FlatList<Podcast>
          style={styles.podcastList}
          data={this.props.playlist}
          keyExtractor={(podcast) => podcast.id.toString()}
          renderItem={({ item }) => {
            return (
              <PodcastItem
                podcast={item}
                navigation={this.props.navigation}
              />
            );
          }}
        />
        </View>
      );
    else
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Aucun résultat pour votre recherche!</Text>
        </View>
      );
  }
}


const styles = StyleSheet.create({
  podcastList: {
    flex: 1,
    marginHorizontal: 10,
  },
  container: {
    flex : 1,
    flexDirection : "column",
    justifyContent: "center",
    
  },
  text: {
    fontSize: 16,
  },
  title : {
    fontSize : 20,
    textAlign : "left",
    padding  : 5,
    color : "#318CE7"
  }
});
