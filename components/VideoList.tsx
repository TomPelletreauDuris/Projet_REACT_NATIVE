import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { NavigationProps } from "../navigation/app_stacks";
import YoutubeVideo from "../services/youtube.model";
import VideoItem from "./VideoItem";

interface VideoListProps extends NavigationProps {
  donnees: Array<YoutubeVideo>;
}

export default class VideoList extends Component<VideoListProps> {
  render() {
    if (this.props.donnees?.length > 0)
      return (
        <View style={styles.container}>
        <Text style={styles.title}> Vidéos </Text>
        <FlatList<YoutubeVideo>
          style={styles.videoList}
          data={this.props.donnees}
          keyExtractor={(donnee) => donnee.id}
          renderItem={({ item }) => {
            return (
              <VideoItem donnee={item} navigation={this.props.navigation} />
            );
          }}
        />
      </View>
      );
    else
      return (
        <View style={styles.container}>
          <Text style={styles.text}> </Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  videoList: {
    marginHorizontal: 10,
  },
  container: {
    flex : 1,
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
