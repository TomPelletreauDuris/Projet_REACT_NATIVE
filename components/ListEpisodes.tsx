import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { NavigationProps } from "../navigation/app_stacks";
import {Episode} from "../services/deezer.model";
import EpisodeItem from "./EpisodeItem";

interface ListEpisodesProps extends NavigationProps {
  episodes: Array<Episode>;
}

export default class ListEpisodes extends Component<ListEpisodesProps> {
  render() {
    if (this.props.episodes?.length > 0)
      return (
        <FlatList<Episode>
          style={styles.episodeList}
          data={this.props.episodes}
          keyExtractor={(episode) => episode.id.toString()}
          renderItem={({ item }) => {
            return (
              <EpisodeItem
                episode={item}
                navigation={this.props.navigation}
              />
            );
          }}
        />
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
  episodeList: {
    flex: 1,
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});
